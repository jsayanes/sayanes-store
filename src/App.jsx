import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import Producto from "./pages/Producto";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

// En GitHub Pages el sitio vive en "/sayanes-store/": sin este basename,
// las rutas internas no encuentran nada al recargar.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo categoria="todo" />} />
            <Route path="/zapatos" element={<Catalogo categoria="zapatos" />} />
            <Route path="/perfumes" element={<Catalogo categoria="perfumes" />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
