
data = [
    
    {
        "id": 1,
        "bg": 'https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Homepage-OffType.jpg?v=71331014463972640541684944315',
        "text1": 'Weirdly',
        "text2": 'Off',
        "text3": 'Beat',
        "text4": 'Fonts!',
        "boxHeading": 'Off-Type.com is Here',
        "boxContent": "Pangram Pangram's new, weird sister foundry. Weird/Beautiful/Silly Off-Beat fonts!",
        "headingFont": 'brut',
        "fontFamily": 'brut',
        "fontColor": '#ff3d00'
    },
    {
        "id": 2,
        "bg": 'https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-Fragment.jpg?v=108924954602691418591680613809',
        "text1": 'Fragment',
        "text2": '2.0',
        "text3": 'has',
        "text4": 'Italics',
        "boxHeading": '💠Fragment v2.0',
        "boxContent": 'Our most versatile font just got more powerful',
        "headingFont": 'PP Fragment Glare Light Italic',
        "fontFamily": 'PP Fragment Glare Light Italic',
        "fontColor": 'white'
    },
    {
        "id": 3,
        "bg": 'https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-EditorialOld.jpg?v=85360777188182687641678142091',
        "text1": 'Editorial',
        "text2": 'Old',
        "text3": 'Firko',
        "text4": 'Lab',
        "boxHeading": 'Editorial Old',
        "boxContent": 'An eroded alternative to a classic with more than 300 melted, organic ligatures',
        "headingFont": 'EditorialOld-Light',
        "fontFamily": 'EditorialOld-Light',
        "fontColor": 'white'
    },
    {
        "id": 4,
        "bg": 'https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Header-TypeTrials.jpg?v=140312620541521886991675867719',
        "text1": 'Test',
        "text2": 'Your',
        "text3": 'Fonts',
        "text4": 'Here!',
        "boxHeading": 'TypeTrials*',
        "boxContent": 'A easy and free tool to test your variable or static fonts (or one of ours!) quickly. Animate, export for Instagram and much more!',
        "headingFont": 'neue',
        "fontFamily": 'neue',
        "fontColor": 'white'
    },
    {
        "id": 5,
        "bg": 'https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Homepage-FSP.jpg?v=157059235392745552091668604712',
        "text1": '',
        "text2": '',
        "text3": '',
        "text4": '',
        "boxHeading": 'FSP 5.0 is Here!',
        "boxContent": 'The font starter pack is the best option for every situation from the biggest client to your close family.',
        "headingFont": 'neue',
        "fontFamily": 'neue',
        "fontColor": 'white'
    }
]

const carouselContainer = document.querySelector('.carousel-container');

const numberOfSlides = data.length;
var text = [];
var boxStash = [];
var textStash = [];

const addSlide = () => {

    data.forEach((item) => {
        slide = document.createElement('div');
        slide.className = "slide";
        slide.id = item.id;
        
        slide.style.width = 100/numberOfSlides + "%";
        slide.style.fontFamily = item.fontFamily;
        slide.style.color = item.fontColor;
        carouselContainer.appendChild(slide); 


        slideBG = document.createElement('div');
        slideBG.className = "slide-bg";
        
        slideBG.style.backgroundImage = `url(${item.bg})`;
        slideBG.style.backgroundSize = "cover";
        slide.appendChild(slideBG);


        for (let i = 1; i <= 4; i++) {
            text[i] = document.createElement('div');
            text[i].className = "text" + i;
            text[i].id = slide.id;
            if (i===1) {
                text[i].innerHTML = item.text1;
            } else if (i===2){
                text[i].innerHTML = item.text2;
            }
            else if (i===3){
                text[i].innerHTML = item.text3;
            }
            else {
                text[i].innerHTML = item.text4;
            }  
            slide.appendChild(text[i]);
            textStash.push(text[i]);
        }
        box = document.createElement('div');
        box.className = "box";
        box.style.color = "white";

        boxHeading = document.createElement('div');
        boxHeading.className = "box-heading";
        boxHeading.innerHTML = item.boxHeading;
        boxHeading.style.fontFamily = item.headingFont;
        box.appendChild(boxHeading);

        boxContent = document.createElement('div');
        boxContent.className = "box-content";
        boxText = document.createElement('div');
        boxText.className = "box-text";
        boxText.innerHTML = item.boxContent;
        boxContent.appendChild(boxText);

        boxArrow = document.createElement('div');
        boxArrow.className = "box-arrow";
        boxArrow.innerHTML = "→";
        boxContent.appendChild(boxArrow);

        box.appendChild(boxContent);
        
        slide.appendChild(box);
        boxStash.push(box);
        
    })
}


const createDots = () => {
    const dotsContainer = document.querySelector('.carousel-nav');
    for (i = 0; i < numberOfSlides; i++) {
        let dot = document.createElement('div');
        dot.className = "nav-btn";
        dot.id = i+1;
        dot.setAttribute('onclick', 'navigateEvent(this.id)');
        dotsContainer.appendChild(dot);
    }
    
}

