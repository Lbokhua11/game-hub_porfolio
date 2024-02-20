import bullseye from "../assets/bullseye.svg";
import thumbs from "../assets/thumb.svg";
import meh from "../assets/meh.svg";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbs, alt: "meh", boxSize: "25px" },
    5: { src: bullseye, alt: "meh", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
