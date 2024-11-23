'use client';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { createStyles } from '@mantine/emotion';

export default function ForgotPassword() {
  const { classes } = useStyles();
  return (
    <Container size={460} my={30}>
      <Title className={classes.title} ta="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Your email" placeholder="me@mantine.dev" required />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Anchor
            c="dimmed"
            href="/login"
            size="sm"
            className={classes.control}
          >
            <Center inline>
              <IconArrowLeft size={12} stroke={1.5} />
              <Box ml={5}>Back to the login page</Box>
            </Center>
          </Anchor>
          <Button className={classes.control}>Reset password</Button>
        </Group>
      </Paper>
    </Container>
  );
}

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: '26px',
    fontWeight: 900,
    fontFamily: `"Greycliff CF", ${theme.fontFamily}`,
  },

  controls: {
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}));
