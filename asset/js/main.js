//visual 01 

const visual1 = document.querySelector('.visual_1');
const visualText = visual1.querySelector('.visual_text1')
const visual1Img = visual1.querySelector('img:nth-child(3)')
let windowSize = window.outerWidth;

function classOn(target, num){
    target.forEach(function(item){
        item.classList.remove('on');
    })
    target[num].classList.add('on');
}

visual1.addEventListener('mousemove',function(e){
    if(e.clientX < windowSize/2){
        visualText.children[0].classList.add('on')
        visualText.children[1].classList.remove('on')
        visualText.style.transform = `rotateY(${20-e.clientX/(windowSize/2)*10}deg)`
    }else{
        visualText.children[0].classList.remove('on')
        visualText.children[1].classList.add('on')
        visualText.style.transform = `rotateY(${-e.clientX/(windowSize/2)*10}deg)`
    }
})

// visual02

const visual2 = document.querySelector('.visual_2');
const slide1 = visual2.querySelector('.first_slide');
const slide2 = visual2.querySelector('.second_slide');
const slides1 = visual2.querySelectorAll('.first_slide li')
const slides2 = visual2.querySelectorAll('.second_slide li')
let current = 0;
let current2 = -180;
let clone0
let data = document.createElement('li')
let data2 = document.createElement('img')

setInterval(function(){
    current++
    current2++
    slide1.style.top = -current+'vh'
    slide2.style.top = current2+'vh'
    start()
    start2()
},100)

function start(){
    if(current == 180){
        slide1.style.transition = '0s'
        current = 0;
        setTimeout(function(){
        slide1.style.transition = '0.3s'    
        },120)
    }
}
function start2(){
    if(current2 == 0){
        slide2.style.transition = '0s'
        current2 = -180;
        setTimeout(function(){
        slide2.style.transition = '0.3s'    
        },110)
    }
}


for(let i = 0; i < slides1.length; i++){
    slides1[i].style.top=`${60*i}vh`
    slides2[i].style.top=`${60*i}vh`
}

// last_viewed
let nowviewed = 1;
const viewed = document.querySelector('#last_viewed');
const viewedBtn = viewed.querySelector('.scroll_btn');
const viewedBtns = viewedBtn.querySelectorAll('span');
const viewedSlides = document.querySelectorAll('.slides');

viewedBtn.addEventListener('click',function(e){
    nowviewed = e.target.dataset.num;
    if(0 < nowviewed && nowviewed <= viewedSlides.length){
        slideEvent(nowviewed)
    }
})

setInterval(() => {
    nowviewed++
    nowviewedRange()
    slideEvent(nowviewed)
}, 5000);

function nowviewedRange(){
   if(nowviewed > viewedSlides.length){
        nowviewed = 1;
    }
}

function slideEvent(nowviewed){
    classOn(viewedBtns, nowviewed-1)
    classOn(viewedSlides, nowviewed-1)
}

//pick

const pick = document.querySelector('#md_pick');
const pickBtn = pick.querySelector('.scroll_btn');
const pickBtns = pick.querySelectorAll('span');
const pickImg = pick.querySelector('.md_imgs');
const pickImgs = pick.querySelectorAll('.md_imgs li');
const pickText = pick.querySelectorAll('.md_text li');
let pickNum = 0;
pickBtn.addEventListener('click',function(e){
    pickNum = e.target.dataset.num;
    if(0 <= pickNum && pickNum <= pickImgs.length-1){
        mover(pickNum)
    }   
})

setInterval(() => {
    pickNum++
    pickNumRange()
    mover(pickNum)
}, 5000);

function pickNumRange(){
    if(pickNum > pickImgs.length-1){
        pickNum = 0;
    }
}

function mover(current) {
    let num;
    num = -current;
    pickImgs.forEach(function(item){
        item.className = `page_${num}`;
        num += 1;
    })
    classOn(pickText, pickNum)
    classOn(pickBtns, pickNum)
}
