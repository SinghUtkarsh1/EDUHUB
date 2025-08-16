import React from 'react';
import { Box, Flex, Text, keyframes, VStack } from '@chakra-ui/react';
import Logo from './Logo';

const LogoShowcase = () => {
  // Awesome showcase animations
  const float = keyframes`
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(2deg); }
    50% { transform: translateY(-5px) rotate(-1deg); }
    75% { transform: translateY(-15px) rotate(1deg); }
  `;

  const glow = keyframes`
    0%, 100% { filter: drop-shadow(0 0 20px rgba(0, 86, 210, 0.5)); }
    50% { filter: drop-shadow(0 0 30px rgba(0, 86, 210, 0.8)); }
  `;

  const scale = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  `;

  const pulse = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  `;

  return (
    <Box
      py={20}
      bg="linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
      borderRadius="xl"
      boxShadow="0 20px 40px rgba(0,0,0,0.1)"
      overflow="hidden"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, transparent 30%, rgba(0, 86, 210, 0.05) 50%, transparent 70%)',
        animation: `${float} 8s ease-in-out infinite`
      }}
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="10%"
        right="10%"
        width="200px"
        height="200px"
        borderRadius="50%"
        bg="linear-gradient(135deg, rgba(0, 86, 210, 0.1), rgba(66, 165, 245, 0.1))"
        animation={`${scale} 6s ease-in-out infinite`}
      />
      
      <Box
        position="absolute"
        bottom="15%"
        left="15%"
        width="150px"
        height="150px"
        borderRadius="50%"
        bg="linear-gradient(135deg, rgba(144, 202, 249, 0.1), rgba(0, 86, 210, 0.1))"
        animation={`${scale} 8s ease-in-out infinite 1s`}
      />

      <VStack spacing={12} align="center">
        {/* Main Logo with Effects */}
        <Box
          animation={`${float} 6s ease-in-out infinite`}
          _hover={{
            animation: `${glow} 2s ease-in-out infinite`,
            transform: 'scale(1.05)',
            transition: 'all 0.3s ease'
          }}
        >
          <Logo 
            size="large" 
            variant="default" 
            animated={true}
          />
        </Box>

        {/* Tagline */}
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontWeight="bold"
          color="#1a202c"
          textAlign="center"
          maxW="600px"
          px={6}
          animation={`${float} 6s ease-in-out infinite 2s`}
        >
          Where Learning Meets Innovation
        </Text>

        {/* Subtitle */}
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="#4a5568"
          textAlign="center"
          maxW="500px"
          px={6}
          animation={`${float} 6s ease-in-out infinite 3s`}
        >
          Experience the future of education with our cutting-edge platform
        </Text>

        {/* Feature Highlights */}
        <Flex
          direction={{ base: "column", md: "row" }}
          spacing={8}
          justify="center"
          wrap="wrap"
          gap={6}
          px={6}
        >
          {[
            { icon: "🚀", title: "Fast Learning", desc: "Accelerate your skills" },
            { icon: "🎯", title: "Focused Content", desc: "Learn what matters most" },
            { icon: "🌟", title: "Expert Teachers", desc: "Learn from the best" },
            { icon: "💡", title: "Innovative", desc: "Cutting-edge technology" }
          ].map((feature, index) => (
            <Box
              key={index}
              textAlign="center"
              p={6}
              bg="white"
              borderRadius="xl"
              boxShadow="0 10px 25px rgba(0,0,0,0.1)"
              _hover={{
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease'
              }}
              animation={`${float} 6s ease-in-out infinite ${index * 0.5}s`}
            >
              <Text fontSize="3xl" mb={3}>
                {feature.icon}
              </Text>
              <Text fontWeight="bold" color="#1a202c" mb={2}>
                {feature.title}
              </Text>
              <Text fontSize="sm" color="#4a5568">
                {feature.desc}
              </Text>
            </Box>
          ))}
        </Flex>

        {/* Creative Designer Signature */}
        <Box
          mt={8}
          p={6}
          bg="linear-gradient(135deg, #0056d2, #42A5F5)"
          borderRadius="25px"
          boxShadow="0 15px 35px rgba(0, 86, 210, 0.3)"
          textAlign="center"
          maxW="400px"
          animation={`${float} 6s ease-in-out infinite 4s`}
          _hover={{
            transform: 'scale(1.05)',
            boxShadow: '0 20px 45px rgba(0, 86, 210, 0.4)',
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
              fontSize="lg"
              fontWeight="bold"
              color="white"
              mb={3}
              textShadow="0 2px 4px rgba(0,0,0,0.2)"
            >
              ✨ Crafted with Excellence ✨
            </Text>
            
            {/* Creative signature design */}
            <Flex align="center" gap={3} mb={3}>
              <Box
                width="50px"
                height="50px"
                borderRadius="50%"
                bg="linear-gradient(135deg, #ff6b6b, #ee5a24)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="xl"
                fontWeight="bold"
                color="white"
                animation={`${pulse} 2s ease-in-out infinite`}
                boxShadow="0 4px 15px rgba(255, 107, 107, 0.4)"
              >
                U
              </Box>
              <Box
                width="50px"
                height="50px"
                borderRadius="50%"
                bg="linear-gradient(135deg, #4834d4, #686de0)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="xl"
                fontWeight="bold"
                color="white"
                animation={`${pulse} 2s ease-in-out infinite 0.5s`}
                boxShadow="0 4px 15px rgba(72, 52, 212, 0.4)"
              >
                P
              </Box>
              <Box
                width="50px"
                height="50px"
                borderRadius="50%"
                bg="linear-gradient(135deg, #00b894, #00cec9)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="xl"
                fontWeight="bold"
                color="white"
                animation={`${pulse} 2s ease-in-out infinite 1s`}
                boxShadow="0 4px 15px rgba(0, 184, 148, 0.4)"
              >
                S
              </Box>
            </Flex>
            
            <Text
              fontSize="md"
              color="white"
              opacity={0.9}
              fontStyle="italic"
              fontWeight="medium"
            >
              Creative Developer & UI/UX Designer
            </Text>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default LogoShowcase;
