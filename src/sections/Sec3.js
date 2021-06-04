import React from "react";
import { useOnScreen, sobe } from "../ functions/UseOnScreen";

export const Sec3 = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });
  return (
    <>
      <section className="divDescriRight">
        <div className="img-4"></div>
        <div
          className="textoDescriRight"
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? sobe[0] : sobe[1],
          }}
        >
          <i className="fas fa-couch"></i>
          <ul>
            <li>Completamente na energia solar</li>
            <li>Closet</li>
            <li>Piscina aquecida</li>
            <li>Ar condicionado em todos quartos</li>
            <li>Cabeamento de internet em todos os cômodos da casa</li>
            <li>Iluminação em led</li>
          </ul>
        </div>
      </section>
    </>
  );
};
