import { Button, Circle, HStack } from '@chakra-ui/react';

type PropsType = {
  currentPage: number;
  pagesCount: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ currentPage, pagesCount, onPageChange }: PropsType) => {
  return (
    <HStack spacing="4" justifyContent="center" py="10">
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        Previous
      </Button>
      <Circle size="35px" color="white" bg="blue.500">
        {currentPage}
      </Circle>
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === pagesCount}
      >
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
