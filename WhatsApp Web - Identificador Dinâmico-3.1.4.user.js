// ==UserScript==
// @name         WhatsApp Web - Identificador Dinâmico
// @version      3.1.4 //
// @updateURL    https://raw.githubusercontent.com/Caiosilva08/Projeto-Identificador-Para-Whatsapp/main/WhatsApp%20Web%20-%20Identificador%20Din%C3%A2mico-3.1.4.user.js
// @downloadURL  https://raw.githubusercontent.com/Caiosilva08/Projeto-Identificador-Para-Whatsapp/main/WhatsApp%20Web%20-%20Identificador%20Din%C3%A2mico-3.1.4.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Configuração do identificador
    let IDENTIFICADOR = "*Anônimo:* ";
    const USER_KEY = 'WhatsAppWeb-Identifier-Username';

    // Carrega ou configura o nome do usuário
    function configurarUsuario() {
        const savedName = GM_getValue(USER_KEY);

        if (!savedName) {
            const userName = prompt('Digite seu nome para identificação no WhatsApp:');
            if (userName) {
                GM_setValue(USER_KEY, userName.trim());
                IDENTIFICADOR = `*${userName.trim()}:* `;
            }
        } else {
            IDENTIFICADOR = `*${savedName}:* `;
        }
    }

    // Menu de configuração no Tampermonkey
    GM_registerMenuCommand('🛠 Alterar meu identificador', () => {
        const newName = prompt('Novo nome para identificação:', GM_getValue(USER_KEY) || '');
        if (newName) {
            GM_setValue(USER_KEY, newName.trim());
            IDENTIFICADOR = `*${newName.trim()}:* `;
            alert('Identificador atualizado com sucesso!');
        }
    });

    // Inicialização
    configurarUsuario();
    console.log("[Tampermonkey] Identificador carregado:", IDENTIFICADOR);

    function modifyMessageAndSend(inputBox) {
        let textoAtual = inputBox.innerText.trim();

        // Verificação adicional para garantir que há conteúdo
        if (textoAtual.length > 0 && !textoAtual.startsWith(IDENTIFICADOR)) {
            console.log("[Tampermonkey] Adicionando identificador...");

            const range = document.createRange();
            range.selectNodeContents(inputBox);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);

            document.execCommand('delete');
            document.execCommand('insertText', false, IDENTIFICADOR);

            setTimeout(() => {
                const sendButton = document.querySelector('button[aria-label="Send"]') ||
                                 document.querySelector('button span[data-icon="send"]')?.closest('button');
                sendButton?.click();
            }, 10);
        }
    }

    function attachListenerToInput(inputBox) {
        if (inputBox.hasAttribute("data-tampermonkey-listener")) return;
        inputBox.setAttribute("data-tampermonkey-listener", "true");

        inputBox.addEventListener('keydown', function(event) {
            if (!event.isTrusted) return;

            if (event.key === 'Enter' && !event.shiftKey) {
                // Validação principal aqui
                const texto = inputBox.innerText.trim();

                if (texto === "") {
                    console.log("[Tampermonkey] Mensagem vazia - cancelando envio");
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                }

                event.preventDefault();
                event.stopPropagation();
                modifyMessageAndSend(inputBox);
            }
        }, true);
    }

    function observeDOM() {
        const observer = new MutationObserver(() => {
            let inputBox = document.querySelector("div[contenteditable='true'][data-tab='6']") ||
                           document.querySelector("footer div[contenteditable='true']");
            if (inputBox) attachListenerToInput(inputBox);
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    observeDOM();
})();
