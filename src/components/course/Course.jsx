import './Course.scss'

export default function Course() {
  return (
    <section className="course-bg">
        <div className="course-container">
            <div className="infos">
                <h1>Curso com <span>certificado</span> de finalização!</h1>
                <img className='detalhe' src="public/img/detalhes-decoration-rosa.svg" alt="detalhes rosa" />
                <p>Sim, o Curso de Bolos Caseiros inclui certificado, sem custo adicional. Após concluir todas as aulas do curso, você poderá baixar diretamente da sua área de estudante um belo certificado de conclusão que atesta sua formação na elaboração de bolos.</p>
            </div>
            <img className='img' src="public/img/vector-bolo-chocolate.png" alt="bolo de chocolate" />
        </div>
    </section>
  )
}
