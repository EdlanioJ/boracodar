'use client';

import Card from './Card';

export default function EssentialCard() {
  return (
    <Card initialAnimationDelay="10ms">
      <Card.Heading text="Para você começar" />
      <Card.Header>
        <Card.Title title="Essentials" />
        <Card.Price price={10000} />
      </Card.Header>
      <Card.Button value="Assinar agora" />
      <Card.List>
        <Card.ListItem text="Até 3 usuário" />
        <Card.ListItem text="Autoatendimento" />
      </Card.List>
    </Card>
  );
}
