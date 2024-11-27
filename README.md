# GitHub Scanner Frontend

This project is a React application that allows users to browse GitHub repositories and view detailed information about individual repositories. It uses Redux for state management and communicates with a backend Apollo GraphQL server.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Prerequisites

Before running the project, ensure you have the following installed:
- Node.js (v20 or later)
- npm
- A valid GitHub Developer Token with the `repo` scope.

---

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/github-scanner-frontend.git
   cd github-scanner-frontend

2. **Create an .env file**:
   Inside the project directory, create a .env file and add the following environment variables:

   REACT_APP_GITHUB_TOKEN=your_github_token_here

   REACT_APP_API_URL=http://localhost:4000/graphql

   Replace your_github_token_here with your personal GitHub token and ensure the REACT_APP_API_URL matches your backend server URL.


3. Install dependencies
    ```bash
   npm install

4. Start the Application
     ```bash
   npm run start
    
