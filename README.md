# Audio Cleaner 🎙️

Ferramenta web gratuita da **Igor Gomes ETI** para tratamento básico de ruído em áudio diretamente no navegador.

## Privacidade
O processamento acontece localmente no navegador. O arquivo selecionado não é enviado para um servidor pela aplicação.

## Recursos da versão inicial
- MP3, WAV, M4A, AAC e OGG, conforme suporte de decodificação do navegador\n- Vídeos MP4, WebM e MOV: extrai, trata e reinsere a faixa de áudio no navegador
- Presets Leve, Normal, Forte e Voz / Unboxing
- Redução de ruído por gate adaptativo
- Filtro de graves
- Normalização
- Comparação Original × Tratado
- Exportação MP3 em 192 kbps e WAV
- Interface responsiva

## Uso local
Abra `index.html` em um navegador moderno. Para melhor compatibilidade, sirva a pasta por HTTP local.

## GitHub Pages
O projeto é estático e compatível com GitHub Pages. Para publicação pública via Pages, a disponibilidade depende das configurações e do plano da organização/repositório.

## Próximos passos
- processamento de vídeo MP4
- redução de ruído neural via WebAssembly / RNNoise
- PWA/offline
- visualização de forma de onda

© Igor Gomes ETI