import Link from "next/link";
import { Button, Card } from "react-daisyui";

export const SharkCard = ({ name, imageSrc, slug }) => {
  return (
    <Card
      key={name}
      className="bg-transparent border-2 border-white text-white"
    >
      <Card.Image src={imageSrc} alt={name} />
      <Card.Body>
        <Card.Title tag="h3">{name}</Card.Title>
        <Card.Actions className="justify-end">
          <Link href={slug}>
            <Button color="black">Learn more!</Button>
          </Link>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};
