import { Link, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';

const Contact: React.FC = () => {
    return (

              <GlobalBoxWrap sx={{textAlign: 'center'}}>
                <Box sx={{margin: '7rem'}}>
                  <GlobalSubTitle>Contact Me</GlobalSubTitle>
                    <Box sx={{margin: '1rem'}}>
                        <Link href=""
                        sx={{
                            color: '#dda73b',
                            textDecoration: 'none'
                        }}
                        >
                        </Link>
                        <Stack direction="row" spacing={4} justifyContent="center" marginTop="1rem">
                          <Link href="https://github.com/Tako64tako" underline="none" target="_blank" color="inherit"><GitHubIcon/></Link>
                          <Link href="https://www.instagram.com/tako64tako" underline="none" target="_blank" color="inherit"><InstagramIcon /></Link>
                          <Link href="https://www.twitter.com/tako64tako" underline="none" target="_blank" color="inherit"><TwitterIcon /></Link>
                          <Link href='mailto:sanscript0550@gmail.com' underline="none" target="_blank" color='inherit'><MailIcon /></Link>
                        </Stack>
                    </Box>
                  </Box>
            </GlobalBoxWrap>
    )
}

export default Contact
