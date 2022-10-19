import gotImage from "./images/got.jpg";
import petwitter from "./images/pet.png";
import rancho from "./images/rancho.png";
import gda from "./images/gda.png";

export const Projects = [
  {
    id: 1,
    name: "Portaria - QR Code",
    description:
      "Sistema de entrada e saída para organizações militares controlado por QR Code [...]",
    stackTree: "React | Node.js | Prisma | PostgreSql",
    image: gda,
    longDescription: `Sistema de controle de entrada e saída para organizações militares. Controla a entrada e saída de pessoal cadastrado (via QR Code), pessoal não cadastrado (cadastro rápido feito na hora via celular) e controle de hodômetros de viaturas em missões.`,
    date: `Desenvolvido e implementado em 2022`,
    video: "https://www.youtube.com/watch?v=1aJjmSiPWY4",
  },
  {
    id: 2,
    name: "PeTwitter [POC]",
    description: "Clone do Twitter para pets [...]",
    stackTree: "React | Node.js | Prisma | PostgreSql",
    image: petwitter,
    longDescription: `Clone do Twitter para pets, projeto criado para desenvolvimento de habilidades.`,
    date: `Desenvolvido em 2021/2022`,
    github: "https://github.com/sgtroberti/petwitter-front",
  },
  {
    id: 3,
    name: "Game Of Thrones Books - API [POC]",
    description: "API de livros de Game Of Thrones [...]",
    stackTree: "Node.js | MongoDB",
    image: gotImage,
    longDescription: `API de livros de Game Of Thrones, projeto criado para desenvolvimento de habilidades.`,
    date: `Desenvolvido em 2021/2022`,
    github: "https://github.com/sgtroberti/jobs/tree/master/backend",
  },
  {
    id: 4,
    name: "Arranchamento Online",
    description: "Agendamento de refeições para organizações militares [...]",
    stackTree: "HTML | CSS | BootStrap | PHP | MySql",
    image: rancho,
    longDescription: `Sistema utilizado para agendamento de refeições para funcionários, a fim de evitar desperdícios para cozinhas industriais.`,
    date: `Desenvolvido e implementado em 2019`,
    video: "https://www.youtube.com/watch?v=6u5_3lldZVA",
  },
];
