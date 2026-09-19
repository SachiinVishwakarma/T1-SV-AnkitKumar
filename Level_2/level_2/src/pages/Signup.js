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
        <Subheading txt="Create your account"/>

        <Text txt="Sign up to access the practice dashboard."/>

        <Stack direction="row" spacing={1}>
          <Box sx={styles.halfBox}>
            <Input label="First Name:" placeholder="Enter your First name"/>
          </Box>

          <Box sx={styles.halfBox}>
            <Input label="Last Name:" placeholder="Enter your Last name"/>
          </Box>
        </Stack>

        <Input label="Email:" placeholder="Enter your Email"/>

        <Stack direction="row" spacing={1} sx={styles.row}>
          <Box sx={styles.halfBox}>
            <Input label="Password:" placeholder="Enter Password"/>
          </Box>

          <Box sx={styles.halfBox}>
            <Input label="Confirm Password:" placeholder="Confirm your Password"/>
          </Box>
        </Stack>

        <Text txt="Use at least 8 characters, with"/>
        <Text txt="letters & numbers"/>

        <Stack>
          <Check label="I agree to the terms"/>
        </Stack>

        <Colorbutton txt="Create Account"/>

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