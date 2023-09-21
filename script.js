const slide = document.querySelector('.gallery')
let slides = document.querySelectorAll('.gal-img')
const leftIcon = document.querySelector('.fa-chevron-left')
const rightIcon = document.querySelector('.fa-chevron-right')
let index = 0
let interval = 2000

// CREATING A CLONE ON THE FIRST AND LAST SLIDES
const firstNode = slides[0].cloneNode(true)
const lastNode = slides[slides.length - 1].cloneNode(true) 

firstNode.id = 'first-nodeId'
lastNode.id = 'last-nodeId' 

slide.append(firstNode)
slide.prepend(lastNode)

// THIS GETS THE WIDTH OF EACH SLIDE
const slideWidth = slides[index].clientWidth;
slide.style.transform = `translate(${-slideWidth * index}px)`


// CREATING A FUNCTION WHICH STARTS THE SLIDE AND SET INTERVAL FOR EACH SLIDE USING THE DEFINE INTERVAL
function startSlide(){
	setInterval(()=>{ 
		index++
		if (index === slides.length) {
			index = 0
		}
        slide.style.transform = `translate(${-slideWidth * index}px)`
        slide.style.transition = '.8s'
	}, interval)
}

// GETTING  THE END OF EACH TRANSITION 
// TO RESTART SLIDES WITHOUT GOING BACK TO THE FIRST SLIDE

slide.addEventListener('transitionend', ()=>{
	slides = document.querySelectorAll('.gal-img')
	if (slides[index].id === firstNode.id) {
		slide.style.transition = 'none'	
		index = 1
        slide.style.transform = `translate(${-slideWidth * index}px)`
        // slide.style.transition = 'none'		
	}

	if (slides[index].id === lastNode.id) {
		slide.style.transition = 'none'
		index = slides.length - 2 
		slide.style.transform = `translate(${- slideWidth * index}px)`		
	}	

})

rightIcon.addEventListener('click', ()=>{
	    slides = document.querySelectorAll('.gal-img')
	    if (index >= slides.length - 1) return
		index++
        slide.style.transform = `translate(${-slideWidth * index}px)`
        slide.style.transition = '.8s'	
})

leftIcon.addEventListener('click', () =>{
	slides  = document.querySelectorAll('.gal-img')
	if (index <= 0) return
		index--
		slide.style.transform = `translate(${- slideWidth * index}px)`
		slide.style.transition = '.6s'		
})	


startSlide()


/// THIS BLOCK OF CODES WILL MAKE THE NAVBAR STICKY AT THE TOP

window.onscroll = function() {scroll ()}	

const navbar = document.querySelector("#nav")
const sticky = navbar.offsetTop

function scroll() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	}else{
		navbar.classList.remove("sticky")
	}
} 

/// WRITING CODE FOR THE BACK TO TOP BUTTON
const toTop = document.querySelector('.to-top')
toTop.addEventListener('click', ()=>{

	window.scrollTo ({
		top: 0,
		behavior: 'smooth',
	})

})

window.addEventListener('scroll', ()=>{
	if (window.pageYOffset > 200) {
		toTop.classList.add('scrolled')
	}else{
		toTop.classList.remove('scrolled')
	}
})

/**
   * Animation on scroll
   */
  // window.addEventListener('load', () => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: 'ease-in-out',
  //     once: true,
  //     mirror: false
  //   })
  // });

//// WRITING CODES TO DISPLAY AND SHOW THE NAVIGAITON MENU ON SMALL SCREEN DEVICES
const onOPen = document.querySelector('#menu-open')
const onClose = document.querySelector('#menu-close')
const ul = document.getElementsByTagName('ul')[0]
const lists = document.querySelectorAll('[data-list]')
 

// onOPen.addEventListener('click', ()=>{
// 	ul.style.display = 'block'
// 	onOPen.style.display = 'none'
// 	onClose.style.display = 'block'
// })

// onClose.addEventListener('click', () =>{
// 	ul.style.display = 'none'
// 	onOPen.style.display = 'block'
// 	onClose.style.display = 'none'
// })


// lists.forEach(list=>{
// 	list.addEventListener('click', ()=>{
// 		ul.style.display = 'none'
// 		onOPen.style.display = ''
// 		onClose.style.display = ''
// 	})
// })

onOPen.addEventListener('click', ()=>{
	ul.classList.toggle('active')
})
onClose.addEventListener('click', ()=>{
	ul.classList.toggle('active')
})
lists.forEach(list=>{
	list.addEventListener('click', ()=>{
		ul.classList.toggle('active')
	})
})