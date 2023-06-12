# Hotel Room Booking Application

This is a React application for hotel room booking. It provides a user-friendly interface for browsing available rooms, making bookings, and managing user registration and login.

## Features

- Browse available hotel rooms
- View room details and photos
- Make bookings for selected rooms
- User registration and login functionality
[- Responsive design for mobile and desktop devices]: #

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/hotel-booking-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd hotel-booking-app
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

## Dependencies

The following dependencies are used in this project:

- react
- react-router-dom
- sweetalert2
- axios

## Project Structure

- `public`: Contains the HTML template and other static assets.
- `src`: Contains the source code of the application.
  - `components`: Reusable UI components used throughout the application.
  - `screens`: Top-level components representing different screens/pages of the application.
  - `App.js`: The root component that configures the routes and renders the Navbar and screen components.
  - `index.js`: The entry point of the application.

## Routes

- `/booking`: Displays the home screen with a list of available hotel rooms.
- `/booking/:roomid`: Displays the booking screen for a specific room based on the provided room ID.
- `/register`: Displays the registration screen for user sign-up.
- `/login`: Displays the login screen for user authentication.
