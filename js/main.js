
//for menu

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle(){
if (MenuItems.style.maxHeight == "0px")
{

    MenuItems.style.maxHeight = "100vh";
}

else 
{

    MenuItems.style.maxHeight = "0px";
}

}

//for logo slider

const nextIcon = '<i class="fas fa-chevron-right"></i>';
const prevIcon = '<i class="fas fa-chevron-left"></i>';

$('#logo-slider').owlCarousel({
  loop:true,
  autoplay: true,
  margin:10,
  dots:false,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      800:{
        items:3
    },
      900:{
          items:3
      },
      1000:{
          items:6
      }
  }
})


//for home page img slider


$('#img-slider').owlCarousel({
  loop:true,
  autoplay: true,
  margin:10,
  dots:false,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      700:{
          items:3
      },
      800:{
        items:3
    },
      900:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

// magnific pop-up

$('#img-slider').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
          }
  // other options
});

//video pop-up
$(document).ready(function () {
  $('.popup-youtube').magnificPopup({
      type: 'iframe'
  });
});


//scroll-top
$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 60){
        $('#topBtn').fadeIn();
      }
       else{
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });
  });
  



//For Service page
//for service page  design img slider


  $('#design-img-slider').owlCarousel({
    loop:true,
    autoplay: false,
    margin:10,
    dots:false,
    nav: true,
    navText: [
    prevIcon,
    nextIcon
  ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
          items:1
      },
        900:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })
  

  // magnific pop-up

$('#design-img-slider').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
          }
  // other options
});

$('#our-projects-img-slider01').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
          }
  // other options
});
$('#our-projects-img-slider02').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
          }
  // other options
});
$('#our-projects-img-slider03').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
          }
  // other options
});
$('#our-projects-img-slider04').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
      enabled: true
          }
  // other options
});










//MIX-IT UP

$(document).ready(function () {

  //mixitup(PROJECT-SECTION)
  var mixer = mixitup('.container-box')



});

//for testimonial page


$('#clients-testimonial-slider').owlCarousel({
  loop:true,
  autoplay: false,
  // margin:10,
  dots:true,
  nav: false,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      800:{
        items:1
    },
      900:{
          items:1
      },
      1000:{
          items:1
      }
  }
})






//for product gallery

var productImg =document.getElementById("testimonial-client-feedback-description");
var smallImg =document.getElementsByClassName("small-img");

smallImg[0].onclick =function(){

    productImg.src = smallImg[0].src
}
smallImg[1].onclick =function(){

    productImg.src = smallImg[1].src
}
smallImg[2].onclick =function(){

    productImg.src = smallImg[2].src
}
smallImg[3].onclick =function(){

    productImg.src = smallImg[3].src
}
smallImg[4].onclick =function(){

    productImg.src = smallImg[4].src
}
smallImg[5].onclick =function(){

    productImg.src = smallImg[5].src
}
smallImg[6].onclick =function(){

    productImg.src = smallImg[6].src
}





