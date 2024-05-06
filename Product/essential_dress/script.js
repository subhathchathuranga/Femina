let icon1 = document.getElementById("ad-1");


icon1.addEventListener("click", function () {


    let iconClk1 = document.querySelector(".Fitting-details");
    let iconClk2 = document.querySelector(".ri-add-line");
    let iconClk3 = document.querySelector(".ri-subtract-line");
  
    iconClk1.classList.add("active");
    iconClk2.classList.add("close");
    iconClk3.classList.add("active");
  
    });


let icon2 = document.getElementById("min-1");
icon2.addEventListener("click", function () {

    let iconClk1 = document.querySelector(".Fitting-details");
    let iconClk2 = document.querySelector(".ri-add-line");
    let iconClk3 = document.querySelector(".ri-subtract-line");
      
    iconClk1.classList.remove("active");
    iconClk2.classList.remove("close");
    iconClk3.classList.remove("active");
    });


let icon3 = document.getElementById("ad-2");

icon3.addEventListener("click", function () {

    let iconClk1 = document.querySelector(".Fabric-and-Care-details");
    let iconClk2 = document.querySelector(".ad-2");
    let iconClk3 = document.querySelector(".min-2");
      
    iconClk1.classList.add("active");
    iconClk2.classList.add("close");
    iconClk3.classList.add("active");
    });


let icon4 = document.getElementById("min-2");
icon4.addEventListener("click", function () {

    let iconClk1 = document.querySelector(".Fabric-and-Care-details");
    let iconClk2 = document.querySelector(".ad-2");
    let iconClk3 = document.querySelector(".min-2");
      
    iconClk1.classList.remove("active");
    iconClk2.classList.remove("close");
    iconClk3.classList.remove("active");
    });

let icon5 = document.getElementById("ad-3");
icon5.addEventListener("click", function () {

    let iconClk1 = document.querySelector(".Product-details-details");
    let iconClk2 = document.querySelector(".ad-3");
    let iconClk3 = document.querySelector(".min-3");
      
    iconClk1.classList.add("active");
    iconClk2.classList.add("close");
    iconClk3.classList.add("active");
    });

let icon6 = document.getElementById("min-3");
icon6.addEventListener("click", function () {

    let iconClk1 = document.querySelector(".Product-details-details");
    let iconClk2 = document.querySelector(".ad-3");
    let iconClk3 = document.querySelector(".min-3");
      
    iconClk1.classList.remove("active");
    iconClk2.classList.remove("close");
    iconClk3.classList.remove("active");
    });


let icon7 = document.getElementById("ad-4");
icon7.addEventListener("click", function () {

    let iconClk1 = document.querySelector(".Shipping-and-Return-details");
    let iconClk2 = document.querySelector(".ad-4");
    let iconClk3 = document.querySelector(".min-4");
      
    iconClk1.classList.add("active");
    iconClk2.classList.add("close");
    iconClk3.classList.add("active");
    });

let icon8 = document.getElementById("min-4");
icon8.addEventListener("click", function () {

    let iconClk1 = document.querySelector(".Shipping-and-Return-details");
    let iconClk2 = document.querySelector(".ad-4");
    let iconClk3 = document.querySelector(".min-4");
      
    iconClk1.classList.remove("active");
    iconClk2.classList.remove("close");
    iconClk3.classList.remove("active");
    });

let icon9 = document.getElementById("ad-5");
icon9.addEventListener("click", function () {

    let iconClk1 = document.querySelector(".Silk-details");
    let iconClk2 = document.querySelector(".ad-5");
    let iconClk3 = document.querySelector(".min-5");
      
    iconClk1.classList.add("active");
    iconClk2.classList.add("close");
    iconClk3.classList.add("active");
    });


let icon10 = document.getElementById("min-5");
icon10.addEventListener("click", function () {

    let iconClk1 = document.querySelector(".Silk-details");
    let iconClk2 = document.querySelector(".ad-5");
    let iconClk3 = document.querySelector(".min-5");
      
    iconClk1.classList.remove("active");
    iconClk2.classList.remove("close");
    iconClk3.classList.remove("active");
    });


    

let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let img4 = document.getElementById("img-4");

img1.addEventListener("click", function () {
      let imgclk1 = img1.src;
      let imgclk2 = document.querySelector(".img-1");
      let imgclk3 = document.querySelector(".img-2");
      let imgclk4 = document.querySelector(".img-3");
      let imgclk5 = document.querySelector(".img-4");
      imgclk2.classList.add("active");
      imgclk3.classList.remove("active");
      imgclk4.classList.remove("active");
      imgclk5.classList.remove("active");
      
      let defimg=document.getElementById("def-img");
      defimg.src=imgclk1;


    });

img2.addEventListener("click", function () {
        let imgclk1 = img2.src;
        let imgclk2 = document.querySelector(".img-1");
        let imgclk3 = document.querySelector(".img-2");
        let imgclk4 = document.querySelector(".img-3");
        let imgclk5 = document.querySelector(".img-4");

        imgclk2.classList.remove("active");
        imgclk3.classList.add("active");
        imgclk4.classList.remove("active");
        imgclk5.classList.remove("active");
        
        
        let defimg=document.getElementById("def-img");
        defimg.src=imgclk1;
  
  
});

img3.addEventListener("click", function () {
    let imgclk1 = img3.src;
    let imgclk2 = document.querySelector(".img-1");
    let imgclk3 = document.querySelector(".img-2");
    let imgclk4 = document.querySelector(".img-3");
    let imgclk5 = document.querySelector(".img-4");
    imgclk2.classList.remove("active");
    imgclk3.classList.remove("active");
    imgclk4.classList.add("active");
    imgclk5.classList.remove("active");
        
    let defimg=document.getElementById("def-img");
    defimg.src=imgclk1;
  
  
});

img4.addEventListener("click", function () {
    let imgclk1 = img4.src;
    let imgclk2 = document.querySelector(".img-1");
    let imgclk3 = document.querySelector(".img-2");
    let imgclk4 = document.querySelector(".img-3");
    let imgclk5 = document.querySelector(".img-4");
    imgclk2.classList.remove("active");
    imgclk3.classList.remove("active");
    imgclk4.classList.remove("active");
    imgclk5.classList.add("active");
        
    let defimg=document.getElementById("def-img");
    defimg.src=imgclk1;
  
  
});