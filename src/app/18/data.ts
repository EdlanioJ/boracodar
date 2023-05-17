import { Character } from './types';

export const characters: {
  id: string;
  data: Character;
  isPrimary?: boolean;
}[] = [
  {
    id: '1',
    data: {
      name: 'Finn',
      description:
        'Finn, o apelido de FN-2187, foi um Humano sensível à Força que serviu como Stormtrooper da Primeira Ordem.',
      height: '1.78 m',
      movies: ['The Force Awakens', 'The Last Jedi', 'The Rise of Skywalker'],
      weapons: ['Sabre de luz', 'Glie-44 blaster'],
      species: 'Humano',
      coverImage: '/images/18/finn-bg.png',
      bgImage: '/images/18/bg.png',
      image: {
        url: '/images/18/finn.png',
        width: 293,
        height: 558,
      },
    },
  },
  {
    id: '2',
    isPrimary: true,
    data: {
      name: 'Rey Skywalker',
      description:
        'Era uma catadora de sucata que descobriu ser sensível à Força durante sua busca ao lendário Mestre Jedi Luke Skywalker.',
      height: '1.7 m',
      coverImage: '/images/18/bg.png',
      bgImage: '/images/18/bg.png',
      movies: [
        'The Force Awakens',
        'The Last Jedi',
        'The Rise of Skywalker',
        'Forces of Destiny',
      ],
      weapons: ['Sabre de luz', 'Blaster', 'Quarterstaff'],
      species: 'Humano',
      image: {
        url: '/images/18/rey.png',
        width: 427,
        height: 558,
      },
    },
  },
  {
    id: '3',
    data: {
      name: 'BB-8',
      description:
        'Um droid astro-mecânico da série BB que operou aproximadamente trinta anos depois da Batalha de Endor.',
      height: '67 cm',
      coverImage: '/images/18/bb8-bg.png',
      bgImage: '/images/18/bg.png',
      movies: ['The Force Awakens', 'The Last Jedi', 'The Rise of Skywalker'],
      weapons: [],
      species: 'Droid',
      image: {
        url: '/images/18/bb8.png',
        width: 375,
        height: 594,
      },
    },
  },
];
