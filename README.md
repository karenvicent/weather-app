# Weather App

A simple web application to fetch and display weather information for a specified city.

## Overview

This application allows users to input the name of a city and, upon searching, retrieves and displays the current weather conditions for that location. The information presented includes the city name, country, temperature in Celsius, humidity, a brief weather description, and a corresponding weather icon.

## Technologies Used

* HTML
* CSS
* JavaScript

## Setup

To run this application locally, simply open the `index.html` file in your web browser. No additional setup or server is required.

## How to Use

1.  Enter the name of a city in the input field labeled "Type a city".
2.  Click the "Search" button.
3.  The weather information for the specified city will be displayed below the button.

## Functionality

* **User Input:** An input field allows users to enter the desired city name.
* **Search Action:** A "Search" button triggers the weather data retrieval process.
* **API Integration:** The application fetches weather data from the OpenWeatherMap API.
* **Data Display:** The retrieved weather information, including temperature, humidity, description, and icon, is dynamically displayed on the page.

## API Key

This application utilizes an API key from OpenWeatherMap to fetch weather data. While the API key is included in the provided `script.js` file for simplicity, it is recommended to handle API keys more securely in a production environment.

## Styling

The visual presentation of the application is handled by the `style.css` file, providing a clean and readable interface.
