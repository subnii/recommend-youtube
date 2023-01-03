export const getFixCount = (number) => {
  if (number.length >= 9 && number.length <= 13) {
    return number.substr(0, number.length - 8) + "억";
  } else if (number.length > 4 && number.length <= 8) {
    return number.substr(0, number.length - 4) + "만";
  } else {
    return number;
  }
};
