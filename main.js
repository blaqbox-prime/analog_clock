const secondHand = document.getElementById('secondHand');
const minuteHand = document.getElementById('minuteHand');
const hourHand = document.getElementById('hourHand');
const textTime = document.querySelector('#textTime');
const message = document.getElementById('message');
var isDarkMode = false;

const eveningQuotes = [
    'Some nights are made for torture, or reflection, or the savoring of loneliness.',
    'Inhale and hold the evening in your lungs.',
    'The evening star is the most beautiful of all stars.',
    'It is the evening that questions thus from within me.'
];

const dayQuotes = [
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Do what is right, not what is easy nor what is popular.",
    "Pursue what catches your heart, not what catches your eyes.",
    "Start each day with a positive thought and a grateful heart.",
];

function setMessage(){
    let hour = new Date().getHours();
    
    if (hour > 5 && hour < 17){
        message.innerHTML = dayQuotes[Math.floor(Math.random()*dayQuotes.length)];
    } else{
        message.innerHTML = eveningQuotes[Math.floor(Math.random()*eveningQuotes.length)];
    }

}

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
    setMessage();
}

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


clock();