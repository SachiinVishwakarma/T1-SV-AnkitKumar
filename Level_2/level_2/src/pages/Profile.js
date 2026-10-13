import {Box,Typography,Stack,Paper,useTheme} from "@mui/material";
import { Profilestyle } from "../Theme/Profilestyle";
import Input from "../components/Input/Input";
import Navbutton from "../components/Button/Navbutton";
import Colorbutton from "../components/Button/Colorbutton";
import { useState } from "react";
const Profile=()=>{
    const theme=useTheme();
    const styles=Profilestyle(theme);

    const [form, setForm] = useState({
        fullName: "",
        dob: "",
        email: "",
        phone: "",
        address: "",
        pin: "",
        city: "",
        country: "",
        github: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSave = () => {
        let newErrors = {};

        if (form.fullName && !/^[A-Za-z ]{2,40}$/.test(form.fullName.trim())) {
            newErrors.fullName = "Enter a valid full name.";
        }

        if (form.dob && new Date(form.dob) >= new Date(new Date().toDateString())) {
            newErrors.dob = "Enter a valid date of birth.";
        }

        if (form.phone && !/^[0-9]{10}$/.test(form.phone)) {
            newErrors.phone = "Phone number must contain 10 digits.";
        }

        if (form.address && form.address.trim().length < 5) {
            newErrors.address = "Enter a valid street address.";
        }

        if (form.pin && !/^[0-9]{6}$/.test(form.pin)) {
            newErrors.pin = "PIN code must contain 6 digits.";
        }

        if (form.city && !/^[A-Za-z ]{2,30}$/.test(form.city.trim())) {
            newErrors.city = "Enter a valid city name.";
        }

        if (form.country && !/^[A-Za-z ]{2,50}$/.test(form.country.trim())) {
            newErrors.country = "Enter a valid country name.";
        }

        if (form.github && !/^https:\/\/github\.com\/[A-Za-z0-9-]+\/?$/.test(form.github)) {
            newErrors.github = "Enter a valid GitHub profile URL.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Profile updated successfully");
        }
    };
    return(
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
                                <Input label="Full Name" name="fullName" placeholder="Demo User" value={form.fullName} onChange={handleChange}/>
                                {errors.fullName && <Typography color="error" variant="caption">{errors.fullName}</Typography>}
                            </Box>
                            <Box sx={styles.halfbox}>
                                <Input label="Date of Birth" name="dob" type="date" value={form.dob} onChange={handleChange}/>
                                {errors.dob && <Typography color="error" variant="caption">{errors.dob}</Typography>}
                            </Box>
                        </Stack>
                        <Stack direction={"row"} spacing={1.5} sx={styles.row}>
                            <Box sx={styles.halfbox}>
                                <Input label="Email Address" name="email" placeholder="demo@gmail.com" type="email" value={form.email} onChange={handleChange}/>
                                {errors.email && <Typography color="error" variant="caption">{errors.email}</Typography>}
                            </Box>
                            <Box sx={styles.halfbox}>
                                <Input label="Phone Number" name="phone" placeholder="1234567890" type="tel" value={form.phone} onChange={handleChange}/>
                                {errors.phone && <Typography color="error" variant="caption">{errors.phone}</Typography>}
                            </Box>
                        </Stack>
                        <Typography sx={styles.contentsubhead}>
                            Address Information
                        </Typography>
                        <Box sx={styles.row}>
                            <Input label="Street Address" name="address" placeholder="Enter your complete address" value={form.address} onChange={handleChange}/>
                            {errors.address && <Typography color="error" variant="caption">{errors.address}</Typography>}
                        </Box>
                        <Stack direction={"row"} spacing={1.5} sx={styles.row}>
                            <Box sx={styles.halfbox}>
                                <Input label="PIN Code" name="pin" placeholder="Demo User" value={form.pin} onChange={handleChange}/>
                                {errors.pin && <Typography color="error" variant="caption">{errors.pin}</Typography>}
                            </Box>
                            <Box sx={styles.halfbox}>
                                <Input label="City" name="city" placeholder="Ranchi" value={form.city} onChange={handleChange}/>
                                {errors.city && <Typography color="error" variant="caption">{errors.city}</Typography>}
                            </Box>
                        </Stack>
                        <Stack direction={"row"} spacing={1.5} sx={styles.row}>
                            <Box sx={styles.halfbox}>
                                <Input label="Country" name="country" placeholder="India" value={form.country} onChange={handleChange}/>
                                {errors.country && <Typography color="error" variant="caption">{errors.country}</Typography>}
                            </Box>
                            <Box sx={styles.halfbox}>
                                <Input label="GitHub Profile" name="github" placeholder="https://github.com/username" type="url" value={form.github} onChange={handleChange}/>
                                {errors.github && <Typography color="error" variant="caption">{errors.github}</Typography>}
                            </Box>
                        </Stack>
                        <Stack direction={"row-reverse"} spacing={1.5}>
                            <Colorbutton txt="Save Changes" size="medium" onclick={handleSave}/>
                            <Navbutton txt="Cancel Changes"/>
                        </Stack>
                    </Paper>
                </Box>
    )
}
 export default Profile;