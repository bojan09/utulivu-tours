// pages
import { About, Clients, Home, Promo, Tours } from "./pages";

// components
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Tours />
      <Promo />
      <About />
      <Clients />
      <Footer />
    </div>
  );
};

export default App;
