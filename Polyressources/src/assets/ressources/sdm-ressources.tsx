type Ressource = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const SDMRessources: Ressource[] = [
  {
    title: "LE SAINT PDF DE CINETIQUE",
    description: "Indispensable pour le S1 de SDM",
    link: "ressources/Cinetique.pdf",
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
  },
  {
    title: "Recap de la partie 1 de la cinétique",
    description: "Fiches de cours de la première partie du cm",
    link: "ressources/COURSCINETIQUE_1_2_3.pdf",
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png",
  },
  {
    title: "Recap de la partie 2 de la cinétique",
    description: "Fiches de cours de la deuxième partie du cm",
    link: "ressources/COURSCINETIQUE_45.pdf",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Giancarlo_Esposito_by_Gage_Skidmore_2.jpg/280px-Giancarlo_Esposito_by_Gage_Skidmore_2.jpg",
  },
  {
    title: "Vidéo Cinétique",
    description: "Vidéo qui permet de comprendre les bases de la cinétique",
    link: "https://www.youtube.com/watch?v=8xMoTYw9A60",
    image:
      "https://pyxis.nymag.com/v1/imgs/6e3/083/9e8bb81160d2aaf23e9d5b0e34e1cc881a-30-hank-breaking-bad.2x.h473.w710.jpg",
  },
];

export default SDMRessources;
