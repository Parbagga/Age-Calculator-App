

export function calcTime(data,set,display) {
    function getDaysInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    }

    let currDate, currMonth, currYear;
    let day = data.Day
    let month = data.Month
    let year = data.Year

    currDate = new Date().getDate();
    currMonth = new Date().getMonth() + 1;
    currYear = new Date().getFullYear();

    if (currDate < day) {
      currDate = currDate + getDaysInMonth(year, month);
      currMonth = currMonth - 1;
    }
    if (currMonth < month) {
      currMonth = currMonth + 12;
      currYear = currYear - 1;
    }

  // setTotalDays(currDate - day);
  // setTotalMonths(currMonth - month);
  // setTotalYears(currYear - year);
 
  set({Day:currDate - day,Month:currMonth - month,Year:currYear - year})
  console.log(display)
 
  }