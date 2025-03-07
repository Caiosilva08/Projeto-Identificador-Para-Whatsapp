# WhatsApp Web - Identificador Dinâmico

## Sobre

Este Userscript desenvolvido para a extensão Tampermonkey permite adicionar um identificador personalizado às mensagens enviadas no WhatsApp Web. Com essa funcionalidade, cada usuário pode configurar um nome que será automaticamente inserido no início de suas mensagens, garantindo uma identificação clara e padronizada ao se comunicar.

A proposta deste script é facilitar a organização em conversas de grupo ou individuais, permitindo que o destinatário saiba de imediato quem enviou a mensagem, especialmente em situações onde a conta é compartilhada ou onde a identificação pelo próprio WhatsApp não é suficiente.

## Funcionalidades

- Adiciona automaticamente um identificador personalizado às mensagens enviadas no WhatsApp Web  
- Permite configurar e alterar o identificador através do menu do Tampermonkey  
- Automação do envio da mensagem após a inserção do identificador  
- Validação de mensagens para evitar envios vazios  
- Integração discreta com a interface do WhatsApp Web, sem interferência visual ou necessidade de configurações complexas  

## Instalação

1. Instale a extensão Tampermonkey no Google Chrome através do seguinte link: [Tampermonkey - Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).  
2. Acesse as configurações do navegador, vá até a seção "Extensões" e habilite o "Modo Desenvolvedor".  
3. Ainda na seção de extensões, clique na opção "Saiba Mais" na extensão do Tampermonkey e habilite a opção "Permitir acesso a URLs de arquivo".  
4. Clique no ícone de quebra-cabeça no cabeçalho do navegador, selecione a extensão Tampermonkey e clique em "Adicionar novo script".  
5. Cole o código do script e salve.  

## Como Usar

1. Abra o WhatsApp Web.  
2. Caso seja a primeira vez que estiver utilizando o script, uma mensagem será exibida solicitando que você informe um nome para ser utilizado como identificador.  
3. Após definir o identificador, utilize o WhatsApp normalmente e todas as mensagens enviadas terão o nome configurado automaticamente.  
4. Para alterar o identificador posteriormente, clique no ícone de quebra-cabeça, selecione a extensão Tampermonkey e clique em "Alterar meu identificador".  

## Tecnologias Utilizadas

- **JavaScript** para manipulação do DOM  
- **Tampermonkey** para execução do Userscript e armazenamento das configurações  

## Licença

Este projeto está licenciado sob a **licença MIT**. Isso significa que você pode utilizá-lo, modificá-lo e distribuí-lo livremente, desde que mencione a autoria original.
