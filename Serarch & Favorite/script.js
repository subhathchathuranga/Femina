
window.onload = function() {
    let searchbtn = document.getElementsByClassName("search-icon-toggle");
    let searchbot = document.getElementsByClassName("search-box");
    for (let index = 0; index < searchbtn.length; index++) {
        searchbtn[index].addEventListener('click',()=>{
            searchbot[0].classList.toggle("hide");
            document.getElementsByClassName('background')[0].classList.toggle('hide')
        }
        )   
    }
    let boxes=document.getElementsByClassName('box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].getElementsByClassName('add')[0].addEventListener('click',(e)=>{
            boxes[i].getElementsByClassName("add")[0].classList.add('hide')
            boxes[i].getElementsByClassName("remove")[0].classList.remove('hide')
            boxes[i].getElementsByClassName('box-content')[0].classList.remove('hide');
        })
        boxes[i].getElementsByClassName('remove')[0].addEventListener('click',(e)=>{
            boxes[i].getElementsByClassName("remove")[0].classList.add('hide')
            boxes[i].getElementsByClassName("add")[0].classList.remove('hide')
            boxes[i].getElementsByClassName('box-content')[0].classList.add('hide');
        })
    }
    let filters=document.getElementsByClassName("cusCheck");
    for (let i = 0; i < filters.length; i++) {
        filters[i].addEventListener('click',(event)=>{
            if(!document.getElementById(event.target.innerHTML)){
                let filter=document.createElement("div");
            
                filter.classList.add("selected-item");
                let text=document.createElement("p");
                let closeBtn=document.createElement("span");
                
                closeBtn.classList.add("material-symbols-outlined");
                closeBtn.innerHTML=" close ";
                text.innerHTML=event.target.innerHTML;
                filter.id=event.target.innerHTML;
                filter.append(text,closeBtn);
                document.getElementsByClassName("applied-filter-section")[0].appendChild(filter);
                
                    
            }else{
                document.getElementById(event.target.innerHTML).parentNode.removeChild(document.getElementById(event.target.innerHTML));
                
            }
            
        })
        
    }
    //mobile filter area
    let filters_mobile=document.getElementsByClassName("cusCheck-mobile");
    for (let i = 0; i < filters_mobile.length; i++) {
        filters_mobile[i].addEventListener('click',(event)=>{
            if(!document.getElementById(event.target.innerHTML)){
                let filter=document.createElement("div");
            
                filter.classList.add("selected-item");
                let text=document.createElement("p");
                let closeBtn=document.createElement("span");
                
                closeBtn.classList.add("material-symbols-outlined");
                closeBtn.innerHTML=" close ";
                text.innerHTML=event.target.innerHTML;
                filter.id=event.target.innerHTML;
                filter.append(text,closeBtn);
                
                document.getElementsByClassName("applied-filter-section-mobile")[0].appendChild(filter);
                    
            }else{
                document.getElementById(event.target.innerHTML).parentNode.removeChild(document.getElementById(event.target.innerHTML));
            }
            
        })
        
    }
   
    
    
    document.querySelectorAll('.material-symbols-outlined').forEach((elem)=>{
        if(elem.innerText=="favorite"){
            elem.addEventListener('click',()=>{
                elem.classList.toggle("filled-red");
        })
    }
    })
}
