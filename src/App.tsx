import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import { Landing } from "./pages";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>

      {/* TODO: Route Buat Layout Default */}
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
