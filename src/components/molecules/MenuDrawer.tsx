import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Stack } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody bg="yellow.50" fontSize="2rem" pl="2rem">
            <Stack>
              <Button variant="unstyled" textAlign="left" onClick={onClickHome}>
                TOP
              </Button>
              <Button variant="unstyled" textAlign="left" onClick={onClickUserManagement}>
                ユーザー一覧
              </Button>
              <Button variant="unstyled" textAlign="left" onClick={onClickSetting}>
                設定
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
