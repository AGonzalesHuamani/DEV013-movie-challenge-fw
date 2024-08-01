// Definir un tipo TypeScript llamado Movie
export type Movie = {
  id: number;
  title: string;
  poster: string;
  year: string;
  overview?: string;
  rating?: number; 
  genres: string[];
};

  