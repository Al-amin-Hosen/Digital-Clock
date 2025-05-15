function updateDigitalClock() {
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // AM/PM Format (optional)
    let ampm = "AM";
    if (hours >= 12) {
      ampm = "PM";
      hours = hours > 12 ? hours - 12 : hours;
    }
    hours = hours === 0 ? 12 : hours;
  
    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").textContent = timeString;
  }
  
  setInterval(updateDigitalClock, 1000);
  updateDigitalClock();