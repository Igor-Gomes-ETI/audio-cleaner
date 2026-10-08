# Contribuindo com o Audio Cleaner 🎙️

Obrigado por ajudar a melhorar uma ferramenta gratuita de áudio e vídeo!

## Como contribuir

1. Abra uma **Issue** relatando um problema, sugerindo uma melhoria ou descrevendo um teste real.
2. Antes de implementar uma alteração grande, discuta a ideia na Issue.
3. Faça um fork, crie uma branch com nome descritivo e envie um **Pull Request** explicando a alteração.
4. Descreva como reproduzir e testar. Quando possível, compare áudio antes/depois sem publicar gravações de terceiros sem autorização.

## Prioridades

- Preservar a inteligibilidade e naturalidade da voz durante a redução de ruído.
- Reduzir ruídos contínuos (ventilador, ar-condicionado), chiado e ruído de rua.
- Melhorar a compatibilidade entre navegadores, codecs e dispositivos móveis.
- Diminuir consumo de RAM e melhorar desempenho com vídeos grandes.
- Acessibilidade, testes, documentação e experiência de uso.

## Diretrizes

- Preserve a proposta de **processamento local no navegador**; não envie arquivos do usuário a servidores.
- Não introduza dependências pagas, coleta de dados pessoais ou serviços que exijam cadastro.
- Documente dependências novas e suas licenças; FFmpeg, RNNoise e outros componentes possuem obrigações próprias.
- Evite alterar o motor estável sem testes de regressão de áudio e vídeo.
- Inclua passos de teste e explique possíveis efeitos colaterais.
- Seja respeitoso e construtivo nos comentários e revisões.

## Feedback que ajuda

Informe navegador, sistema operacional, tipo/tamanho do arquivo, ruído encontrado, preset utilizado, resultado esperado e resultado observado. Não inclua dados pessoais nem arquivos privados em Issues públicas.

## Licença

Ao contribuir, você concorda em disponibilizar sua contribuição sob a licença MIT deste repositório, sem retirar avisos de licença de dependências.
