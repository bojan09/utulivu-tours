import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home } from "./pages";

// components
import { Navbar, Footer, TourComponent } from "./components";

import { ourTours } from "./constants";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          {ourTours.map((tour) => (
            <Route
              key={tour.id}
              path={`/tour/${tour.link}`}
              element={<TourComponent key={tour.id} tours={ourTours} />}
            />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
