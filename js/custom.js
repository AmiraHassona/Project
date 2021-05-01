//start Sakr

var imgs = document.querySelectorAll('.img-fluid'); //nodeList
var fixedBox = document.getElementById("fixedBox");
var smallBox = document.getElementById("smallBox");
var btnClose = document.getElementById("btnClose");
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
//  console.log(imgs);
var index ;
var imgsArr = [];
// var imgsArr = Array.from(imgs);

for (var i = 0; i < imgs.length; i++) {

    imgsArr.push(imgs[i])
}


for (var i = 0; i < imgs.length; i++) {
 imgs[i].addEventListener("click", function (e) {



var clikedImg=e.target;
 index = imgsArr.indexOf(clikedImg);
// console.log(index);
var imgScr=clikedImg.getAttribute('src');
smallBox.style.backgroundImage=`url(${imgScr})`;


fixedBox.classList.replace('d-none','d-flex');
    //fixedBox.style.display = 'flex';



 })

}


btnClose.addEventListener('click',closeImg);

function closeImg(){

    fixedBox.classList.replace('d-flex', 'd-none');

}


btnRight.addEventListener('click',getNextImg);

function getNextImg(){

    index++;

if(index==imgsArr.length){

    index=0;
}
var nextImg = imgsArr[index];
var imgSrc= nextImg.getAttribute('src');
smallBox.style.backgroundImage=`url(${imgSrc})`
}

btnLeft.addEventListener('click',getPrevImg);

function getPrevImg(){

    index--;

if(index==-1){

    index=imgsArr.length-1;
}
var nextImg = imgsArr[index];
var imgSrc= nextImg.getAttribute('src');
smallBox.style.backgroundImage=`url(${imgSrc})`


}


document.addEventListener('keydown', function(e){


    if (fixedBox.getAttribute('class')=='d-flex')

    {
        if(e.key=='ArrowRight'){

            getNextImg();
        
        }
        else if(e.key=='ArrowLeft'){
        
            getPrevImg();
        
        }
        
        else if(e.key=='Escape'){
        
            closeImg();
        
        }

    }



})

//End Sakr

// star mona
function validateName() {

    var Name = document.getElementById('name').value;
  
    if(Name.length == 0) {
  
      producePrompt('Name is required', 'name-error' , 'red')
      return false;
  
    }
  
    if (!Name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  
      producePrompt('First and last name, please.','name-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'name-error', 'green');
    return true;
  
  }
  
  
  function validateEmail () {
  
    var Email = document.getElementById('email').value;
  
    if(Email.length == 0) {
  
      producePrompt('Email Invalid','email-error', 'red');
      return false;
  
    }
  
    if(!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  
      producePrompt('Email Invalid', 'email-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'email-error', 'green');
    return true;
  
  }
  
  function validateMessage() {
    var message = document.getElementById('comments').value;
    var required = 30;
    var left = required - message.length;
  
    if (left > 0) {
      producePrompt(left + ' more characters required','message-error','red');
      return false;
    }
  
    producePrompt('Valid', 'message-error', 'green');
    return true;
  
  }
  
  function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
      jsShow('submit-error');
      producePrompt('Please fix errors to submit.', 'submit-error', 'red');
      setTimeout(function(){jsHide('submit-error');}, 2000);
        return false;
    }
    else {
  
    }
  }
  
  function jsShow(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function jsHide(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  
  
  
  function producePrompt(message, promptLocation, color) {
  
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
  
  
  }
  //end mona
 //start amira
var playVideoBtn = document.getElementById("playVideoBtn") ;
var lightBoxVideo = document.getElementById("lightBoxVideo");
var iframeSrc =document.getElementById("iframeSrc");


playVideoBtn.addEventListener("click" , function(){
    lightBoxVideo.style.visibility = "visible";

});


lightBoxVideo.addEventListener("click", function(){
    lightBoxVideo.style.visibility = "hidden";
    iframeSrc.removeAttribute("src") ;
});

// end amira
// start abdelrahman
window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    
   
    var sticky = navbar.offsetTop;
    
   
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed-top");
        navbar.classList.add("bg-white");
        navbar.classList.remove("bg-light");
      } else {
        navbar.classList.remove("fixed-top");
        navbar.classList.remove("bg-white");
        navbar.classList.add("bg-light");
      }
    };
// end abdelrahman