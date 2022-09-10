let para = document.getElementsByClassName("long-text")[0];
let text = para.innerHTML;
let defaultText=text

window.onresize=function(){
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

