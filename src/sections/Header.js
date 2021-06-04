import React from "react";
import { useOnScreen, sobe } from "../ functions/UseOnScreen";

export const Header = () => {
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });
  return (
    <>
      <div className="btnContato">
        <a href="#contato">Entrar em contato</a>
      </div>
      <section className="header">
        <div
          className="titImovel"
          ref={setRef}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? sobe[0] : sobe[1],
          }}
        >
          <h1>Imóvel em Arniqueiras</h1>
          <p>
            <i>Uma excelente casa para você e sua família</i>
          </p>
        </div>
        <div className="img"></div>
      </section>
    </>
  );
};
