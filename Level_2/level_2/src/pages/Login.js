import { Box, Typography, Stack, useTheme } from "@mui/material";
import Input from "../components/Input/Input";
import Text from "../components/text/Text";
import Subheading from "../components/Subheading/Subheading";
import Check from "../components/Checkbox/Check";
import Colorbutton from "../components/Button/Colorbutton";
import { Loginstyle } from "../Theme/Loginstyle";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const theme = useTheme();
  const styles = Loginstyle(theme);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
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

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter valid email address.";
    }

    if (!form.password) {
      newErrors.password = "Enter your password.";
    }

    if (Object.keys(newErrors).length === 0) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) =>
          user.Email.toLowerCase() === form.email.trim().toLowerCase() &&
          user.Password === form.password
      );
      if (user) {
        localStorage.setItem("current user", JSON.stringify(user));
        navigate("/dashboard/overview");
      } else {
        newErrors.general = "Invalid email or password.";
      }
    }
    setErrors(newErrors);
  };
  return (
    <Box sx={styles.page}>
      <Box sx={styles.card} component="form" onSubmit={handleSubmit}>

        <Subheading
          txt="Welcome Back"
          sx={styles.subheading}
        />

        <Text
          txt="Sign in to continue to your dashboard"
          sx={styles.text}
        />

        <Box sx={styles.input}>
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

        <Box sx={styles.input}>
          <Input
            name="password"
            label="Password:"
            placeholder="Enter your password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <Typography color="error" variant="caption">
              {errors.password}
            </Typography>
          )}
          {errors.general && (
            <Typography color="error" variant="body2">
              {errors.general}
            </Typography>
          )}
        </Box>

        <Text
          txt="Password must be at least 8 characters long."
          sx={styles.helpText}
        />

        <Stack
          direction="row"
          sx={styles.options}
        >
          <Check
           label="Remember me for 30 days"
           name="remember"
           checked={form.remember}
           onChange={handleChange}
            />

          <Typography sx={styles.forgot}>
            Forgot password?
          </Typography>
        </Stack>
        <Colorbutton
          txt="Sign in"
          size="large"
          type="submit"
        />

        <Typography sx={styles.signupText}>
          New to WebTech Practice?{" "}
          <Link to="/signup"
          style={styles.signup}>
            Create an account
          </Link>
        </Typography>

      </Box>
    </Box>
  );
};

export default Login;