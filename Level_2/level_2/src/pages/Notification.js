import {Box,Typography,Stack,Paper,useTheme,} from "@mui/material";
import { Notificationstyle } from "../Theme/Notificationstyle";
import Text from "../components/text/Text";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import CheckBoxOutlineIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const Notification=()=>{
    const theme=useTheme();
    const styles=Notificationstyle(theme);
    return(
        
                <Box sx={styles.content}>
                    <Paper sx={styles.paper}>
                        <Typography sx={styles.contenthead}>
                            Notifications
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <NotificationsActiveOutlinedIcon sx={{ fontSize: 20, color: "#4CCFC7"}}/>
                            <Typography sx={styles.contentsubhead}>
                                Notification Preferences
                            </Typography>
                        </Stack>    
                        
                        <Text sx={styles.text}
                            txt="Manage how and when you recieve notifications about your account activity."
                        />
                        <Stack direction="row" spacing={1.5} sx={styles.cards}>
                        {[
                            ["Email Notifications","Recieve important updates via email","Enable email notifications",EmailOutlinedIcon,CheckBoxOutlineIcon],
                            ["Security Alerts","Get notified about security changes","Enable Security Alerts",SecurityOutlinedIcon,CheckBoxOutlineIcon],
                        ].map(([title,text,check,Icon,Verify])=>(
                            <Paper key={title} sx={styles.card}>
                                <Stack direction="row" spacing={1}>
                                    <Icon
                                        sx={{
                                        fontSize: 20,
                                        color: "#4CCFC7",
                                        }}
                                    />
                                    <Typography variant="caption" sx={styles.cardtitle}>
                                        {title}
                                    </Typography>
                                </Stack>

                                <Typography
                                    variant="caption"
                                    sx={styles.cardtext}
                                >
                                    {text}
                                </Typography>
                                <Stack direction="row" spacing={1} sx={{marginTop:1}}>
                                    <Verify
                                        sx={{
                                        fontSize: 20,
                                        color: "#4CCFC7",
                                        }}
                                    />
                                    <Typography variant="caption"sx={styles.cardtext}>                                  
                                        {check}
                                    </Typography>
                                </Stack>
                            </Paper>
                        ))}
                        </Stack> 
                        <Stack direction="row" spacing={1} sx={{marginBottom:1, marginTop:3}}>
                            <EventNoteOutlinedIcon sx={{ fontSize: 20, color: "#4CCFC7"}}/>
                            <Typography sx={styles.contentsubhead}>
                                Recent Activity
                            </Typography> 
                        </Stack> 
                        <Paper sx={styles.card2}>
                            <Typography variant="caption" sx={styles.cardtitle}>
                                Profile Updated
                            </Typography>
                            <Typography variant="caption" sx={styles.cardtext}>
                                Your profile information was successfully updated
                            </Typography>
                            <Typography variant="caption" sx={styles.cardtext}>
                                Today
                            </Typography>
                        </Paper>                    
                    </Paper>
                </Box>
    )
}
 export default Notification;