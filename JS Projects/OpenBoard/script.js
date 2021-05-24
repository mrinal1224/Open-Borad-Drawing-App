const canvas = document.getElementById('canvas');


const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEle = document.getElementById('size');
const clearBtn = document.getElementById('clear');
const colorEle = document.getElementById('color');
const undoBtn = document.getElementById('undo')
const redoBtn = document.getElementById('redo')
const zoomInBtn = document.getElementById('zoom-in')
const zoomOutBtn = document.getElementById('zoom-out')
const saveBtn = document.getElementById('undo')
const notes = document.getElementById('notes')


const ctx = canvas.getContext('2d')
UndoCanvas.enableUndo(ctx)

let x
let y
let isPressed = false
let size=10
let color = 'black'




function drawCircle(x , y){
 ctx.beginPath();
 ctx.arc(x,y , size ,0 ,Math.PI*2)
 ctx.fillStyle = color
 ctx.fill()
}


function drawLine(x1 , y1 , x2 , y2){
    ctx.beginPath()
    ctx.moveTo(x1 , y1)
    ctx.lineTo(x2 , y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size*2
    ctx.stroke()

}


function updateSizeOnScreen(){
 sizeEle.innerText = size
}

function zoomin() {
            let canvasEl= document.getElementById("canvas");
            let currWidth = canvasEl.width;
            canvasEl.style.width = (currWidth + 100) + "px";
        }



canvas.addEventListener('mousedown' , (e)=>{
 isPressed= true
   x = e.offsetX
   y = e.offsetY
})

canvas.addEventListener('mousemove' , (e)=>{
  if(isPressed){
     const x2 = e.offsetX
     const y2 = e.offsetY
     drawCircle(x2 , y2);
     drawLine(x , y , x2 , y2)

     x =x2
     y= y2
  }

 
   
})

canvas.addEventListener('mouseup' , (e)=>{
   isPressed= false
   x = undefined
   y = undefined
})

colorEle.addEventListener('change' , (e)=> color = e.target.value)


increaseBtn.addEventListener('click' , ()=>{
 size+=2
 if(size>40){
     size=40
 }
 updateSizeOnScreen()
})


  
decreaseBtn.addEventListener('click' , ()=>{
  size-=2
  if(size<4){
      size=4
  }
updateSizeOnScreen()
})


clearBtn.addEventListener('click',  ()=> ctx.clearRect(0,0 , canvas.width , canvas.height))


undoBtn.addEventListener('mousedown' ,(e)=>{
  ctx.undo()
})

redoBtn.addEventListener('mousedown' ,(e)=>{
  ctx.redo()
})

zoomInBtn.addEventListener('click', zoomin())



const saveImg= document.getElementById("save");
saveImg.addEventListener("click", function(e) {
const a=document.createElement("a");
a.download="file.png";
a.href=canvas.toDataURL("image/png");
a.click();
a.remove()
});





