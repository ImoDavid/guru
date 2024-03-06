import React from "react";
import { Link as RRLink, NavLink } from "react-router-dom";
import {
  Box,
  styled,
  Stack,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { colors } from "../../styles/globals";

const StyledFooterBox = styled(Box)({
  width: "100%",
  margin: "2rem 0",
  "@media screen and (min-width: 600px)": {
    width: "18%",
    margin: "0 1rem",
  },
});

const StyledLinkBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  textTransform: "capitalize",
  fontSize: "0.9rem",
  fontWeight: "300",
  fontFamily: "Jost",
  marginBottom: "1rem",
});

const StyledLink = styled(RRLink)({
  textDecoration: "none",
  color: colors.FOOTER_TEXT,
  "&:hover": {
    
  },
});

const StyledHeading = styled(Typography)({
  color: colors.WHITE,
  fontSize: "0.8rem",
  fontWeight: "700",
  marginBottom: "0.5rem",
  marginTop: "0.5rem",
  textTransform: "uppercase",
});
const StyledPg = styled(Typography)({
  color: colors.FOOTER_TEXT,
  fontSize: "0.6rem",
});

const Footer = () => {
  return (
    <>
      <Box bgcolor={colors.FOOTER} px={[1, 10]} py={[8, 10]}>
        <Container maxWidth={"lg"}>
          <Stack direction={["column", "row"]} mb={5}>
            <StyledFooterBox>
              <Typography fontWeight={700} variant="h6" fontSize={"1.5rem"}>
                <StyledLink color={"white"} to={"/"}>
                  CalixGuru
                </StyledLink>
              </Typography>
            </StyledFooterBox>
            <Divider sx={{ display: ["block", "none"] }} color={colors.GREY} />
            <StyledFooterBox>
              <StyledHeading variant="h6">index</StyledHeading>

              <StyledLinkBox>
                <StyledLink to={"/plans"} underline="none">
                  subscribe
                </StyledLink>
              </StyledLinkBox>
            </StyledFooterBox>
            <Divider sx={{ display: ["block", "none"] }} color={colors.GREY} />
            <StyledFooterBox>
              <StyledHeading variant="h6">resources</StyledHeading>

              <StyledLinkBox>
                <StyledLink to={"/contact"} underline="none">
                  contact us
                </StyledLink>
              </StyledLinkBox>
            </StyledFooterBox>
            <Divider sx={{ display: ["block", "none"] }} color={colors.GREY} />
            <StyledFooterBox>
              <StyledHeading variant="h6">legal</StyledHeading>

              <StyledLinkBox>
                <StyledLink to={"/legal"} underline="none">
                  T&C
                </StyledLink>
              </StyledLinkBox>
            </StyledFooterBox>
          </Stack>
          <Divider color={colors.GREY} />

          <StyledPg mt={2}>
            &#169; Copyrights 2023. All rights reserved.
          </StyledPg>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
