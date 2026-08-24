import { Stack,Box } from "@mui/material";
import Text from "../text/Text";
const Aboutinfo=()=>{
    return(
        <Stack
            spacing={0.8}
            sx={{
              width: "738px",
              height: "60px",
              mx: "auto",
              mb: 1,
            }}
          >
              <Box
                
                sx={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #35cfc2",
                  borderRadius: "10px",
                  padding: "0px 12px",
                }}
              >
                <Text sx={{maxWidth: "738px",display: "flex",justifySelf: "center",mt: 2,}} txt="Single-file pages you can open directly in any modern browser"/>
              </Box>
        </Stack>
    )
}
export default Aboutinfo;