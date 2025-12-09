import { Box, Image, ActionIcon } from "@mantine/core";
import image from "../assets/enternal-logo.jpg";
import { BookmarkSimpleIcon } from "@phosphor-icons/react";
const SideImage = () => {
  return (
    <Box className="relative w-[13vw] h-[40vh] rounded-md right-[27vw] top-[20vh] overflow-hidden">
      {/* Image */}

      <BookmarkSimpleIcon
        weight="duotone"
        className="absolute top-[-3.5vh] left-2 z-50"
        size={"30%"}
      />
      <Box className="w-full h-full">
        <Image src={image} fit="cover" />
      </Box>

      {/* Top-left icon */}
    </Box>
  );
};
export default SideImage;
