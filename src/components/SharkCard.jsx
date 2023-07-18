import Link from "next/link";
import { Button, Card } from "react-daisyui";

export const SharkCard = ({ name, imageSrc, slug }) => {
  return (
    <Card key={name} className="bg-transparent border-2 border-white">
      <Card.Image src={imageSrc} alt={name} />
      <Card.Body>
        <Card.Title tag="h3" className="text-secondary">
          {name}
        </Card.Title>
        <Card.Actions className="justify-end">
          <Link href={slug}>
            <Button color="primary">Learn more!</Button>
          </Link>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};