let setNumber = 0;

const navigateEvent = (dotIndex) => {
    if (setNumber != dotIndex) {
        setNumber = dotIndex - 1;
        changeEventSet();
        // console.log(dotIndex);
        // clearInterval(eventSetChangeInterval);

        // eventSetChangeInterval = setInterval(changeEventSet, 5000);
        
    }
}


const changeEventSet = () => {
    const limit = numberOfSlides;
    if (setNumber < limit) {
        setNumber++;
        carouselContainer.style.transform = "translate(" + (-100 * (setNumber - 1)) / (numberOfSlides) + "%)";
        
        console.log(textStash)
        console.log(boxStash);
        if (setNumber) {
            for (let i = 0; i <  20; i++) {
                textStash[i].style.animation = 'downward 1s cubic-bezier(0, 0.52, 0.68, 1.42)';
                textStash[i].style.opacity = '0';   
            }

            for (let i = ((setNumber - 1)*4); i < (setNumber*4); i++) {
                textStash[i].style.animation = 'upward 1.5s cubic-bezier(.075,.82,.165,1) ';       
                textStash[i].style.opacity = '1';   
            }
            
        }
        else{
            for (let i = 0; i < 20; i++) {
                textStash[i].style.animation = '';          
            }
        }

        if (setNumber) {
            for (let i = 0; i <  5; i++) {
                boxStash[i].style.animation = 'moveLeft 1.5s cubic-bezier(.075,.82,.165,1)';
                boxStash[i].style.opacity = '0';   
            }

            for (let i = ((setNumber - 1)); i < (setNumber); i++) {
                boxStash[i].style.animation = 'moveRight 1.5s cubic-bezier(.075,.82,.165,1) ';       
                boxStash[i].style.opacity = '1';   
            }
            
        }
        else{
            for (let i = 0; i < 5; i++) {
                boxStash[i].style.animation = '';          
            }
        }
        


        for (dot of document.querySelectorAll('.nav-btn')) {
            dot.style.background = 'none';
        }
        setTimeout (() => {
            document.querySelectorAll('.carousel-nav > .nav-btn')[setNumber - 1].style.background = "#FFFFFF";
        }, 100);
    } else {
        setNumber = 0;
        changeEventSet();
    }
}

let menu_switch = 0;
const menu = () => {
    if(menu_switch === 0) {
        // document.querySelectorAll('.menu-btn').forEach(element => element.classList.add('open-menu'));
        document.querySelector('.menu-box1').style.transform = 'translateY(0)';
        document.querySelector('.menu-box1').style.transition = 'transform 1.2s cubic-bezier(.075,.82,.165,1)';
        document.querySelector('.menu-box1').style.transitionDelay = '0.15s';
        document.querySelector('.carousel-navbar').style.display = 'none';
        document.querySelector('.menu-box2').style.transform = 'translateY(0)';
        document.querySelector('.menu-box2').style.transition = 'transform 1.2s cubic-bezier(.075,.82,.165,1)';
        menu_switch = 1;
    }
    else {
        document.querySelector('.menu-box1').style.transform = 'translateY(-100%)';
        document.querySelector('.menu-box1').style.transition = 'transform 1.2s cubic-bezier(.075,.82,.165,1)';
        document.querySelector('.carousel-navbar').style.display = 'flex';
        document.querySelector('.menu-box2').style.transform = 'translateY(-100%)';
        document.querySelector('.menu-box2').style.transition = 'transform 1.2s cubic-bezier(.075,.82,.165,1)';
        document.querySelector('.menu-box2').style.transitionDelay = '0.15s';
        menu_switch = 0;
    }
    
}

let carousel_bg = document.querySelectorAll('.slide-bg');
console.log(carousel_bg);
let scrollTop = window.pageYOffset;

const parallax = (scrollTop) => {
    scrollTop = window.pageYOffset;

    carousel_bg.forEach(element => {console.log(element)});
    // console.log(scrollTop);
}



document.querySelector('.menu-btn').addEventListener('click', () => menu());
document.querySelector('.close').addEventListener('click', () => menu());
document.querySelector('.cross-btn').addEventListener('click', () => menu());


const underline_out = (id) => {
    document.querySelectorAll('.underline').forEach(element => element.classList.remove('und_link_out'));
    document.querySelector(`.underline-${id}`).classList.add('und_link_in');
}

const underline_in = (id) => {
    document.querySelectorAll('.underline').forEach(element => element.classList.remove('und_link_in'));
    document.querySelector(`.underline-${id}`).classList.add('und_link_out');
}

document.querySelector('.about-div-2-link').addEventListener('mouseover', () => underline_in(1))
document.querySelector('.about-div-2-link').addEventListener('mouseout', () => underline_out(1))

