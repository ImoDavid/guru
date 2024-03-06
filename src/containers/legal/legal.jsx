import React from "react";
import { Container, styled, Typography, Box } from "@mui/material";

const StyledHeading = styled(Typography)({
  fontSize: "1rem",
  margin: "1rem 0",
  fontWeight: 500,
});
const StyledP = styled(Typography)({
  fontSize: "0.8rem",
  margin: "1rem 0",
  textTransform: "capitalize",
});
const Styledul = styled(Box)({
  fontSize: "0.8rem",
  margin: "1rem 0",
  textTransform: "capitalize",
});
const Legal = () => {
  return (
    <>
      <Box bgcolor={"#FBF5F5"} minHeight={"88vh"} p={[2, 5]}>
        <Container maxWidth={"lg"}>
          <Box bgcolor={"white"} p={[2, 5]}>
            <Typography
              fontSize={"1.5rem"}
              fontWeight={500}
              variant="h3"
              my={5}
            >
              CalixGuru Terms and Conditions
            </Typography>
            <Typography fontSize={"1rem"} variant="p" my={[2, 5]}>
              December 2023
            </Typography>
            <StyledHeading>Introduction</StyledHeading>
            <StyledP>
              Welcome to CalixGuru, your ultimate schooling companion. These
              Terms and Conditions ("T&C") govern your use of our
              website("Service"). By using our Service, you agree to comply with
              and be bound by these T&C.
            </StyledP>
            <StyledHeading>Acceptance of Terms</StyledHeading>
            <StyledP>
              By accessing or using the CalixGuru Service, you agree to adhere
              to these T&C. If you do not agree with any part of these T&C, you
              must not use the Service.
            </StyledP>
            <StyledHeading>Modification of Terms</StyledHeading>
            <StyledP>
              CalixGuru reserves the right to modify these T&C at any time. We
              will notify users of any changes by posting the new T&C on this
              page. Your continued use of the Service after any such change
              constitutes your acceptance of the new T&C.
            </StyledP>
            <StyledHeading>User Responsibilities</StyledHeading>
            <StyledP>
              as a user of calixGuru, you agree to:
              <ul>
                <li>
                  <Box display={"inline-block"} fontWeight={500}>
                    Compliance with Laws:
                  </Box>{" "}
                  Use the Service in compliance with all applicable local laws
                  and regulations, including but not limited to data protection
                  and privacy laws.
                </li>
                <li>
                  <Box display={"inline-block"} fontWeight={500}>
                    Account Security:
                  </Box>{" "}
                  Maintain the confidentiality of your account information,
                  including your password, and immediately notify CalixGuru of
                  any unauthorized use of your account.
                </li>
                <li>
                  <Box display={"inline-block"} fontWeight={500}>
                    Commercial Use:
                  </Box>{" "}
                  Not to use the Service for any commercial purposes, including
                  advertising or solicitation, without the express written
                  consent of CalixGuru.
                </li>
                <li>
                  <Box display={"inline-block"} fontWeight={500}>
                    Data Mining:
                  </Box>{" "}
                  Not to engage in any data mining, data harvesting, data
                  extracting, or any other similar activity in relation to this
                  Service, or while using this Service.
                </li>

                <li>
                  <Box display={"inline-block"} fontWeight={500}>
                    Spamming:
                  </Box>{" "}
                  Not to engage in spamming, phishing, or sending unsolicited
                  messages.
                </li>
                <li>
                  <Box display={"inline-block"} fontWeight={500}>
                    Malicious Activity:
                  </Box>{" "}
                  Not to engage in any activity that interferes with or disrupts
                  the Service, or the servers and networks connected to the
                  Service.
                </li>
                <li>
                  <Box display={"inline-block"} fontWeight={500}>
                    Reporting:
                  </Box>{" "}
                  To report any activity or content that violates these T&C to
                  CalixGuru immediately.
                </li>
              </ul>
            </StyledP>

            <StyledHeading>
              Limitations of Liability and Disclaimers
            </StyledHeading>
            <StyledP>
              CalixGuru is provided "as is," and we make no guarantees about the
              reliability or availability of our Service. We disclaim all
              warranties, both express and implied, to the extent permitted by
              local law. CalixGuru shall not be liable for any damages or losses
              resulting from the use of our Service, except as required by local
              law.
            </StyledP>
            <StyledHeading>Intellectual Property</StyledHeading>
            <StyledP>
              All content, features, and functionality on CalixGuru are owned by
              CalixGuru, its licensors, or other content providers. These are
              protected by Local and international copyright, trademark, and
              other intellectual property laws.
            </StyledP>
            <StyledHeading>Termination</StyledHeading>
            <StyledP>
              calixGuru reserves the right to terminate or suspend your account
              and access to the Service at our sole discretion, without notice,
              for conduct that we believe violates these T&C or is harmful to
              other users of the Service, us, or third parties, or for any other
              reason.
            </StyledP>
            <StyledHeading>Governing Law</StyledHeading>
            <StyledP>
              These T&C are governed by the laws of Nigeria, without regard to
              its conflict of law principles.
            </StyledP>
            <StyledHeading>Contact Information</StyledHeading>
            <StyledP>
              For any questions about these T&C, please contact us at
              calixguru@gmail.com
            </StyledP>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Legal;
