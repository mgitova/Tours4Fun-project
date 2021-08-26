'use strict'

    //add and remove classes for search bar while scrolling
    
	window.addEventListener('scroll', function() { 
       
        var myNav = document.querySelector('.header-nav, .header-nav-index');
        var myButtons = document.querySelectorAll('.header-nav-index button, .header-nav button');
		if (document.documentElement.scrollTop > 0) 
		{
            if(myNav.classList.contains('header-nav-index'))
            {
                myNav.classList.add("scrolled-index");
                myButtons.classList.add("scrolled-index");
            }
            else if(myNav.classList.contains('header-nav'))
            {
                myNav.classList.add("scrolled");
                myButtons.classList.add("scrolled");
            }
			
        }
     
		if(document.documentElement.scrollTop==0)
			{
                if(myNav.classList.contains('header-nav-index'))
                {
                    myNav.classList.remove("scrolled-index");
                    myButtons.classList.remove("scrolled-index");
                }
                else if(myNav.classList.contains('header-nav'))
                {
                    myNav.classList.remove("scrolled");
                    myButtons.classList.remove("scrolled");
                }
                
            }
        });
    

    //open navbar (for small resolutions)
        var nav = document.querySelector('#open-nav')
        if(nav)
        {
	    nav.addEventListener('click', function() {
		var buttons = document.querySelectorAll('.header-menu-btn');
		for(let i=0; i<buttons.length; i++)
		{
			
			if(buttons[i].style.visibility==="hidden")
			{
				buttons[i].style.visibility='visible';
			}
			else
			{
				buttons[i].style.visibility="hidden";
			}
		}
    });
    }

//tours
    function changeImage(element){
            switch(element){
              case "image/tour1_1.jpg": case "image/tour1_2.jpg":
                document.getElementById('tour1').src=element;
                break;
              case "image/tour2_1.jpg": case "image/tour2_2.jpg":
                document.getElementById('tour2').src=element;
                break;
              case "image/tour3_1.jpg": case "image/tour3_2.jpg":
                document.getElementById('tour3').src=element;
                break;
              case "image/tour4_1.jpg": case "image/tour4_2.jpg":
                document.getElementById('tour4').src=element;
                break;
              case "image/tour5_1.jpg": case "image/tour5_2.jpg":
                document.getElementById('tour5').src=element;
                break;
              case "image/tour6_1.jpg": case "image/tour6_2.jpg":
                document.getElementById('tour6').src=element;
                break;
              case "image/tour7_1.jpg": case "image/tour7_2.jpg":
                document.getElementById('tour7').src=element;
                break;
              case "image/tour8_1.jpg": case "image/tour8_2.jpg":
                document.getElementById('tour8').src=element;
                break;
              case "image/tour9_1.jpg": case "image/tour9_2.jpg":
                document.getElementById('tour9').src=element;
                break;
            }
        }
          
  function btnClicked(){
            if(document.getElementById('rent').click){
              alert("Записахте се за това приключение!");
            }
          }

          
	 function ValidateEmail(mail) 
	 {
	 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
	 	{
	 		return true;
	 	}
	 		alert("Please enter an e-mail address.")
	 		return false;
	 }
          
        


