import {Box,Typography,Stack,Paper,useTheme} from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import Text from "../components/text/Text";
import { Dashboardstyle } from "./Dashboardstyle";

const Dashboard=()=>{
    const theme=useTheme();
    const styles=Dashboardstyle(theme);
  return(
    <Box sx={styles.dashboard}>
      <Sidebar/>

      <Box sx={styles.main}>
        <Box sx={styles.header}>
          <Typography variant="caption" sx={styles.heading}>
            WebTech Practice Dashboard
          </Typography>
        </Box>

        <Box sx={styles.content}>
          <Paper sx={styles.paper}>
            <Typography sx={styles.welcome}>
              Welcome back, Demo User
            </Typography>

            <Text sx={styles.text}
              txt="Manage your profile settings and account preferences. your data is securely stored in your browsers localStorage"
            />

            <Stack direction="row" spacing={1.5} sx={styles.cards}>
              {[
                ["Theme","Dark/light mode persisted across all pages"],
                ["Authentication","Secure session stored in browser storage"],
                ["Profile","20% profile completed (1/5 fields)"],
                ["Security","Password prtection and account security"]
              ].map(([title,text])=>(
                <Paper key={title} sx={styles.card}>
                  <Typography variant="caption" sx={styles.cardtitle}>
                    {title}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={styles.cardtext}
                  >
                    {text}
                  </Typography>

                  <Box sx={styles.bar}/>
                </Paper>
              ))}
            </Stack>

            <Typography
              variant="caption"
              sx={styles.quicktitle}
            >
              Quick Actions
            </Typography>

            <Stack direction="row" spacing={1.5}>
              <Paper sx={styles.action}>
                <Typography variant="caption"  sx={styles.actiontitle}>
                  Edit Profile
                </Typography>
                <Typography variant="caption" sx={styles.actiontext}>
                  Update your personal information
                </Typography>
              </Paper>

              <Paper sx={styles.action}>
                <Typography variant="caption"  sx={styles.actiontitle}>
                  Change Password
                </Typography>
                <Typography variant="caption" sx={styles.actiontext}>
                  Update your account security
                </Typography>
              </Paper>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;