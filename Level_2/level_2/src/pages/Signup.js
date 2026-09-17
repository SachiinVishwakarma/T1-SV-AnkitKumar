import {Box,Typography,Paper,Stack,} from "@mui/material";
import Input from "../components/Input/Input";
import Text from "../components/text/Text";
import Subheading from "../components/Subheading/Subheading";
import Check from "../components/Checkbox/Check";
import Colorbutton from "../components/Button/Colorbutton";
const Signup = () => {
  return (
    <Box
      sx={(theme)=>({
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <Paper
        elevation={0}
        sx={(theme)=>({
          width: "615x",
          padding: "24px",
          borderRadius: theme.borders.largeborderradius,
          borderTop: `3px solid ${theme.palette.secondary.main}`,
          backgroundColor: "#FBFBFF",
        })}
      >
        <Subheading txt="Create your account"/>

        <Text txt="Sign up to access the practice dashboard."/>

        <Stack direction="row" spacing={1}>
          <Box sx={{ width: "50%" }}>
            <Input label="First Name:" placeholder="Enter your First name"/>
          </Box>

          <Box sx={{ width: "50%" }}>
            <Input label="Last Name:" placeholder="Enter your Last name"/>
          </Box>
        </Stack>

        <Input label="Email:" placeholder="Enter your Email"/>

        <Stack direction="row" spacing={1} sx={{ mt: "17px" }}>
          <Box sx={{ width: "50%" }}>
            <Input label="Password:" placeholder="Enter Password"/>
          </Box>

          <Box sx={{ width: "50%" }}>
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
          sx={(theme)=>({
            fontSize: theme.typography.fontSize,
            mt: "12px",
          })}
        >
          Already have an account?{" "}
          <Box
            component="span"
            sx={(theme)=>({
              color: theme.palette.secondary.main,
              cursor: "pointer",
            })}
          >
            Sign in
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
};
export default Signup;