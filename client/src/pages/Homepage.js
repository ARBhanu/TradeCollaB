import React, { useEffect, useState } from 'react';
import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom'; // Import Navigate
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

function Homepage() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userInfo')))
  }, []);

  if (user) return <Navigate to="/home" />;

  return (
    <Container maxW="xl" centerContent>
      <Text fontSize="5xl" color="blueviolet">TradeCollab</Text>
      <Box display="flex" justifyContent="center" justifyItems="center" p={3} bg="white" w="100%" m="40px 0 15px 0" borderRadius="1g" borderWidth="1px">
        <Text fontSize="3xl" justifyContent="center">🙏 WELCOME 🙏</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="1g" borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
