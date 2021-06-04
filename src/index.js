import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Header } from "./sections/Header";
import { Sec1 } from "./sections/Sec1";
import { Sec2 } from "./sections/Sec2";
import { Sec3 } from "./sections/Sec3";
import { Video } from "./sections/Video";
import { Footer } from "./sections/Footer";
// import { Form } from "./Form";

function App() {
  return (
    <section>
      <Header />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Video />
      <Footer />
      {/* <Form /> */}
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
