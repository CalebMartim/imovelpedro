import React from "react";

export const Form = () => {
  return (
    <section>
      <div className="form">
        <h1>Quer ser o primeiro a receber novidades sobre este imóvel?</h1>
        <form action="">
          <label for="nome">Nome: </label>
          <br />
          <input type="text" id="nome" placeholder="ex. João" name="nome" />
          <br />
          <p>Sexo:</p>
          <input
            type="radio"
            name="sexo"
            id="masculino"
            value="masculino"
            className="radio"
          />
          <label for="masculino"> Masculino</label>
          <br />
          <input type="radio" name="sexo" id="feminino" className="radio" />
          <label for="feminino"> Feminino</label>
          <br />
          <label for="numero">Número: </label>
          <br />
          <input
            type="number"
            id="numero"
            placeholder="ex. 1234-5678"
            name="número"
          />
          <br />
          <p>Uso:</p>
          <input
            type="checkbox"
            name="whatsapp"
            id="whatsapp"
            className="checkbox"
          />
          <label for="whatsapp"> WhatsApp</label>
          <br />
          <input
            type="checkbox"
            name="telegram"
            id="telegram"
            className="checkbox"
          />
          <label for="telegram"> Telegram</label>
          <br />
          <label for="email">Email: </label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="joao123@gmail.com"
            name="email"
          />
          <br />
          <div className="centro">
            <input type="submit" value="Enviar" id="enviar" />
          </div>
        </form>
      </div>
    </section>
  );
};
