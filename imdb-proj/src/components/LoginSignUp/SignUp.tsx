import { useState } from "react";
import {
  Box,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Stack,
  Text,
  Center,
  Group,
  Image,
  Flex,
  Paper,
} from "@mantine/core";

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

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);

  const handleSubmit = () => {
    console.log({ email, username, password, confirmPassword, acceptedTerms });
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
                  Signup
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

              <TextInput
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                styles={inputStyles}
              />

              <PasswordInput
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                styles={inputStyles}
              />

              <PasswordInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                styles={inputStyles}
              />

              <Checkbox
                label="Agree to our terms and conditions"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.currentTarget.checked)}
                styles={{
                  label: { fontSize: "0.65rem" },
                }}
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
                Already registered?
              </Text>
              <Button
                variant="subtle"
                size="sm"
                c="dimmed"
                onClick={() => redirect("/login")}
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
                Register
              </Button>
            </Group>
          </Paper>
        </Center>
      </Box>
    </Box>
  );
};

export default SignUp;
