import React from "react";

export const Header = () => {
  return (
    <>
      <div className="btnContato">
        <a href="#contato">Entrar em contato</a>
      </div>
      <section className="header">
        <div className="titImovel">
          <h1>Imóvel em Arniqueiras</h1>
          <p>
            <i>Uma excelente casa para você e sua família</i>
          </p>
        </div>
        <div className="img"></div>
      </section>
      <section className="divDescriRight">
        <div className="img-2"></div>
        <div className="textoDescriRight">
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
      <section className="divDescriLeft">
        <div className="textoDescriLeft">
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
      <section className="divDescriRight">
        <div className="img-4"></div>
        <div className="textoDescriRight">
          <i className="fas fa-couch"></i>
          <ul>
            <li>
              Energia solar para conta de <b>R$1000</b>
            </li>
            <li>Closet</li>
            <li>Piscina aquecida</li>
            <li>Ar condicionado em todos quartos</li>
            <li>Cabeamento de internet em todos os cômodos da casa</li>
            <li>Iluminação em led</li>
          </ul>
        </div>
      </section>
      <footer id="contato" className="contato">
        <h1>Quer saber mais sobre este imóvel e marcar uma visita?</h1>
        <p>Entre em contato!</p>
        <p className="whatsapp">
          <i className="fab fa-whatsapp"></i> WhatsApp: (61) 9 8424-2395
        </p>
        <p className="email">
          <i className="far fa-envelope"></i> Email: pedrock99@gmail.com
        </p>
      </footer>
    </>
  );
};
