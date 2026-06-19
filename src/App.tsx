import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { themeConfig } from './config/themeConfig';
import { GlobalStyle } from './styles/globalStyles';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <ThemeProvider theme={themeConfig}>
      <GlobalStyle />
      <CartProvider>
        <BrowserRouter>
          <AppLayout>
            <Header />
            <MainContent>
              <AppRoutes />
            </MainContent>
            <Footer />
          </AppLayout>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
