import {Box,Typography,Stack,Paper,useTheme} from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import { Securitystyle } from "../Theme/Securitystyle";
import Input from "../components/Input/Input";
import Text from "../components/text/Text";
import Navbutton from "../components/Button/Navbutton";
import Colorbutton from "../components/Button/Colorbutton";
const Security=()=>{
    const theme=useTheme();
    const styles=Securitystyle(theme);
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
                        <Typography sx={styles.contenthead}>
                            Security Settings
                        </Typography>
                        <Typography sx={styles.contentsubhead}>
                            Security Settings
                        </Typography>
                        <Text sx={styles.text}
                            txt="Manage your profile settings and account preferences. your data is securely stored in your browsers localStorage"
                        />
                        <Stack direction={"row"} spacing={1.5} sx={styles.row}>
                            <Box sx={styles.halfbox}>
                                <Input label="Current Password" placeholder="Enter current password"/>
                            </Box>
                            <Box sx={styles.halfbox}>
                                <Input label="New Password" placeholder="Minimum 8 character's"/>
                            </Box>
                        </Stack>
                        <Box sx={styles.row}>
                            <Input label="Confirm New Password" placeholder="Re-Enter New Password"/>
                        </Box>
                        <Stack direction={"row-reverse"} spacing={1.5}>
                            <Colorbutton txt="Update Password" sx={styles.save}/>
                            <Navbutton txt=" Clear "/>
                        </Stack>
                        <br/>
                        <hr/>
                        <br/>
                        <Typography sx={styles.contentsubhead}>
                            Security Information
                        </Typography>
                        <Stack direction="row" spacing={1.5} sx={styles.cards}>
                        {[
                            ["Account Created","08/31/2025"],
                            ["Last Updated","Never Updated"],
                            ["Session","Current browser session active"],
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
                            </Paper>
                        ))}
                        </Stack>                        
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}
 export default Security;