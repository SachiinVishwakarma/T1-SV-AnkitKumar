import { Stack,Box,useTheme } from "@mui/material";
import Text from "../text/Text";
import { Aboutstyle } from "../../Theme/Aboutstyle";
const Aboutinfo=()=>{
  const theme = useTheme();
  const styles = Aboutstyle(theme);
    return(
        <Stack
            spacing={0.8}
            sx={styles.infoStack}
          >
              <Box 
                sx={styles.infoBox}
              >
                <Text sx={styles.infoText} txt="Single-file pages you can open directly in any modern browser"/>
              </Box>
        </Stack>
    )
}
export default Aboutinfo;