// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World';
//
// document.querySelector('html').style.backgroundColor = 'purple';

// var myImg = document.createElement('img');
// myImg.setAttribute('src', 'https://farm4.staticflickr.com/3455/3372925208_e1f2aae4e3_b.jpg');
// document.querySelector('h1').appendChild(myImg);
let myImg = document.querySelector('img');
myImg.onclick = function () {
    let mysrc = myImg.getAttribute('src');
    if (mysrc === '../image/firefox-icon.jpg') {
        myImg.setAttribute('src', '../image/elephant.jpg')
    } else {
        myImg.setAttribute('src', '../image/firefox-icon.jpg')
    }
}

// let icecream = 'chocolate';
// if (icecream === 'chocolate') {
//     alert('I like icecream chocolate!')
// } else {
//     alert('I like icecream!')
// }

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// document.querySelector('html').onclick = function () {
//     alert('ahdkfajdvioefaled')
// }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername() {
    let myName = prompt('请输入名字：');
    if (!myName || myName === null) {
        setUsername()
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 666' + myName
}

if (!localStorage.getItem('name')) {
    setUsername();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 666' + storedName;
}

myButton.onclick = function () {
    setUsername();
}