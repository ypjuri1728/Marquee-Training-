const canvas = document.getElementById('paintCanvas')//give blackarea
const context = canvas.getContext('2d') // for wnatever we draw we can see now
const clearBtn = document.getElementById('clearBtn')


//Drawing state variable
let isDrawing = false
let brushColor  = "#bd2a1d";
let brushWidth = 5

//mousedown &mouseup
//user click nd hold the board ->draw hoga
canvas.addEventListener('mousedown',(event)=>{
    isDrawing = true
    context.beginPath()
    context.moveTo(event.offsetX, event.offsetY)
})

// canvas.addEventListener('mouseup',move)
//addeventListener(function) ->called callby function

canvas.addEventListener('mouseup',()=>{
isDrawing = false
context.closePath()
})

//mousemove event
canvas.addEventListener('mousemove',(event)=>{
    if(!isDrawing) return //if mouse is not hold
    context.lineWidth = brushWidth
    context.lineCap='round' //smooth corner
    context.strokeStyle = brushColor

    context.lineTo(event.offsetX,event.offsetY)
    context.stroke(); //line visible to screen

});
canvas.addEventListener('mouseleave',()=>{
    isDrawing=false

})
canvas.addEventListener('mouseenter',()=>{
    console.log("You can draw")
})

//clear board
clearBtn.addEventListener('click',()=>{
    context.clearRect(0,0,canvas.width,canvas.height);
})

//double click
canvas.addEventListener('dblclick',()=>{
    const randomBg = `hsl(${Math.random() * 360}, 80%, 90%)`;
    canvas.style.backgroundColor = randomBg
})

// canvas.addEventListener('contextmenu',(event)=>{
//     //event.preventDefault
//     event.preventDefault()

//     const colors =['', '' ,'' ,'' ,'' ,'']
//     const randomColor 

//     alert(`Brush color changes to: ${brushColor}`)
// })
canvas.addEventListener("contextmenu", function(event) {

    event.preventDefault();

    if (brushColor == "black") {
        brushColor = "red";
    }else {
        brushColor = "black";
    }
  

});




