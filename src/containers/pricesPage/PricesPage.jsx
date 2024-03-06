import React from "react";
import { colors } from "../../styles/globals";
import { Pricing } from "../../components/homepage";
import { Container, styled, Stack, Box, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  // background: `url(https://res.cloudinary.com/dfljnnxln/image/upload/v1700576621/pexels-pixabay-267885_iem48o.jpg)`,
  backgroundColor: colors.PRIMARY,

  "@media screen and (max-width: 1200px)": {},
});

const PricesPage = () => {
  return (
    <>
      <StyledBox minHeight={["20vh", "30vh"]}>
        <Container>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <Typography
              fontSize={["2rem", "2.8rem"]}
              color={colors.WHITE}
              fontWeight={700}
              lineHeight={["20vh", "30vh"]}
              textTransform={"capitalise"}
            >
              Packages
            </Typography>
          </Stack>
        </Container>
      </StyledBox>
      <Container>
        <Pricing />
      </Container>
    </>
  );
};

export default PricesPage;
