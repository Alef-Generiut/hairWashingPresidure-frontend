import { Button, Input, Image, Box } from "@mantine/core";
import { Flex } from "@mantine/core";
import imdbLogo from "../assets/imdb-logo.png";
import {
  SignOutIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/dist/ssr";
const Header = () => {
  return (
    <Flex
      mih={"1vh"}
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Box>
        <Image src={imdbLogo} w={"3.5vw"} radius="sm" />
      </Box>
      <Box className="w-[70vw]">
        <Input
          variant="filled"
          size="xs"
          placeholder="Search"
          rightSection={<MagnifyingGlassIcon size={"1.5vw"} weight="light" />}
        />
      </Box>
      <Box className="hidden md:block">
        <Button variant="transparent">
          <SignOutIcon size={"1.5vw"} weight="light"/>
          Logout
        </Button>
      </Box>
    </Flex>
  );
};
export default Header;
