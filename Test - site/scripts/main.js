let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox_png.webp') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox_png.webp');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setusername() {
  let myname = prompt('please enter your name');
  if(!myname) {
    setusername();
  } else {
  localStorage.setItem('name',myname);
  myHeading.innerHTML = 'Mozilla is cool,' + myname;
  }
}

if(!localStorage.getItem('name')) {
  setusername();
} else {
  let storedname = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool,' + storedname;
}

myButton.onclick = function() {
  setusername();
}