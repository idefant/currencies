import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from '#pages/Main';

const App: FC = () => (
  <Routes>
    <Route path="/" index element={<Main />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default App;
