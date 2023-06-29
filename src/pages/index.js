import Link from "next/link";
import { Button, Card } from "react-daisyui";

import { SHARK_INFO } from "@/constants";
import { PageWithBackgroundImage } from "@/components/PageWithBackgroundImage";

export default function Home() {
  return (
    <PageWithBackgroundImage bgImgUrl="/sharks-from-top.jpg">
      <div className="grid gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 overflow-auto">
        {Object.values(SHARK_INFO).map((shark) => {
          return (
            <Card key={shark.name} className="bg-white">
              <Card.Image src={shark.imageSrc} alt={shark.name} />
              <Card.Body>
                <Card.Title tag="h3" className="text-secondary">
                  {shark.name}
                </Card.Title>
                <Card.Actions className="justify-end">
                  <Link href={shark.url}>
                    <Button color="primary">Learn more!</Button>
                  </Link>
                </Card.Actions>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </PageWithBackgroundImage>
  );
}
