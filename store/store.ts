import { create } from 'zustand';

export interface Animal {
  id: number;
  type: 'cat' | 'dog';
  breed: string;
  description: string;
  image: any;
  favorite: boolean;
}

export interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;

  animals: Animal[];
  toggleFavorite: (id: number) => void;
}

const initialAnimals: Animal[] = [
  {
    id: 1,
    type: 'dog',
    breed: 'Labrador Retriever',
    description: 'Amigável, brincalhão e ótimo com crianças.',
    image: require('../assets/dog.png'),
    favorite: false,
  },
  {
    id: 2,
    type: 'dog',
    breed: 'Poodle',
    description: 'Inteligente, ativo e fácil de treinar.',
    image: require('../assets/dog.png'),
    favorite: false,
  },
  {
    id: 3,
    type: 'cat',
    breed: 'Siamês',
    description: 'Curioso, vocal e muito carinhoso.',
    image: require('../assets/cat.png'),
    favorite: false,
  },
  {
    id: 4,
    type: 'cat',
    breed: 'Persa',
    description: 'Calmo, dócil e adora colo.',
    image: require('../assets/cat.png'),
    favorite: false,
  },
];

export const useStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),

  animals: initialAnimals,
  toggleFavorite: (id: number) =>
    set((state) => ({
      animals: state.animals.map((animal) =>
        animal.id === id ? { ...animal, favorite: !animal.favorite } : animal
      ),
    })),
}));
