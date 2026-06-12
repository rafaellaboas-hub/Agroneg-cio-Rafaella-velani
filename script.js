// Seleciona os elementos da página
const botaoAlerta = document.getElementById('btn-alerta');
const mensagemAcao = document.getElementById('mensagem-acao');
// Adiciona o evento de clique ao botão
botaoAlerta.addEventListener('click', function() {
    // Se a mensagem estiver escondida, ela aparece. Se já estiver visível, ela some.
        if (mensagemAcao.classList.contains('hidden')) {
                mensagemAcao.classList.remove('hidden');
                        mensagemAcao.classList.add('show');
                                botaoAlerta.textContent = 'Fechar dicas';
                                    } else {
                                            mensagemAcao.classList.remove('show');
                                                    mensagemAcao.classList.add('hidden');
                                                            botaoAlerta.textContent = 'O que podemos fazer?';
                                                                }
                                                                });