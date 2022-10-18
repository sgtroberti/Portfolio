import placeholder from "./images/test.png";

export const Projects = [
  {
    id: 1,
    name: "Portaria - QR Code",
    description:
      "Sistema de entrada e saída para organizações militares controlado por QR Code [...]",
    stackTree: "React | Node.js | Prisma | PostgreSql",
    image: placeholder,
    longDescription: `Sistema de controle de entrada e saída para organizações militares. Controla a entrada e saída de pessoal cadastrado (via QR Code), pessoal não cadastrado (cadastro rápido feito na hora via celular) e controle de hodômetros de viaturas em missões.`,
    date: `Desenvolvido e implementado em 2022`,
  },
  {
    id: 2,
    name: "Arranchamento Online",
    description: "Agendamento de refeições para organizações militares [...]",
    stackTree: "HTML | CSS | BootStrap | PHP | MySql",
    image: placeholder,
    longDescription: `Sistema utilizado para agendamento de refeições para funcionários, a fim de evitar desperdícios para cozinhas industriais.`,
    date: `Desenvolvido e implementado em 2019`,
  },
];
