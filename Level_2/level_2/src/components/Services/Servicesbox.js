import {Card,CardContent} from "@mui/material";
import Servicesheading from "./Servicesheading";
import Text from "../text/Text";
const Servicesbox=()=>{
    return(
        <Card
                  elevation={0}
                  sx={{
                    height: "163px",
                    width: "400px",
                    border: "1px solid #35cfc2",
                    borderRadius: "30px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <CardContent
                    sx={{
                      padding: "14px !important",
                    }}
                  >
                    <Servicesheading/>

                    <Text txt="Beautiful login and signup forms with real time validation, error handling, and seamless localStorage integration"/>
                  
                  </CardContent>
                </Card>
        
    )
}
export default Servicesbox;