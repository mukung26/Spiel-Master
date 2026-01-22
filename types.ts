
export interface Spiel {
  id: string;
  category: string;
  title: string;
  english: string;
  brazil: string;
  images?: string[];
  tags?: string[];
  createdAt: number;
  isDeleted?: boolean;
  isDefault?: boolean;
  isPinned?: boolean;
  color?: string;
  order?: number;
}

export interface FirebaseConfig {
  databaseURL: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum View {
  HOME = 'HOME',
  CHAT = 'CHAT',
  TRANSLATOR = 'TRANSLATOR',
  EDITOR = 'EDITOR'
}

export interface UserProfile {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
  lastSeen: number;
  status: 'online' | 'offline';
}
