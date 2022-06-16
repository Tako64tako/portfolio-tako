import React  from "react"
import Toolbar from '@mui/material/Toolbar'
import useMedia from "use-media";
import { styled } from "@mui/system"
import { Button } from "@mui/material"
import MediaQuery from "react-responsive";
import { slide as Menu } from 'react-burger-menu'
import './styles/style.css'

interface NavbarProps {
  home: any
  about: any
  projects: any
  skills: any
  news: any
  contact: any
}

// const isWide = useMedia({ minWidth: "1000px" });

const NavbarButton = styled(Button)({
      color: '#c29334',
      margin: '1rem',
      ":hover": {
        backgroundColor: 'rgba(194, 147, 52, 0.1)'
      }
})

const Navbar:React.FC<NavbarProps> = ({home, about, projects, skills, contact,news}) => {
    const scrollAbout = () => about.current.scrollIntoView({behavior: "smooth"})
    const scrollProjects = () => projects.current.scrollIntoView({behavior: "smooth"})
    const scrollSkills = () => skills.current.scrollIntoView({ behavior: "smooth" })
    const scrollNews = () => news.current.scrollIntoView({ behavior: "smooth" })
    const scrollContact = () => contact.current.scrollIntoView({behavior: "smooth"})

  return (
        <Toolbar
        sx={{
          justifyContent: "center"
        }}
    >
          <MediaQuery query="(min-width: 594px)" >
            <NavbarButton>Home</NavbarButton>
            <NavbarButton onClick={scrollAbout}>About</NavbarButton>
            <NavbarButton onClick={scrollSkills}>Skills</NavbarButton>
            <NavbarButton onClick={scrollProjects}>Projects</NavbarButton>
            <NavbarButton onClick={scrollNews}>News</NavbarButton>
            <NavbarButton onClick={scrollContact}>Contact</NavbarButton>
        </MediaQuery>
        <MediaQuery query="(max-width: 593px)">
          <Menu>
            <NavbarButton>Home</NavbarButton>
            <NavbarButton onClick={scrollAbout}>About</NavbarButton>
            <NavbarButton onClick={scrollSkills}>Skills</NavbarButton>
            <NavbarButton onClick={scrollProjects}>Projects</NavbarButton>
            <NavbarButton onClick={scrollNews}>News</NavbarButton>
            <NavbarButton onClick={scrollContact}>Contact</NavbarButton>
          </Menu>
        </MediaQuery>
        </Toolbar>
  );
}

export default Navbar