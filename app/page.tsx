const niches = [
  "Harmonização Facial", "Harmonização Corporal",
  "Fisioterapia Pós-Cirúrgica", "Fisioterapia Pós-Parto",
  "Psicologia", "Nutrição",
  "Emagrecimento", "Depilação a Laser",
  "Tratamento de Acne e Melasma", "Remoção de Sinais",
];

function Header() {
  return <header className="site-header shell">
    <a className="brand" href="/" aria-label="Digital Beauty"><img className="brand-logo" src="/brand/digital-beauty.png" alt="Digital Beauty" width="900" height="363" /></a>
    <nav className="main-nav" aria-label="Navegação principal">
      <a href="/gestao-de-anuncios">Gestão de Anúncios</a><a href="/mentoria">Mentoria DSN</a><a href="#sobre">Quem cuida da estratégia</a>
    </nav>
  </header>;
}

export default function Home() {
  return <main>
    <section className="hero hero-home"><Header />
      <div className="hero-content shell"><div className="hero-copy">
        <span className="eyebrow">SAÚDE • ESTÉTICA • CAPTAÇÃO</span>
        <h1>Estrutura de captação e previsibilidade de <span className="text-highlight">agendamentos</span> para clínicas de saúde e estética.</h1>
        <p>Gestão de anúncios e mentoria para profissionais que querem atrair pacientes, organizar a operação comercial e construir uma agenda mais previsível.</p>
        <div className="hero-actions"><a className="button button-mint" href="#video-apresentacao">Conhecer as soluções <span>↓</span></a></div>
      </div></div>
    </section>

    <section className="video-intro section-light" id="video-apresentacao" aria-labelledby="video-intro-title"><div className="shell">
      <div className="video-intro-heading">
        <span className="eyebrow">CONHEÇA A DIGITAL BEAUTY</span>
        <h2 id="video-intro-title">Assista ao vídeo e conheça a Digital Beauty</h2>
      </div>
      <div className="video-placeholder" role="img" aria-label="Espaço reservado para o vídeo de apresentação da Digital Beauty">
        <span className="video-play" aria-hidden="true">▶</span>
        <div><strong>Vídeo de apresentação</strong><small>Seu vídeo será inserido aqui</small></div>
      </div>
    </div></section>

    <section className="paths section-dark" id="caminhos"><div className="shell">
      <div className="paths-heading section-grid"><div className="section-label section-label-light"><span>01</span><i /></div><div><span className="eyebrow eyebrow-light">DOIS CAMINHOS, UM OBJETIVO</span><h2>Qual é a melhor estrutura para o seu <span className="text-highlight">momento?</span></h2></div></div>
      <div className="path-cards">
        <article className="path-card path-card-solid"><span className="choice-tag">A DIGITAL BEAUTY EXECUTA</span><div><h3>Gestão de Anúncios</h3><p>Para quem quer delegar a execução técnica e manter o foco no atendimento, enquanto a captação roda nos bastidores.</p></div><a className="button button-dark" href="/gestao-de-anuncios">Conhecer a Gestão <span>→</span></a></article>
        <article className="path-card path-card-outline"><span className="choice-tag">VOCÊ IMPLEMENTA COM DIREÇÃO</span><div><h3>Mentoria <span className="text-highlight">DSN</span></h3><p>Para quem quer implementar um fluxo próprio de atração, qualificação e conversão, com acompanhamento individual.</p></div><a className="button button-light" href="/mentoria">Conhecer a Mentoria <span>→</span></a></article>
      </div>
    </div></section>

    <section className="about section-light" id="sobre"><div className="shell section-grid">
      <div className="section-label"><span>02</span><i /></div><div className="section-copy"><span className="eyebrow">QUEM CUIDA DA SUA ESTRATÉGIA</span><h2 className="elo-name">Elo Aguiar</h2>
        <div className="about-intro"><div><p className="about-subtitle">Especialista em gestão de anúncios para clínicas de saúde e estética.</p><p className="about-body bio-body">Estruturo e gerencio campanhas para atrair pacientes pelo WhatsApp, trazendo mais previsibilidade para a agenda e permitindo que o foco permaneça nos atendimentos. Sou formada em <strong>Estética e Imagem Pessoal</strong> e, há cinco anos, cuido exclusivamente de estratégias de <span className="inline-emphasis">captação de pacientes</span> para clínicas.</p></div><div className="about-photo-placeholder" aria-label="Espaço para fotografia da Elo Aguiar"><span>Adicionar foto com fundo transparente</span></div></div>
      </div>
    </div></section>

    <section className="method-preview section-dark"><div className="shell">
      <div className="section-grid"><div className="section-label section-label-light"><span>03</span><i /></div><div><span className="eyebrow eyebrow-light">COMO CONDUZIMOS A CAPTAÇÃO DE PACIENTES</span><h2>Uma estratégia de anúncios que <span className="text-highlight">fortalece a marca</span> e aproxima a clínica de potenciais pacientes.</h2><p className="section-lead-light">Trabalhamos com campanhas de reconhecimento de marca e anúncios voltados à captação de pessoas interessadas nos procedimentos e tratamentos oferecidos. Cada estratégia é planejada de acordo com o posicionamento, a região e os objetivos da clínica.</p></div></div>
      <div className="method-visuals method-principles">
        <article className="method-visual"><span className="method-step">01</span><h3>Reconhecimento de marca</h3><p>Campanhas que ampliam a presença da clínica e ajudam a construir familiaridade, confiança e percepção de valor.</p></article>
        <article className="method-visual"><span className="method-step">02</span><h3>Captação de pacientes</h3><p>Anúncios direcionados a pessoas interessadas nos procedimentos e tratamentos oferecidos pela clínica.</p></article>
        <article className="method-visual"><span className="method-step">03</span><h3>Otimização estratégica</h3><p>Acompanhamento contínuo das campanhas para identificar oportunidades e melhorar a qualidade dos contatos gerados.</p></article>
      </div>
    </div></section>

    <section className="niches section-light"><div className="shell"><div className="niches-heading"><span className="eyebrow">EXPERIÊNCIA APLICADA</span><h2>Clínicas e especialidades com as quais já trabalhamos.</h2><p>Atendemos operações de saúde e estética que valorizam posicionamento, qualidade e uma captação estruturada.</p></div><div className="niche-list">{niches.map(n=><span key={n}>{n}</span>)}</div></div></section>

    <section className="closing-cta section-dark"><div className="shell"><span className="eyebrow eyebrow-light">PRÓXIMO PASSO</span><h2>Escolha a estrutura mais adequada para o momento da sua clínica.</h2><div className="hero-actions centered"><a className="button button-mint" href="/gestao-de-anuncios">Gestão de Anúncios <span>→</span></a><a className="button button-light" href="/mentoria">Mentoria DSN <span>→</span></a></div></div></section>
    <footer className="site-footer"><div className="shell"><img src="/brand/digital-beauty.png" alt="Digital Beauty" /><nav><a href="/">Início</a><a href="/gestao-de-anuncios">Gestão de Anúncios</a><a href="/mentoria">Mentoria DSN</a></nav><div className="footer-meta"><p>Todos os direitos reservados à Eloisa Aguiar | CNPJ 56.129.391/0001-01</p><div><a href="https://eloaguiar.br" target="_blank" rel="noreferrer">eloaguiar.br</a><a href="https://www.instagram.com/eloaguiar.br/" target="_blank" rel="noreferrer">@eloaguiar.br</a></div></div></div></footer>
  </main>;
}
