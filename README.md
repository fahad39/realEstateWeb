# Real Estate Web App

This is a React application that makes it easy to book and manage your property visits. Create an account, log in, and browse our listings to find the perfect property for you. Once you've found a property you're interested in, book a visit and add it to your favorites. You can also cancel your bookings and remove properties from your favorites at any time.

We're committed to providing you with a seamless and enjoyable property booking experience. That's why we've developed a user-friendly interface and powerful features that make it easy to find, book, and manage your property visits.

## Requirements

- Node >=16.13
- React
- Npm or Yarn
- MongoDB
- Auth0

## Environment Variables

To run this project, you will need to add the following environment variables to your
.env file

For Server Side
Add .env file in server folder and add the following:

- `PORT`
- `DATABASE_URL`
- `AUTH_DOMAIN`

For Client Side Add .env file in folder and add the following:

- `REACT_APP_AUTH_DOMAIN`
- `REACT_APP_CLIENT_ID`

Here ClientID and AuthDomain are credentials from your Auth0 application

## Installation

Clone the git repository

```bash
  git clone git@github.com:fahad39/realEstateWeb.git
```

Navigate to the project directory:

```bash
  cd server
  npm install or yarn
```

Navigate to project directory:

```bash
  cd client
  npm install or yarn
```

## Running Project

To run project open a terminal and navigate to project directory

```bash
  cd server
  npm run or yarn start
```

Then open a second terminal and navigate to project directory

```bash
  cd client
  npm run or yarn start
```

## Tech Stack

**Client:** React, Hooks, Context, TanStack Query, Axios

**Server:** Node, Express, Prisma, MongoDB

## Contributing

Contributions are welcome! Please feel free to submit a pull request or create an issue if you encounter a bug or have a feature request.
