# Random Comment Winner Picker

A web application built with Next.js and TypeScript that allows users to select a random winner from the comments of social media content via a link. This tool supports various social media platforms and provides a simple interface to pick a winner fairly and randomly.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

This application helps content creators and social media managers to run giveaways and pick random winners from their post comments effortlessly. The app integrates with various social media platforms to fetch comments and uses a fair algorithm to select a winner.

## Features

- Fetch comments from various social media platforms (e.g., Instagram, Facebook, Twitter, YouTube).
- Simple and intuitive UI to input the link to the social media post.
- Fair and random winner selection algorithm.
- Display details of the selected winner.
- Responsive design for mobile and desktop use.

## Demo

Check out a live demo of the application https://random-picker-ten.vercel.app.

## Installation

Follow these steps to get a local copy of the project up and running.

### Prerequisites

- Node.js
- npm (or yarn)

### Clone the Repository

```bash
git clone https://github.com/yourusername/random-comment-winner-picker.git
cd random-comment-winner-picker
```

### Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Environment Variables

Create a `.env.local` file in the root directory and add your social media API keys and other required environment variables.

```env
# Example:
YOUTUBE_KEY=your_google_api_key
COMMENTS_LINK=[your_facebook_api_key](https://youtube.googleapis.com/youtube/v3/commentThreads)
```

### Run the Application

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. Open the application.
2. Enter the link to the social media post from which you want to fetch comments.
3. Click on "Fetch Comments".
4. Once comments are loaded, click on "Pick a Winner" to randomly select a winner.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and includes tests if applicable.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize the sections as per your project's specific details and requirements.
