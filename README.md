# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Meal Explorer
  +  A React application that connects to TheMealDB API to explore and search recipes.

# Features
  + Search Meals By Name
  + Search Meals by Area/Country specific
  + Responsive Design

# Installation

+ git clone https://github.com/vkavith/SBA-320-React-Web-Application
+ cd SBA-320-React-Web-Application
+ npm install
+ npm run dev

# Technologies

+ React.js
+ React Router for navigation
+ JavaScript ES6+
+ CSS for styling
+ Fetch API for data requests
  
# API Integration
+ The app uses TheMealDB's free API (no key required):

+ Search endpoint: www.themealdb.com/api/json/v1/1/search.php
+ Filter endpoint: www.themealdb.com/api/json/v1/1/filter.php

# API Features

+ Meal Search functionality using TheMealDB search endpoint
+ Meals by Area (Country) filtering using TheMealDB area endpoint
+ Simplified country-specific meal browsing

# Additional Info

+ themealdb.com external API used to get "Meals Search" and "Meals by Area" 

+ Meals Search - Used API for this. Click button Meals Search.

+ Meals By Area - used API for this. Click button "Meals By Area"


Unsolved problem - Render deployment failed. Checked Log, couldn't deploy. Followed Dylan's video.

Render deployment
https://mealsreactwebapp.onrender.com
