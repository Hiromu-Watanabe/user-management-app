import { memo, FC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  onClickUser: () => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { imageUrl, userName, fullName, onClickUser } = props;

  return (
    <Box
      w="260px"
      height="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      m="10px"
      _hover={{ cursor: "pointer", opacity: 0.7 }}
      onClick={onClickUser}
    >
      <Stack textAlign="center">
        <Image src={imageUrl} boxSize="160px" borderRadius="full" alt={userName} m="auto" />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="lg" color="gray.500">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
