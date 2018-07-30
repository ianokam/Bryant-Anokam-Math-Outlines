
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
                                $(".container_bool_0").css("display", "none");
                                $(".sidenav2").css("visibility", "visible");
                                
                                
                        
                            }

                            function closeNav() {
                                document.getElementById("mySidenav").style.width = "0";
                                $(".container_bool_0").css("display", "inline-block");
                                $(".sidenav2").css("visibility", "hidden");
                               
                            }
              

            
                            
                /* (( $( window ).height()/$( window ).height() )+10)+"%" */