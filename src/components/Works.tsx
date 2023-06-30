import React from "react"
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI"
import { Grid, Link } from "@mui/material"
import { Box } from "@mui/system"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import p1 from '../styles/assets/geekcamp.jpg'
import p2 from '../styles/assets/twitter.jpg'
import p3 from '../styles/assets/ctos.png'
import p4 from '../styles/assets/othello.png'
import p5 from '../styles/assets/koukaten.png'
import p6 from '../styles/assets/portfolio.png'
import p7 from '../styles/assets/project_b.png'
import p8 from '../styles/assets/famouse-saying.png'
import p9 from '../styles/assets/Leafony.jpg'
import p10 from '../styles/assets/python-hands-on.png'

const Works: React.FC = () => {
    return (
        <section>
            <GlobalBoxWrap sx={{textAlign: "center", marginTop: "10rem", marginBottom: "1rem"}}>
                <GlobalSubTitle>Projects</GlobalSubTitle>
                    <Grid container alignItems="stretch" spacing={2}>
                        <Grid item xs={6} md={4}>
                            <Box>
                            <Card sx={{ maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height='190px'
                                    image={p1}
                                    alt="project 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        Can be seen by people
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Overview:</b> In the student group circle, it is necessary to submit to the school whether "who", "when", and "how many times" were staying in the club room when a person who tested positive for COVID-19 appeared. We developed a service to automate it because it was troublesome to set and manage it.<br />
                                        <b>Development period:</b> 2 days<br />
                                        <b>Developers:</b> 3 people<br />
                                        <b>Technology used:</b> RaspberryPi, Next.js, Python, Kotlin, FireBase, C <br/>
                                        <b>Role:</b> Planning, backend development, deployment
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="http://opc3.qqey.net/" target="_blank" underline="none" color="inherit">LIVE DEMO</Link>
                                    </Button>
                                    <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://www.youtube.com/watch?v=aXrKhL0umm0" target="_blank" underline="none" color="inherit">YOUTUBE LINK</Link>
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
                                        height='190px'
                                        image={p2}
                                        alt="project 2"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            Hiding Twitter
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Overview:</b> I wanted to make it look like I was working without knowing that I was watching Twitter during lectures and work.<br />
                                        <b>Development period:</b> 2 days<br />
                                        <b>Developers:</b> 3 people<br />
                                        <b>Technology used:</b> TypeScript, Python<br/>
                                        <b>Role:</b> backend
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://set1.ie.aitech.ac.jp/koukaten2021/" target="_blank" underline="none" color="inherit">Live Demo</Link>
                                    </Button>
                                    <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://www.youtube.com/watch?v=UquZ9PCCMA8" target="_blank" underline="none" color="inherit">YOUTUBE LINK</Link>
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
                                        height='190px'
                                        image={p3}
                                        alt="project 3"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            Online Try On Service<br />
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                            <b>Overview:</b> We developed a web application that allows you to try on clothes online. <br />
                                            <b>Development period:</b> 6 months<br />
                                            <b>Developers:</b> 5 people<br />
                                            <b>Technology used:</b> Python(Django), PostgreSQL, Docker<br />
                                            <b>Role:</b> Team leader, planning, environment construction, database definition, backend development
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
                    </Grid>
                    <Grid item xs={6} md={4}>
                            <Box>
                            <Card sx={{ maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height='190px'
                                    image={p4}
                                    alt="project 4"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        Othello Game
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Overview:</b> Experience team development using Python in a lecture.<br />
                                        <b>Development period:</b> 2 weeks<br />
                                        <b>Developers:</b> 6 people<br />
                                        <b>Technology used:</b> Python<br/>
                                        <b>Role:</b> All
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
                        <Grid item xs={6} md={4}>
                            <Box>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height='190px'
                                        image={p5}
                                        alt="project 5"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            Departing storehouse
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                            <b>Overview:</b> I developed it because I wanted to know if the club room was crowded due to the corona crisis and how many people there were.<br />
                                            <b>Development period:</b> 6 months<br />
                                            <b>Developers:</b> 5 people<br />
                                            <b>Technology used:</b> Vue, Go, Python, MySQL<br />
                                            <b>Role:</b> Planning, backend development, deployment
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://set1.ie.aitech.ac.jp/koukaten2021/" target="_blank" underline="none" color="inherit">Github Link
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
                                        height='190px'
                                        image={p6}
                                        alt="project 6"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            Portfolio Site
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                            <b>Overview:</b> Job hunting may begin, and I thought that creating a portfolio site would allow me to convey my<br />
                                            <b>Development period:</b> 1 months<br />
                                            <b>Developers:</b> 1 person<br />
                                            <b>Technology used:</b> React, TypeScript<br />
                                            <b>Role:</b> All
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                            <Link href="https://github.com/Tako64tako/portfolio-tako" target="_blank" underline="none" color="inherit">GITHUB LINK
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                    </Grid>
                    <Grid item xs={6} md={4}>
                            <Box>
                            <Card sx={{ maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height='190px'
                                    image={p7}
                                    alt="project 7"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        Side-scrolling game
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Overview:</b> Experienced team development for the task of creating a lecture web application.<br />
                                        <b>Development period:</b> 2 monsths<br />
                                        <b>Developers:</b> 4 people<br />
                                        <b>Technology used:</b>JavaScript<br />
                                        <b>Role:</b> All
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://github.com/Tako64tako/project_b" target="_blank" underline="none" color="inherit">Github Link
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
                                        height='190px'
                                        image={p8}
                                        alt="project 8"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            famouse-saying-tako64
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Overview:</b> I wanted to create an extension.<br />
                                        <b>Development period:</b> 2 days<br />
                                        <b>Developers:</b> 1 person<br />
                                        <b>Technology used:</b>TypeScript<br />
                                        <b>Role:</b> All
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://github.com/Tako64tako/famouse-saying-tako64" target="_blank" underline="none" color="inherit">Github Link
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
                                        height='190px'
                                        image={p9}
                                        alt="project 9"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            Anyone can feed
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Overview:</b> Development using a microcomputer called Leafony by members of the laboratory.<br />
                                        <b>Development period:</b> 2 months<br />
                                        <b>Developers:</b> 3 people<br />
                                        <b>Technology used:</b>TypeScript, React-Native, Python, C++ , Leafony, RaspberyyPi <br />
                                        <b>Role:</b> React-Native, TypeScript , Leafony
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                            <Link href="https://github.com/Pluslab/2022_leafony_A" target="_blank" underline="none" color="inherit">GITHUB LINK
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
                                        height='190px'
                                        image={p10}
                                        alt="project 10"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            Python-Hands-on
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Overview:</b> A learning support service that allows you to learn Python hands-on.<br />
                                        <b>Development period:</b> 2 days<br />
                                        <b>Developers:</b> 2 people<br />
                                        <b>Technology used:</b>Python <br />
                                        <b>Role:</b> Python
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                            <Link href="https://github.com/Tako64tako/Python-handson" target="_blank" underline="none" color="inherit">GITHUB LINK
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
        </GlobalBoxWrap>
        </section>
    )
}

export default Works;
