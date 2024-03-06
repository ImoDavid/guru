import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import { BiError } from "react-icons/bi";
import { colors } from "../../styles/globals";
import { PrimaryButton } from "../../commons";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box bgcolor="#FBF5F5">
        <Container maxWidth={"lg"}>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <Box
              paddingY={9}
              paddingX={[2, 0]}
              textAlign={"center"}
              height={["80vh", "60vh"]}
              width={["300px", "100%"]}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h1"
                fontSize={["100px", "150px"]}
                fontWeight={900}
                color={colors.PRIMARY}
              >
                {<BiError />}
              </Typography>
              <Typography
                variant="h6"
                textTransform={"uppercase"}
                fontWeight={"700"}
              >
                sorry we are having trouble finding that page !
              </Typography>
              <PrimaryButton
                width={"10rem"}
                variant={"contained"}
                text={"back to home"}
                pad="0.45rem"
                marTop="1rem"
                onClick={() => navigate("/home")}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Error;
