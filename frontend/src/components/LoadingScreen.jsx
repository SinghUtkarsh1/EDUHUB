import React from 'react';
import { Box, Flex, Text, keyframes } from '@chakra-ui/react';
import Logo from './Logo';

const LoadingScreen = () => {
  // Awesome loading animations
  const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  `;

  const pulse = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  `;

  const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      bg="linear-gradient(135deg, #0056d2 0%, #42A5F5 50%, #90CAF9 100%)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={9999}
      animation={`${fadeIn} 1s ease-out`}
    >
      <Flex direction="column" align="center" spacing={8}>
        {/* Main Logo */}
        <Box animation={`${fadeIn} 1s ease-out 0.5s both`}>
          <Logo 
            size="large" 
            variant="white" 
            animated={true}
          />
        </Box>
        
        {/* Loading Text */}
        <Text
          color="white"
          fontSize="xl"
          fontWeight="semibold"
          mt={8}
          animation={`${pulse} 2s ease-in-out infinite`}
          textShadow="0 2px 4px rgba(0,0,0,0.3)"
        >
          Loading amazing learning experience...
        </Text>
        
        {/* Loading Spinner */}
        <Box
          mt={6}
          width="40px"
          height="40px"
          border="3px solid rgba(255,255,255,0.3)"
          borderTop="3px solid white"
          borderRadius="50%"
          animation={`${rotate} 1s linear infinite`}
        />
        
        {/* Decorative Elements */}
        <Flex mt={8} spacing={4}>
          {[...Array(3)].map((_, i) => (
            <Box
              key={i}
              width="8px"
              height="8px"
              bg="white"
              borderRadius="50%"
              opacity={0.7}
              animation={`${pulse} 1.5s ease-in-out infinite ${i * 0.2}s`}
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default LoadingScreen;
