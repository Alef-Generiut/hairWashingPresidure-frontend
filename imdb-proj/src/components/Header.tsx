import { Button, Input, Image, Box, Flex } from "@mantine/core";
import imdbLogo from "../assets/imdb-logo.png";
import {
  SignOutIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchBarInput, setSearchBarInput] = useState<string>("");

  const submitSearch = (input: string) => {
    if (!input.trim()) return;
    navigate(`/search?q=${encodeURIComponent(input)}`);
  };

  return (
    <Flex
      mih={"1vh"}
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Box component={Link} to={`/`}>
        <Image src={imdbLogo} w={"3.5vw"} radius="sm" />
      </Box>
      <form
        className="w-[70vw]"
        onSubmit={(submit) => {
          submit.preventDefault();
          submitSearch(searchBarInput);
        }}
      >
        <Input
          variant="filled"
          size="xs"
          placeholder="Search"
          rightSection={
            <MagnifyingGlassIcon
              size={"1.5vw"}
              weight="light"
              onClick={() => submitSearch(searchBarInput)}
            />
          }
          onChange={(input) => setSearchBarInput(input.target.value)}
        />
      </form>
      <Box className="hidden md:block">
        <Button variant="transparent">
          <SignOutIcon size={"1.5vw"} weight="light" />
          Logout
        </Button>
      </Box>
    </Flex>
  );
};
export default Header;
