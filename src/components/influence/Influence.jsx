import './Influence.scss'

export default function Influence() {
  return (
    <section className='influence-bg'>
        <div className='influence-container'>
            <h1>Para quem <span>recomendamos</span> este curso:</h1>
            <div className='container-cards'>
                <div className='card'>
                    <img src="public/img/aula-confeitaria.svg" alt="confeitaria" />
                    <h2>Você quer aprender a fazer deliciosos bolos caseiros?</h2>
                    <p>Aprenda passo a passo a fazer receitas surpreendentes e cheias de sabor.</p>
                </div>
                <div className='card'>
                    <img src="public/img/cozinheiro.svg" alt="cozinheiro" />
                    <h2>Você quer aprofundar seus conhecimentos?</h2>
                    <p>Para você que já trabalha com bolos e quer aprimorar suas técnicas.</p>
                </div>
                <div className='card'>
                    <img src="public/img/loja.svg" alt="Loja" />
                    <h2>Quer iniciar seu próprio negócio lucrativo.</h2>
                    <p>Asse bolos profissionais e comece seu próprio negócio lucrativo.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
