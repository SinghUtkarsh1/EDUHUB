import React from 'react';
import { Box, Text, Flex, keyframes } from '@chakra-ui/react';

const Logo = ({ size = 'default', variant = 'default', onClick, animated = true }) => {
  const sizes = {
    small: { iconSize: '20px', textSize: 'lg', spacing: 2 },
    default: { iconSize: '28px', textSize: '2xl', spacing: 3 },
    large: { iconSize: '36px', textSize: '4xl', spacing: 4 }
  };

  const variants = {
    default: { iconColor: '#0056d2', textColor: '#0056d2' },
    white: { iconColor: 'white', textColor: 'white' },
    dark: { iconColor: '#1a202c', textColor: '#1a202c' }
  };

  const { iconSize, textSize, spacing } = sizes[size];
  const { iconColor, textColor } = variants[variant];

  // Awesome animations
  const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  `;

  const float = keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-3px); }
  `;

  const glow = keyframes`
    0%, 100% { box-shadow: 0 4px 12px rgba(0, 86, 210, 0.3); }
    50% { box-shadow: 0 8px 20px rgba(0, 86, 210, 0.6); }
  `;

  return (
    <Flex 
      align="center" 
      spacing={spacing} 
      cursor={onClick ? 'pointer' : 'default'}
      onClick={onClick}
      _hover={onClick ? { 
        transform: 'scale(1.05)', 
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
      } : {}}
      transition="all 0.3s ease"
    >
      {/* Awesome Modern Logo Icon */}
      <Box
        position="relative"
        width={iconSize}
        height={iconSize}
        borderRadius="16px"
        background={`linear-gradient(135deg, ${iconColor} 0%, #42A5F5 50%, #90CAF9 100%)`}
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 6px 20px rgba(0, 86, 210, 0.4)"
        animation={animated ? `${glow} 3s ease-in-out infinite` : 'none'}
        _hover={{
          transform: 'rotate(5deg) scale(1.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
          transform: 'rotate(45deg)',
          animation: animated ? `${float} 4s ease-in-out infinite` : 'none'
        }}
      >
        {/* Main Icon Shape */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="70%"
          height="70%"
          background="white"
          borderRadius="10px"
          opacity={0.95}
          boxShadow="inset 0 2px 8px rgba(0,0,0,0.1)"
          _before={{
            content: '""',
            position: 'absolute',
            top: '15%',
            left: '15%',
            width: '70%',
            height: '70%',
            background: iconColor,
            borderRadius: '6px',
            opacity: 0.9
          }}
        />
        
        {/* Central Highlight */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="25%"
          height="25%"
          background="white"
          borderRadius="50%"
          boxShadow="0 2px 6px rgba(0,0,0,0.15)"
          animation={animated ? `${pulse} 2s ease-in-out infinite` : 'none'}
        />
        
        {/* Corner Accents */}
        <Box
          position="absolute"
          top="10%"
          right="10%"
          width="15%"
          height="15%"
          background="rgba(255,255,255,0.8)"
          borderRadius="50%"
          animation={animated ? `${float} 3s ease-in-out infinite 0.5s` : 'none'}
        />
        <Box
          position="absolute"
          bottom="10%"
          left="10%"
          width="12%"
          height="12%"
          background="rgba(255,255,255,0.6)"
          borderRadius="50%"
          animation={animated ? `${float} 3s ease-in-out infinite 1s` : 'none'}
        />
      </Box>

      {/* Enhanced Logo Text */}
      <Text
        fontSize={textSize}
        fontWeight="extrabold"
        color={textColor}
        letterSpacing="tight"
        fontFamily="Poppins, sans-serif"
        textShadow={variant === 'white' ? '0 2px 4px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)'}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          bottom: '-2px',
          left: '0',
          width: '100%',
          height: '2px',
          background: `linear-gradient(90deg, ${textColor}, transparent)`,
          opacity: 0.7
        }}
        _hover={{
          transform: 'translateY(-1px)',
          transition: 'all 0.2s ease'
        }}
      >
        EDUHUB
      </Text>
    </Flex>
  );
};

export default Logo;
