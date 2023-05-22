
data = [
    
    {
        "id": 1,
        "bg": 'https://cdn.shopify.com/s/files/1/2642/6578/t/28/assets/Homepage-OffType.jpg?v=50217493341841142561684249811',
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
        slide.style.backgroundImage = `url(${item.bg})`;
        slide.style.width = 100/numberOfSlides + "%";
        slide.style.backgroundSize = "cover";
        slide.style.fontFamily = item.fontFamily;
        slide.style.color = item.fontColor;
        carouselContainer.appendChild(slide); 

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