import './Payment.scss';

export default function Payment() {
  return (
    <section className="payment-bg">
      <div className="payment-container">
        <div className="infos-payment">
          <h1>Aproveite, oferta válida por tempo limitado!</h1>
          <span>De R$89,90 por apenas:</span>
          <h2>4X de R$ 12,25*</h2>
          <span>Ou $39,90 à vista.</span>
        </div>
        <div className="card-container">

          <div className="card">
            <div className="title-background">
              <p className="title">PIX e Cartão de Débito</p>
            </div>

            <h3 className="price">R$ 39.90</h3>
            <div className="beneficios">
              <p>Acesso imediato ao curso</p>
              <p>Pagamento único</p>
              <p>Acesso total ao curso</p>
            </div>
            <a href="#" className="Button-Green">
              Sim, quero começar agora!
            </a>
          </div>

          <div className="card">
            <div className="title-background">
              <p className="title">Cartão de Crédito e Boleto</p>
            </div>
            <h3 className="price">R$ 48.90</h3>
            <div className="beneficios">
              <p>Acesso liberado em até 36 horas</p>
              <p>Compre em até 5x sem juros</p>
              <p>Acesso total ao curso</p>
            </div>
            <a href="#" className="Button-Green">
              Sim, quero começar agora!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
