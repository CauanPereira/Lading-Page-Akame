document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion__options");

  accordionItems.forEach((item, index) => {
    // Criar o elemento de conteúdo para cada accordion
    const content = document.createElement("div");
    content.className = "accordion__answer";
    content.style.maxHeight = "0";
    content.style.overflow = "hidden";
    content.style.transition = "max-height 0.3s ease-out";
    content.style.color = "#fff";
    content.style.padding = "10px 20px 0 20px";
    content.style.maxWidth = "550px";

    item.after(content);

    // Adicionar o conteúdo das respostas
    const answers = [
      `O AKAME é a escolha ideal para quem busca organização e produtividade porque oferece uma solução completa e integrada. Com nossa plataforma, você gerencia finanças, saúde, projetos e tarefas em um único lugar, com interface intuitiva e recursos inteligentes que se adaptam às suas necessidades.`,

      `Nossa plataforma ajuda você a alcançar seus objetivos através de um sistema integrado que monitora seu progresso em diferentes áreas. Acompanhamos seus gastos, investimentos, atividades físicas, projetos e compromissos, fornecendo insights valiosos e lembretes personalizados para manter você no caminho certo.`,

      `Com o AKAME, você pode esperar uma melhoria significativa na organização da sua vida. Nossos usuários relatam melhor controle financeiro, mais disciplina nos exercícios físicos, maior produtividade nos projetos e uma sensação geral de bem-estar por ter tudo sob controle em um só lugar.`,

      `Começar é muito simples! Basta se cadastrar em nossa plataforma, fazer um breve tour pelos recursos disponíveis e começar a adicionar suas informações. Você pode começar pela área que mais precisa de atenção: seja finanças, saúde, projetos ou tarefas diárias. Nossa equipe está sempre disponível para ajudar no que precisar.`,

      `O AKAME oferece diversos recursos essenciais: gestão financeira completa, planejamento de treinos e monitoramento de saúde, gerenciamento de projetos com prazos e metas, organização de tarefas diárias, além de relatórios e análises personalizadas para ajudar em sua evolução pessoal.`,
    ];
    content.textContent = answers[index];

    // Função para alternar o estado do accordion
    function toggleAccordion(item) {
      const icon = item.querySelector(".accordion__icon");
      const answer = item.nextElementSibling;
      const isOpen = answer.style.maxHeight !== "0px";

      // Alternar o estado do accordion atual
      if (isOpen) {
        answer.style.maxHeight = "0";
        icon.style.transform = "rotate(0deg)";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(90deg)";
      }
    }

    // Adicionar evento de clique no accordion inteiro
    item.addEventListener("click", function (e) {
      toggleAccordion(this);
    });

    // Adicionar evento de clique específico para o ícone (opcional, já que o item inteiro é clicável)
    const icon = item.querySelector(".accordion__icon");
    if (icon) {
      icon.addEventListener("click", function (e) {
        e.stopPropagation(); // Previne que o evento dispare duas vezes
        toggleAccordion(item);
      });
    }
  });
});
