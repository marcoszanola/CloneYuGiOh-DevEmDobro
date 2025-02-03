# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.4] - 2025-02-03
 
Pequena atualização de melhorias no código e novidades para o visualizador de cartas Po-Ki-Oh!
 
### Added

- 6 novas cartas adicionadas.
- Leve animação de transição entre cartas no modo Set.
 
### Changed

- Melhor utilização de forma geral das novas classes "gif-sprite" & "gif-adicional" pelo CSS.

## [2.3] - 2025-02-01
 
Pequena atualização de melhorias e novidades para o visualizador de cartas Po-Ki-Oh!
 
### Added

- 6 novas cartas adicionadas.
 
### Changed

- Volume geral do "cry" alterado de 0.7 para 0.4.
- Volume do som de defesa alterado de 1 para 0.7.
- Timeout de anti-click do botão summon alterado de 500 para 700.
- Adicionado classe "gif-sprite" & "gif-adicional" para cada carta no HTML, afim de melhorar o uso da classe "summon" pelo CSS.
 
### Fixed

- Retirado uma linha de código de cada botão, que impossibilitava que novas cartas adicionadas ao visualizador funcionassem propriamente.
    <!-- botao.addEventListener("click", function (**evento**) { & **let cartao = evento.target.closest('.cartao');** -->
 
## [2.0] - 2025-01-30
 
Primeira grande atualização do visualizador de cartas Po-Ki-Oh!
 
### Added

- Menus interativos com opções ao clicar na carta.
- Personagens imersivos referenciando a ação "Summon" de Yu-Gi-Oh!
- Adicionado sprites 3D para as 7 cartas.
- Adicionado sons de personagem para as 7 cartas.
- Adicionado efeitos sonoros de dano.
- Adicionado efeitos sonoros nas opções do menu, e nas setas de navegação.
 
### Changed

- Ease opacity e visibility transition do escurecimento da carta e aparição dos sprites alteradas de 0.3s para 0.5s.
- O menu do modo Set agora se localiza na parte superior da carta e não mais na lateral direita.
 
### Fixed

- Agora há um bloqueio de clique momentâneo para evitar spam de cliques que possam acarretar em uma desconfiguração de menus.
- Corrigido um bug visual em que os ícones do menu seguinte apareciam enquanto o menu anterior fechava.
- Corrigido a possibilidade de clique dos botões em menus inativos.
 
## [1.0] - 2025-01-24
  
Versão inicial do visualizador de cartas Po-Ki-Oh! Desenvolvido por um iniciante em programação Web com o principal foco nos estudos.
 
### Added

- 7 cartas adicionadas.
- Interação para virar a carta em "modo de defesa".
- Descrição da carta com scroll.
- Português do Brasil.
 
### Fixed
 
- Ajuste para resoluções menores de alguns celulares.