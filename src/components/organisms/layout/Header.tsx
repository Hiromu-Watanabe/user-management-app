import { memo, FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => navigate("/home"), []);
  const onClickUserManagement = useCallback(() => navigate("/home/user_management"), []);
  const onClickSetting = useCallback(() => navigate("/home/setting"), []);

  return (
    <>
      <Flex as="nav" align="center" justify="space-between" gap="1rem" bg="cyan.700" color="gray.50">
        <Flex as="a" align="center" mr={8} _hover={{ cursor: "pointer" }}>
          <Heading
            as="h1"
            fontSize={{ base: "md", sm: "1.5rem", md: "2rem", lg: "2.5rem" }}
            padding={{ base: 3, md: 5 }}
            onClick={onClickHome}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>

        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <Flex fontSize={{ base: "md", sm: "1.5rem", md: "2rem", lg: "2.5rem" }} pr={4}>
          <MenuIconButton onOpen={onOpen} />
        </Flex>
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