document.querySelector('.about-div-3-link').addEventListener('mouseover', () => underline_in(2))
document.querySelector('.about-div-3-link').addEventListener('mouseout', () => underline_out(2))

document.querySelector('.see-fonts').addEventListener('mouseover', () => underline_in(3))
document.querySelector('.see-fonts').addEventListener('mouseout', () => underline_out(3))


document.querySelector('.und_3').addEventListener('mouseover', () => underline_in(3))
document.querySelector('.und_3').addEventListener('mouseout', () => underline_out(3))

document.querySelector('.und_4').addEventListener('mouseover', () => underline_in(4))
document.querySelector('.und_4').addEventListener('mouseout', () => underline_out(4))

document.querySelector('.und_5').addEventListener('mouseover', () => underline_in(5))
document.querySelector('.und_5').addEventListener('mouseout', () => underline_out(5))

window.addEventListener("scroll", () => {
    parallax();
})

window.onload = () => {
    addSlide();
    createDots();
    setTimeout(() => {
        changeEventSet();
    }, 0.5);
    var id = 1;
    document.addEventListener('keydown', (e) => {
            if (e.keyCode == 39 && id != numberOfSlides) {
                console.log("Right Arrow is pressed!");
                navigateEvent(id+1);
                id++;
            }
            else if (e.keyCode == 37 && id != 1) {
                console.log("Left Arrow is pressed!");
                navigateEvent(id-1);
                id--;
            }
            else{}
        
    })
  
}


window.addEventListener('scroll', () => {
    let val = window.scrollY
    // console.log(val);
    // document.querySelector('.sc').innerHTML = val
    if (val > 1104) {
        //1104-2090
        let slope1 = (180 - 0) / (1104 - 2090);
        let slope2 = (60 - 0) / (1104 - 2090);
        let slope3 = (150 - 0) / (1104 - 2090);
        /*
        y-y1
        ----  =  slope => y=slope*(val-y1)+x1
        x-x1
        */
        document.querySelector('.Cards-row-2').style.marginTop = `${slope1 * (val - 1104) * 1.6 + 180}px`;
        document.querySelector('.Cards-row-3').style.marginTop = `${slope2 * (val - 1104) * 1.6 + 60}px`;
        document.querySelector('.Cards-row-4').style.marginTop = `${slope3 * (val - 1104) * 1.6 + 150}px`;
    }
    else {
        document.querySelector('.Cards-row-2').style.marginTop = `${180}px`;
        document.querySelector('.Cards-row-3').style.marginTop = `${60}px`;
        document.querySelector('.Cards-row-4').style.marginTop = `${150}px`;
    }
    if (val % 100 < 50) {
        document.querySelector('.circle').style.transform = 'rotate(5deg)';
    }
    else{
        document.querySelector('.circle').style.transform = 'rotate(-5deg)';
    }
})

let height = Math.round(window.innerHeight);
let width = Math.round(window.innerWidth);




const project1Img=document.querySelector("#project1-img")
const project2Img=document.querySelector("#project2-img")
const project3Img=document.querySelector("#project3-img")
const project4Img=document.querySelector("#project4-img")
const project5Img=document.querySelector("#project5-img")

window.addEventListener('scroll',()=>{
 if(window.scrollY > 4.5*height){
   let offsetTop2=window.scrollY - 4.2*height;

   let project1ImgRate=offsetTop2*0.095;
   let project2ImgRate=offsetTop2*0.095;
   let project3ImgRate=offsetTop2*0.095;
   let project4ImgRate=offsetTop2*0.095;
   let project5ImgRate=offsetTop2*0.095;

   project1Img.style.transform= `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${project1ImgRate}, 0, 1)`
   project2Img.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${project2ImgRate}, 0, 1)`
   project3Img.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${project3ImgRate}, 0, 1)`
   project4Img.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${project4ImgRate}, 0, 1)`
   project5Img.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${project5ImgRate}, 0, 1)`
 }

})


const article1Img=document.querySelector("#article1-img")
const article2Img=document.querySelector("#article2-img")
const article3Img=document.querySelector("#article3-img")

window.addEventListener('scroll',()=>{
  if(window.scrollY > 4.5*height){
      
    let offsetTop3=window.scrollY - 6*height;

    let article1ImgRate=offsetTop3*0.11;
   let article2ImgRate=offsetTop3*0.11;
   let article3ImgRate=offsetTop3*0.11;

   article1Img.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${article1ImgRate}, 0, 1)`
   article2Img.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${article2ImgRate}, 0, 1)`
   article3Img.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${article3ImgRate}, 0, 1)`
  }
  
  

})

const lastPage=document.querySelector("#lastPage")
window.addEventListener('scroll',()=>{
  if(window.scrollY > 4.7*height && window.scrollY < 11.7*height){
    
    let offsetTop4=window.scrollY- 6.6*height
    let lastPageRate=offsetTop4*0.2
    lastPage.style.transform=`translate3d(0px, ${lastPageRate}px, 0px)`
  }
})


