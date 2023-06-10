let height=document.getElementById("height")
let width=document.getElementById("width")




function getSize(){
   
   let screenWidth=window.innerWidth
   let screenHeight=window.innerHeight
   height.innerText=`${screenHeight}`
   width.innerText=`${screenWidth}`

  
}