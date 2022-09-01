import validator from "validator";
const validateRegister = (data) => {
  let errors = {};
  const { name, email, password, password2 } = data;

  if (validator.isEmpty(name)) {
    errors.name = "Name is required";
  }

  if (validator.isEmpty(email)) {
    errors.email = "Email is required";
  }

  if (!validator.isEmail(email)) {
    errors.email = "Invalid email";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password is required";
  }

  if (validator.isEmpty(password2)) {
    errors.password2 = "Confirm password is required";
  }

  if (!validator.equals(password, password2)) {
    errors.password2 = "Password must be same";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors
  };
};

export default validateRegister;
