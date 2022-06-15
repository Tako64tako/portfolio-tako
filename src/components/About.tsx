import React from 'react'
import { Box } from "@mui/system";
import { Button, Grid, Link , Typography } from "@mui/material"
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI"
import AboutImage from '../styles/images/AboutImage.png'
import DownloadIcon from '@mui/icons-material/Download'
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
                                      Work : Aichi Institute of Technology student.<br />
                                      Laboratory : pluslab<br />
                                      Birthday : 2001/10/18<br />
                                      Birthplace : Nara prefecture.<br />
                                      Hobbies : Programming/Reading.<br />
                                      Special skill : Basketball.<br />
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