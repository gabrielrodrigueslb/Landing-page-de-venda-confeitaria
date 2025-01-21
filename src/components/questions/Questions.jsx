import ListaAlternante from '../ListaAlternante/ListaAlternante';
import './Questions.scss';

export default function Questions() {
    const perguntas = [
        {
          pergunta: "Comprei e não consigo acessar?",
          resposta: "Após realizar seu pedido, você receberá instruções detalhadas no seu e-mail para acessar sua área restrita do curso. Se tiver dificuldades, basta entrar em contato conosco e ajudaremos no que for necessário.",
        },
        {
          pergunta: "Tenho que pagar mensalidade?",
          resposta: "Não, nosso curso você paga apenas uma vez, sem qualquer outra taxa adicional.",
        },
        {
          pergunta: "Quanto tempo dura meu acesso ao curso?",
          resposta: "Você terá acesso ao curso por um período de 12 meses.",
        },
        {
          pergunta: "Quais são os métodos de pagamento?",
          resposta: "Aceitamos cartões de crédito, débito e pagamentos via Pix e boleto.",
        },
        {
          pergunta: "Se eu tiver alguma dúvida?",
          resposta: "Estamos disponíveis para te ajudar com todas as suas dúvidas durante o período em que você tiver acesso ao curso. Você pode fazer suas consultas por e-mail ou WhatsApp.",
        },
        {
          pergunta: "Posso estudar em que dias e horários?",
          resposta: "Você pode estudar sempre que precisar, sem nenhum tipo de restrição. Sua área restrita funciona 24 horas por dia, 7 dias por semana.",
        },
      ];
      

  return (
    <section className="perguntas-ctnr">
      <h1>Perguntas frequentes</h1>
      <ul>
        {perguntas.map((item, index) => (
          <li key={index}>
            <ListaAlternante pergunta={item.pergunta} resposta={item.resposta} />
          </li>
        ))}
      </ul>
    </section>
  );
}
