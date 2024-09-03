import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Spinner, Alert, AlertIcon, Box } from '@chakra-ui/react';

function Phrase() {
  const [phrases, setPhrases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhrases = async () => {
      try {
        const response = await axios.get('https://backend.accosmart.com.ng/api/admin/phrase', {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJiYWJhcm9zc2EiLCJpYXQiOjE3MjQxNjAyMDgsImV4cCI6MTcyNDE2MzgwOH0.ya1Ib9w91SXeqOtgNP1KiTOXZR2ycaV1egtNlA2-2Ls`,
          },
        });
        console.log(response?.data)
        setPhrases(response?.data); // Assuming the response data is an array of phrases
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhrases();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt="50px">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt="50px">
        <Alert status="error" borderRadius="md" w="50%">
          <AlertIcon />
          Error: {error}
        </Alert>
      </Box>
    );
  }

  return (
    <TableContainer>
      <Table variant="simple" mt={4}>
        <Thead>
          <Tr>
            <Th>Phrase ID</Th>
            <Th>Phrase</Th>
          </Tr>
        </Thead>
        <Tbody>
          {phrases.map((phrase, index) => (
            <Tr key={index}>
              <Td>{phrase?.id}</Td>
              <Td>{phrase?.phrasetext}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Phrase;