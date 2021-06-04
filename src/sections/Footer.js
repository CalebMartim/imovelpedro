import React from "react";
import { useOnScreen, sobe } from "../ functions/UseOnScreen";

export const Footer = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.4 });
  return (
    <>
      <footer id="contato" className="contato">
        <div
          className="footerTexto"
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? sobe[0] : sobe[1],
          }}
        >
          <h1>Quer saber mais sobre este imóvel e marcar uma visita?</h1>
          <p>Entre em contato!</p>
          <p className="whatsapp">
            <i className="fab fa-whatsapp"></i> WhatsApp: (61) 9 8424-2395
          </p>
          <p className="email">
            <i className="far fa-envelope"></i> Email: pedrock99@gmail.com
          </p>
        </div>
      </footer>
    </>
  );
};
