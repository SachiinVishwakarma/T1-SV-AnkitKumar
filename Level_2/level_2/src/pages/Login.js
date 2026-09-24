import { Box, Typography, Stack, useTheme } from "@mui/material";
import Input from "../components/Input/Input";
import Text from "../components/text/Text";
import Subheading from "../components/Subheading/Subheading";
import Check from "../components/Checkbox/Check";
import Colorbutton from "../components/Button/Colorbutton";
import { Loginstyle } from "../Theme/Loginstyle";

const Login = () => {
  const theme = useTheme();
  const styles = Loginstyle(theme);

  return (
    <Box sx={styles.page}>
      <Box sx={styles.card}>

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
            label="Email Address:"
            placeholder="Enter your email address"
          />
        </Box>

        <Box sx={styles.input}>
          <Input
            label="Password:"
            placeholder="Enter your password"
            type="password"
          />
        </Box>

        <Text
          txt="Password must be at least 6 characters long."
          sx={styles.helpText}
        />

        <Stack
          direction="row"
          sx={styles.options}
        >
          <Check label="Remember me for 30 days" />

          <Typography sx={styles.forgot}>
            Forgot password?
          </Typography>
        </Stack>

        <Colorbutton
          txt="Sign in"
          fullWidth
          sx={styles.button}
        />

        <Typography sx={styles.signupText}>
          New to WebTech Practice?{" "}
          <Box component="span" sx={styles.signup}>
            Create an account
          </Box>
        </Typography>

      </Box>
    </Box>
  );
};

export default Login;