const today = new Date();

const day = today.getDate();         // দিন (১ - ৩১)
const month = today.getMonth() + 1;  // মাস (০ - ১১) → তাই +1 দিতে হয়
const year = today.getFullYear();    // বছর (YYYY)

const dateString = `${day}/${month}/${year}`;
document.getElementById('date').textContent= dateString;
console.log(dateString);  // যেমন: 15/5/2025