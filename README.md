<img width="1070" alt="GitHub Repo Cover" src="https://github.com/corbado/corbado-php/assets/18458907/aa4f9df6-980b-4b24-bb2f-d71c0f480971">

# Corbado with Next.js - Starter Template

[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![Slack](https://img.shields.io/badge/slack-join%20chat-brightgreen.svg)](https://join.slack.com/t/corbado/shared_invite/zt-1b7867yz8-V~Xr~ngmSGbt7IA~g16ZsQ)

## Welcome to Corbado

This starter template demonstrates how to combine the Corbado's React component, `@corbado/react` and Corbado's Node.js SDK, `@corbado/node-sdk` and integrate it with Next.js for a seamless user experience.

## Structure of the Application

These are the different pages that you will find in this application:

- `/` : Home page
- `/login` : Login component page
- `/signup` : Signup component page
- `/profile` : The profile has three nested routes:
  - `/` : User details page which uses `@corbado/node-sdk` to fetch complete details of the currently logged-in user.
  - `/session-details` : This page deserializes Corbado's short-term session (stored as JWT) and showcases the stored details.
  - `/passkey-list` : This page uses the `@corbado/react`'s `<PasskeyList/>` component to display available passkeys.

## Points to Note

- When you use a component from `@corbado/react` either a UI component or a provider component you need to `use client` for client side rendering as the components make use of React contexts.


## :speech_balloon: Support & Feedback

### Report an issue

If you encounter any bugs or have suggestions, please [open an issue](https://github.com/corbado/nextjs-template-vercel/issues/new).

### Slack channel

Join our Slack channel to discuss questions or ideas with the Corbado team and other developers.

[![Slack](https://img.shields.io/badge/slack-join%20chat-brightgreen.svg)](https://join.slack.com/t/corbado/shared_invite/zt-1b7867yz8-V~Xr~ngmSGbt7IA~g16ZsQ)

### Email

You can also reach out to us via email at vincent.delitz@corbado.com.

### Vulnerability reporting

Please report suspected security vulnerabilities in private to security@corbado.com. Please do NOT create publicly viewable issues for suspected security vulnerabilities.
