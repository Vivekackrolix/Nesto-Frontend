import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from './utils/Routes';
import { Footer, Header } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {RouteData.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
