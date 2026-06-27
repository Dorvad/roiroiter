export const about = {
  portrait: "roiter-faces.jpg",
  intro: "Roi Roiter paints and draws surreal figures — faces, beasts, bodies, and scenes remade from memory and old masters.",
  biography: [
    "Painter and draftsman working between oil painting and the sketchbook. Classical sources are dismantled and rebuilt with masks, animals, and strange anatomy.",
  ],
  statement: [
    "I am interested in the face as a mask, the body as a fragment, and the animal as a witness.",
  ],
  materials: [
    { title: "Paint", text: "Oil on canvas." },
    { title: "Drawings", text: "Ink and marker in sketchbooks." },
  ],
  exhibitions: [] as { year: string; text: string }[],
};

export const studioNotes: {
  id: string;
  date: string;
  title: string;
  body: string[];
  image: string;
  tags: string[];
}[] = [];
