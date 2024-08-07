import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
function Signup() {
    const [name, setName] = useState();
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const nav = useNavigate();
    const handleClick = () => setShow(!show);
    const postDetails = (pics) => {
        setLoading(true);
        if (pics === undefined) {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        console.log(pics);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chatApplication");
            data.append("cloud_name", "amitkr");
            fetch("https://api.cloudinary.com/v1_1/amitkr/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                    console.log(data.url.toString());
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        } else {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
    };
    const submitHandle = async() => {
        setLoading(true);
        if(!name || !username || !password || !confirmpassword)
        {
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
        if(password !== confirmpassword)
        {
            toast({
                title: "password do not match",
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
                headers : {
                    "Content-type" : "application/json",
                },
            };
            const {data} = await axios.post("/api/user",{name,username,password,pic},config);
            toast({
                title: "Registration Successful",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            nav("/home");
        } catch (error) {
            toast({
                title: "Please fill all the fields",
                description : error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }
    }
    return (
        <VStack spacing='5px'>
            <FormControl id='name' isRequired>
                <FormLabel>
                    Name
                </FormLabel>
                <Input placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id='username' isRequired>
                <FormLabel>
                    Username
                </FormLabel>
                <Input placeholder='Set the username' onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup >
                    <Input type={show ? "text" : "password"} placeholder='Set the password' onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width='4.5rem' >
                        <Button h="1.75rem" size='sm' onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>

                </InputGroup>
            </FormControl>
            <FormControl id='confirmpassword' isRequired>
                <FormLabel>
                    Confirm Password
                </FormLabel>
                <InputGroup >
                    <Input type={show ? "text" : "password"} placeholder='Enter password again' onChange={(e) => setConfirmpassword(e.target.value)} />
                    <InputRightElement width='4.5rem' >
                        <Button h="1.75rem" size='sm' onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='pic'>
                <FormLabel>Upload photo</FormLabel>
                <Input type='file' placeholder='choose pic for DP' p={1.5} accept='image/*' onChange={(e) => postDetails(e.target.files[0])} />
            </FormControl>
            <Button colorScheme='blue' width="100%" style={{ marginTop: 15 }} onClick={submitHandle} isLoading={loading}>
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup
