'use client';

import { useState } from 'react';
import PrimaryCard from './PrimaryCard';
import SecondaryCard from './SecondaryCard';
import { characters } from '../data';

export default function CharacterCards() {
  const [isPrimarySelected, setIsPrimarySelected] = useState(true);

  function handleTogglePrimary(value: boolean) {
    setIsPrimarySelected(value);
  }
  return (
    <div className="flex items-center">
      {characters.map((character, index) => {
        const isRight =
          !character.isPrimary &&
          index > characters.findIndex((item) => item.isPrimary);
        return character.isPrimary ? (
          <PrimaryCard
            key={character.id}
            isPrimarySelected={isPrimarySelected}
            data={character.data}
          />
        ) : (
          <SecondaryCard
            data={character.data}
            handleTogglePrimary={handleTogglePrimary}
            key={character.id}
            variant={isRight ? 'right' : 'left'}
          />
        );
      })}
    </div>
  );
}
