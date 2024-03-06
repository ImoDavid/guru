import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useParams } from "react-router-dom";

const practicals = [
  { title: "PHY111 QUIZ", id: "PHY111", url: "/performers/" },
  { title: "MTH111 QUIZ", id: "MTH111", url: "/performers/" },
  { title: "PHY121 QUIZ", id: "PHY121", url: "/performers/" },
  { title: "MTH121 QUIZ", id: "MTH121", url: "/performers/" },
  { title: "GST112 QUIZ", id: "GST111", url: "/performers/" },
];

const SinglePerformer = () => {
  const params = useParams();
  const Id = params.id;

  const item = practicals.find((practical) => practical.id === Id);
  const Felix = [
    {
      first_name: "simon",
      last_name: "peter",
      score: 100,
      dept: "computer science",
    },
    {
      first_name: "simon",
      last_name: "joseph",
      score: 100,
      dept: "agric econs",
    },
    {
      first_name: "simon",
      last_name: "joseph",
      score: 100,
      dept: "agric econs",
    },
    {
      first_name: "simon",
      last_name: "joseph",
      score: 100,
      dept: "agric econs",
    },
    {
      first_name: "simon",
      last_name: "joseph",
      score: 100,
      dept: "agric econs",
    },
    {
      first_name: "simon",
      last_name: "joseph",
      score: 100,
      dept: "agric econs",
    },
    {
      first_name: "simon",
      last_name: "joseph",
      score: 100,
      dept: "agric econs",
    },
    {
      first_name: "simon",
      last_name: "joseph",
      score: 100,
      dept: "agric econs",
    },
    {
      first_name: "simon",
      last_name: "joseph",
      score: 100,
      dept: "agric econs",
    },
    {
      first_name: "simon",
      last_name: "joseph",
      score: 100,
      dept: "agric econs",
    },
  ];

  return (
    <>
      <Container maxWidth={"md"}>
        <Box marginY={2}>
          <Typography
            textAlign={"center"}
            textTransform={"capitalize"}
            my={5}
            fontWeight={700}
            fontSize={["1.3rem", "2rem"]}
          >
            {" "}
            {`${item?.id} quiz leaderboard`}
          </Typography>
          <TableContainer component={Paper}>
            <Table width={["100%", "100%", 650]} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ textTransform: "capitalize", fontWeight: "700" }}
                  >
                    No
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ textTransform: "capitalize", fontWeight: "700" }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ textTransform: "capitalize", fontWeight: "700" }}
                  >
                    department
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ textTransform: "capitalize", fontWeight: "700" }}
                  >
                    Score
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Felix.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {row.first_name} {row.last_name}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {row.dept}
                    </TableCell>
                    <TableCell align="left">{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default SinglePerformer;
