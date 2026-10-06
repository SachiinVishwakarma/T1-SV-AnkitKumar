import {Box,Typography,Stack,Paper,useTheme} from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import { Profilestyle } from "./Profilestyle";
import Input from "../components/Input/Input";
import Navbutton from "../components/Button/Navbutton";
import Colorbutton from "../components/Button/Colorbutton";
const Profile=()=>{
    const theme=useTheme();
    const styles=Profilestyle(theme);
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
                            Profile Settings
                        </Typography>
                        <Typography sx={styles.contentsubhead}>
                            Personal Information
                        </Typography>
                        <Stack direction={"row"} spacing={1.5} sx={styles.row}>
                            <Box sx={styles.halfbox}>
                                <Input label="Full Name" placeholder="Demo User"/>
                            </Box>
                            <Box sx={styles.halfbox}>
                                <Input label="Date of Birth" type="date"/>
                            </Box>
                        </Stack>
                        <Stack direction={"row"} spacing={1.5} sx={styles.row}>
                            <Box sx={styles.halfbox}>
                                <Input label="Email Address" placeholder="demo@gmail.com" type="email" />
                            </Box>
                            <Box sx={styles.halfbox}>
                                <Input label="Phone Number" placeholder="1234567890" type="tel"/>
                            </Box>
                        </Stack>
                        <Typography sx={styles.contentsubhead}>
                            Address Information
                        </Typography>
                        <Box sx={styles.row}>
                            <Input label="Street Address" placeholder="Enter your complete address"/>
                        </Box>
                        <Stack direction={"row"} spacing={1.5} sx={styles.row}>
                            <Box sx={styles.halfbox}>
                                <Input label="PIN Code" placeholder="Demo User" type="num"/>
                            </Box>
                            <Box sx={styles.halfbox}>
                                <Input label="City" placeholder="Ranchi"/>
                            </Box>
                        </Stack>
                        <Stack direction={"row"} spacing={1.5} sx={styles.row}>
                            <Box sx={styles.halfbox}>
                                <Input label="Country" placeholder="India" />
                            </Box>
                            <Box sx={styles.halfbox}>
                                <Input label="GitHub Profile" placeholder="https://github.com/username" type="url"/>
                            </Box>
                        </Stack>
                        <Stack direction={"row-reverse"} spacing={1.5}>
                            <Colorbutton txt="Save Changes" sx={styles.save}/>
                            <Navbutton txt="Cancel Changes"/>
                        </Stack>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}
 export default Profile;