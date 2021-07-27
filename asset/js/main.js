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
const visual2Slide01 = visual2.querySelector('.first_slide');
const visual2Slide02 = visual2.querySelector('.second_slide');
let current = 0;
setInterval(function(){
    current++
    visual2Slide01.style.top = `${current}vh`
    visual2Slide02.style.top = `${-current}vh`
},150)


// last_viewed
let nowviewed;
const viewed = document.querySelector('#last_viewed');
const viewedBtn = viewed.querySelector('.scroll_btn');
const viewedBtns = viewedBtn.querySelectorAll('span');
const viewedSlides = document.querySelectorAll('.slides');

viewedBtn.addEventListener('click',function(e){
    nowviewed = e.target.dataset.num;
    if(0 < nowviewed && nowviewed <= viewedSlides.length){
        slideEvent()
    }
})

function slideEvent(){
    classOn(viewedBtns, nowviewed-1)
    classOn(viewedSlides, nowviewed-1)
}

//pick

const pick = document.querySelector('#md_pick');
const pickBtn = pick.querySelector('.scroll_btn');
const pickBtns = pick.querySelectorAll('span');
const pickImg = pick.querySelectorAll('.md_imgs li');
const pickText = pick.querySelectorAll('.md_text li');
let pickNum;
pickBtn.addEventListener('click',function(e){
    pickNum = e.target.dataset.num;
    if(0 <= pickNum && pickNum <= pickImg.length-1){
        classOn(pickText, pickNum)
        classOn(pickBtns, pickNum)
        mover(pickNum)
    }   
})

function mover(current) {
    let num;
    num = -current;
    pickImg.forEach(function(item){
        item.className = `page_${num}`;
        num += 1;
    })
}
