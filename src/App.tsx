import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./global.css";
import { Landing, Explore } from "./pages";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
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
