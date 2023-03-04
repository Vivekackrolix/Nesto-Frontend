import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './Test';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/builder/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
