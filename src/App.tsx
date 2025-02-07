import { type ReactElement } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Layout } from './components/Layout';
import { FetvaForm } from './components/FetvaForm';
import { FetvaResponse } from './components/FetvaResponse';
import { ErrorMessage } from './components/ErrorMessage';
import { useFetva } from './hooks/useFetva';

function FetvaApp() {
  const { isLoading, response, error, askQuestion } = useFetva();

  return (
    <Layout>
      <FetvaForm onSubmit={askQuestion} isLoading={isLoading} />
      {error && <ErrorMessage message={error} />}
      {response && <FetvaResponse response={response} />}
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<FetvaApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}