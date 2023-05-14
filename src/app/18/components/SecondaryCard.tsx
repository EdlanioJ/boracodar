import { Character, ImageType } from '../types';
import { formatArray } from '../utils';
import Card from './Card';

interface Props {
  variant?: 'left' | 'right';
  data: Character;
  handleTogglePrimary: (value: boolean) => void;
}

export default function SecondaryCard({
  variant = 'left',
  handleTogglePrimary,
  data,
}: Props) {
  return (
    <Card
      type="secondary"
      isLeft={variant === 'left'}
      isRight={variant === 'right'}
      onMouseOver={() => handleTogglePrimary(false)}
      onMouseOut={() => handleTogglePrimary(true)}
    >
      <Card.Content animateOnHover>
        <Card.Back backgroundImage={data.coverImage}>
          <Card.BackText>{data.name}</Card.BackText>
        </Card.Back>

        <Card.Front backgroundImage={data.bgImage} inverted>
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
      </Card.Content>
    </Card>
  );
}
