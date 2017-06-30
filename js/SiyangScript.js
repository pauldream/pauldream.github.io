/*********************************************************/
/* Created by Siyang Xie */
/* Copyright (c) 2017. All rights reserved. */
/*********************************************************/


// //<![CDATA[ 
// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       if (event){
//         event.preventDefault();
//         var hash = $(this).attr("href");
//       }
//       else
//       {
//       // Store hash
//         var hash = this.hash;
//       }
//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 500, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });

//   if (location.hash){
//             setTimeout(function(){
//                 $('html, body').scrollTop(0).show()
//                 jump()
//             }, 0);
//         }else{
//           $('html, body').show()
//         }
// });

var scroll=function(e)
{
   if (e){
       e.preventDefault();
       var target = $(this).attr("href");
   }else{
       var target = location.hash;
   }

   $('html,body').animate(
   {
       scrollTop: $(target).offset().top
   },500,function()
   {
       location.hash = target;
   });
}

$('html, body').hide()

$(document).ready(function()
{
    $('a[href^=#]').bind("click", scroll);

    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show()
            jump()
        }, 0);
    }else{
      $('html, body').show()
    }
}); 



$(window).load(function(){
/* Dynamic top menu positioning */
var num = 66; //number of pixels before modifying styles
var navbar = document.getElementsByClassName("header-container");

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar-fixed').addClass('fixed');
    } else {
        $('.navbar-fixed').removeClass('fixed');
    }
});

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var height = $(window).height();
    var scrolled1 = $(window).scrollTop();
    $('#photo-section1').css('top',(0+(scrolled1*.28))+'px');
    var scrolled2 = $(window).scrollTop();
    $('#photo-section2').css('top',(Math.max(-450+height/5+(scrolled2*.25)))+'px');
    // $('#introduction').css('top',(0-(scrolled*.25))+'px');
}
});//]]>  




function mouseOutContact(id){
  document.getElementById(id).style.color='white';
}

function mouseOverContact(id){
  document.getElementById(id).style.color='#e2a432';
  document.getElementById(id).style.transition='all 0.2s ease-out';
}


// Possible solutions for the double tap problem in navigation menus with drop-down sub-menus
jQuery(document).ready(function($) {

    //test for touch events support and if not supported, attach .no-touch class to the HTML tag. Uncomment and use the snipplet below if you don't use latest versions of Modernizr.js
	if (!("ontouchstart" in document.documentElement)) {
	    document.documentElement.className += " no-touch";
	}

	//make filters hover behavior switch to tap/clcik on touch screens
	if (!$('html').hasClass('no-touch')) { //Execute code only on a touch screen device
	
		//Show #filter1 drop-down 
		$('.header-menu').bind('touchstart', function(e) {
			$("ul.header-ul").css('visibility','visible');
			e.stopPropagation(); //Make all touch events stop at the #filter1 container element
		});
		
		$(document).bind('touchstart', function(e) {
			$("ul.header-ul").css('visibility','hidden');
			$("#phone-detail").css('color','white');
// 			$(".phone-icon").css('color','white');
			$("#email-detail").css('color','white');
// 			$(".email-icon").css('color','white');
			$("#address-detail").css('color','white');
// 			$(".address-icon").css('color','white');
		});	
		
        //$('.header-menu ul.header-ul').bind('touchstart', function(event){
        // 	event.stopPropagation(); //Make all touch events stop at the #filter1 ul.children container element
        //});
		
		// when you click on a sub-menu of the navbar, the navbar will disappear
		//$(".header-menu ul.header-ul a").click(function () {
            //$("ul.header-ul").css('visibility','hidden');
			//$(".header-menu ul.header-ul").fadeOut(500); //Close filters drop-downs if user taps on any link in drop-down
		//});
		
		
		$('.phone-icon').bind('touchstart', function(e) {
// 			$(".phone-icon").css('color','#e2a432');
			$("#phone-detail").css('color','#e2a432');
// 			$(".email-icon").css('color','white');
// 			$(".address-icon").css('color','white');
			e.stopPropagation();
		});
		$('.email-icon').bind('touchstart', function(e) {
// 			$(".email-icon").css('color','#e2a432');
			$("#email-detail").css('color','#e2a432');
// 			$(".address-icon").css('color','white');
// 			$(".phone-icon").css('color','white');
			e.stopPropagation();
		});
		$('.address-icon').bind('touchstart', function(e) {
// 			$(".address-icon").css('color','#e2a432');
			$("#address-detail").css('color','#e2a432');
// 			$(".email-icon").css('color','white');
// 			$(".phone-icon").css('color','white');
			e.stopPropagation();
		});
	
	}
		
});
