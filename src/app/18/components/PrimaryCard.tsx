'use client';

import { Character } from '../types';
import { formatArray } from '../utils';
import Card from './Card';

type Props = {
  data: Character;
  isPrimarySelected: boolean;
};
export default function PrimaryCard({ data, isPrimarySelected }: Props) {
  return (
    <Card>
      <Card.Content animateOnDisablePrimary={!isPrimarySelected}>
        <Card.Front backgroundImage={data.bgImage}>
          <Card.FrontHeader>
            <Card.FrontTitle>{data.name}</Card.FrontTitle>
            <Card.FrontSubtitle>{data.description}</Card.FrontSubtitle>
          </Card.FrontHeader>

          <Card.FrontMain>
            <Card.CharacterInfo
              heading="Filmes"
              value={formatArray(data.movies, '')}
            />
            <Card.CharacterInfo heading="Espécie" value={data.species} />
            <Card.CharacterInfo heading="Altura" value={data.height} />
            <Card.CharacterInfo
              heading="Armas"
              value={formatArray(data.weapons, 'Sem armas')}
            />
          </Card.FrontMain>
          <Card.CharacterImage
            alt={`Imagem de ${data.name}`}
            width={data.image.width}
            height={data.image.height}
            src={data.image.url}
          />
        </Card.Front>

        <Card.Back backgroundImage={data.coverImage} inverted>
          <Card.BackText>{data.name}</Card.BackText>
        </Card.Back>
      </Card.Content>
    </Card>
  );
}
