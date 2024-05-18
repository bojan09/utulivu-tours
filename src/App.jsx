import { BrowserRouter } from "react-router-dom";

// pages
import { About, Clients, Home, Promo, Tours } from "./pages";

// components
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Home />
        <Tours />
        <Promo />
        <About />
        <Clients />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
