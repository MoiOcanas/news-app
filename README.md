# News App

App to add articles, get notifications & create and use users. Made using React, Redux, Firebase and Thunk.

![newApp1](https://user-images.githubusercontent.com/40370334/79022322-4b9fa380-7b43-11ea-9062-83fdf62ef77b.PNG)

--------

![newApp2](https://user-images.githubusercontent.com/40370334/79022373-63772780-7b43-11ea-8178-9a5c41a41f18.PNG)

## Clone the repository

Run this command on your console:

```bash
git clone https://github.com/MoiOcanas/news-app.git
```

## Installation

Use your console to access to project folder and run:

```bash
npm install
```

## Database

This project uses Firebase services such as database, to get it. Create or use an account at Firebase Console. Create a new project there and get the connection code. Finally paste it on config/fbConfig.js

Example
```javascript
var firebaseConfig = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTHDOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGEBUCKET",
    messagingSenderId: "YOUR MESSAGING SERNDER ID",
    appId: "YOUR APP ID"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
```
