type Ressource = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const MathsRessources: Ressource[] = [
  {
    title: "Livre de première année",
    description: "Le livre de Maths de peip1",
    link: "https://drive.google.com/file/d/1SD7Yn10jvb53u4HENwp56ucnyF9P6WJ1/view?pli=1",
    image:
      "https://media.electre-ng.com/images/image-id/0b8d3c34933c0268a509940b004b1e661e3185f458d4ed312ef5fc2d2ac11d52.jpg",
  },
  {
    title: "Annales CF avec correction PEIP1",
    description:
      "Annales des contrôles continus de maths avec correction de peip1",
    link: "https://drive.google.com/drive/folders/1R4Jynklt5mYGOwEQ9V2sGXQUAPYHmnwm",
    image:
      "https://mathspig.files.wordpress.com/2010/11/3-ihasafunny-cat-did-the-math-and-you-cannot-afford-the-dog1.jpg?w=584",
  },
  {
    title: "Bibmath",
    description:
      "Site de ressources de maths, exos corrigeés, cours, etc... pour réviser( licence) ou approfondir (prépa)",
    link: "https://www.bibmath.net/ressources/index.php?action=affiche&quoi=mpsi/index",
    image: "https://www.bibmath.net/actu/images/exercices.jpg",
  },
];

export default MathsRessources;
