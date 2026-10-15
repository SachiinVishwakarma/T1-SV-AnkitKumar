import {Box,Typography,Stack,Paper,useTheme,} from "@mui/material";
import { Notificationstyle } from "../Theme/Notificationstyle";
import Text from "../components/text/Text";
const Notification=()=>{
    const theme=useTheme();
    const styles=Notificationstyle(theme);
    return(
        
                <Box sx={styles.content}>
                    <Paper sx={styles.paper}>
                        <Typography sx={styles.contenthead}>
                            Notifications
                        </Typography>
                        <Typography sx={styles.contentsubhead}>
                            Notification Preferences
                        </Typography>
                        <Text sx={styles.text}
                            txt="Manage how and when you recieve notifications about your account activity."
                        />
                        <Stack direction="row" spacing={1.5} sx={styles.cards}>
                        {[
                            ["Email Notifications","Recieve important updates via email","Enable email notifications"],
                            ["Security Alerts","Get notified about security changes","Enable Security Alerts"],
                        ].map(([title,text,check])=>(
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
                            <Typography
                                variant="caption"
                                sx={styles.cardtext}
                            >
                                
                                {check}
                            </Typography>
                            </Paper>
                        ))}
                        </Stack>  
                        <br/>
                        <Typography sx={styles.contentsubhead}>
                            Recent Activity
                        </Typography>  
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