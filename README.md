# CrosMiint - NFT Platform Frontend

CrosMiint is an NFT platform supporting multi-chain functionality, providing users with a seamless experience for interacting with NFTs across different blockchain networks.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Multi-Chain Support**: Interact with NFTs across multiple blockchain networks.
- **Responsive Design**: Fully responsive interface built with TailwindCSS for optimal user experience on all devices.
- **State Management**: Robust state management using Redux for predictable state transitions.
- **Wallet Integration**: Supports various wallets through Wagmi hooks for smooth blockchain interactions.
- **TypeScript**: Strongly typed codebase for improved developer experience and fewer runtime errors.

## Technologies

This project uses the following technologies:

- [Next.js](https://nextjs.org/)
- [Redux](https://redux.js.org/)
- [Wagmi](https://wagmi.sh/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Solidity](https://soliditylang.org/)
- [Hardhat](https://hardhat.org/)
- [Figma](https://www.figma.com/)

## Getting Started

If you are trying to run development in your local environment, please make sure you follow

- [backend](https://github.com/Kisthanny/CrosMiint-Backend)
- [contract](https://github.com/Kisthanny/Crosmiint-Contract)

keep the Nodejs running

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Yarn](https://yarnpkg.com/) (or npm)

Under root, create your own .env.development

```env
NEXT_PUBLIC_API_HOST=http://localhost:5000/api
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID={YOUR-WALLET-CONNECT-ID}
NEXT_PUBLIC_SIGN_MESSAGE="sign in to CrosMiint"
```

### Installation

1. **Clone the repository and switch to dev branch**:

   ```bash
   git clone https://github.com/Kisthanny/CrosMiint-frontend.git
   cd crosmiint
   git checkout dev
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

### Usage

To start the development server, run:

```bash
yarn dev
# or
npm run dev
```

The application will be available at `http://localhost:3000`.

## Scripts

- `yarn dev`: Runs the app in development mode.
- `yarn build`: Builds the app for production.
- `yarn start`: Starts the production server.
- `yarn lint`: Lints the code using ESLint.
- `yarn test`: Runs the test suite.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
