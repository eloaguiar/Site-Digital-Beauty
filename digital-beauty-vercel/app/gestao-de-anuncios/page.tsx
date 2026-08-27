const whatsappLink = "https://wa.me/message/FYHMTR6WLLO3F1";

const profiles = [
  "Passam a maior parte do dia em atendimento e precisam de uma operação sólida de anúncios atraindo novos contatos, sem que precisem parar a rotina para executar a captação.",
  "Buscam previsibilidade de agendamentos com base em um fluxo constante e estruturado, não dependendo mais apenas de indicações.",
  "Querem delegar a execução técnica das campanhas, mas mantendo o controle do consultório e a autonomia comercial.",
];

export default function GestaoDeAnuncios() {
  return (
    <main>
      <section className="hero management-hero">
        <header className="site-header shell">
          <a className="brand" href="/" aria-label="Digital Beauty">
            <img
              className="brand-logo"
              src="/brand/digital-beauty.png"
              alt=""
              width="900"
              height="363"
            />
          </a>
          <nav className="main-nav"><a href="/">Início</a><a href="/mentoria">Mentoria DSN</a></nav>
        </header>

        <div className="management-hero-content shell">
          <div className="management-eyebrow">
            <i />
            <span>Gestão de Anúncios</span>
          </div>
          <div className="management-hero-copy">
            <h1>A captação de pacientes através de anúncios, rodando nos <span className="text-highlight">bastidores da sua clínica.</span></h1>
            <p>Gestão de anúncios para profissionais de saúde e estética que querem manter o foco no dia a dia clínico, enquanto uma estrutura profissional trabalha para atrair novos pacientes.</p>
          </div>
        </div>
      </section>
      <section className="niches management-experience section-light"><div className="shell"><div className="niches-heading"><span className="eyebrow">EXPERIÊNCIA APLICADA</span><h2>Para clínicas de saúde e estética com operação preparada para crescer.</h2><p className="management-specialties">Harmonização Facial • Harmonização Corporal • Fisioterapia Pós-Cirúrgica • Fisioterapia Pós-Parto • Psicologia • Nutrição • Emagrecimento • Depilação a Laser • Tratamento de Acne e Melasma • Remoção de Sinais</p></div>
      </div></section>

      <section className="management-fit section-light">
        <div className="shell">
          <div className="management-heading section-grid">
            <div className="section-label">
              <span aria-hidden="true">02</span>
              <i />
            </div>
            <h2>A Gestão de Anúncios foi desenhada especificamente para <span className="text-highlight text-highlight-dark">profissionais que:</span></h2>
          </div>

          <div className="management-profile-grid">
            {profiles.map((profile, index) => (
              <article className="management-profile-card" key={profile}>
                <span aria-hidden="true">0{index + 1}</span>
                <p>{profile}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="management-role section-dark">
        <div className="shell management-role-grid">
          <div className="section-label section-label-light">
            <span aria-hidden="true">03</span>
            <i />
          </div>
          <div className="management-role-content">
            <h2>O meu papel no seu <span className="text-highlight">negócio</span></h2>
            <div className="management-role-copy">
              <p>Eu assumo integralmente a gestão dos seus anúncios online. Estruturo as campanhas com um único objetivo: gerar uma demanda contínua de pessoas interessadas e direcionar esse fluxo de forma organizada para o WhatsApp da sua clínica.</p>
              <p>Você mantém o foco absoluto na execução dos procedimentos e no atendimento comercial. Eu opero a tração de novos contatos nos bastidores.</p>
            </div>
            <ol className="traffic-flow" aria-label="Como a gestão de anúncios impulsiona a clínica">
              <li><span>01</span><strong>Estratégia</strong><small>Objetivos, oferta e posicionamento da clínica</small></li>
              <li><span>02</span><strong>Campanhas</strong><small>Anúncios planejados para alcançar o público certo</small></li>
              <li><span>03</span><strong>Novos contatos</strong><small>Pessoas interessadas chegam ao WhatsApp</small></li>
              <li><span>04</span><strong>Atendimento</strong><small>A clínica conduz a conversa e o agendamento</small></li>
              <li><span>05</span><strong>Mais oportunidades</strong><small>Uma agenda alimentada por captação contínua</small></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="management-next">
        <div className="shell management-next-grid">
          <div className="section-label">
            <span aria-hidden="true">04</span>
            <i />
          </div>
          <div className="management-next-content">
            <h2>Próximo <span className="text-highlight text-highlight-dark">passo</span></h2>
            <div className="management-next-copy">
              <p>Se você busca uma captação de pacientes que reflita a qualidade da sua entrega clínica, o próximo passo é agendarmos uma reunião. Me envie uma mensagem.</p>
            </div>
            <a className="mentor-cta" href={whatsappLink} target="_blank" rel="noreferrer">
              [ Quero alinhar a Gestão pelo WhatsApp ]
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer"><div className="shell"><img src="/brand/digital-beauty.png" alt="Digital Beauty"/><nav><a href="/">Início</a><a href="/gestao-de-anuncios">Gestão</a><a href="/mentoria">Mentoria</a></nav><div className="footer-meta"><p>Todos os direitos reservados à Eloisa Aguiar | CNPJ 56.129.391/0001-01</p><div><a href="https://eloaguiar.br" target="_blank" rel="noreferrer">eloaguiar.br</a><a href="https://www.instagram.com/eloaguiar.br/" target="_blank" rel="noreferrer">@eloaguiar.br</a></div></div></div></footer>
    </main>
  );
}
