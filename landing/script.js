/*function showSideMenu(){
    const sidebar=document.querySelector('.menu-icon')
        
}*/

//collection
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}

//newIn
function myFunction1() {
    document.getElementById("myDropdown-1").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn-1')) {
    var myDropdown = document.getElementById("myDropdown-1");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}

//Plus Size
function myFunction2() {
    document.getElementById("myDropdown-2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn-2')) {
    var myDropdown = document.getElementById("myDropdown-2");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}

//sustainability
function myFunction3() {
    document.getElementById("myDropdown-3").classList.toggle("show");
  }
  
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn-3')) {
    var myDropdown = document.getElementById("myDropdown-3");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}

//footer-close icon
function clearData()
{
    var element = document.getElementById(" form_id ");
    element.reset()
}

//heart icons color change
function setColor(){
  var property = document.getElementById("btn");
  property.style.color = "#ec0909"
}

function setColor1(){
  var property = document.getElementById("btn1");
  property.style.color = "#ec0909"
}

function setColor2(){
  var property = document.getElementById("btn2");
  property.style.color = "#ec0909"
}