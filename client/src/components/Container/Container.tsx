import { Box, BoxProps } from '@chakra-ui/layout';

const Container = ({ children }: BoxProps) => {
  return (
    <Box
      sx={{
        maxW: { base: '100%', md: '800px', lg: '1360px' },
        px: 4,
        py: 20,
        mx: 'auto',
      }}
      h="100%"
    >
      {children}
    </Box>
  );
};

export default Container;
