import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nesto/admin" element={'test'} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
