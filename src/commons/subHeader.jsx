/* eslint-disable react/prop-types */
import React from "react";
import { Box, Stack, styled, Typography, Avatar } from "@mui/material";
import { PrimaryButton } from "../commons";
import { colors } from "../styles/globals";

const StyledAboutBox = styled(Box)({
  width: "100%",
  height: "400px",
});

const StyledTextBox = styled(Box)({
  lineHeight: "1rem",
  "@media screen and (max-width: 1200px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const SubHeader = ({
  btext = "see our packages",
  image,
  title,
  des,
  fontSize = "2.5rem",
}) => {
  return (
    <>
      <Stack direction={["column", "row"]} paddingY={2} marginBottom={"2rem"}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          width={["100%", "80%"]}
          marginY={"3rem"}
          marginRight={["3rem"]}
        >
          <StyledTextBox textAlign={["center", "left"]}>
            <Typography  variant="h1" fontSize={fontSize} fontWeight={600}>
              {title}
            </Typography>
            <Typography my={3}  fontSize={"1rem"} color={colors.GREY} >
              {des}
            </Typography>

            <PrimaryButton text={btext} variant={"outlined"}  width={"300px"}/>
          </StyledTextBox>
          <Box></Box>
        </Stack>
        <StyledAboutBox
          sx={{
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Stack>
    </>
  );
};

export default SubHeader;
