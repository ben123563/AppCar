function padTo2Digits(num : Number) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date : Date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }