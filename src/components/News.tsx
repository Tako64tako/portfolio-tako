import React from "react"
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI"
import { Grid, Link } from "@mui/material"
import { Box } from "@mui/system"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import p1 from '../styles/assets/HRBrain.jpg'
import p2 from '../styles/assets/koukaten.png'
import p3 from '../styles/assets/ctos.png'

const Works: React.FC = () => {
    return (
        <section>
              <GlobalBoxWrap sx={{textAlign: "center", marginTop: "1rem", marginBottom: "5rem"}}>
                <GlobalSubTitle>News</GlobalSubTitle>
                    <Grid container alignItems="stretch">
                        <Grid item xs={6} md={4}>
                            <Box>
                            <Card sx={{ maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height='auto'
                                    image={p1}
                                    alt="project 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        HRBrain Innovation Ideathon
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        I participated in a two-day ideathon internship.At Ideathon, there was a presentation on the final day and I was able to win the championship.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://talent.supporterz.jp/events/6bd10ab3-cbdc-408a-acd0-63cb00365202/" target="_blank" underline="none" color="inherit">internship
                                        </Link>
                                    </Button>
                                </CardActions>
                            </Card>
                            </Box>
                        </Grid>
                        {/* <Grid item xs={6} md={4}>
                            <Box>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height='auto'
                                        image={p2}
                                        alt="project 2"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                          The number of people at the Sys Lab
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                          It took 5 people to create a web application that reads the number of people from the camera to the club room over half a year.Responsible for backend development and deployment.University festival highest award work.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://set1.ie.aitech.ac.jp/koukaten2021/" target="_blank" underline="none" color="inherit">Live Demo
                                        </Link>

                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Box>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height='auto'
                                        image={p3}
                                        alt="project 3"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                          Online Try On Service<br />
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            A service that allows you to change clothes on the Web was created by 5 people over half a year.Responsible for database definition, environment construction, and backend development.Second place work in the lecture.<br/>
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                            <Link href="https://github.com/Tako64tako/CTOs" target="_blank" underline="none" color="inherit">GITHUB LINK
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid> */}
                    </Grid>
        </GlobalBoxWrap>
        {/* <GlobalBoxWrap sx={{textAlign: "center", marginTop: "2rem", marginBottom: "5rem"}}>
                    <Grid container alignItems="stretch">
                        <Grid item xs={6} md={4}>
                            <Box>
                            <Card sx={{ maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height='auto'
                                    image={p4}
                                    alt="project 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        Othello Game
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A web Othello game with Python was created by 6 people over 2 weeks.Responsible for backend development, frontend development and deployment.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://github.com/2021AIT-OOP2-G06/oop2-othello" target="_blank" underline="none" color="inherit">Github Link
                                        </Link>
                                    </Button>
                                </CardActions>
                            </Card>
                            </Box>
                        </Grid>

                    </Grid>
            </GlobalBoxWrap> */}
        </section>
    )
}

export default Works;