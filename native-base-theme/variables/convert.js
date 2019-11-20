import moment from 'moment';

export function convertNumber(number) {
  if (number != undefined) {
    number = number.toString();
    let lastThree = number.substring(number.length - 3);
    let otherNumbers = number.substring(0, number.length - 3);
    if (otherNumbers != '') lastThree = '.' + lastThree;
    let output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + lastThree;
    return 'Rp' + output;
  }
  return number;
}

export function ObjectLength(object) {
  var length = 0;
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      ++length;
    }
  }
  return length;
}

export function convertToUpperCase(string) {
  if (string) return string.toUpperCase();
}

export function convertDate(string) {
  if (string) return moment(string).format('DD MMMM YYYY');
}
