import { memo, FC } from "react";

export const Header: FC = memo(() => {
  return <div style={{height: "50px", backgroundColor: "red"}}>Headerです</div>;
});
