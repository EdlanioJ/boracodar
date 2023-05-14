'use client';

import Card from './Card';

export default function UltimateCard() {
  return (
    <Card
      initialAnimationDelay="210ms"
      variant="secondary"
      label="Mais vantajoso"
    >
      <Card.Heading text="Para você decolar" />
      <Card.Header>
        <Card.Title title="Ultimate" variant="secondary" />
        <Card.Price price={50000} variant="secondary" />
      </Card.Header>
      <Card.Button value="Assinar agora" variant="secondary" />
      <Card.List variant="secondary">
        <Card.ListItem text="Usuário ilimitados" variant="secondary" />
        <Card.ListItem text="Suporte 24/7" variant="secondary" />
        <Card.ListItem text="CMS dedicado" variant="secondary" />
        <Card.ListItem text="Treinamentos" variant="secondary" />
      </Card.List>
    </Card>
  );
}
