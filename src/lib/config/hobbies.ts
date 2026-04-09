export type HobbyWork = {
  type: 'image' | 'link';
  url: string;
  label: string;
};

export type Hobby = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  works?: HobbyWork[];
};

export const HOBBIES: Hobby[] = [
  {
    id: '1',
    title: 'Strategic Chess',
    description: 'Mastering the art of strategy and foresight. I enjoy analyzing classic games and playing .',
    tags: ['Games'],
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2071&auto=format&fit=crop',
    works: [
      { type: 'link', url: 'https://www.chess.com/member/tnl117', label: 'Chess.com Profile' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2000', label: 'Tournament Highlights' }
    ]
  },
  {
    id: '2',
    title: 'Poetic Expressions',
    description: 'Exploring the rhythm of language. Writing poems allows me to distill complex emotions into sparse, evocative verses.',
    tags: ['Creative'],
    image: 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=2070&auto=format&fit=crop',
    works: [
      { type: 'link', url: 'https://medium.com', label: 'Latest Publication' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2000', label: 'Ink & Paper' }
    ]
  },
  {
    id: '3',
    title: 'Digital Craftsmanship',
    description: 'Building innovative web experiences with modern tools. My hobby is my profession, and my profession is my hobby.',
    tags: ['Design', 'Creative'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    works: [
      { type: 'link', url: 'https://github.com', label: 'GitHub Repository' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000', label: 'Code Snippets' }
    ]
  },
];
