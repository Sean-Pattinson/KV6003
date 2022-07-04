//Set the date to the current date and time.
let date =  new Date(Date.now());

let view = 'month';

/**
 * Gets the number of days in the following month.
 * 
 * @param {number} month the number of the month.
 * @param {number} year the number of the year.
 * 
 * @return {number} number of days in month.
 */
function getDaysInMonth(month,year) {
//Day 0 is the last day in the previous month
// Here January is 0 based so month 0 shows the amount of days in december.
var daysInMonth = new Date(year, month+1, 0, 9).getDate();
return daysInMonth;
};

/** 
 * Get the days in the previous month that should be shown on the current months calendar
 * by subtracting weekDay from i which should cause a negative integer which will allow
 * the days in the current week that may be in the previous month to be obtained.
 *
 * @return {array} returns an array of days.
 */
function getPreviousMonthDays() {
let weekDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay() == 0 ? 7 : new Date(date.getFullYear(), date.getMonth(), 1).getDay();
let days = [];
let toStartOfWeek = 1 - (1 - weekDay);
for (let i = 1; i < toStartOfWeek; i++) {
  let newDate=new Date(date.getFullYear(), date.getMonth(), 1+(i-toStartOfWeek), 9);
  days.push(newDate);
}
  return days;
};

/** 
 * Get the days in the following month that should be shown on the current months calendar
 * by adding 1 to the current month to take us to the next month and counting to the end of the week
 * 
 * @return {array} returns an array of days.
 */
function getNextMonthDays() {
  let daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
let weekDay = new Date(date.getFullYear(), date.getMonth(), daysInMonth).getDay() == 0 ? 7 : new Date(date.getFullYear(), date.getMonth(), daysInMonth).getDay();
let days = [];
let toEndOfWeek = 7-weekDay;
for (let i=1; i <= toEndOfWeek; i++) {
  let newDate=new Date(date.getFullYear(), date.getMonth()+1, i, 9);
  days.push(newDate);
}
  return days;
};

/**
 * Get the days of the week in number form and convert them to string form 
 * the getDay() function is 0 based so 0 = Sunday, 1 = Monday etc.
 * 
 * @param {number} year 
 * @param {number} month 
 * @param {number} day
 * 
 * @return {string} Day of week in string form.
 */
function getCurrentDay(year, month, day) {
    
    let newDate =  new Date(year, month, day);

    switch(newDate.getDay()) {
        case 0:
          day = 'Sunday';
        break;
        case 1:
          day = 'Monday';
        break;
        case 2:
          day = 'Tuesday';
        break;
        case 3:
          day = 'Wednesday';
        break;
        case 4:
          day = 'Thursday';
        break;
        case 5:
          day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
        break;
      default:
        day = 'Error: Date may be invalid';
    }
  return day;
};

/**
 * Pass the year, month and day, convert to a date then convert the month
 * to string format to display on the calendar.
 * 
 * @param {number} year 
 * @param {number} month 
 * @param {number} day 
 * 
 * @return {string} Month in string form.
 */
function getCurrentMonth(year, month, day) {

  let getMonthDate = new Date(year, month, day);
	
  switch(getMonthDate.getMonth()) {
    case 0:
	    month = 'January';
	  break;
    case 1:
	    month = 'Febraury';
	  break;
    case 2:
      month = 'March';
    break;
    case 3:
	    month = 'April';
	  break;
	  case 4:
	    month = 'May';
	  break;
    case 5:
	    month = 'June';
	  break;
    case 6:
	    month = 'July';
	  break;
    case 7:
	    month = 'August';
	  break;
    case 8:
	    month = 'September';
	  break;
    case 9:
	    month = 'October';
	  break;
    case 10:
	    month = 'November';
	  break;
    case 11:
	    month = 'December';
	  break;
    default: 
      month = 'Error: Date may be invalid';
	}

  return month;
  
}

