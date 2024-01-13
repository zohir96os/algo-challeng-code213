function checkSeason(month) {
  month = parseInt(month);
  if (month >= 1 && month <= 2) {
    return "winter";
  } else if (month >= 3 && month <= 5) {
    return "spring";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else if (month >= 9 && month <= 12) {
    return "autmen";
  } else if ((month < 1 && month > 12) || isNaN(month)) {
    return "Invalide month";
  }
}
let month = 1;
console.log(checkSeason(month));
