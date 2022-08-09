import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px 0;
`;

const PaginationComp = ({ totalPages, setPage }) => {
  const handleChange = (e, value) => {
    // console.log(value);
    setPage(value);
  };
  return (
    <Container>
      <Stack spacing={2}>
        <Pagination
          count={40}
          showFirstButton
          showLastButton
          onChange={handleChange}
        />
      </Stack>
    </Container>
  );
};

export default PaginationComp;
