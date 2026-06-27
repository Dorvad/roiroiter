export const about = {
  portrait: "roiter-faces.jpg",
  intro: "Roi Roiter paints and draws surreal figures.",
  biography: [
    "Oil painting and ink drawings in the sketchbook — faces, beasts, and fragmented bodies.",
  ],
  statement: [] as string[],
  materials: [
    { title: "Drawings", text: "Ink and marker on paper." },
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
