import { Box } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";
const Cube = () => {
  const initialColors = ["#fc5c65", "#ffffff", "#fd9644", "#26de81", "#3867d6"];
  const getRandomColor = ():string =>
    initialColors[Math.floor(Math.random() * initialColors.length)];
  const [colors, setColors] = useState<string[]>(
    new Array(9).fill(null).map(() => getRandomColor())
  );
  const updateColors = () => {
    setColors(new Array(9).fill(null).map(() => getRandomColor()));
  };
  return (
    <Box
      // className="cubo"
      onClick={updateColors}
      sx={{
        display: "grid",
        position: "absolute",
        zIndex: 10,
        right: 0,
        gridTemplateRows: "12px 12px 12px",
        gridTemplateColumns: "12px 12px 12px",
        borderRadius: "10px",
        transition: "all .2s ease",
        cursor: "pointer",
        "&:hover": {
          gridTemplateRows: "13px 13px 13px",
          gridTemplateColumns: "13px 13px 13px",
        },
      }}
    >
      {colors.map((color) => (
        <div className="colors" style={{ background: color }}></div>
      ))}
    </Box>
  );
};

export default Cube;
