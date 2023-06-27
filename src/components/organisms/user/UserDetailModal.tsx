import { memo, FC, useState, ChangeEvent, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";

import { User } from "../../../types/api/user";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedUser: User | null;
};

type UserInfo = {
  username: string; // 名前
  name: string; // フルネーム
  email: string; // MAIL
  phone: string; // TEL
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, selectedUser } = props;
  const { loginUser } = useLoginUser(); // ログインユーザーcontextのcustom hooks

  /* ユーザー情報のState */
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: selectedUser?.username ?? "", // 名前
    name: selectedUser?.name ?? "", // フルネーム
    email: selectedUser?.email ?? "", // MAIL
    phone: selectedUser?.phone ?? "", // TEL
  });

  /* 選択されたユーザーが変更されたときにステートを更新 */
  useEffect(() => {
    setUserInfo({
      username: selectedUser?.username ?? "", // 名前
      name: selectedUser?.name ?? "", // フルネーム
      email: selectedUser?.email ?? "", // MAIL
      phone: selectedUser?.phone ?? "", // TEL
    });
  }, [selectedUser]);

  const onChangeUserInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                name="username"
                value={userInfo.username}
                isReadOnly={!loginUser?.isAdmin}
                onChange={onChangeUserInfo}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input name="name" value={userInfo.name} isReadOnly={!loginUser?.isAdmin} onChange={onChangeUserInfo} />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input name="email" value={userInfo.email} isReadOnly={!loginUser?.isAdmin} onChange={onChangeUserInfo} />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input name="phone" value={userInfo.phone} isReadOnly={!loginUser?.isAdmin} onChange={onChangeUserInfo} />
            </FormControl>
            {loginUser?.isAdmin && (
              <ModalFooter>
                {loginUser?.isAdmin ? <PrimaryButton onClick={onClose}>変更</PrimaryButton> : null}
              </ModalFooter>
            )}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
