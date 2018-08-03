
                  var navBarValue = 0; 
                  var theBrowserHeight=$( window ).height() ; //get
                  //if window screen size is altered then find screen height and apply to navbar2 
                  //navBar value:: 0 for "off" / 1 for "on"
                  
                function myFunction(THIS) {
                  THIS.classList.toggle("change");
                  navBarValue += 1;
                }
            
                            function openNav() {
                                document.getElementById("mySidenav").style.width = "250px";
                                $(".container_bool_0").css("visibility", "hidden");
                                $(".sidenav2").css("visibility", "visible");
                                $("#body").css("position", "fixed");
                        
                            }

                            function closeNav() {
                                document.getElementById("mySidenav").style.width = "0";
                                $(".container_bool_0").css("visibility", "visible");
                                $(".sidenav2").css("visibility", "hidden");
                                $("#body").css("position", "static");
                            }
              

            
                            
                /* (( $( window ).height()/$( window ).height() )+10)+"%" */