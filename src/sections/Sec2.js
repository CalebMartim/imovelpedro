import React from "react";
import { useOnScreen, sobe } from "../ functions/UseOnScreen";

export const Sec2 = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });
  return (
    <>
      <section className="divDescriLeft">
        <div
          className="textoDescriLeft"
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? sobe[0] : sobe[1],
          }}
        >
          <i className="fas fa-bath"></i>
          <ul>
            <li>4 banheiros</li>
            <li>Suite master com banheira</li>
            <li>Boiler aquecimento água</li>
            <li>Todas as torneiras e chuveiros com água quente</li>
          </ul>
        </div>
        <div className="img-3"></div>
      </section>
    </>
  );
};