function buildCalendar(month, year, view) {
  let daysArray = [];
  let today = new Date(Date.now());
  let calendarHead = '';
  let calendarBody = '';
  let monthText;
  switch(view) {
    case 'month' :
      calendarHead += '<th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th>';
      calendarBody += '<tr>';
      monthText = getCurrentMonth(year, month, 1);
      let daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
  
  
    getPreviousMonthDays().forEach(day => daysArray.push(day));
  
for (let i = 1; i <= daysInMonth; i++) {
 
  daysArray.push(new Date(date.getFullYear(), date.getMonth(), i, 9));

}

getNextMonthDays().forEach(day => daysArray.push(day));

for (i = 0; i < daysArray.length; i++) {

  let tdClass = new Date(daysArray[i]).toJSON() == new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9).toJSON() ? 'class="active"' : "";

  if (daysArray[i].getDay() == 0) {
    
    calendarBody += '<td id="' +  daysArray[i].toJSON() + '" onclick="tdEventListener(event)" ' + tdClass + '>' + daysArray[i].getDate() + '</td>';
    calendarBody += '</tr>';
  
  } else if (daysArray[i].getDay() == 1)  {
    
    calendarBody += '<tr><td id="' +  daysArray[i].toJSON() + '" onclick="tdEventListener(event)" ' + tdClass + '>' + daysArray[i].getDate() + '</td>';
  
  } else {
    
    calendarBody += '<td id="' +  daysArray[i].toJSON() + '" onclick="tdEventListener(event)" ' + tdClass + '>' + daysArray[i].getDate() + '</td>';
  }
}

document.getElementById('calendar-title').setAttribute('colspan', 5);
document.getElementById('calendar-title').innerHTML = monthText  + ' ' + year;
document.getElementById('calendar-columns').innerHTML = calendarHead;
document.getElementById('calendar-body').innerHTML = calendarBody;
break;
case 'week' :
  calendarHead += '<th>&nbsp;</th>';
  monthText = getCurrentMonth(year, date.getMonth(), date.getDate());
  console.log(date, getCurrentDay(date.getFullYear(), date.getMonth(), date.getDate()), date.getDay());
  let toStartOfWeek = 1 - date.getDay();
  console.log('toStartOfWeek :', toStartOfWeek);
for(let i = 0; i < 7; i++) {
  let newDate = new Date(date.getFullYear(), date.getMonth(), i+(date.getDate())+toStartOfWeek);
  calendarHead += '<th>' + getCurrentDay(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()) + '<br/>' + newDate.toLocaleDateString() + '</th>'
}
  console.log('week view yet to be implemented.');

  document.getElementById('calendar-title').setAttribute('colspan', 7);
  document.getElementById('calendar-title').innerHTML = monthText + ' ' + year;
  document.getElementById('calendar-columns').innerHTML = calendarHead;
  document.getElementById('calendar-body').innerHTML = calendarBody;
  break;
default:
  view = 'week';
  buildCalendar(month, year, view);
  break;
}

document.getElementById('calendar').setAttribute('calendar-view', view);

}

/**
 * event listener for the user clicking to go to the previous week or month
 * when clicked it handles if the calendar is currently in month or week view 
 * and rebuilds the calendar accordingly.
 */
document.getElementById('previous').onclick = function() {;
switch(document.getElementById('calendar').getAttribute('calendar-view')) {
  case 'month' :
    if (date.getMonth() == 0) {
    
      date = new Date(date.getFullYear()-1, 11, 1);

    } else {
    
      date = new Date(date.getFullYear(), date.getMonth()-1, 1);

    }

    view = 'month';

  break;

  case 'week' :
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate()-7);; 
    
    view = 'week';
  break;
}
  buildCalendar(date.getMonth(), date.getFullYear(), view);

}

/**
 * event listener for the user clicking to go to the following week or month
 * when clicked it handles if the calendar is currently in month or week view 
 * and rebuilds the calendar accordingly.
 */
document.getElementById('next').onclick = function() {
  switch(document.getElementById('calendar').getAttribute('calendar-view')) {
    case 'month' :
      if (date.getMonth() == 11) {
    
        date = new Date(date.getFullYear()+1, 0, 1);
    
      } else {
        
        date = new Date(date.getFullYear(), date.getMonth()+1, 1);
    
      }
  
      view = 'month';
  
    break;
  
    case 'week' :
      date = new Date(date.getFullYear(), date.getMonth(), 7+date.getDate());
      console.log(date);
      view = 'week';
    break;
  }

  buildCalendar(date.getMonth(), date.getFullYear(), view);

}

const modal = document.getElementById('modal');

/**
 * Event listener function for a click of a td element, will open a modal on the site with the selected day
 * and booking form for a student or add availibility for a tutor.
 * 
 * @param {event} e 
 */
 function tdEventListener(e) {
  let titleDate = new Date(e.target.id);
  document.getElementById('modal-title').innerHTML = titleDate.toLocaleDateString('en-gb');
  
  modal.style.display = "block";

}

document.getElementById('close-modal').onclick = function() {
  modal.style.display='none';
}

/**
 * if anywhere outside the modal is clicked hide the modal again.
 * 
 * @param {event} e 
 */
window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display='none';
  }
}

function setView(e) {
  view = e.target.id;
  buildCalendar(date.getMonth(), date.getFullYear(), view);
}

buildCalendar(date.getMonth(), date.getFullYear());