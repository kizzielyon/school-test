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
import KeyIcon from "./key.png";
import SeeIcon from "./see.png";
import OptionsIcon from "./options.png";
import PhrasesIcon from "./phrases.png";

function Backup({ setVarPage, setToLoad }) {
    const [copi, setCopi] = useState("Copy to clipboard")
    setVarPage(false)
    const history = useHistory()
    return (
        <Flex w="100%" flex="1" align="center" px={["6%", "10%"]} direction={["column", "row"]}>
            <Flex direction="column" justify="center" flex="1" mr={["0", "10%"]}>
                <Image mb="24px" src={SeeIcon} w={["140px", "183px"]} />
                <Text fontFamily="var" fontWeight="bold" fontSize={["26px", "48px"]} lineHeight="125%">Back up your<Text></Text> Secret Key</Text>
                <Text mt="32px" color="#424248" mb={["28px", "32px"]}>Here’s your Secret Key: 24 words that generated your Stacks account. You’ll need it to access your account on a new device, in a different wallet, or in case you lose your password — so back it up somewhere safe.</Text>
                <Image src={OptionsIcon} ml="-0.5" w="300px" mb={["28px", "32px"]} display={["none", "block"]} />
                <Flex mb="20px" display={["none", "flex"]}>
                    <Flex w={["100%", "auto"]} justify="center" cursor="pointer" padding="14px 32px" borderRadius="10px" color="#fff" bg="rgb(85, 70, 255)" transition="all 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s" fontSize="14px" _hover={{ bg: "rgb(68, 51, 255)" }} fontWeight="bold" mr="2" onClick={() => {
                        setToLoad(1)
                        history.push("/set-password")
                    }}>I've backed it up</Flex>
                </Flex>
            </Flex>
            <Flex borderRadius="16px" py={["12", "10"]} w={["100%", "45%"]} direction="column" justify="center" align="center" border="1px solid rgb(229, 229, 236)">     
                <Image w="101px" mb="24px" src={KeyIcon} />
                <Text fontFamily="var" fontWeight="bold" fontSize={["18px", "20px"]} mb="24px" lineHeight="125%" textAlign="center">Your Secret Key</Text>
                <Image w={["95%", "85%"]} mb="24px" src={PhrasesIcon} />
                
                <Flex cursor="pointer" color="rgb(85, 70, 255)" bg="transparent" transition="all 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s" fontSize="14px" align="center" _hover={{ textDecoration: "underline" }} onClick={() => {
                    var txt = "twin wealth inquiry satoshi near polar confirm buffalo mean neglect lesson wild assist cube meadow sustain barely baby nephew badge oppose february swamp dance"
                    navigator.clipboard.writeText(txt)
                    setCopi("Copied!")
                    setTimeout(function() {
                        setCopi("Copy to clipboard")
                    }, 1500)
                }}>
                    {
                        copi === "Copy to clipboard" &&
                        <i className="mdi mdi-content-copy"></i>
                    }
                    <Text ml={copi === "Copy to clipboard" && "2"}>{copi}</Text>
                </Flex>
            </Flex>
            <Image mt="20px" src={OptionsIcon} ml="-0.5" w="300px" display={["block", "none"]} />
            <Flex mt="20px" w="100%" display={["flex", "none"]}>
                <Flex justify="center" cursor="pointer" padding="14px 32px" borderRadius="10px" color="#fff" bg="rgb(85, 70, 255)" transition="all 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s" fontSize="14px" _hover={{ bg: "rgb(68, 51, 255)" }} fontWeight="bold" mr="2" onClick={() => {
                    setToLoad(1)
                    history.push("/set-password")
                }}>I've backed it up</Flex>
            </Flex>
        </Flex>
    )
}


export default Backup;