
let btnEle = document.querySelector('.btn');
let boxEle = document.querySelector('.box');
let colors = ["#169898" , "#bee2e2" , "#d900ff"];
let i = 0;


btnEle.onclick = function(){
    boxEle.style.backgroundColor = colors[i];
    boxEle.style.border = colors[i];
    i++;
    if(i === 3){
        i = 0;
    }
}
