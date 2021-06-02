import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { Form } from "./Form";
import { Header } from "./Header";

function App() {
  return (
    <section>
      <Header />
      {/* <Form /> */}
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
