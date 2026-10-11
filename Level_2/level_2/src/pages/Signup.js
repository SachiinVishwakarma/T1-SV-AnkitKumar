import {Box,Typography,Paper,Stack,useTheme} from "@mui/material";
import Input from "../components/Input/Input";
import Text from "../components/text/Text";
import Subheading from "../components/Subheading/Subheading";
import { Link } from "react-router-dom";
import Check from "../components/Checkbox/Check";
import Colorbutton from "../components/Button/Colorbutton";
import { Signupstyle } from "../Theme/Signupstyle";
import { useState } from "react";
const Signup = () => {
  const theme = useTheme();
  const styles = Signupstyle(theme);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!/^[A-Za-z]{2,20}$/.test(form.firstName.trim())) {
      newErrors.firstName = "Enter valid first name.";
    }

    if (!/^[A-Za-z]{2,20}$/.test(form.lastName.trim())) {
      newErrors.lastName = "Enter valid last name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter valid email";
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(form.password)) {
      newErrors.password =
      "Enter valid pasword.";
    }

    if (form.confirmPassword !== form.password || !form.confirmPassword) {
      newErrors.confirmPassword = "Password not matched.";
    }

    if (!form.terms) {
      newErrors.terms = "Please agree the terms.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Account created successfuly");
      window.location.href = "/login";
    }
  };

  return (
    <Box sx={styles.page}>
      <Paper
        elevation={0}
        sx={styles.paper}
      >
      <Box component="form" onSubmit={handleSubmit}>
        <Subheading txt="Create your account" sx={styles.subheading}/>

        <Text txt="Sign up to access the practice dashboard."/>

        <Stack direction="row" spacing={1.5} sx={styles.nameRow}>
          <Box sx={styles.halfBox}>
            <Input name="firstName" label="First Name:" placeholder="Enter your First name" value={form.firstName}  onChange={handleChange}/>
              {errors.firstName && (
              <Typography color="error" variant="caption">
              {errors.firstName}
              </Typography>
              )}
          </Box>

          <Box sx={styles.halfBox}>
            <Input name="lastName" label="Last Name:" placeholder="Enter your Last name" value={form.lastName} onChange={handleChange}/>
            {errors.lastName && (
              <Typography color="error" variant="caption">
              {errors.lastName}
              </Typography>
              )}
          </Box>
        </Stack>

        <Box sx={styles.email}>
          <Input
            name="email"
            label="Email Address:"
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleChange}
          />
            {errors.email && (
              <Typography color="error" variant="caption">
                {errors.email}
              </Typography>
            )}
        </Box>

        <Stack direction="row" spacing={1} sx={styles.row}>
          <Box sx={styles.halfBox}>
            <Input name="password" label="Password:" placeholder="Enter Password" type="password" value={form.password} onChange={handleChange}/>
            {errors.password && (
              <Typography color="error" variant="caption">
                {errors.password}
              </Typography>
            )}
          </Box>

          <Box sx={styles.halfBox}>
            <Input name="confirmPassword" type="password" label="Confirm Password:" placeholder="Confirm your Password" value={form.confirmPassword} onChange={handleChange}/>
            {errors.confirmPassword && (
              <Typography color="error" variant="caption">
                {errors.confirmPassword}
              </Typography>
            )}
          </Box>
        </Stack>

        <Box sx={styles.passwordText}>
        <Text txt="Use at least 8 characters, with" sx={styles.smallText}/>
        <Text txt="letters & numbers" sx={styles.smallText}/>
        </Box>

        <Stack>
          <Check name="terms" label="I agree to the terms" checked={form.terms} onChange={handleChange}/>
          {errors.terms && (
            <Typography color="error" variant="caption">
              {errors.terms}
            </Typography>
          )}
        </Stack>

        <Colorbutton txt="Create Account" size="large" type="submit"/>

        <Typography
          sx={styles.terms}
        >
          Already have an account?{" "}
          <Link to="/login"
            style={styles.signin}
          >
            Sign in
          </Link>
        </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
export default Signup;