type Ressource = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const OrientationRessources: Ressource[] = [
  {
    title: "Présentation des Spécialités",
    description: "Spécialités de Polytech Lyon",
    link: "https://polytech.univ-lyon1.fr/formation/cycle-ingenieur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Logo_Reseau_Polytech.svg",
  },
  {
    title: "Préparer un entretien",
    description: "Que ce soit pour un stage ou une alternance",
    link: "https://www.michaelpage.fr/advice/candidats/l%E2%80%99entretien-d%E2%80%99embauche/entretien-dembauche-le-top-10-des-questions",
    image: "https://www.venette.fr/wp-content/uploads/2018/01/emploi.png",
  },
];

export default OrientationRessources;
