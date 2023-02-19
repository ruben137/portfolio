import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Grid, IconButton, useTheme } from "@mui/material";
import CustomTypography from "../CustomTypography";
import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ArrowLeft, ArrowRight, Launch } from "@mui/icons-material";
import Snake from "../Snake/components/Snake";
import PathFindingVisualizer from "../PathFinding/components/PathFindingVisualizer/PathFindingVisualizer";
import LazyLoad from "react-lazyload";
import TicTacToe from "../TicTacToe/components/TicTacToe";
import CubeTimer from "../CubeTimer";
import Cube from "../CubeTimer/Cube";

const items = [
  {
    title: "Snake Game",
    component: <Snake auto />,
    description:
      "The typical snake game made using ReactJs and CSS. I developed this project by making the mechanics by myself to understand better how to develop a simple video game and to improve my logical thinking, also, added automatic movement of the snake using dijkstra's algorithm.",
    technologies: ["React", "TypeScript", "Material UI"],
    repo: "https://github.com/ruben137/snake-game",
    projectLink: "https://snake-game-azure.vercel.app",
    green: true,
    destroyOnLeave: true,
  },
  {
    title: "Path finding",
    component: <PathFindingVisualizer />,
    description:
      "I created this project by studying the Dijkstra algorithm to obtain the shortest path from one cell to another, with the help of this interface created with React and Material UI you can see graphically how the algorithm works, in the same way, I added the functionality to create random mazes every time you press a button using the randomized Depth-first search algorithm.",
    technologies: ["React", "TypeScript", "Material UI", "react-hot-toast"],
    repo: "https://github.com/ruben137/path-finding",
    projectLink: "https://path-finding-eight.vercel.app/",
    green: true,
  },
  {
    title: "Tic-tac-toe",
    component: <TicTacToe />,
    description:
      "I did this project after completing a code test that consisted of designing an algorithm to verify the winner of tic-tac-toe, using React and Material UI I created the interface, and using Node.js and Socket.IO in the back-end I added the online modality, you just have to copy the link, send it to a friend and start playing.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Socket.IO",
      "NodeJs",
      "react-hot-toast",
    ],
    repo: "https://github.com/ruben137/tic-tac-toe",
    projectLink: "https://tic-tac-toe-eib5.vercel.app",
    green: false,
  },
  {
    title: "Rubik's cube timer",
    component: <CubeTimer />,
    secondComponent: <Cube />,
    description:
      "This was one of the first projects I developed on my own. I like to solve Rubik's cubes and have used apps to measure the time it takes to solve them, when I was just starting as a programmer I got the idea that I could do something similar to those applications, therefore, started to develop one using HTML, CSS, and JavaScript, they cost me a lot, but they can create a functional application that tells you what movements you must make to mix the cube, measures your time and creates an average of how long it takes to solve the cube.",
    technologies: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/ruben137/speedtimer",
    projectLink: "https://ruben137.github.io/speedtimer/",
    green: true,
  },
];
const SideProjects = () => {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  const [hideComponents, setHideComponents] = useState(false);
  useEffect(() => {
    document.addEventListener("visibilitychange", (event) => {
      if (document.visibilityState == "visible") {
        setHideComponents(false);
      } else {
        setHideComponents(true);
      }
    });
  }, []);
  return (
    <Box sx={{ width: "100%" }} id="projects">
      <Divider textAlign="left">
        <CustomTypography variant="h4" fontWeight={700}>
          {" "}
          <span style={{ color: "#00b894" }}>03.</span>&nbsp;Side projects
        </CustomTypography>
      </Divider>
      <br />
      <br />
      <br />
      <Grid container direction="row" spacing={2}>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {!(i % 2) ? (
              <>
                <Grid item xs={12} md={7} sx={{ mt: i && 13 }}>
                  <Box
                    sx={{
                      width: "100%",
                      // height: "400px",

                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        border:
                          item.green && darkMode
                            ? "2px solid #00b894"
                            : undefined,
                        left: 10,
                        top: 10,
                        borderRadius: "3px",
                      }}
                    />
                    {item.green && darkMode && (
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          bgcolor: "rgba(0,184,148,0.3)",
                          zIndex: 2,
                          "&:hover": {
                            bgcolor: "transparent",
                            zIndex: 1,
                          },
                          transition: "all .3s ease",
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        filter:
                          item.green && darkMode
                            ? "grayscale(100%)"
                            : undefined,
                        position: "relative",
                        zIndex: 1,
                        "&:hover": {
                          filter:
                            item.green && darkMode
                              ? "grayscale(0%)"
                              : undefined,
                          zIndex: 2,
                        },
                        // transition: "all .3s ease",
                      }}
                    >
                      {" "}
                      <LazyLoad height={280} once>
                        {" "}
                        {hideComponents && item.destroyOnLeave
                          ? null
                          : item.component}
                      </LazyLoad>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ mt: i && 13 }}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      mt: 2,
                    }}
                  >
                    <CustomTypography
                      textAlign={"right"}
                      sx={{ color: "#00b894" }}
                    >
                      Featured Project
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: "relative",
                      }}
                    >
                      {item.secondComponent ? item.secondComponent : <span />}
                      <CustomTypography textAlign={"right"} variant="h5">
                        {item.title}
                      </CustomTypography>
                    </Box>
                    <CustomTypography
                      textAlign={"right"}
                      sx={{ mt: 2, color: "secondary.main" }}
                    >
                      {" "}
                      {item.description}
                    </CustomTypography>
                    <Grid
                      container
                      direction="row"
                      spacing={1}
                      justifyContent="right"
                      sx={{ mt: 1 }}
                    >
                      {item.technologies.map((item, i) => (
                        <Grid key={i} item>
                          <CustomTypography textAlign="right">
                            {item}
                          </CustomTypography>
                        </Grid>
                      ))}
                    </Grid>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: 1,
                      }}
                    >
                      <a href={item.repo} rel="noreferrer" target="_blank">
                        {" "}
                        <IconButton
                          size="small"
                          sx={{ color: "secondary.main" }}
                        >
                          <GitHubIcon />
                        </IconButton>
                      </a>
                      <a
                        href={item.projectLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {" "}
                        <IconButton
                          size="small"
                          sx={{ color: "secondary.main" }}
                        >
                          <Launch />
                        </IconButton>
                      </a>
                    </Box>
                  </Box>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} md={5} sx={{ mt: i && 13 }}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      mt: 2,
                    }}
                  >
                    <CustomTypography
                      textAlign={"left"}
                      sx={{ color: "#00b894" }}
                    >
                      Featured Project
                    </CustomTypography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: "relative",
                      }}
                    >
                      <CustomTypography textAlign={"right"} variant="h5">
                        {item.title}
                      </CustomTypography>
                      {item.secondComponent ? item.secondComponent : <span />}
                    </Box>
                    <CustomTypography
                      textAlign={"left"}
                      sx={{ mt: 2, color: "secondary.main" }}
                    >
                      {" "}
                      {item.description}
                    </CustomTypography>
                    <Grid
                      container
                      direction="row"
                      spacing={1}
                      justifyContent="left"
                      sx={{ mt: 1 }}
                    >
                      {item.technologies.map((item, i) => (
                        <Grid key={i} item>
                          <CustomTypography textAlign="left">
                            {item}
                          </CustomTypography>
                        </Grid>
                      ))}
                    </Grid>
                    <Box
                      sx={{
                        display: "flex",
                        mt: 1,
                      }}
                    >
                      <a href={item.repo} rel="noreferrer" target="_blank">
                        {" "}
                        <IconButton
                          size="small"
                          sx={{ color: "secondary.main" }}
                        >
                          <GitHubIcon />
                        </IconButton>
                      </a>
                      <a
                        href={item.projectLink}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {" "}
                        <IconButton
                          size="small"
                          sx={{ color: "secondary.main" }}
                        >
                          <Launch />
                        </IconButton>
                      </a>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7} sx={{ mt: i && 13 }}>
                  <Box
                    sx={{
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        border:
                          item.green && darkMode
                            ? "2px solid #00b894"
                            : undefined,
                        left: 10,
                        top: 10,
                        borderRadius: "3px",
                      }}
                    />
                    {item.green && darkMode && (
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          bgcolor: "rgba(0,184,148,0.3)",
                          zIndex: 2,
                          "&:hover": {
                            bgcolor: "transparent",
                            zIndex: 1,
                          },
                          transition: "all .3s ease",
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        filter:
                          item.green && darkMode
                            ? "grayscale(100%)"
                            : undefined,
                        position: "relative",
                        zIndex: 1,
                        "&:hover": {
                          filter:
                            item.green && darkMode
                              ? "grayscale(0%)"
                              : undefined,
                          zIndex: 2,
                        },
                        // transition: "all .3s ease",
                      }}
                    >
                      {" "}
                      <LazyLoad height={280} once>
                        {" "}
                        {hideComponents && item.destroyOnLeave
                          ? null
                          : item.component}
                      </LazyLoad>
                    </Box>
                  </Box>
                </Grid>
              </>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default SideProjects;
