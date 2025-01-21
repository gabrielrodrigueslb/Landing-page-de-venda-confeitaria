import './Main.scss';

export default function Hero() {
  return (
    <main className='main-bg'>
      <div className='main-container'>
          <div className='infos-main'>
              <h1>
                Ganhe de <span>R$3000 a R$5000</span> com a 
                venda de <span>INCRÍVEIS BOLOS caseiros!</span>
              </h1>
              <p>Aprenda as receitas mais vendidas que o transformarão em um profissional a partir de hoje! Mesmo que você não tenha experiência com bolos...</p>
          </div>
              <video className='video-main' src="./video//3326577-hd_1920_1080_24fps.mp4" autoPlay loop muted controls></video>
              <a href='#' className='Button-Green'>Sim, quero começar agora!</a>
              <img src="./img/pagamento.png" alt="Segurança de pagamento" />
      </div>
    </main>
  );
}
