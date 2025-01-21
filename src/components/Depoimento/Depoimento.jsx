import './Depoimento.scss';

export default function Depoimento() {
  return (
    <section className="depoimento-cntr">
      <h1>Depoimentos de nossos Estudantes:</h1>
      <img
        className="detalhe"
        src="./img/detalhes-decoration-rosa.svg"
        alt="detalhes rosa"
      />
      <p>
        Em breve, seu depoimento também estará aqui para que todos vejam o seu
        sucesso!
      </p>
      <div className="depoimentos">
        <img src="./img/depoimento.png" alt="Depoimento1" />
        <img src="./img/depoimento.png" alt="Depoimento2" />
        <img src="./img/depoimento.png" alt="Depoimento3" />
      </div>
    </section>
  );
}
