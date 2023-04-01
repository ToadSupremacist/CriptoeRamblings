//calendar script in progress, don't judge me pls
import { install } from 'esinstall'

await install(['json-calendar'], {

})
import { JsonCalendar } from "json-calendar";
const calendar = new JsonCalendar()
const cal = document.querySelector(".calendar-wrap");
let dayslist = calendar.weeks.map(w => w.map(d => d.day));

for (i in Range(cal.children.length)){
    cal.children[i].textContent = calendar.getDayName[i];
}

function handleOnClick () {
  calendar.changeMonth(2020, 8);
}