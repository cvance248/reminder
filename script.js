// DOM Elements
const date = document.getElementById('date'),
  time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

  //Show Date
  //Show Date
  function showDate() {
    let now = new Date(),
    month = now.toLocaleString('default', { month: 'short' }),
    day = now.getDate(),
    year = now.getFullYear();

    //set month
  

    //Date
    date.innerHTML = `${month} ${day}<span>, </span>${year}`;
    }

  //Show Time
  function showtime() {
      let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

      //set AM or PM
      const amPM = hour >= 12 ? 'PM' : 'AM';

      //12 hour format
      hour = hour %12 || 12;

      
      //Output Time
      time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

      setTimeout(showtime, 1000);
  }

  // Add zeros to seconds 1-9
  function addZero(n) {
      return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

//Set Background and greeting

function setBgGreet () {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = 'Good Morning';
    } else if(hour < 18){
        //Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
    } else {
        //Good Evening
    document.body.style.color = 'white'
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greeting.textContent = 'Good Evening';
    }
}

//Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    }else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set Name
function setName(e) {
if (e.type == 'keypress') {
    //Make sure enter key is pressed
    if (e.which == 13 || e.keypress == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
    }
}else {
    localStorage.setItem('name', e.target.innerText);
 }
}

//Set Focus
function setFocus(e) {
    if (e.type == 'keypress') {
        //Make sure enter key is pressed
        if (e.which == 13 || e.keypress == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else {
        localStorage.setItem('focus', e.target.innerText);
     }
    }

//Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Goal]';
    }else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

  //run
  showDate();
  showtime();
  setBgGreet();
  getName();
  getFocus();