# CI/CD Pipeline Project

A complete CI/CD pipeline that builds, tests, and deploys a Node.js application as a Docker container.

## Project Overview

This project demonstrates a modern DevOps workflow using:
- **GitHub Actions** for continuous integration and deployment
- **Docker** for containerization
- **Node.js** with Express for the web application

## Pipeline Stages

| Stage | Description |
|-------|-------------|
| **Build** | Installs dependencies and prepares the application |
| **Test** | Runs automated tests to verify functionality |
| **Deploy** | Builds and pushes Docker image to GitHub Container Registry |

## Tech Stack

- Node.js 18
- Express.js
- Docker
- GitHub Actions
- GitHub Container Registry (GHCR)

## Project Structure

```
github-actions-pipeline/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions workflow
├── public/
│   └── index.html             # Application UI
├── app.js                     # Express server
├── package.json               # Dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── test.js                    # Automated tests
├── Dockerfile                 # Docker container definition
└── README.md                  # This file
```

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start the server
npm start
```

### Run with Docker

```bash
# Build the image
docker build -t my-ci-cd-app .

# Run the container
docker run -d -p 3000:3000 my-ci-cd-app
```

### Access the Application

Open `http://localhost:3000` in your browser.

## CI/CD Pipeline

The pipeline triggers automatically on every push to the `main` branch:

1. **Checkout** — Pulls the latest code
2. **Setup Node.js** — Configures the runtime environment
3. **Install** — Runs `npm ci` for clean dependency installation
4. **Test** — Executes the test suite
5. **Build & Push Docker Image** — Creates and publishes the container to GHCR

## Docker Image

The containerized application is available at:

```
ghcr.io/youssefmostafamohammed/github-actions-pipeline:latest
```

## Author

- **Youssef Mostafa Mohammed**
- Track: Data Engineering
- Branch: BaniSweif

## License

This project is for educational purposes.
