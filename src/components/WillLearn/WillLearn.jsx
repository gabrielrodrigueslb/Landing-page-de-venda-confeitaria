import './WillLearn.scss';

export default function WillLearn() {
  return (
    <section className="learn-container">
      <h1>veja o que você vai aprender:</h1>
      <img
        className="decoration"
        src="./img/detalhes-decoration-rosa.svg"
        alt=""
      />
      <div className="card">
        <img
          className="img-learn"
          src="./img/learn1.png"
          alt="Massa de bolo"
        />
        <div className="learn-infos">
          <h3>Massas perfeitas para bolos.</h3>
          <p>
            Você aprenderá Chocolate, Banana, Brigadeiro Branco, Pão de Mel,
            Ninho de Leite, Especiarias e muitos outros que irão te
            impressionar.
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="img-learn"
          src="./img/learn2.png"
          alt="Massa de bolo"
        />
        <div className="learn-infos">
          <h3>Coberturas Especiais</h3>
          <p>
            Veja como fazer os toppings mais procurados, entre eles estão: Creme
            Belga, Trufado, Ninho, Mousse de Limão, Nutella e muito mais.
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="img-learn"
          src="./img/learn3.png"
          alt="Massa de bolo"
        />
        <div className="learn-infos">
          <h3>Ajuste Perfeito</h3>
          <p>
            Você descobrirá todos os segredos para fazer a montagem e
            apresentação de bolos caseiros de uma forma extremamente
            profissional e irresistível.
          </p>
        </div>
      </div>
      <div className="footer-infos">
        <h2>E muito mais...</h2>
        <p>
          E o melhor... Você fará bolos 7 vezes mais rápido e sem necessidade de
          molde nem batedeira!
        </p>
      </div>
    </section>
  );
}
