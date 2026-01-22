
export interface Spiel {
  id: string;
  category: string;
  title: string;
  english: string;
  brazil: string;
  images?: string[];
  tags?: string[];
  createdAt: number;
}

export interface FirebaseConfig {
  databaseURL: string;
}
