import { Center, Spinner, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { memo, FC, useEffect, useCallback } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => {
    const fetchUsers = async () => await getUsers();
    fetchUsers();
  }, []);

  const onClickUser = useCallback(() => onOpen(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users?.map((user) => (
            <WrapItem key={user.id} alignItems="center" mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/ZgIk5ADpRjU"
                userName={user.username}
                fullName={user.name}
                onClickUser={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
