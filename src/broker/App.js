import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './Test';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/broker/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;