import './Details.scss';

export default function Details() {
  return (
    <section>
      <div className="details-container">
        <div className="details-info">
          <h2>
            Veja como o curso <span>vai te ajudar:</span>
          </h2>
          <img
            className="detail"
            src="./img/detalhes-decoration-rosa.svg"
            alt="detalhes"
          />
          <p>
            Este curso de confeitaria vai te ensinar desde o básico até técnicas
            avançadas, com receitas práticas e dicas para transformar sua paixão
            em habilidade. Você aprenderá a fazer doces incríveis, personalizar
            suas criações e até mesmo começar seu próprio negócio. Ideal para
            iniciantes e quem já tem experiência, o curso vai te ajudar a
            alcançar novos resultados na confeitaria!
          </p>
        </div>
        <img
          className="exemplo"
          src="./img/bolo1.png"
          alt="Bolo de exemplo"
        />
      </div>
    </section>
  );
}
