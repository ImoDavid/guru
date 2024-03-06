import React, { useState } from "react";
import { Container, Stack, styled, Typography, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../commons";
import { FaCopy } from "react-icons/fa";
import { colors } from "../../styles/globals";

const plans = [
  {
    id: "basic",
    name: "basic plan",
    amount: "500",
  },
  {
    id: "silver",
    name: "silver plan",
    amount: "1,500",
  },
  {
    id: "platinum",
    name: "platinum plan",
    amount: "2,500",
  },
];

const SinglePlan = () => {
  const params = useParams();
  const history = useNavigate();
  const Id = params.id;

  const item = plans.find((plan) => plan.id === Id);
  const [accountNumber, setAccountNumber] = useState("4331654321");
  const [accountNumber2, setAccountNumber2] = useState("4331654300");
  const [aza, setAza] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 5000);
    } catch (error) {
      
    }
  };

  const handleClick = () => {
    history(-1);
  };

  return (
    <>
      <Container maxWidth={"md"}>
        <Box my={9} p={[2, 3]}>
          <Typography
            textAlign={"center"}
            textTransform={"capitalize"}
            variant="p"
          >
            make a bank Transfer of {<>&#8358; {item.amount}</>} to the account
            details provided below
          </Typography>
          <Box bgcolor={"#FBF5F5"} textTransform={"capitalize"} p={3} my={3}>
            <Stack my={2}>
              <Stack
                my={2}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Box>
                  <Typography variant="p">bank name</Typography>
                  <Typography>{aza ? "moniepoint" : "polaris bank"}</Typography>
                </Box>
                <Box onClick={() => setAza(!aza)} sx={{ cursor: "pointer" }}>
                  change bank
                </Box>
              </Stack>
            </Stack>
            <Stack my={2}>
              <Typography variant="p">account name</Typography>
              <Typography>{aza ? "imo david" : "felix otu"}</Typography>
            </Stack>
            <Stack
              my={2}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <Typography variant="p">account number</Typography>
                <Typography>{aza ? accountNumber : accountNumber2}</Typography>
              </Box>
              <Box
                onClick={() =>
                  handleCopyClick(aza ? accountNumber : accountNumber2)
                }
                sx={{ cursor: "pointer" }}
              >
                {isCopied ? "Copied!" : <FaCopy size={"1rem"} />}
              </Box>
            </Stack>
            <Stack my={2}>
              <Typography variant="p"> amount</Typography>
              <Typography>{<>&#8358; {item.amount}</>}</Typography>
            </Stack>
          </Box>
          <Typography
            textAlign={"center"}
            textTransform={"capitalize"}
            variant="p"
          >
            any important information concerning the transfer goes here
          </Typography>

          <Stack
            flexDirection={"row"}
            my={2}
            alignItems={"center"}
            justifyContent={["center", "flex-start"]}
          >
            <Box mr={2}>
              <PrimaryButton
                width={["150px", "300px"]}
                text={`i've sent the money`}
              />
            </Box>
            <Box>
              <PrimaryButton
                width={["150px", "300px"]}
                text={`cancel`}
                textColor={colors.PRIMARY}
                BDColor={colors.PRIMARY}
                hoverBDColor={colors.WHITE}
                variant={"outlined"}
                hoverBGColor={colors.PRIMARY}
                hoverTextColor={colors.WHITE}
                BGColor={colors.WHITE}
                onClick={handleClick}
              />
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default SinglePlan;
