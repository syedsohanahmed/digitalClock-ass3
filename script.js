// get elements by their IDs
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const meridian = document.getElementById('meridian');

// function to update the clock every second
function updateClock() {
  const now = new Date();

  // get hours, minutes, and seconds
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // convert to 12-hour format
  let mer = "AM";
  if (hour > 12) {
    hour -= 12;
    mer = "PM";
  }
  if (hour === 0) {
    hour = 12;
  }

  // pad with leading zeros if needed
  hour = hour.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  second = second.toString().padStart(2, "0");

  // update the clock display
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
  meridian.innerHTML = mer;
}

// call the updateClock function every second
setInterval(updateClock, 1000);

// call the updateClock function once to initialize the clock
updateClock();



/*
Clock work: 
gets the current time using the Date object, formats the time into hours, minutes, seconds, and meridian using string manipulation, and displays the formatted time in the div elements
*/
