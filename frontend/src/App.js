import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import AllRoute from "./routes/AllRoute";
import Navbar from "./components/UserComponents/UserNavbar";
import WelcomeScreen from "./components/WelcomeScreen";
import { Box, Flex } from "@chakra-ui/react";


function App() {
  const userStore = useSelector((store)=>store.UserReducer);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  // Show welcome screen on first load
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      setShowWelcome(false);
    } else {
      localStorage.setItem('hasSeenWelcome', 'true');
    }
  }, []);

  return (
    <div className="App">
      {showWelcome && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}
      
      {!showWelcome && (
        <>
          {userStore?.role === "admin" || userStore?.role==='teacher' ? <Navbar/> : null}
          <AllRoute />
          
          {/* Creative Floating Designer Signature */}
          <Box
            position="fixed"
            bottom="20px"
            right="20px"
            zIndex={1000}
            opacity={0.7}
            _hover={{
              opacity: 1,
              transform: 'scale(1.1)',
              transition: 'all 0.3s ease'
            }}
          >
            <Box
              bg="rgba(255,255,255,0.95)"
              px={4}
              py={2}
              borderRadius="20px"
              boxShadow="0 4px 15px rgba(0,0,0,0.15)"
              cursor="pointer"
              onClick={() => {
                localStorage.removeItem('hasSeenWelcome');
                window.location.reload();
              }}
              title="Click to see welcome screen again"
              _hover={{
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                transform: 'scale(1.05)'
              }}
            >
              <Flex align="center" gap={2}>
                <Box
                  width="18px"
                  height="18px"
                  borderRadius="50%"
                  bg="linear-gradient(135deg, #ff6b6b, #ee5a24)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                >
                  U
                </Box>
                <Box
                  width="18px"
                  height="18px"
                  borderRadius="50%"
                  bg="linear-gradient(135deg, #4834d4, #686de0)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                >
                  P
                </Box>
                <Box
                  width="18px"
                  height="18px"
                  borderRadius="50%"
                  bg="linear-gradient(135deg, #00b894, #00cec9)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                >
                  S
                </Box>
              </Flex>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
}

export default App;
