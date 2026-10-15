import {Box,Typography,Stack,Paper,useTheme} from "@mui/material";
import { Helpstyle } from "../Theme/Helpstyle";
import Text from "../components/text/Text";
const Help=()=>{
    const theme=useTheme();
    const styles=Helpstyle(theme);
    return(
                <Box sx={styles.content}>
                    <Paper sx={styles.paper}>
                        <Typography sx={styles.contenthead}>
                            Help & Support
                        </Typography>
                        <Typography sx={styles.contentsubhead}>
                            Frequently Asked Questions
                        </Typography>
                        <Stack direction="column" spacing={2.5} >
                            <Paper sx={styles.card2}>
                                <Typography variant="caption" sx={styles.cardtitle}>
                                    How do I update my profile
                                </Typography>
                                <Typography variant="caption" sx={styles.cardtext}>
                                    Click on Profile Settings in the sidebar to edit your personal information,address, and other details.
                                </Typography>
                            </Paper>  
                            <Paper sx={styles.card2}>
                                <Typography variant="caption" sx={styles.cardtitle}>
                                    Is my data secure?
                                </Typography>
                                <Typography variant="caption" sx={styles.cardtext}>
                                    This is a demo application that stores data in your's local storage. In a production app, data will be encrypted and stored securely on servers.
                                </Typography>
                            </Paper> 
                            <Paper sx={styles.card2}>
                                <Typography variant="caption" sx={styles.cardtitle}>
                                    How do I change my Password.
                                </Typography>
                                <Typography variant="caption" sx={styles.cardtext}>
                                    Go to "Security" in the sidebar, enter your current pasword, then set and confirm your new password.
                                </Typography>
                            </Paper> 
                        </Stack>
                        <Typography sx={styles.contentsubhead}>
                            Contact Support
                        </Typography>
                        <Text txt="This is a demonstration application for learning web development. In a realapplication you found contact info and support oprtions here."/>

                    </Paper>
                </Box>
    )
}
 export default Help;