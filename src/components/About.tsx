import React from 'react'
import { Box } from "@mui/system";
import { Button, Grid, Link , Typography } from "@mui/material"
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI"
import AboutImage from '../styles/images/AboutImage.png'
import DownloadIcon from '@mui/icons-material/Download'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ComputerIcon from '@mui/icons-material/Computer';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import CakeIcon from '@mui/icons-material/Cake';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import SchoolIcon from '@mui/icons-material/School';
// import Resume from '../styles/Hoge.pdf'

const About: React.FC = () => {
    return (
        <section>
            <GlobalBoxWrap>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                        <Box sx={{width: "auto", height: "70%"}}>
                            <Box component="img" alt="about me picture" src={AboutImage}
                            sx={{
                                width: "auto",
                                height: "100%",
                                borderRadius: "50%"
                            }}
                            >
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} lg={5} sx={{display: "flex", justifyContent: "center"}}>
                        <Box>
                            <GlobalSubTitle>About Me</GlobalSubTitle>
                                <Box marginTop="1rem">
                                    <Typography fontSize="18px" width="100%">
                                      <Link href="https://www.ait.ac.jp/" underline="none" target="_blank" color="inherit">Work : Aichi Institute of Technology student<SchoolIcon></SchoolIcon></Link><br />
                                      <Link href="https://pluslab.org/" underline="none" target="_blank" color="inherit">Laboratory : pluslab <NetworkWifiIcon></NetworkWifiIcon></Link><br />
                                      Birthday : 2001/10/18<CakeIcon></CakeIcon><br />
                                      Birthplace : Nara prefecture<MapsHomeWorkIcon></MapsHomeWorkIcon><br />
                                      Hobbies : Programming<ComputerIcon></ComputerIcon>Reading< MenuBookIcon></ MenuBookIcon><br />
                                      Special skill : Basketball<SportsBasketballIcon></SportsBasketballIcon> <br />
                                    </Typography>
                                </Box>
                                {/* <Box marginTop="2rem">
                                    <Link href='https://avatars.githubusercontent.com/u/9919?s=280&v=4' underline="none" color="inherit" target="_blank" download="hoge.png">
                                        <Button variant="contained" sx={{
                                            backgroundColor: "#dda73b",
                                            borderRadius: "5rem",
                                            fontWeight: 700,
                                            textTransform: "none",
                                            paddingLeft: "2rem",
                                            paddingRight: "1.4rem",
                                            '&:hover': {
                                                backgroundColor: "#A6802E"
                                            }
                                            }}>Download CV<DownloadIcon sx={{fontSize: "1.2rem", margin: "0.2rem"}}/>
                                        </Button>
                                    </Link>
                                </Box> */}
                        </Box>
                    </Grid>
                </Grid>
            </GlobalBoxWrap>
        </section>
    )
}

export default About