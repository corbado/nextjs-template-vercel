<img width="1070" alt="GitHub Repo Cover" src="https://github.com/corbado/corbado-php/assets/18458907/aa4f9df6-980b-4b24-bb2f-d71c0f480971">

# Corbado with NextJS - Starter

[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![Slack](https://img.shields.io/badge/slack-join%20chat-brightgreen.svg)](https://join.slack.com/t/corbado/shared_invite/zt-1b7867yz8-V~Xr~ngmSGbt7IA~g16ZsQ)

## Welcome to Corbado

This is the starter template demonstrates how to combine the Corbado' React Package, `@corbado/react` and Corbado's NodeJS SDK, `@corbado/node-sdk` and integrate it with Next.js for a seamless user experience.

## Structure of the Application

These are the different pages that you will find in this application:

- `/` : Home page
- `/login` : login component page
- `/signup` : Signup component page
- `/profile` : The profile has three nested routes:
  - `/` : User Details page which uses `@corbado/node-sdk` to fetch complete details of the currently logged-in user.
  - `/session-details` : this page deserializes the short session and show cases the details stored in the short session.
  - `/passkey-list` : this page uses the `@corbado/react`'s `<PasskeyList/>` component to showcase its use

## Points to Note

- When you use a component from `@corbado/react` either a UI component or a Provider component you need to `use client` for client side rendering as the components make use of react contexts.