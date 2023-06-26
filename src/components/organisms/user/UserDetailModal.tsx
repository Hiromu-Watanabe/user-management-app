import { memo, FC } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";

import { User } from "../../../types/api/user";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedUser: User | null;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, selectedUser } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={selectedUser?.username} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={selectedUser?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={selectedUser?.email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={selectedUser?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
