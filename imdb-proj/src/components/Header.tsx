import { Button, Input } from "@mantine/core";
import { Flex } from "@mantine/core";
import "tailwindcss";
import imdbLogo from "../assets/imdb-logo.png";
import {
  SignOutIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/dist/ssr";
const Header = () => {
  return (
    <Flex
      mih={50}
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <div>
        <img src={imdbLogo} className="object-contain w-[5vw] rounded-md" />
      </div>
      <div className="w-[70vw]">
        <Input
          variant="filled"
          size="md"
          placeholder="Search"
          rightSection={<MagnifyingGlassIcon size={"2vw"} weight="light" />}
        />
      </div>
      <div>
        <Button variant="transparent">
          <SignOutIcon size={"2vw"} weight="light" />
          Logout
        </Button>
      </div>
    </Flex>
  );
};
export default Header;
