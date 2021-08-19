const secondHand = document.getElementById('secondHand');
const minuteHand = document.getElementById('minuteHand');
const hourHand = document.getElementById('hourHand');
const textTime = document.querySelector('#textTime');
var isDarkMode = false;


function getSeconds(){ 
    const seconds = new Date().getSeconds();
    let rotation = `${(seconds*6)-90}deg`;
    secondHand.style.transform = `rotate(${rotation})`;
    setTimeout(getSeconds, 1000);
}

function getHours(){ 
   const hours = new Date().getHours();
    let rotation = `${(hours*15)-90}deg`;
    hourHand.style.transform = `rotate(${rotation})`;
    setTimeout(getHours, (1000*60*60));
}

function getMinutes(){ 
    const minutes = new Date().getMinutes();
    let rotation = `${(minutes*6)-90}deg`;
    minuteHand.style.transform = `rotate(${rotation})`;
    setTimeout(getMinutes, (1000*60));
}

const addZero = (number) => {
    return number < 9 ? `0${number}` : number;
}

function setText(){
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    textTime.innerHTML = `${addZero(hours)}:${addZero(minutes)}`;
    setTimeout(setText, (1000));

}

function setBackground(){
    const bg = document.getElementById('bg-img');
    const hours = new Date().getHours();
    const nightImage = 'https://cdn.pixabay.com/photo/2015/07/02/10/13/sky-828648_960_720.jpg';
    const dayImage = 'https://cdn.pixabay.com/photo/2016/03/27/07/32/clouds-1282314_960_720.jpg';
    if(hours > 17){
        if(!isDarkMode){darkMode();}
        bg.setAttribute('src',nightImage);
    }else{
        if(isDarkMode){darkMode();}
        bg.setAttribute('src',dayImage);
    }
}

function clock(){
    setBackground();
    getSeconds();
    getMinutes();
    getHours();
    setText();
}

clock();


function darkMode(){
    isDarkMode = !isDarkMode;
    // get all .themed class items
    const elements = document.getElementsByClassName('themed');
    // toggle .dark-mode class for each item
    for (let i = 0; i < elements.length; i++){
        toggleDarkMode(elements[i])
    }
}

function toggleDarkMode(element) {
    element.classList.toggle('dark-mode');
}