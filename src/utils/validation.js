export const validateAuthForm = (formData, isLogin) => {
  const {
    fullName,
    emailOrPhone,
    password,
    confirmPassword,
  } = formData;

  // Empty fields
  if (!emailOrPhone.trim() || !password.trim()) {
    return "All fields are required";
  }

  if (!isLogin && !fullName.trim()) {
    return "Full Name is required";
  }

  // Full Name
  if (!isLogin && fullName.trim().length < 3) {
    return "Full Name must contain at least 3 characters";
  }

  // Email or Phone
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex =
    /^[6-9]\d{9}$/;

  if (
    !emailRegex.test(emailOrPhone) &&
    !phoneRegex.test(emailOrPhone)
  ) {
    return "Enter a valid Email or Phone Number";
  }

  // Password Length
  if (password.length < 8) {
    return "Password must contain at least 8 characters";
  }

  // Password Complexity
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!passwordRegex.test(password)) {
    return "Password must contain uppercase, lowercase, number and special character";
  }

  // Confirm Password
  if (
    !isLogin &&
    password !== confirmPassword
  ) {
    return "Passwords do not match";
  }

  return "";
};