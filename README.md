# Site de venda para um imóvel em Arniqueiras/DF 
O site pode ser acessado em https://imovelpedro.netlify.app
![Demonstração do website](https://i.imgur.com/1FRf5YD.png)
* Site feito com React

Para testar o código você pode baixar o repositório

Usando Git Bash no Windows ou o terminal no Mac ou Linux, digite

`git clone https://github.com/CalebMartim/imovelpedro.git`

`cd imovelpedro`

`npm start`

caso não funcione, você provavelmente precisa baixar a biblioteca React 

`npm install react`

e tente `npm start` novamente 

## Técnicas usadas
* Usando os hooks useEffect e useState junto com o API Intersection Observer e CSS deu para se criar ume efeito onde texto só aparece quando o usuário chega a certa parte da página
  Isto é feito com:
  
      import { useEffect, useState } from "react";

      export const sobe = ["translateY(0px)", "translateY(25px)"];

      export function useOnScreen(options) {
        const [ref, setRef] = useState(null);
        const [visible, setVisible] = useState(false);

        useEffect(() => {
          const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
          }, options);

          if (ref) {
            observer.observe(ref);
          }

          return () => {
            if (ref) {
              observer.unobserve(ref);
            }
          };
        }, [ref, options]);

        return [setRef, visible];
      }
