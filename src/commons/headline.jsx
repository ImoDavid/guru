import React from "react";
import { Divider, Typography, Stack, Box } from "@mui/material";
import { colors } from "../styles/globals";

const Headline = ({
  title,
  textColor = colors.TITLE,
  dividerColor = colors.PRIMARY,
  width = "20%",
  fontSize = ["1.4rem", "2rem"],
  textAlign = "center",
  alignItems = "center",
  justify = "flex-start"
}) => {
  return (
    <Stack alignItems={alignItems} justifyContent={justify}>
      <Typography
        variant={"h2"}
        fontSize={fontSize}
        color={textColor}
        textTransform={"uppercase"}
        fontWeight={600}
        letterSpacing={"2px"}
        textAlign={textAlign}
      >
        {title}
      </Typography>
      <Divider
        color={dividerColor}
        sx={{ width: width, marginY: 2 , color:dividerColor}}
      />
    
    </Stack>
  );
};

export default Headline;
