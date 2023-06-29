import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "react-daisyui";

import { SHARK_INFO } from "@/constants";
import { PageLayout } from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div
        style={{ backgroundAttachment: "fixed" }}
        className={`h-screen bg-cover bg-no-repeat bg-center bg-[url('/sharks-from-top.jpg')]  grid gap-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 overflow-auto`}
      >
        {Object.values(SHARK_INFO).map((shark) => {
          return (
            <Card key={shark.name} className="bg-white">
              <Card.Image src={shark.imageSrc} alt={shark.name} />
              <Card.Body>
                <Card.Title tag="h3" className="text-secondary">
                  {shark.name}
                </Card.Title>
                <Card.Actions className="justify-end">
                  <Button color="primary">Learn more!</Button>
                </Card.Actions>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </PageLayout>
  );
}
