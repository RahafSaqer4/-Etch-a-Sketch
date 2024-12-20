let container=document.getElementById("container")
const four=document.getElementById("4");
const sixteen=document.getElementById("16");
const sixtyFour=document.getElementById("64");
const hundred = document.getElementById("100");
const eraser = document.getElementById("eraser");
const picColor = document.getElementById("picColor");
let x=0;


function randomColor(){ // get a random color
    let color = "#" 
    const range = "0123456789ABCDEF"
    for (let i =0;i<6 ; i++){
        color+=range[Math.floor(Math.random()*16)]
    }
    return color
}

function removeElementsByClassName(className){// to remove all divs with class "x" 
    const elements=document.getElementsByClassName(className);
    while(elements.length>0){
        elements[0].remove()
    }
}

four.addEventListener("click",function(){ // to remove all divs with class "x" and build a grid with 4 blocks
    removeElementsByClassName("x");
    x=4;
    for(let i=0;i<x;i++){
        const newDiv=document.createElement("div");
        newDiv.classList.add("x");
        newDiv.style.width="200px";
        newDiv.style.height="200px";
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseover", function() {
            let color=randomColor();
            this.style.backgroundColor = color;
          });
    }    
})
sixteen.addEventListener("click",function(){ // to remove all divs with class "x" and build a grid with 16 blocks
    removeElementsByClassName("x");
    x=16;
    for(let i=0;i<x;i++){
        const newDiv=document.createElement("div");
        newDiv.classList.add("x");
        newDiv.style.width="100px";
        newDiv.style.height="100px";
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseover", function() {
            let color=randomColor();
            this.style.backgroundColor =  color;
          });
    }    
})
sixtyFour.addEventListener("click",function(){// to remove all divs with class "x" and build a grid with 64 blocks
    removeElementsByClassName("x");
    x=64;
    for(let i=0;i<x;i++){
        const newDiv=document.createElement("div");
        newDiv.classList.add("x");
        newDiv.style.width="50px";
        newDiv.style.height="50px";
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseover", function() {
            let color=randomColor();
            this.style.backgroundColor =  color;
          });
    }    
})
hundred.addEventListener("click",function(){// to remove all divs with class "x" and build a grid with 100 blocks
    removeElementsByClassName("x");
    x=100;
    for(let i=0;i<x;i++){
        const newDiv=document.createElement("div");
        newDiv.classList.add("x");
        newDiv.style.width="40px";
        newDiv.style.height="40px";
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseover", function() {
            let color=randomColor();
            this.style.backgroundColor =  color;
          });
    }    
})

eraser.addEventListener("click",function(){
        const allDivs=document.querySelectorAll(".x");
        allDivs.forEach(div => {
            div.addEventListener("mouseover",function(){
                this.style.backgroundColor="#EEEEEE";
            })
        })
    })
picColor.addEventListener("mouseout",function(){
    let color=this.value;
    const allDivs=document.querySelectorAll(".x");
        allDivs.forEach(div => {
            div.addEventListener("mouseover",function(){
                this.style.backgroundColor=color;
            })
        })
    })

