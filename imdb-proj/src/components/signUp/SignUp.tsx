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
import z from "zod";
import bgPhoto from "../../assets/4fxxbm4opjd31.jpg";
import imdbLogo from "../../assets/imdb-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../types/types";
import { EMAIL_REGEX } from "../../constants/constants";
import axios from "axios";
import { AuthAPI } from "../../api/auth.api";

const inputStyles = {
  input: {
    backgroundColor: "white",
    color: "black",
    fontSize: "0.65rem",
  },
};

const userScheme = z
  .object({
    username: z.string(),
    mail: z.email({ pattern: EMAIL_REGEX }),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<signUpUser>({
    mail: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = <Key extends keyof signUpUser>(
    key: Key,
    value: signUpUser[Key]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      userScheme.parse(form);

      await AuthAPI.create({
        mail: form.mail,
        username: form.username,
        password: form.password,
      });
      setForm({
        mail: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/login");
    } catch (err) {
      const message = axios.isAxiosError(err)
        ? err.response?.data?.message || "Validation error"
        : "Unexpected signUp error";

      setErrorMessage(message);
    }
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
                value={form.mail}
                onChange={(e) => handleChange("mail", e.currentTarget.value)}
                styles={inputStyles}
              />

              <TextInput
                placeholder="Username"
                value={form.username}
                onChange={(e) =>
                  handleChange("username", e.currentTarget.value)
                }
                styles={inputStyles}
              />

              <PasswordInput
                placeholder="Password"
                value={form.password}
                onChange={(e) =>
                  handleChange("password", e.currentTarget.value)
                }
                styles={inputStyles}
              />

              <PasswordInput
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.currentTarget.value)
                }
                styles={inputStyles}
              />

              {errorMessage && (
                <Text c="red" size="sm" mt="xs">
                  {errorMessage}
                </Text>
              )}

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
                component={Link}
                to="/login"
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
                sign in
              </Button>
            </Group>
          </Paper>
        </Center>
      </Box>
    </Box>
  );
};

export default SignUp;
