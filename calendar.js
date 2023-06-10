let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let calendar = document.querySelector(".calendar-wrap");
let days = document.querySelectorAll(".calend-day");
let dates = document.querySelectorAll(".calendar-date");
let projs = document.querySelectorAll(".date-projects");
let monthName = document.querySelector(".month");

function fillCalendar(year, month) {
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let daysInMonth = new Date(year, month + 1, 0).getDate();
  let firstDayOfMonth = new Date(year, month, 1).getDay();

  monthName.innerText = monthNames[month] + " " + year;
  let dayCount = 1;
  for (let i = firstDayOfMonth-1; dayCount <= daysInMonth; i++) {
    dates[i].innerText = dayCount;
    dayCount++;
  }
}

fillCalendar(currentYear, currentMonth);