import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './SharedLayoutStyled';
import { Suspense } from 'react';
import { selectBaseName } from 'redux/selectors';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const baseName = useSelector(selectBaseName);
  return (
    <>
      <Container>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/rates">Rates</NavLink>
          </nav>
          <p>Your base currency: {baseName}</p>
        </header>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default SharedLayout;
