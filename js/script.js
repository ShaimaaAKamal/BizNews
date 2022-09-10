let para = document.getElementsByClassName("long-text")[0];
let text = para.innerHTML;
let defaultText=text

function windowResize(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    para.innerHTML = "";
    let words = text.split(" ");
    
    if(vw < 500){
        for (i = 0; i < 1; i++) {
            para.innerHTML += words[i] + " ";
          }
          para.innerHTML += "...";
    }
    else if(vw < 860){
        for (i = 0; i < 5; i++) {
            para.innerHTML += words[i] + " ";
          }
          para.innerHTML += "...";
    }
    else{
          para.innerHTML +=defaultText;
    }
}
windowResize();

window.onresize=()=>{
    windowResize();
}





function anotherSlides(n){
    showSlides(n);
}

function setClasses(articlesArray){
    for(let i=0 ; i < articlesArray.length ; i++){
        articlesArray[i].className="";
        switch(i) {
            case 0:
            articlesArray[i].classList.add("col-xl-3", "col-lg-4", "col-md-6" ,"articleParent");
              break;
            case 1:
                articlesArray[i].classList.add("col-xl-3", "col-lg-4", "col-md-6" ,"articleParent","d-none","d-md-block");
                break;
              case 2:
                articlesArray[i].classList.add("col-xl-3", "col-lg-4", "col-md-6" ,"articleParent","d-none","d-lg-block");
              break;
              case 3:
                articlesArray[i].classList.add("col-xl-3", "col-lg-4", "col-md-6" ,"articleParent","d-none","d-xl-block");
              break;
            default:
                break;
          }
    }
    return articlesArray;
}

function showSlides(n){
 let articles=document.getElementsByClassName('articleParent');
 let feature=document.querySelector(".features");

let articlesArray = Array.from(articles);
if(n == 1){
    feature.innerHTML="";
    articlesArray.push(articlesArray.shift())
    articlesArray=setClasses(articlesArray);
    articlesArray.map(item =>{
        feature.appendChild(item);
    })
}
else{
    feature.innerHTML="";
    articlesArray.unshift(articlesArray.pop())
    articlesArray=setClasses(articlesArray);
    articlesArray.map(item =>{
        feature.appendChild(item);
    })
}
}
