import {Box,Typography,Stack,useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import { Sidebarstyle } from "./Sidebarstyle";
const Sidebar=()=>{
    const theme=useTheme();
    const styles=Sidebarstyle(theme);
  return(
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
            <Box component={Link} to="/dashboard" sx={[styles.active,styles.sidebarLink]}>
              <Typography variant="caption" sx={styles.item}>Overview</Typography>
            </Box>

          <Box component={Link} to="/profile" sx={styles.sidebarLink}>
            <Typography variant="caption" sx={styles.item}>Profile Settings</Typography>
          </Box>
          <Box component={Link} to="/security" sx={styles.sidebarLink}>
            <Typography variant="caption" sx={styles.item}>Security</Typography>
          </Box>
          <Box component={Link} to="/notification" sx={styles.sidebarLink}>
            <Typography variant="caption" sx={styles.item}>Notification</Typography>
          </Box>
        </Stack>

        <Typography variant="caption" sx={styles.heading}>QUICK ACTION</Typography>

        <Typography variant="caption" sx={styles.quickItem}>
          Help & Support
        </Typography>
      </Box>

      <Box>
        <Typography variant="caption" sx={styles.heading}>ACCOUNT</Typography>
        <Typography variant="caption" sx={styles.quickItem}>
          Sign out
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;