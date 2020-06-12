const dateInputFormat = (date) => {
  const twoDigitDay = () => {
    let day = `${date.getDate()}`;
    if (day.length === 1) {
      return `0${day}`;
    }
    return day;
  }
  
  const twoDigitMonth = () =>{
    let month = `${date.getMonth()+1}`;
    if (month.length === 1) {
      month = `0${month}`;
    }
    return month;
  }

  const fullYear = () => {
    return date.getFullYear();
  }

  return `${fullYear()}-${twoDigitMonth()}-${twoDigitDay()}`;
}

const today = () => {
  return dateInputFormat(new Date());
}

const tomorrow = () => {
  const date = new Date();
  date.setDate(date.getDate() + parseInt(1));
  return dateInputFormat(date);
}

const daysBetween = (date1, date2) => {
  const time_difference = date2.getTime() - date1.getTime();
  return Math.abs(Math.floor(time_difference/(1000 * 3600 * 24)));
}
export {today, tomorrow, daysBetween};
