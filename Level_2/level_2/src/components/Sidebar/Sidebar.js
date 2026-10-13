import {Box,Typography,Stack,useTheme} from "@mui/material";
import { NavLink,Outlet } from "react-router-dom";
import { Sidebarstyle } from "./Sidebarstyle";
const Sidebar=()=>{
    const theme=useTheme();
    const styles=Sidebarstyle(theme);

    const activeBorder = ({ isActive }) => {
      if (isActive) {
        return styles.active;
      } else {
        return {};
      }
    };
  return(
    <Box sx={styles.dashboard}>
    <Box sx={styles.sidebar}>
      <Box>
        <Stack direction="row" spacing={1} alignItems="center" sx={styles.profile}>
          <Box sx={styles.profilepic}>
            <Typography variant="caption">DU</Typography>
          </Box>

          <Box>
            <Typography sx={styles.username}>
              Demo User
            </Typography>
            <Typography variant="caption" sx={styles.email}>
              demo@webtech.practice
            </Typography>
          </Box>
        </Stack>
        <hr/>

        <Typography variant="caption" sx={styles.heading}>DASHBOARD</Typography>

        <Stack spacing={2} sx={{mb:3}}>
            <Box component={NavLink} to="overview" sx={styles.sidebarLink} style={activeBorder}>
              <Typography variant="caption" sx={styles.item}>Overview</Typography>
            </Box>

          <Box component={NavLink} to="profile" sx={styles.sidebarLink} style={activeBorder}>
            <Typography variant="caption" sx={styles.item}>Profile Settings</Typography>
          </Box>
          <Box component={NavLink} to="security" sx={styles.sidebarLink} style={activeBorder}>
            <Typography variant="caption" sx={styles.item}>Security</Typography>
          </Box>
          <Box component={NavLink} to="notification" sx={styles.sidebarLink} style={activeBorder}>
            <Typography variant="caption" sx={styles.item}>Notification</Typography>
          </Box>
        </Stack>

        <Typography variant="caption" sx={styles.heading}>QUICK ACTION</Typography>

        <Box component={NavLink} to="Help" sx={styles.sidebarLink} style={activeBorder}>
        <Typography variant="caption" sx={styles.quickItem}>Help & Support</Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="caption" sx={styles.heading}>ACCOUNT</Typography>
        <Typography variant="caption" sx={styles.quickItem}>
          Sign out
        </Typography>
      </Box>
    </Box>

      <Box sx={styles.main}>
        <Box sx={styles.header}>
          <Typography variant="caption" sx={styles.heading1}>
            WebTech Practice Dashboard
          </Typography>
        </Box>
        <Outlet/>
      </Box>

    </Box>
  );
};

export default Sidebar;