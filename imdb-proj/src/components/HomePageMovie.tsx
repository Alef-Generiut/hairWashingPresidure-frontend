import imageTemp from "../assets/Untitled.jpg";

import { Box, Text, Image } from "@mantine/core";
const HomePageMovie = () => {
  return (
    <Box className="relative w-[70vw] h-96 mx-auto flex items-end justify-center rounded-md -z-10 mt-[13vh]">
      {/* Large yellow glow behind the component */}
      <Box className="absolute -z-10 w-[85vw] h-[85vh] rounded-md bg-yellow-400/60 blur-[100px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />

      {/* IMAGE WRAPPER — ONLY THIS HAS overflow-hidden */}
      <Box className="absolute inset-0 w-full h-full rounded-md overflow-hidden z-10">
        <Image
          src={imageTemp}
          alt="Background"
          className="w-full h-full object-cover"
          fit="cover"
        />
      </Box>

      {/* Bottom yellow fade */}
      <Box className="absolute bottom-0 left-0 w-full h-1/3 z-20 bg-linear-to-t from-[rgba(250,204,21,0.80)] to-transparent rounded-md" />

      {/* Content */}
      <Box className="relative z-30 p-6 text-white">
        <Text size="xl">Hello World</Text>
        <Text>Some description here</Text>
      </Box>
    </Box>
  );
};
export default HomePageMovie;
