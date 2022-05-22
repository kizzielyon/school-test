import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { 
	Flex,
	Text,
  	Image,
  	ChakraProvider,
} from "@chakra-ui/react";
import "./App.scss";
import "./mdi/css/materialdesignicons.css";
import Logo from "./logo.png";
import Req from './req';
import LoadPage from './loadPage';
import OnBoarding from "./onboarding";
import SignIn from "./signin";
import SetPass from "./pass";
import Backup from "./back";

function App() {
	const [varPage, setVarPage] = useState(false)
	const [toLoad, setToLoad] = useState(0)

	return (
		<ChakraProvider>
			<Flex fontFamily="'Inter', sans-serif" w="100%" direction="column" minHeight="100vh">			
				<Router>
					<Flex w="100%" py={!varPage ? "6" : "4"} px={["6%", "4"]} align="center" justify={varPage ? "center" : "flex-start"}>
						{
							varPage &&
							<Flex justify={["flex-start"]} w={["100%", "auto"]}>
								<Flex w="36px" h="36px" borderRadius="36px" bg="#fff" align="center" justify="center" transition="all 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s" _hover={{ bg: "rgb(229, 229, 236)" }} cursor="pointer" onClick={() => {
									if(varPage) {
										document.getElementById('goBack').click()
									}
								}}>
									<i className="mdi mdi-arrow-left"></i>
								</Flex>
							</Flex>
						}
						<Flex align="center" fontFamily="var" w={varPage && "100%"} justify={varPage && "center"} display={[varPage ? "none" : "flex", "flex"]}>
							<Image src={Logo} h="20px" mr="2" />
							<Text mr="2"><Text as="span" fontWeight="bold">Hiro</Text> Wallet</Text>
							<Text letterSpacing="-0.01em" fontSize="9px" mt="6px" color="#747478">v3 . 9 . 0</Text>
						</Flex>
					</Flex>

					
					<Flex flex="1" direction="column" py="5" className="padder">
						<Switch>
							<Route path="/" exact><LoadPage /></Route>
							<Route path="/request-diagnostics"><Req setVarPage={setVarPage} /></Route>
							<Route path="/onboarding"><OnBoarding setVarPage={setVarPage} /></Route>
							<Route path="/sign-in"><SignIn setVarPage={setVarPage} setToLoad={setToLoad} /></Route>
							<Route path="/set-password"><SetPass setVarPage={setVarPage} toLoad={toLoad} /></Route>
							<Route path="/back-up-secret-key"><Backup setVarPage={setVarPage} setToLoad={setToLoad} /></Route>
							<Route><LoadPage /></Route>
						</Switch>
					</Flex>
				</Router>
			</Flex>
		</ChakraProvider>
	)
}

export default App;
