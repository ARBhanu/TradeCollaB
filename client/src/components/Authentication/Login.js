import React, { useState } from 'react';
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const nav = useNavigate();

    const handleClick = () => setShow(!show);

    const submitHandle = async () => {
        setLoading(true);
        if (!username || !password) {
            toast({
                title: "Please fill all the fields",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const response = await axios.post("/api/user/login", { username, password }, config);

            // Check if response contains data
            if (response && response.data) {
                const { data } = response;

                toast({
                    title: "Login Successful",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom",
                });

                localStorage.setItem("userInfo", JSON.stringify(data));
                console.log(JSON.stringify(data));
                setLoading(false);
                window.location.reload();

                nav("/home");
            } else {
                throw new Error("Invalid response from server");
            }
        } catch (error) {
            // Handle error gracefully
            console.error("Login failed:", error);
            toast({
                title: "Login Error",
                description: error.message || "An error occurred while logging in.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }
    };

    return (
        <VStack spacing='5px'>
            <FormControl id='username_fill' isRequired>
                <FormLabel>
                    Username
                </FormLabel>
                <Input placeholder='Enter the username' onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id='password_fill' isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup>
                    <Input type={show ? "text" : "password"} placeholder='Enter the password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width='4.5rem' >
                        <Button h="1.75rem" size='sm' onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button colorScheme='blue' width="100%" style={{ marginTop: 15 }} onClick={submitHandle} isLoading={loading} >
                Log in
            </Button>
        </VStack>
    );
}

export default Login;
