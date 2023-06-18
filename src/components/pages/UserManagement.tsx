import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => {
    const fetchUsers = async () => await getUsers();
    fetchUsers();
  }, []);

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
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
