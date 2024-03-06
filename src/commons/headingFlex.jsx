import React from "react";
import {
  Container,
  Stack,
  styled,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import { colors } from "../styles/globals";

const HeadingFlex = ({
  jusConM = "center",
  fontsize = "0.7rem",
  price,
  title,
}) => {
  return (
    <>
      <Stack
        alignItems={"center"}
        justifyContent={[jusConM, "flex-start"]}
        flexDirection={"row"}
      >
        <Typography
          variant={"h2"}
          fontSize={fontsize}
          textTransform={"uppercase"}
          fontWeight={600}
          letterSpacing={"2px"}
          
          mr
        >
          {title}
        </Typography>
        <Typography bgcolor={"#FBF6F6"} borderRadius={"15px"}>
          {price}
        </Typography>
      </Stack>
      <Divider color={colors.PRIMARY} sx={{ width: "100%", marginY: 2 }} />
    </>
  );
};

export default HeadingFlex;
