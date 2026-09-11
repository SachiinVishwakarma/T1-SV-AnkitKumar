import {Grid,Typography,Stack,Card,Box,CardContent,useTheme} from "@mui/material";
import Text from "../text/Text";
import Navbutton from "../Button/Navbutton";
import Colorbutton from "../Button/Colorbutton";
import Arrow from "../Images/arrow.png";
import Arrowbox from "../Arrow/Arrowbox";
import Right from "../Images/right arrow.png";
import Dot from "../dot/Dot";
import { Herostyle } from "../../Theme/Herostyle";

const Hero = () => {
  const theme = useTheme();
  const styles = Herostyle(theme);
  return (
    <Grid
      container
      spacing={10}
      alignItems="center"
      sx={styles.grid}
    >
      <Grid item xs={12} md={6}>
        <Typography sx={styles.heading}>
          Launch your Web Tech
          <br />
          Practice site in minutes
        </Typography>
        <Text
          sx={styles.description}
          txt="A clean, modern starter template with Login, Signup, Dashboard, Profile and Logout pages using only HTML/CSS/JS and browser localstorage. Perfect for learning and practicing web development fundamentals."
        />
        <Stack
          direction="row"
          spacing={2}
          sx={styles.buttonStack}
        >
          <Colorbutton txt="Sign Up" />
          <Navbutton
            txt="I already have an account"
            sx={styles.navbtn}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={styles.card}>
          <CardContent sx={styles.cardContent}>
            <Box sx={styles.cardBox}>
              <Arrowbox>
                <img
                  src={Arrow}
                  alt="Arrow"
                  style={styles.arrowImage}
                />
              </Arrowbox>
              <Box>
                <Typography sx={styles.cardHeading}>
                  Complete Auth Flow
                </Typography>
                <Text
                  sx={styles.cardDescription}
                  txt="Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions."
                />
              </Box>
              <Arrowbox>
                <img
                  src={Right}
                  alt="Right Arrow"
                  style={styles.arrowImage}
                />
              </Arrowbox>
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={styles.dots}
            >
              <Dot sx={styles.activeDot} />
              <Dot />
              <Dot />
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
export default Hero;