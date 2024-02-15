import { Card, CardBody } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { Image, Heading } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCards;
