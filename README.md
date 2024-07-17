# Real-Time Price Data Collection and Display

This project is a mini-website to collect and display real-time price data for cryptocurrencies.

## Backend

- Polls real-time data every 5 seconds of the configured cryptocurrencies from an API (LiveCoinWatch).
- Stores data in a MongoDB database.

## Frontend

- Fetches the most recent 20 real-time data entries from the MongoDB database for a particular cryptocurrency and displays in UI.
- The UI updates its values in real-time according to new data.
- Includes a dropdown that allows you to change the cryptocurrency.

## Technologies Used

- Backend: Node.js, Express, MongoDB, Axios
- Frontend: React, Redux, Axios

## Setup and Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Manikanta1413/FOMOFACTORY.git
   cd FomoFactory

2. **To run the Backend:**
    ```sh
       cd backend
       npm install 
       cp .env.example .env
       #Get the API key from LIVEWATCH.com and replace it in .env
       #change the values of the Environment Variables respectively (For Example Mongodb Username & Password)
       node server.js
3. **To run the Frontend:**
    ```sh
       cd frontend
       npm install 
       cp .env.example .env
       npm start


## Owner Information

This section provides details about the owner of the project.
Name: Manikant Dintakurthi
Contact: dintakurthimanikanta78@gmail.com
