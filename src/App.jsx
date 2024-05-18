// pages
import { Home, Tours, Promo, Clients, About, Contact } from "./pages";

// components
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Tours />
      <Promo />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
