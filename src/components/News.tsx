import React from "react"
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI"
import { Grid, Link } from "@mui/material"
import { Box } from "@mui/system"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import p1 from '../styles/assets/HRBrain.png'
import p2 from '../styles/assets/nifty.png'
import p3 from '../styles/assets/sakura.png'
import p4 from '../styles/assets/askul.png'
import p5 from '../styles/assets/Directorz.jpeg'
import p6 from "../styles/assets/topica.jpeg"
import p7 from "../styles/assets/masuya.jpeg"
import p8 from "../styles/assets/qualiarts.png"
import p9 from "../styles/assets/cyberagent.png"
import p10 from "../styles/assets/apb.png"
import p11 from "../styles/assets/grenge.jpg"

const Works: React.FC = () => {
    return (
        <section>
            <GlobalBoxWrap sx={{textAlign: "center", marginTop: "1rem", marginBottom: "5rem"}}>
                <GlobalSubTitle>News</GlobalSubTitle>
                    <Grid container alignItems="stretch" spacing={2}>
                        <Grid item xs={6} md={4}>
                            <Box>
                            <Card sx={{ maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height='190'
                                    image={p9}
                                    alt="project 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        CyberAgent Unofficial part-time job
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> writing <br />
                                        <b>Developers:</b> writing <br />
                                        <b>Content:</b> writing <br />
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://www.cyberagent.co.jp/" target="_blank" underline="none" color="inherit">internship
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
                                        height='190'
                                        image={p8}
                                        alt="project 2"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        Qualiarts Unofficial part-time job
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> writing <br />
                                        <b>Developers:</b> writing <br />
                                        <b>Content:</b> writing <br />
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://qualiarts.jp/" target="_blank" underline="none" color="inherit">HP
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
                                        height='190'
                                        image={p11}
                                        alt="project 2"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        Grenge Unofficial part-time job
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> writing <br />
                                        <b>Developers:</b> writing <br />
                                        <b>Content:</b> writing <br />
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://www.grenge.co.jp/" target="_blank" underline="none" color="inherit">HP
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
                                        height='190'
                                        image={p10}
                                        alt="project 2"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        Applibot Unofficial part-time job
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> writing <br />
                                        <b>Developers:</b> writing <br />
                                        <b>Content:</b> writing <br />
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://www.applibot.co.jp/" target="_blank" underline="none" color="inherit">HP
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
                                        height='190'
                                        image={p3}
                                        alt="project 3"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            Sakura Internet Internship<br />
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> 1 week<br />
                                        <b>Developers:</b> 3 people<br />
                                        <b>Content:</b> I built a server environment for running Mozilla Hubs using Sakura's cloud infrastructure, and won the highest award.<br />
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                            <Link href="https://www.infiniteloop.co.jp/tech-blog/2022/06/metaverse-challenge-2022/" target="_blank" underline="none" color="inherit">internship
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
                                    height='190'
                                    image={p4}
                                    alt="project 4"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        Askul Internship
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> 1 week<br />
                                        <b>Developers:</b> 5 people<br />
                                        <b>Content:</b> I participated in an internship where a team worked on issues given to an existing system using TypeScript/Nuxt/Kotlin.<br />
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://www.askul.co.jp/" target="_blank" underline="none" color="inherit">HP
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
                                        height='190'
                                        image={p5}
                                        alt="project 5"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            Directorz Internship
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> 2 week<br />
                                        <b>Developers:</b> 3 people<br />
                                        <b>Content:</b> I operated and maintained an existing server using AWS and set up a new server.<br />
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://directorz.co.jp/" target="_blank" underline="none" color="inherit">HP
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
                                        height='190'
                                        image={p6}
                                        alt="project 6"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            TOPICA<br />
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> 3 months<br />
                                        <b>Developers:</b> 1 person<br />
                                        <b>Content:</b> Production of LP using STDIO.<br />
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                            <Link href="https://topica.co.jp/" target="_blank" underline="none" color="inherit">HP
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
                                    height='190'
                                    image={p7}
                                    alt="project 7"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        masuya Internship
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> 6 months<br />
                                        <b>Developers:</b> 1 person<br />
                                        <b>Content:</b> Engaged in systemization promotion work.<br />
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://www.askul.co.jp/" target="_blank" underline="none" color="inherit">HP
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
                                    height='190'
                                    image={p1}
                                    alt="project 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        HRBrain Internship
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> 2 days<br />
                                        <b>Developers:</b> 4 people<br />
                                        <b>Content:</b> I was able to come up with a service to solve HR problems at the Ideathon and was able to win.<br />
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
                        <Grid item xs={6} md={4}>
                            <Box>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height='190'
                                        image={p2}
                                        alt="project 2"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            Nifty Internship
                                        </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                                        <b>Period:</b> 3 days<br />
                                        <b>Developers:</b> 4 people<br />
                                        <b>Content:</b> I participated in an internship where I was asked to improve the existing HP using Scrum.I acted as the PO and made the final decision within the team.<br />
                                    </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" sx={{color: '#dda73b'}}>
                                        <Link href="https://www.nifty.com/" target="_blank" underline="none" color="inherit">HP
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