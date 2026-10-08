# Audio Cleaner 🎙️

Ferramenta web gratuita da **Igor Gomes ETI** para redução de ruído em arquivos de áudio e na faixa de áudio de vídeos, diretamente no navegador.

<p align="center">
  <a href="https://igor-gomes-eti.github.io/audio-cleaner/">
    <img src="https://img.shields.io/badge/ABRIR_AUDIO_CLEANER-19d3c5?style=for-the-badge&logo=github&logoColor=black" alt="Abrir Audio Cleaner">
  </a>
</p>

> **Use a ferramenta:** https://igor-gomes-eti.github.io/audio-cleaner/

## 🔒 Privacidade

O processamento acontece localmente no navegador. Os arquivos selecionados não são enviados para um servidor pela aplicação.

## 🎧 Formatos e recursos

- Áudio: MP3, WAV, M4A, AAC e OGG, conforme suporte do navegador.
- Vídeo: MP4, WebM e MOV. A aplicação extrai o áudio, trata e tenta reinseri-lo no vídeo.
- Presets: Leve, Normal, Forte e Voz / Unboxing.
- **Voz / Unboxing com RNNoise neural via WebAssembly**, com fallback automático para o tratamento clássico quando o módulo neural não estiver disponível.
- Fluxo de refinamento após ouvir o resultado: **Voz Natural**, **Voz Forte**, **Ruído Extremo** e **Ventilador / Ar**, sem precisar selecionar o arquivo novamente.
- Gate adaptativo para redução de ruído.
- Filtro de graves e normalização.
- Comparação entre original e tratado.
- Exportação de áudio em MP3 192 kbps e WAV.
- Download do vídeo com a faixa de áudio tratada.
- Interface responsiva.

## ⚙️ Limites e recomendações

O Audio Cleaner não envia o arquivo para um servidor, portanto não existe um limite de upload imposto pelo site. O limite real depende principalmente da memória RAM, navegador, duração, resolução e codec do arquivo.

| Tipo | Faixa recomendada | Tamanho recomendado |
| --- | ---: | ---: |
| Áudio | até 60 minutos | até 150 MB |
| Vídeo | até 20 minutos | até 300 MB |

Arquivos acima dessas faixas **podem funcionar**, especialmente em computadores com bastante RAM, mas o navegador poderá ficar lento, consumir muita memória ou encerrar a aba. Para vídeos longos ou em 4K, prefira dividir o arquivo antes do processamento.

A própria página exibe um aviso de confirmação quando o arquivo ultrapassa o tamanho recomendado.

## 🌐 Uso

A forma mais simples é clicar no botão **ABRIR AUDIO CLEANER** no início deste README. Também é possível baixar o projeto e executá-lo localmente por HTTP.

## 🚧 Próximas melhorias

- refinamento e testes do RNNoise/WebAssembly em diferentes tipos de gravação;
- PWA para funcionamento offline;
- visualização da forma de onda;
- otimizações para vídeos maiores.

© Igor Gomes ETI


## Sobre / About

Audio Cleaner é uma ferramenta gratuita e open source para remover e reduzir ruído de fundo de áudio e vídeo diretamente no navegador. Possui modos para voz, unboxing, ventilador e ar-condicionado, com exportação MP3, WAV e vídeo tratado. O processamento é local, sem upload do arquivo do usuário para servidor.

**Palavras-chave:** remover ruído de áudio, remover ruído de vídeo, redução de ruído, limpar áudio, noise reduction, áudio para YouTube, voz, unboxing, ventilador, ar-condicionado.

## 🤝 Comunidade e contribuições

Desenvolvedores são bem-vindos! Ajude a aprimorar o algoritmo, desempenho, acessibilidade, compatibilidade e documentação. Abra uma **Issue** para sugestões ou bugs e envie um **Pull Request** com melhorias testadas. Consulte [CONTRIBUTING.md](CONTRIBUTING.md).

**Usou o Audio Cleaner?** Compartilhe feedback com tipo de ruído, navegador e resultado, sem publicar arquivos privados. Cada teste real ajuda a evoluir o projeto.

## 💚 Apoie o projeto

O Audio Cleaner continuará gratuito. Você pode ajudar compartilhando, dando uma estrela ⭐, contribuindo com código ou [apoiando financeiramente pelo GitHub Sponsors](https://github.com/sponsors/wizardigor). Consulte [SUPPORT.md](SUPPORT.md).

## 📜 Licença

Código próprio disponibilizado sob a [licença MIT](LICENSE). Dependências de terceiros continuam sujeitas às suas respectivas licenças.
