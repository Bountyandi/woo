const SUCCESS_MES = 'Successfully completed';
const MAX_IN_PASSWORD = 6;
const CURRENT_YEAR = (new Date).getUTCFullYear();
const MIN_AGE = 18;
const MAX_IN_MONTH = 31;
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class ValidatorClass {
  constructor() {
  }

  checkEmail = (value) => {
    let isValid = emailRegExp.test(value);

    if (isValid) {
      return { isValid, mes: SUCCESS_MES };
    } else{
      return { isValid, mes: 'Invalid e-mail format' };
    }

  };

  checkPassword = (value) => {
    if (value.length >= MAX_IN_PASSWORD) {
      return { isValid: true, mes: SUCCESS_MES };
    } else {
      return { isValid: false, mes: 'Must be longer than 6' };
    }
  }

  checkPasswordConfirm = (value1, value2) => {
    if (value1 === value2) {
      return { isValid: true, mes: SUCCESS_MES };
    } else {
      return { isValid: false, mes: 'passwords must be the same' };
    }
  }

  // not implemented for now:
  // 7.7.4.Dates like 30/2/1991 are invalid.
  checkDD = (value) => {
    if (value > 0 && value < MAX_IN_MONTH) {
      return { isValid: true, mes: SUCCESS_MES };
    } else {
      return { isValid: false, mes: 'Day is not correct' };
    }
  }

  checkMM = (value) => {
    if (value > 0 && value < MAX_IN_YEAR) {
        return { isValid: true, mes: SUCCESS_MES };
    } else {
      return { isValid: false, mes: 'Month is not correct' };
    }
  }

  checkYYYY = (value) => {
    if (value > 0 && value < CURRENT_YEAR) {
      if (value < ( CURRENT_YEAR - MIN_AGE ) ) {
        return { isValid: true, mes: SUCCESS_MES };
      } else {
        return { isValid: false, mes: 'You must be older then 18' };
      }
    } else {
      return { isValid: false, mes: 'Year is not correct' };
    }
  }

}


let Validator = new ValidatorClass();

export default Validator
