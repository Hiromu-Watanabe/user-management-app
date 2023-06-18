import { memo, FC, ReactNode } from "react";
import PropTypes from "prop-types";

import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
});

HeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
