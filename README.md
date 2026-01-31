# React GitHub Issue Browser

A React-based frontend application to browse issues from the [React repository](https://github.com/facebook/react) on GitHub. Built with Vite, TailwindCSS, React Router, and React Icons.

## Features

### 1. Main Issue Listing
- Fetch and display issues from the React repository.
- Paginated results showing:
  - **Title**
  - **Status** (Open / Closed)
  - **Author**
  - **Date**
- **Search functionality**:
  - Search by text in issue titles and bodies.
  - Filter by issue state: OPEN or CLOSED.
- Responsive design for optimal viewing on different devices.

### 2. Issue Detail Page
- Dedicated view for a single issue.
- Display full issue content:
  - Title
  - Description
  - Labels
  - Metadata (status, author, creation date)
- Show all comments associated with the issue.
- Clear navigation back to the main list.

## Technologies Used
- **React** (with Vite)
- **TailwindCSS** for styling
- **React Router DOM** for routing
- **React Icons** for UI icons
- **Axios** for GitHub API requests

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ZENA-MELAD/Issues-Listing.git

2. Install dependencies:
npm install
3. Run the development server:
npm run dev
4. open the app in your browser:
http://localhost:5173

Project Structure:

src/
├─ Pages/
│  ├─ MainIssueListing.jsx
│  └─ IssueDetail.jsx
├─ Components/
├─ CustomHooks/
├─ Constants/
├─ Routes
└─ App.jsx
├─ Root.jsx



