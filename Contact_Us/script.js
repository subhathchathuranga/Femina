let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    let btnIcon = document.querySelector(".content-1-1");
    let btnIcon2 = document.querySelector(".content-1-2");
  
    btnIcon.classList.toggle("active");
    btnIcon2.classList.toggle("close");
  
    });
  
    
let closeBTN = document.getElementById("closeBTN");

closeBTN.addEventListener("click", function () {

    let btnIcon3 = document.querySelector(".content-1-1");
    let btnIcon2 = document.querySelector(".content-1-2");
  
    btnIcon3.classList.remove("active");
    btnIcon2.classList.remove("close");
  
    });


let filterBtn = document.getElementById("filterBtn");
let filterBtn1 = document.getElementById("filterBtn-1");
let filterBtn2 = document.getElementById("filterBtn-2");
let filterBtn3 = document.getElementById("filterBtn-3");
let filterBtn4 = document.getElementById("filterBtn-4");

filterBtn.addEventListener("click", function () {

    let btnClick = document.querySelector(".filterOption");
    let btnClick2 = document.querySelector(".boxes");
    let btnClick3 = document.querySelector(".filterBtn-1");
    let btnClick4 = document.querySelector(".filterBtn-2");
    let btnClick5 = document.querySelector(".filterDetails");


    btnClick.classList.add("active");
    btnClick2.classList.add("close");
    btnClick3.classList.add("active");
    btnClick4.classList.add("active");
    btnClick5.classList.add("active");
  
    });

filterBtn1.addEventListener("click", function () {

    let btnClick = document.querySelector(".filterOption");
    let btnClick2 = document.querySelector(".boxes");
    let btnClick3 = document.querySelector(".filterBtn-1");
    let btnClick4 = document.querySelector(".filterBtn-2");
    let btnClick5 = document.querySelector(".filterDetails");
    
    
    btnClick.classList.add("active");
    btnClick2.classList.add("close");
    btnClick3.classList.add("active");
    btnClick4.classList.add("active");
    btnClick5.classList.add("active");
    
    });

filterBtn2.addEventListener("click", function () {

    let btnClick = document.querySelector(".filterOption");
    let btnClick2 = document.querySelector(".boxes");
    let btnClick3 = document.querySelector(".filterBtn-1");
    let btnClick4 = document.querySelector(".filterBtn-2");
    let btnClick5 = document.querySelector(".filterDetails");
        
        
     btnClick.classList.add("active");
     btnClick2.classList.add("close");
     btnClick3.classList.add("active");
    btnClick4.classList.add("active");
    btnClick5.classList.add("active");
        
    });

filterBtn3.addEventListener("click", function () {

    let btnClick = document.querySelector(".filterOption");
    let btnClick2 = document.querySelector(".boxes");
    let btnClick3 = document.querySelector(".filterBtn-1");
    let btnClick4 = document.querySelector(".filterBtn-2");
    let btnClick5 = document.querySelector(".filterDetails");
        
        
    btnClick.classList.add("active");
    btnClick2.classList.add("close");
    btnClick3.classList.add("active");
    btnClick4.classList.add("active");
    btnClick5.classList.add("active");
        
    });
    
filterBtn4.addEventListener("click", function () {
    
    let btnClick = document.querySelector(".filterOption");
    let btnClick2 = document.querySelector(".boxes");
    let btnClick3 = document.querySelector(".filterBtn-1");
    let btnClick4 = document.querySelector(".filterBtn-2");
    let btnClick5 = document.querySelector(".filterDetails");
            
            
    btnClick.classList.add("active");
    btnClick2.classList.add("close");
    btnClick3.classList.add("active");
    btnClick4.classList.add("active");
    btnClick5.classList.add("active");
            
    });
    


