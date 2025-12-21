import { useState } from "react";
import {
  Box,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Text,
  Center,
  Group,
  Image,
  Flex,
  Paper,
} from "@mantine/core";
import "./login.css"
import bgPhoto from "../../assets/loginSignupBg.jpg";
import imdbLogo from "../../assets/imdb-logo.png";
import { redirect } from "react-router-dom";

const inputStyles = {
  input: {
    backgroundColor: "white",
    color: "black",
    fontSize: "0.65rem",
  },
};

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    console.log({ email, password });
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      pos="relative"
      style={{
        backgroundImage: `url(${bgPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        pos="absolute"
        inset={0}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      />

      <Box
        pos="absolute"
        right={0}
        h="100vh"
        w="60vw"
        bg="dark"
        className="fade"
      >
        <Center h="100%">
          <Paper w={320} p="xl" radius="md" bg="dark" className="ml-[20vw]">
            <Flex justify="space-between" align="flex-start" mb="md">
              <Box mb="md">
                <Text size="xl" ta="left">
                  Login
                </Text>
                <Text size="sm">to get started</Text>
              </Box>
              <Image src={imdbLogo} w="5vw" radius="sm" mt="sm" mr="xl" />
            </Flex>

            <Stack gap="sm">
              <TextInput
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                styles={inputStyles}
              />

              <PasswordInput
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                styles={inputStyles}
              />

              <Button
                color="yellow.5"
                c="black"
                fullWidth
                onClick={handleSubmit}
                styles={{
                  label: { fontSize: "0.65rem" },
                }}
              >
                Continue
              </Button>
            </Stack>

            <Group justify="center" mt="md">
              <Text size="sm" c="dimmed">
                New User?
              </Text>
              <Button
                variant="subtle"
                size="sm"
                c="dimmed"
                onClick={() => redirect("/sign-up")}
                styles={{
                  root: {
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:active": {
                      backgroundColor: "transparent",
                    },
                  },
                }}
              >
                Login
              </Button>
            </Group>
          </Paper>
        </Center>
      </Box>
    </Box>
  );
};

export default Login;
