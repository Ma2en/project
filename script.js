var slidecount = 0;
show();

function manualchang(n) {
    show(slidecount += n);
  }

function show(){
    var slides= document.getElementsByClassName("slide");
    for (i=0; i<slides.length; i++){
        slides[i].style.display= "none";
    }
    slidecount++;
    if(slidecount>slides.length){
        slidecount=1
    }
    slides[slidecount-1].style.display="block";
    setTimeout(show, 2000)
}

  const topbutton= document.getElementsByClassName("up-button");

  topbutton.addEventListener("click",backtoup);

function backtoup(){
    scroll(0,0)
}
