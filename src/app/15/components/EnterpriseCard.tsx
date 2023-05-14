'use client';

import Card from './Card';

export default function EnterpriseCard() {
  return (
    <Card initialAnimationDelay="410ms">
      <Card.Heading text="Para sua empresa" />
      <Card.Header>
        <Card.Title title="Enterprise" size="lg" />
      </Card.Header>
      <Card.Button value="Assinar agora" space="lg" />
      <Card.List space="lg">
        <Card.ListItem
          text="A Planos customizados especialmente para a necessidade de seu negocio"
          hasInfo={false}
        />
      </Card.List>
    </Card>
  );
}
