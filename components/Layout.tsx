import React, { FunctionComponent as FC } from "react";
import Link from "next/link";

const Layout: FC = ({ children }) => {
  return (
    <div className="page">
      <Link href="/">
        <a>
          <img src="/logo.png" alt="logo" />
        </a>
      </Link>
      {children}
    </div>
  );
};

export default Layout;
