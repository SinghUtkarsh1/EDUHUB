import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, keyframes, Image } from '@chakra-ui/react';
import Logo from './Logo';

const WelcomeScreen = ({ onComplete }) => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Awesome animations
  const fadeInUp = keyframes`
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  `;

  const fadeInScale = keyframes`
    0% { opacity: 0; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1); }
  `;

  const fadeInDown = keyframes`
    0% { opacity: 0; transform: translateY(-30px); }
    100% { opacity: 1; transform: translateY(0); }
  `;

  const float = keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  `;

  const glow = keyframes`
    0%, 100% { filter: drop-shadow(0 0 20px rgba(0, 86, 210, 0.5)); }
    50% { filter: drop-shadow(0 0 30px rgba(0, 86, 210, 0.8)); }
  `;

  const pulse = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  `;

  useEffect(() => {
    // Start the animation sequence
    const timer1 = setTimeout(() => setShowWelcome(true), 500);
    const timer2 = setTimeout(() => setShowLogo(true), 1500);
    const timer3 = setTimeout(() => setShowTagline(true), 2500);
    const timer4 = setTimeout(() => setShowSubtitle(true), 3500);
    const timer5 = setTimeout(() => setFadeOut(true), 5500);
    const timer6 = setTimeout(() => onComplete(), 6500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [onComplete]);

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
      opacity={fadeOut ? 0 : 1}
      transition="opacity 1s ease-in-out"
      overflow="hidden"
    >
      {/* Background animated elements */}
      <Box
        position="absolute"
        top="10%"
        right="10%"
        width="300px"
        height="300px"
        borderRadius="50%"
        bg="rgba(255,255,255,0.1)"
        animation={`${float} 6s ease-in-out infinite`}
      />
      
      <Box
        position="absolute"
        bottom="15%"
        left="15%"
        width="200px"
        height="200px"
        borderRadius="50%"
        bg="rgba(255,255,255,0.08)"
        animation={`${float} 8s ease-in-out infinite 1s`}
      />

      <Box
        position="absolute"
        top="50%"
        left="20%"
        width="150px"
        height="150px"
        borderRadius="50%"
        bg="rgba(255,255,255,0.06)"
        animation={`${float} 7s ease-in-out infinite 2s`}
      />

      {/* Main content */}
      <Flex direction="column" align="center" spacing={8}>
        {/* Welcome Text */}
        {showWelcome && (
          <Text
            fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
            fontWeight="extrabold"
            color="white"
            textAlign="center"
            textShadow="0 4px 8px rgba(0,0,0,0.3)"
            animation={`${fadeInUp} 1.5s ease-out both`}
            mb={8}
            fontFamily="Poppins, sans-serif"
            letterSpacing="tight"
          >
            Welcome to
          </Text>
        )}

        {/* EDUHUB Logo */}
        {showLogo && (
          <Box
            animation={`${fadeInScale} 1.5s ease-out both, ${glow} 3s ease-in-out infinite`}
            _hover={{
              transform: 'scale(1.05)',
              transition: 'all 0.3s ease'
            }}
            mb={4}
          >
            <Logo 
              size="large" 
              variant="white" 
              animated={true}
            />
          </Box>
        )}

        {/* Custom Favicon Logo */}
        {showLogo && (
          <Box
            animation={`${fadeInScale} 1.5s ease-out both 0.5s`}
            _hover={{
              transform: 'scale(1.1) rotate(5deg)',
              transition: 'all 0.3s ease'
            }}
            mb={6}
          >
            <Image
              src="/favicon.ico.jpg"
              alt="EDUHUB Logo"
              width={{ base: "80px", md: "100px", lg: "120px" }}
              height={{ base: "80px", md: "100px", lg: "120px" }}
              borderRadius="20px"
              boxShadow="0 8px 25px rgba(0,0,0,0.3)"
              border="3px solid rgba(255,255,255,0.3)"
              _hover={{
                boxShadow: '0 12px 35px rgba(0,0,0,0.4)',
                border: '3px solid rgba(255,255,255,0.5)'
              }}
            />
          </Box>
        )}

        {/* Tagline */}
        {showTagline && (
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="semibold"
            color="white"
            textAlign="center"
            maxW="600px"
            px={6}
            mt={8}
            animation={`${fadeInDown} 1.5s ease-out both`}
            textShadow="0 2px 4px rgba(0,0,0,0.3)"
            opacity={0.9}
          >
            Where Learning Meets Innovation
          </Text>
        )}

        {/* Subtitle */}
        {showSubtitle && (
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            textAlign="center"
            maxW="500px"
            px={6}
            mt={4}
            animation={`${fadeInUp} 1.5s ease-out both`}
            textShadow="0 2px 4px rgba(0,0,0,0.3)"
            opacity={0.8}
          >
            Experience the future of education with our cutting-edge platform
          </Text>
        )}

        {/* Creative Designer Signature */}
        {showSubtitle && (
          <Box
            mt={8}
            p={6}
            borderRadius="25px"
            bg="linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))"
            backdropFilter="blur(15px)"
            border="2px solid rgba(255,255,255,0.3)"
            animation={`${fadeInScale} 1.5s ease-out both`}
            _hover={{
              transform: 'scale(1.05)',
              bg: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.15))',
              transition: 'all 0.3s ease'
            }}
            position="relative"
            overflow="hidden"
          >
            {/* Animated background pattern */}
            <Box
              position="absolute"
              top="-50%"
              left="-50%"
              width="200%"
              height="200%"
              bg="conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent)"
              animation={`${float} 8s linear infinite`}
            />
            
            <Flex direction="column" align="center" spacing={3} position="relative" zIndex={1}>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="white"
                fontWeight="bold"
                textAlign="center"
                textShadow="0 2px 4px rgba(0,0,0,0.3)"
                letterSpacing="wide"
                fontFamily="Poppins, sans-serif"
                mb={2}
              >
                ✨ Crafted with Excellence ✨
              </Text>
              
              {/* Creative signature design */}
              <Flex align="center" gap={3} mb={3}>
                <Box
                  width="40px"
                  height="40px"
                  borderRadius="50%"
                  bg="linear-gradient(135deg, #ff6b6b, #ee5a24)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="lg"
                  fontWeight="bold"
                  color="white"
                  animation={`${pulse} 2s ease-in-out infinite`}
                >
                  U
                </Box>
                <Box
                  width="40px"
                  height="40px"
                  borderRadius="50%"
                  bg="linear-gradient(135deg, #4834d4, #686de0)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="lg"
                  fontWeight="bold"
                  color="white"
                  animation={`${pulse} 2s ease-in-out infinite 0.5s`}
                >
                  P
                </Box>
                <Box
                  width="40px"
                  height="40px"
                  borderRadius="50%"
                  bg="linear-gradient(135deg, #00b894, #00cec9)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="lg"
                  fontWeight="bold"
                  color="white"
                  animation={`${pulse} 2s ease-in-out infinite 1s`}
                >
                  S
                </Box>
              </Flex>
              
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="white"
                opacity={0.9}
                textAlign="center"
                fontStyle="italic"
                fontWeight="medium"
              >
                Creative Developer & UI/UX Designer
              </Text>
            </Flex>
          </Box>
        )}

        {/* Loading indicator */}
        {showSubtitle && (
          <Flex mt={12} spacing={4}>
            {[...Array(3)].map((_, i) => (
              <Box
                key={i}
                width="12px"
                height="12px"
                bg="white"
                borderRadius="50%"
                opacity={0.8}
                animation={`${pulse} 1.5s ease-in-out infinite ${i * 0.2}s`}
              />
            ))}
          </Flex>
        )}

        {/* Decorative elements */}
        <Box
          position="absolute"
          bottom="10%"
          right="20%"
          width="100px"
          height="100px"
          borderRadius="50%"
          bg="rgba(255,255,255,0.1)"
          animation={`${float} 5s ease-in-out infinite 3s`}
        />

        {/* Creative Designer Signature - Bottom Left */}
        <Box
          position="absolute"
          bottom="5%"
          left="5%"
          opacity={0.8}
          animation={`${fadeInUp} 2s ease-out both 4s`}
        >
          <Flex
            direction="column"
            align="center"
            gap={2}
            _hover={{
              opacity: 1,
              transform: 'scale(1.1)',
              transition: 'all 0.3s ease'
            }}
          >
            {/* Animated initials */}
            <Flex gap={1}>
              <Box
                width="20px"
                height="20px"
                borderRadius="50%"
                bg="linear-gradient(135deg, #ff6b6b, #ee5a24)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="xs"
                fontWeight="bold"
                color="white"
                animation={`${pulse} 2s ease-in-out infinite`}
              >
                U
              </Box>
              <Box
                width="20px"
                height="20px"
                borderRadius="50%"
                bg="linear-gradient(135deg, #4834d4, #686de0)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="xs"
                fontWeight="bold"
                color="white"
                animation={`${pulse} 2s ease-in-out infinite 0.3s`}
              >
                P
              </Box>
                              <Box
                  width="20px"
                  height="20px"
                  borderRadius="50%"
                  bg="linear-gradient(135deg, #00b894, #00cec9)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                  animation={`${pulse} 2s ease-in-out infinite 0.6s`}
                >
                  S
                </Box>
            </Flex>
            <Text
              fontSize="xs"
              color="white"
              fontWeight="medium"
              textAlign="center"
              fontFamily="Poppins, sans-serif"
              letterSpacing="wide"
              opacity={0.9}
            >
              ✨ Designer ✨
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default WelcomeScreen;
