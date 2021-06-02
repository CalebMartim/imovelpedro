import React from "react";

export const Header = () => {
  return (
    <>
      <section className="header">
        <div className="titImovel">
          <h1>Imóvel em Arniqueiras</h1>
          <p>
            <i>Uma boa casa para você e sua família</i>
          </p>
        </div>
        <div className="img"></div>
      </section>
      <section className="divDescriRight">
        <div className="img-2"></div>
        <div className="textoDescriRight">
          <i class="fas fa-home"></i>
          <ul>
            <li>200m² de terreno</li>
            <li>220m² de area construida</li>
            <li>Condominio 160 com desconto 116 reais</li>
            <li>4 quartos sendo 2 suites</li>
          </ul>
        </div>
      </section>
      <section className="divDescriLeft">
        <div className="textoDescriLeft">
          <i class="fas fa-bath"></i>
          <ul>
            <li>4 banheiros</li>
            <li>Suite master com banheira</li>
            <li>Boiler aquecimento água</li>
            <li>Todas as torneiras e chuveiros com agua quente</li>
          </ul>
        </div>
        <div className="img-3"></div>
      </section>
      <section className="divDescriRight">
        <div className="img-4"></div>
        <div className="textoDescriRight">
          <i class="fas fa-couch"></i>
          <ul>
            <li>Energia solar para conta de 1mil reais</li>
            <li>Closet</li>
            <li>Piscina aquecida</li>
            <li>Ar condicionado em todos quartos</li>
            <li>
              Cabeamento de internet em todos comodos da casa Iluminação em led
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
