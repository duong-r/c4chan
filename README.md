# Welcome to C4Chan

## Description

This project serves as the minimum viable product for an anonymous message board WebApp
that is to be enjoyed by the Code 4 Community team. 

Users can submit non-empty messages of 128 characters or less, which will update the
screen with their new message at the top of the board.

The app is hosted locally, and multiple instances can be ran across different web browsers/tabs.
Users can refresh their browsers to update their timelines to include messages sent from other
browsers.

This message board also features json-server as an in-memory solution to storing messages.

### Installation

To install this project to your local computer:
1. Open the terminal and direct yourself to your projects folder (or preferred directory)
2. Copy and paste "git clone https://github.com/duong-r/c4chan"
3. Direct yourself via the terminal to the C4Chan project directory, and enter "npm install"
4. If there are dependencies that need to be addressed, enter "npm audit fix --force"

### Deployment

To deploy the app:
1. Open a new tab within the terminal, and enter "npx json-server --watch data/db.json --port 8000"
2. In a seperate terminal, enter "npm start"
3. Enjoy! And thank you so much!

## Available Scripts

In the project directory, you can run:
### `npm install`

Installs all dependencies used to run the app, that are stored in package.json.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npx json-server --watch data/db.json --port 8000`

Runs the json-server which watches the db.json file, and allows the App to make requests the db.json file.
Runs on [http://localhost:8000]

