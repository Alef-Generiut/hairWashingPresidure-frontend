import { Button, Input, Image, Box, Flex } from "@mantine/core";
import imdbLogo from "../assets/imdb-logo.png";
import {
  SignOutIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { movie } from "../types/types";
import { movies } from "../hardCodedData";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchBarInput, setSearchBarInput] = useState<string>("");

  const submitSearch = (input: string): movie[] => {
    return movies.filter((movie) => movie.name.includes(input));
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
      <Box className="w-[70vw]">
        <Input
          variant="filled"
          size="xs"
          placeholder="Search"
          rightSection={<MagnifyingGlassIcon size={"1.5vw"} weight="light" />}
          onChange={(input) => setSearchBarInput(input.target.value)}
          onSubmit={() => submitSearch(searchBarInput)}
        />
      </Box>
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
