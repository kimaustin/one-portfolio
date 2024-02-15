import React from 'react';
import { Container, Content, Name, ProfileContainer, Resume, ImageSide, ResumeDownload, Links, Social, Side, Loader, Desc, Styled1, Styled2, Close } from './AboutElements';
import { motion } from "framer-motion";

const About = ({ toggle, aboutToggle }) => {

  const nameVariants = {
    initial: {
      y: '-15vh',
      x: 0,
      opacity: 0,
    },
    in: {
      y: '0vh',
      opacity: 1,
      x: 0
    },
    out: {
      y: '-15vh',
    }
  }

  const linksVariants = {
    initial: {
      y: '100vh',
      x: 0,
      opacity: 0,
    },
    in: {
      y: '0vh',
      opacity: 1,
    },
    out: {
      opacity: 0,
      transition: {
        type: "tween",
        ease: [0.87, 0, 0.13, 1],
        duration: 0.8,
        }
    }
  }

  const imgVariants = {
    initial: {
      y: '100vh',
      x: 0,
      opacity: 0,
    },
    in: {
      y: '0vh',
      opacity: 1,
      x: 0
    },
    out: {
      y: '100vh',
    }
  }

  const descVariants = {
    initial: {
      y: '0',
      x: '-20vw',
      opacity: 0,
    },
    in: {
      y: '0vh',
      opacity: 1,
      x: 0
    },
    out: {
      y: '0vh',
      opacity: 0,
      transition: {
        type: "tween",
        ease: [0.87, 0, 0.13, 1],
        duration: 0.7,
        // delay: .5,
        }
    }
  }


  const styledVariants = {
    initial: {
      y: '20vh',
      x: '0',
      opacity: 0,
    },
    in: {
      y: '0vh',
      opacity: 1,
      x: 0
    },
    out: {
      y: '20vh',
      opacity: 0,
      transition: {
        type: "tween",
        ease: [0.87, 0, 0.13, 1],
        duration: 0.7,
        // delay: .5,
        }
    }
  }

  

  const pageTransition = {
      type: "tween",
      ease: [0.87, 0, 0.13, 1],
      duration: 0.9
  };


  return (
      <Container showInfo={aboutToggle}
        as={motion.div}
        initial="initial"
        animate="in"
        exit="out"
        // variants={pageVariants}
        // transition={pageTransition}
      >
        
        <Name
          as={motion.div}
          initial="initial"
          animate="in"
          exit="out"
          variants={nameVariants}
          transition={{
            type: "tween",
            ease: [0.87, 0, 0.13, 1],
            duration: 0.95,
            delay: 0.2
          }}
          >Austin Kim <span style={{fontFamily: "JejuMyeongjo", letterSpacing: "-.25rem"}}>(호연)</span></Name>

        <Styled2 style={{ paddingTop: '1.5rem' }}
          as={motion.div}
          initial="initial"
          animate="in"
          exit="out"
          variants={styledVariants}
          transition={{
            type: "tween",
            ease: [0.87, 0, 0.13, 1],
            duration: 0.8,
            delay: 1.1
          }}
        >
          Built with React + Elixir. <br />
          Last Updated 2/15/21.
        </Styled2>

        <Content>
          <Desc
            as={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            variants={descVariants}
            transition={{
              type: "tween",
              ease: [0.87, 0, 0.13, 1],
              duration: 0.9,
              delay: 0.2
            }}
            >
            Reality Composer — The Wandering Bateman — 호연 — Bachelors of Computer Science and Design at Northeastern University
          </Desc>
          <Desc
            as={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            variants={descVariants}
            transition={{
              type: "tween",
              ease: [0.87, 0, 0.13, 1],
              duration: 0.9,
              delay: 0.25
            }}
            >
              Multi-disciplinary designer, developer, composer, artist with a passion for building meaningful experiences. Passionate about new technologies, patterns, systems, and sounds.
          </Desc>
          <Desc
            as={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            variants={descVariants}
            transition={{
              type: "tween",
              ease: [0.87, 0, 0.13, 1],
              duration: 0.9,
              delay: 0.3
            }}
          >
            Currently into : FSOL, puerh, strawberry-player, buggy g. riphead, go, plexus.earth
          </Desc>
          <Links
            as={motion.div}
            initial="initial"
            animate="in"
            exit="out"
            variants={linksVariants}
            transition={{
              type: "tween",
              ease: [0.87, 0, 0.13, 1],
              duration: 0.9,
              delay: .85
            }}
            >
            <Social onClick={() => window.open("imgs/austink_cv.pdf")} target="_blank">Resume</Social>
            <Social onClick={() => window.open("https://www.linkedin.com/in/austinkim072775/")} target="_blank">LinkedIn</Social>
            <Social onClick={() => window.open("https://www.instagram.com/reality.composer/")} target="_blank">Instagram</Social>
            <Social onClick={() => window.open("https://www.are.na/reality-composer/channels")} target="_blank">Are.na</Social>
            <Social onClick={() => window.open("mailto:nektinemedia@gmail.com")} target="_blank">Email</Social>
          </Links>
        </Content>

        <ProfileContainer
          as={motion.div}
          initial="initial"
          animate="in"
          exit="out"
          variants={imgVariants}
          transition={pageTransition}
          >
            <img src={"imgs/me.jpeg"} style={{display: 'block'}} onError='this.style.display = "none"' alt={'picture'} id="me!"></img>
        </ProfileContainer>
      </Container>
  );
}

export default About;