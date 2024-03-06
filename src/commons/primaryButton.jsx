import React from "react";
import { styled, Button } from "@mui/material";
import { motion } from "framer-motion";
import { colors } from "../styles/globals";

const PrimaryButton = ({
  text,
  textColor = colors.WHITE,
  width,
  BGColor = colors.PRIMARY,
  hoverBGColor = BGColor,
  variant,
  BDColor = "none",
  pad = "0.4rem",
  marTop = "0rem",
  hoverBDColor = "none",
  hoverTextColor = textColor,
  onClick,
  End = false,
  icon,
}) => {
  return (
    <>
      <Button
        variant={variant}
        onClick={onClick}
        component={motion.div}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        startIcon={End ? icon : ""}
        sx={{
          padding: pad,
          color: textColor,
          backgroundColor: BGColor,
          borderColor: BDColor,
          textTransform: "capitalize",
          fontWeight:700,
          marginTop: marTop,
          width: width,

          boxShadow: "none",
          "&:hover": {
            backgroundColor: hoverBGColor,
            borderColor: hoverBDColor,
            boxShadow: "none",
            color: hoverTextColor,
          },
        }}
      >
        {text}
      </Button>
    </>
  );
};

export default PrimaryButton;
