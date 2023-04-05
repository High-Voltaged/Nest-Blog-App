import { Center, Spinner } from '@chakra-ui/react';

const Loader = ({ isFullScreen = true }) => {
  if (!isFullScreen) {
    return <Spinner size="lg" speed=".6s" />;
  }

  return (
    <Center h="100vh">
      <Spinner
        sx={{
          width: 100,
          height: 100,
        }}
        speed=".6s"
        color="blue.500"
        thickness="4px"
      />
    </Center>
  );
};

export default Loader;
