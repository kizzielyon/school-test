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
import Globe from "./globe.png";


function Req({ setVarPage }) {
    setVarPage(false)
    const history = useHistory()
	const captions = ["Send data about page views, clicks, and errors", "This data is tied to randomly-generated IDs, and not personal data such as your Stacks address, keys, balances or IP address", "This data is used to generate and send crash reports, help fix errors, and analyze statistics"]

	return (
        <Flex flex="1" direction="column" px={["6%", "33%"]} justify={["flex-start", "center"]} pb="5">
            <Image src={Globe} w={["73px", "86px"]} mb={["28px", "32px"]} />
            <Text fontSize={["22px", "24px"]} fontWeight="bold" fontFamily="var" mb={["28px", "32px"]}>Help us improve</Text>
            <Text color="#424248" mb={["28px", "32px"]}>Hiro would like to gather deidentified service usage data to help improve the experience of using Stacks apps and the wallet. </Text>
            <Flex w="100%" direction="column" color="#747478" mb={["28px", "32px"]} fontSize={["14px", "16px"]}>
                {
                    captions.map((item, index) => (
                        <Flex w="100%" color="#747478" mb="3">
                            <i className="mdi mdi-check" style={{ color: "inherit" }}></i>
                            <Text ml="2">{item}</Text>
                        </Flex>
                    ))
                }
            </Flex>
            <Flex w="100%">
                <Flex cursor="pointer" padding="12px 16px" borderRadius="10px" color="#fff" bg="rgb(85, 70, 255)" transition="all 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s" fontSize="14px" _hover={{ bg: "rgb(68, 51, 255)" }} fontWeight="bold" mr="2" onClick={() => {
                    localStorage.setItem("hiroLogged", true)
                    history.push("/onboarding")
                }}>Allow</Flex>

                <Flex cursor="pointer" padding="12px 16px" borderRadius="10px" color="rgb(85, 70, 255)" bg="transparent" transition="all 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s" fontSize="14px" _hover={{ textDecoration: "underline" }} fontWeight="bold" onClick={() => {
                    localStorage.setItem("hiroLogged", true)
                    history.push("/onboarding")
                }}>Deny</Flex>
            </Flex>
        </Flex>
	)
}

export default Req;
