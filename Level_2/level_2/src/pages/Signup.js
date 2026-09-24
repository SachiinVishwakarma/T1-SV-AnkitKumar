import {Box,Typography,Paper,Stack,useTheme} from "@mui/material";
import Input from "../components/Input/Input";
import Text from "../components/text/Text";
import Subheading from "../components/Subheading/Subheading";
import Check from "../components/Checkbox/Check";
import Colorbutton from "../components/Button/Colorbutton";
import { Signupstyle } from "../Theme/Signupstyle";
const Signup = () => {
  const theme = useTheme();
  const styles = Signupstyle(theme);
  return (
    <Box sx={styles.page}>
      <Paper
        elevation={0}
        sx={styles.paper}
      >
        <Subheading txt="Create your account" sx={styles.subheading}/>

        <Text txt="Sign up to access the practice dashboard."/>

        <Stack direction="row" spacing={1.5} sx={styles.nameRow}>
          <Box sx={styles.halfBox}>
            <Input label="First Name:" placeholder="Enter your First name"/>
          </Box>

          <Box sx={styles.halfBox}>
            <Input label="Last Name:" placeholder="Enter your Last name"/>
          </Box>
        </Stack>

        <Box sx={styles.email}>
          <Input
            label="Email Address:"
            placeholder="Enter your email address"
          />
        </Box>

        <Stack direction="row" spacing={1} sx={styles.row}>
          <Box sx={styles.halfBox}>
            <Input label="Password:" placeholder="Enter Password"/>
          </Box>

          <Box sx={styles.halfBox}>
            <Input label="Confirm Password:" placeholder="Confirm your Password"/>
          </Box>
        </Stack>

        <Box sx={styles.passwordText}>
        <Text txt="Use at least 8 characters, with" sx={styles.smallText}/>
        <Text txt="letters & numbers" sx={styles.smallText}/>
        </Box>

        <Stack>
          <Check label="I agree to the terms"/>
        </Stack>

        <Colorbutton txt="Create Account" fullWidth sx={styles.button}/>

        <Typography
          sx={styles.terms}
        >
          Already have an account?{" "}
          <Box
            component="span"
            sx={styles.signin}
          >
            Sign in
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
};
export default Signup;