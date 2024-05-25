import React from "react";
import "./Clients.css";

import { ClientComponent } from "../../components";

const Clients = () => {
  return (
    <section id="clients">
      <h1 className="clients__heading">What our clients say about us</h1>
      <ClientComponent />
    </section>
  );
};

export default Clients;
