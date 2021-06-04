import React from "react";
import { useOnScreen, sobe } from "../ functions/UseOnScreen";

export const Sec1 = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });
  return (
    <>
      <section className="divDescriRight">
        <div className="img-2"></div>
        <div
          className="textoDescriRight"
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? sobe[0] : sobe[1],
          }}
        >
          <i className="fas fa-home"></i>
          <ul>
            <li>200m² de terreno</li>
            <li>220m² de area construida</li>
            <li>
              Condominio{" "}
              <b>
                {" "}
                <span className="strikeThrough">R$160</span>
              </b>{" "}
              com desconto <b>R$116!</b>
            </li>
            <li>4 quartos sendo 2 suites</li>
          </ul>
        </div>
      </section>
    </>
  );
};
