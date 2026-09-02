import {Grid,Typography,Stack,Card,Box,CardContent} from "@mui/material";
import Text from "../text/Text";
import Navbutton from "../Button/Navbutton";
import Colorbutton from "../Button/Colorbutton";
import Arrow from "../Images/arrow.png";
import Arrowbox from "../Arrow/Arrowbox";
import Right from "../Images/right arrow.png";
import Dot from "../dot/Dot";
const Hero=()=>{
    return(
        <Grid
          container
          spacing={10}
          alignItems="center"
          sx={{
            mb: 5,
            mt: 10,
            justifyContent: "center",
          }}
        >
          
          <Grid item xs={20} md={10}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#0a0a0a",
                mt: 10,
                mb: 2,
              }}
            >
              Launch your Web Tech
              <br />
              Practice site in minutes
            </Typography>

            <Text sx={{maxWidth: "390px"}}  txt="A clean, modern starter template with Login, Signup, Dashboard, Profile and Logout pages using
                    only HTML/CSS/JS and browser localstorage. Perfect for learning and practicing web development
                    fundamentals."
                    />

            <Stack direction="row" spacing={2} sx={{mt: 3}}>

              <Colorbutton txt="Sign Up"/>

              <Navbutton txt="I already have an account" sx={{color: "black"}}/>

            </Stack>
          </Grid>

          
          <Grid item xs={20} md={10}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid #2bb9ae",
                borderRadius: "30px",
                borderRadius: "30px",
                boxShadow: "0px -4px 4px 0px #0A2463",
                backgroundColor: "#ffffff",
              }}
            >
              <CardContent
                sx={{
                  padding: "22px !important",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "384px",
                    width: "650px",
                  }}
                >
                    <Arrowbox>
                        <img
                        src={Arrow}
                        alt="Arrow"
                        style={{
                        width: "12px",
                        height: "24px",
                        }}
                    />
                    </Arrowbox>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#26323a",
                        mb: 0.8,
                      }}
                    >
                      Complete Auth Flow
                    </Typography>

                    <Text sx={{maxWidth: "390px"}} txt="Beautiful dark/light mode with smooth transitions, persisted across all pages and sessions."/>
                  </Box>
                    <Arrowbox >
                        <img
                        src={Right}
                        alt="Arrow"
                        style={{
                        width: "12px",
                        height: "24px",
                        }}
                    />
                    </Arrowbox>
                  
                </Box>

                <Stack direction="row" spacing={2} sx={{justifyContent: "center"}}>
                    <Dot sx={{backgroundColor:"#35cfc2"}}/>
                    <Dot/>
                    <Dot/>
                </Stack>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
    );
}
export default Hero;