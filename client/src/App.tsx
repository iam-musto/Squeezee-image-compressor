import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/layout";
import { HomePage, CompressPage, AboutPage } from "./pages";
import { CompressProvider } from "./context/compressContext";

const App = () => {
  return (
    <CompressProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-stone-50">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/compress" element={<CompressPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CompressProvider>
  );
};

export default App;
