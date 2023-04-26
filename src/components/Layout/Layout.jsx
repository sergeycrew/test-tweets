import { Header } from 'components/Header/Header';
import { GlobalStyle } from 'components/GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
