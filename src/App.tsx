import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UMKMProvider } from "./contexts/UMKMContext";
import "./global.css";
import { Landing, Explore, Beranda, Peta, Event, Search } from "./pages";
import EventDetailPage from "./pages/event/{id}";
import { SearchProvider } from "./contexts/SearchContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <SearchProvider>
      <UMKMProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/peta" element={<Peta />} />
          <Route path="/events" element={<Event />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </UMKMProvider>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;