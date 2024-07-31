'use strict';




// $(function() {
//     $('.pop-up').hide();
//     $('.pop-up').fadeIn(400);
    
//         $('.close-button').click(function (e) { 
  
//         $('.pop-up').fadeOut(400);
//         $('#overlay').removeClass('blur-in');
//         $('#overlay').addClass('blur-out');
//         e.stopPropagation();

//       });
//    });


// section 1 logo opacity


const triangle = document.getElementById('sectionIntro__triangle');

limitsFunct();

function limitsFunct() {
  setTimeout(() => {
    triangle.style.opacity = 1;
  }, 150);

}

// MENU
let links = document.getElementsByClassName('menu-link')
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click' , ()=>{
    document.getElementById("burger_menu").checked = false;
  })
}
