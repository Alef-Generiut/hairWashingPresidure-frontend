import { Button, Input, Image, Box, Flex } from "@mantine/core";
import imdbLogo from "../assets/imdb-logo.png";
import {
  SignOutIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../store/store";
import { logout } from "../store/auth/auth.slice";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useAppSelector((state) => state.auth.userId);
  const navigate = useNavigate();
  const [searchBarInput, setSearchBarInput] = useState<string>("");

  const submitSearch = (input: string) => {
    if (!input.trim() || !userId) return;
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
      <Box component={Link} to={userId ? `/` : "/login"}>
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
            <Box
              className="pointer-events-auto"
              onClick={() => submitSearch(searchBarInput)}
            >
              <MagnifyingGlassIcon size={"1.5vw"} weight="light" />
            </Box>
          }
          onChange={(input) => setSearchBarInput(input.target.value)}
        />
      </form>
      <Box className="hidden md:block">
        <Button
          variant="transparent"
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
        >
          <SignOutIcon size={"1.5vw"} weight="light" />
          Logout
        </Button>
      </Box>
    </Flex>
  );
};
export default Header;
