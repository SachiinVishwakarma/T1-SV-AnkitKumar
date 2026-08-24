import {Box} from "@mui/material"
const Dot=({sx})=>{
    return(
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
          }}
          >
          <Box
            sx={{
              width: "30px",
              height: "19px",
              borderRadius: "20px",
              backgroundColor: "#F1F3F4",
              ...sx
            }}
          />
        </Box>
    )
}
export default Dot ;