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

function OnBoarding({ setVarPage }) {
    setVarPage(false)
    const history = useHistory()
    return (
        <Flex w="100%" flex="1" align="center" px={["6%", "5%"]} direction={["column", "row"]}>
            <Flex className="onboardingBg" borderRadius="16px" h="155px" w={["100%", "44%"]} display={["flex", "none"]}></Flex>
            <Flex direction="column" justify={["flex-start", "center"]} mt={["7", "0"]} flex="1" mr={["0", "11%"]} mb={["12", "0"]}>
                <Text fontFamily="var" fontWeight="bold" fontSize={["32px", "64px"]} lineHeight="112%">Explore the<Text display={["block", "none"]}></Text> world of Stacks</Text>
                <Text mt="32px" color="#424248" mb={["28px", "32px"]}>Hiro Wallet connects you to Stacks apps while keeping your account, data, and crypto secure. Create your Stacks account to get started.</Text>
                <Flex mb="20px">
                    <Flex cursor="pointer" justify="center" padding="14px 16px" borderRadius="10px" color="#fff" bg="rgb(85, 70, 255)" transition="all 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s" fontSize="14px" _hover={{ bg: "rgb(68, 51, 255)" }} fontWeight="bold" mr="2" onClick={() => history.push("/back-up-secret-key")}>Create Stacks Account</Flex>
                </Flex>
                <Text color="#747478" fontSize="14px" mb="1px">Already have a Stacks account?</Text>
                <Flex cursor="pointer" color="rgb(85, 70, 255)" bg="transparent" transition="all 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s" fontSize="14px" _hover={{ textDecoration: "underline" }} onClick={() => {
                    history.push("/sign-in")
                }}>Sign in with Secret Key</Flex>
            </Flex>
            <Flex className="onboardingBg" borderRadius="16px" py={["70%", "29%"]} w={["100%", "44%"]} display={["none", "flex"]}></Flex>
        </Flex>
    )
}


export default OnBoarding;