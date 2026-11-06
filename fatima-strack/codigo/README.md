# Template de Landing Page para Clínicas de Estética

React + Vite + Tailwind, 100% orientado a configuração: **todo** o conteúdo vem de
`src/config/clinicData.js`. Os componentes não têm texto, cor, foto ou link fixo.

## Nova clínica em menos de 1 minuto

1. Copie o molde em branco por cima do arquivo atual:
   ```bash
   cp src/config/clinicData.template.js src/config/clinicData.js
   ```
2. Preencha `src/config/clinicData.js` (nome, WhatsApp, endereço, cores, serviços, avaliações).
3. Coloque as fotos em `public/images/` e referencie como `"images/arquivo.jpg"`
   (ou use URLs completas).
4. Valide e gere o site:
   ```bash
   npm run check
   npm run demo
   ```
   `npm run check` lista campos faltando, textos de exemplo esquecidos, WhatsApp no formato errado
   e imagens que não existem.

> Dica: guarde cada clínica como `clinicData.<nome>.js` dentro de `src/config/` para voltar a ela depois.

## Estrutura do `clinicData`

| Módulo | O que controla |
|---|---|
| `brand` | Nome, slogan, logo, **WhatsApp** (destino de todos os botões), cidade, endereço, Instagram, Google Maps |
| `theme` | `primaryColor`, `secondaryColor`, `backgroundColor` — recolorem o site inteiro |
| `media` | `heroImage` (retrato do topo), `doctorPhoto`, `ambienceImages` |
| `services` | Cards de procedimentos (`title`, `description`, `image`, `tag`) — até 4 |
| `googleReviews` | Nota, total e depoimentos reais do Google Maps |
| `content` | Textos de cada seção, mensagens do WhatsApp, SEO, menu e rodapé; `content.faq` e `content.journey` (opcionais) |

Textos que a clínica não definir vêm de `src/config/defaults.js` (ex.: "Como funciona" e
"Dúvidas frequentes"). Assim, configurações antigas continuam funcionando quando o layout ganha seções novas.

### Layout (premium, v2)

Topo editorial com retrato em arco e selos flutuantes → faixa de números + faixa animada de tratamentos →
tratamentos em zigue-zague numerado → "Sobre" em fundo escuro com diferenciais → "Como funciona" →
"Nosso espaço" → avaliações com nota em destaque → dúvidas frequentes → localização com "Como chegar" →
chamada final → rodapé em 4 colunas.

Automático: título da página (`{name} | {tagline} em {city}`), mapa (pelo nome + endereço),
mensagem do WhatsApp por procedimento, e seções vazias somem sozinhas
(sem fotos do espaço → sem a seção "Nosso Espaço").

## Comandos

| Comando | Faz |
|---|---|
| `npm run dev` | Servidor local |
| `npm run check` | Valida o `clinicData` |
| `npm run build` | Build de produção em `dist/` |
| `npm run demo` | Gera `demo/site-demo.html` — o site inteiro em 1 arquivo (fotos embutidas), abre com duplo clique |

## Publicar na Vercel

```bash
npm run demo
cp demo/site-demo.html luigina-spera/index.html
npx vercel deploy luigina-spera --prod --yes
```
(Troque `luigina-spera` pelo nome da pasta/projeto da clínica.)
