## ⚠️ Nota de Segurança: O histórico de commits deste repositório foi redefinido em 12/03/2026. Esta ação foi necessária para remover dados sensíveis que foram expostos acidentalmente durante testes de deploy no Netlify. O projeto foi reiniciado com um commit órfão para garantir que nenhuma versão anterior com informações confidenciais permanecesse no histórico do Git.



# 🛡️ IDs de Contas Recuperadas - Mobile Legends

Site para consulta de IDs de contas roubadas no Mobile Legends. Ferramenta de alerta para ajudar jogadores a identificarem possíveis golpes antes de comprar ou negociar uma conta.

## 🎯 Sobre

Ao digitar um ID de uma conta de Mobile Legends, o sistema verifica no Firebase se aquele ID já foi registrado como roubado. Se estiver na lista, um alerta é exibido.

## 🎨 Identidade Visual

O projeto utiliza um gradiente vibrante que representa a transição entre segurança (azul), alerta (roxo) e atenção (amarelo):

```css
background: linear-gradient(90deg, #1a00b0 0%, #5e08c7 50%, #edd553 100%);
🛠 Tecnologias
HTML5 - Estrutura da página

CSS3 - Estilização com gradientes e design responsivo

JavaScript - Lógica de busca e interatividade

Firebase Realtime Database - Armazenamento dos IDs roubados

particles.js - Efeito de partículas no fundo

Netlify - Hospedagem

📁 Estrutura do Projeto

/
├── index.html                    # Página principal
├── style.css                     # Estilos completos
├── main.js                       # Lógica de busca e Firebase
├── img.png                       # Imagen decorativa
└── config.js                     # Configurações do Firebase
🔥 Estrutura do Firebase

Realtime Database
└── ids
    ├── 102581531_1034
    │   ├── exibicao: "102581531 (1034)"
    │   ├── id: "102581531"
    │   └── servidor: "1034"
    ├── 108274236_1037
    │   ├── exibicao: "108274236 (1037)"
    │   ├── id: "108274236"
    │   └── servidor: "1037"
    └── ...
🔍 Como funciona a busca

O sistema valida o ID numérico realizando uma consulta no nó ids do Firebase para verificar a existência da chave.

Exemplo:

text
ID digitado: 102581531
Busca no Firebase: ids/102581531_1034
Se existir → conta roubada
````
🚀 Como usar

Acesse: https://geovani-idsdecontasml.netlify.app
````
Digite o ID da conta do Mobile Legends (apenas números)

O sistema busca automaticamente e adiciona o número do servidor

Se o ID estiver na base, aparecerá: "102581531 (1034)"

📌 Exemplo prático
ID	Servidor	Resultado
102581531	1034	⚠️ Conta na base
354894230	1026	⚠️ Conta na base
999999999	9999	✅ Conta não encontrada

⚠️ Importante
Este site tem fim educativo e de alerta. A ideia é ajudar a comunidade de Mobile Legends a não cair em golpes ao comprar ou negociar contas.

📱 Responsividade
O site é totalmente responsivo e funciona perfeitamente em:

💻 Desktop

📱 Smartphones

☁️ Hospedagem
O projeto está hospedado no Netlify, com deploy automático a cada atualização no GitHub.

📄 Licença
MIT © Geovani Rodrigues

⚠️ Aviso: Projeto independente, sem vínculo com a Moonton (Mobile Legends). Criado para ajudar a comunidade.






