const slider = document.querySelector(".slider");
const btns = document.querySelectorAll(".btn")
const sliders = document.querySelectorAll(".img")
const background = document.querySelectorAll(".bg")
const options = document.querySelectorAll(".option")

var index = 1
var op_index = 0
var size = sliders[index].clientWidth
update()
function update(){
  slider.style.transform = `translateX(-${size*index}px)`
  background.forEach(img=>img.classList.remove('show'))
  background[op_index].classList.add('show')

  options.forEach(option=>option.classList.remove('colored'))
  options[op_index].classList.add('colored')
}

function slide(){
  slider.style.transition = `transform .5s ease-in-out`;
  update()
}

function btnClick(){
  if (this.id === "prev"){
    index--;
    if(op_index ===0){
      op_index=5
    }else{
      op_index--
    }
    console.log('ix',index);
    
  }else if(this.id ==='next'){
    index++
    if(op_index===5){
      op_index=0
    }else{
      op_index++
    }
  }
  slide()
}
function optionClick(){
  let i = Number(this.getAttribute("op-index"))
  op_index = i
  index = i+1
  slide()
}

slider.addEventListener('transitioned',()=>{
  if(sliders[index].id==='last'){
    slider.style.transition = 'none'
    index = sliders.length-2
    slider.style.transform = `translateX(-${size*index}px)`
  }
  else if(sliders[index].id === 'first'){
    slider.style.transition = 'none'
    index = 1
    slider.style.transform = `translateX(-${size*index}px)`
  }
})

btns.forEach(btn=>btn.addEventListener('click',btnClick))
options.forEach(option=>option.addEventListener('click',optionClick))