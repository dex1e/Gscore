import { FC, ReactNode } from "react";

import styled from "styled-components";

import { Footer } from "components/Footer";
import { Header } from "components/Header";

interface MainLayotProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayotProps> = ({ children }) => {
  return (
    <Root>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      {/* <Footer /> */}
    </Root>
  );
};

const Root = styled.div`
  overflow-x: hidden;
  height: 100vh;
`;
