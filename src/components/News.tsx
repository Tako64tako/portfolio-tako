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
                                    height='190'
                                    image={p1}
                                    alt="project 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        HRBrain Internship
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        2days,I participated in a two-day ideathon internship.At Ideathon, there was a presentation on the final day and I was able to win the championship.
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
                                        <Typography variant="body2" color="text.secondary">
                                            3days I participated in an internship at Nifty.
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
                                        <Typography variant="body2" color="text.secondary">
                                            5days,I participated in an internship at Sakura Internet.<br/>
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
                    </Grid>
        </GlobalBoxWrap>
        <GlobalBoxWrap sx={{textAlign: "center", marginTop: "1rem", marginBottom: "5rem"}}>
                    <Grid container alignItems="stretch">
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
                                    <Typography variant="body2" color="text.secondary">
                                        5days,I participated in an internship at Askul.
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
                                        <Typography variant="body2" color="text.secondary">
                                            10days,I participated plan in an internship at Directorz.
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
                                        <Typography variant="body2" color="text.secondary">
                                            3 months intern<br/>
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
                    </Grid>
            </GlobalBoxWrap>
            <GlobalBoxWrap sx={{textAlign: "center", marginTop: "1rem", marginBottom: "5rem"}}>
                    <Grid container alignItems="stretch">
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
                                    <Typography variant="body2" color="text.secondary">
                                        internship at masuya.
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
                        {/* <Grid item xs={6} md={4}>
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
                                        <Typography variant="body2" color="text.secondary">
                                            10days,I participated plan in an internship at Directorz.
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
                                        <Typography variant="body2" color="text.secondary">
                                            3 months intern<br/>
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
                        </Grid> */}
                    </Grid>
        </GlobalBoxWrap>
        </section>
    )
}

export default Works;