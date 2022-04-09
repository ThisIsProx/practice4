let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'chess1.png') {
        myImage.setAttribute ('src','chess2.png');
        document.getElementsByClassName('color')[0].style= "background: black;";
    } else {
        myImage.setAttribute('src', 'chess3.png');
        document.getElementsByClassName('color')[0].style= "background: purple;";
    } if(mySrc === 'chess3.png') {
        myImage.setAttribute ('src','chess1.png');
        document.getElementsByClassName('color')[0].style= "background: green;";
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Введи ім`я');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Вітаю ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Вітаю ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

window.onload = function() {
    function rand() {
        return Math.floor(Math.random() * 256);
    }
    function set_background_color() {
        document.body.style.backgroundColor =
            "rgb(" + rand() + "," + rand() + "," + rand() + ")";
    }
    set_background_color();
};

function reload(){
        window.location.reload();
    }




