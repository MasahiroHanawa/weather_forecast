
const getOfBeforeAfterDays = (dateObj, number) => {
  let result = false;
  if (dateObj && dateObj.getTime && number && String(number).match(/^-?[0-9]+$/)) {
    result = new Date((dateObj.getTime() + Number(number)) * 24 * 60 * 60 * 1000);
  }
  return result;
};

export default getOfBeforeAfterDays;
