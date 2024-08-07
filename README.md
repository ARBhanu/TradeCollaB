# TradeCollab

## Project Idea
Many traders and investors lost their money in real time trading or investing. So, for minimize loss and maximize profit i thought this idea that to connect all traders using chat app and educate about real time trading data.

## Project Overview

"TradeCollab", a visionary and innovative online platform designed to revolutionize the way traders and investors interact, learn, and excel. TradeCollab emerges as more than just a platform; This app allows to chat in real time with traders and investors as single or group chat.

## Features

##### User Authentication:
 - Description: Users can sign up, log in securely, and manage their profiles.
 - Implementation: Passport.js is used for authentication middleware, ensuring secure user sessions.

##### RealTime Chat:
 - Description: Realtime communication is enabled using Socket.IO, allowing instant message delivery. Chat feature is group and single both.
 - Implementation: Socket.IO establishes a WebSocket connection for bidirectional communication between the server and clients.

##### User Profile:
 - Description: Users can create and update their profiles with profile pictures and display names.
 - Implementation: Profile information is stored in MongoDB, and the frontend fetches and updates user details through API calls.

##### Notifications:
 - Description: Users receive realtime notifications for new messages and group activities.
 - Implementation: Socket.IO broadcasts notifications to relevant users upon message receipt or group events.

##### Message History:
 - Description: Chat history is stored and retrieved for a seamless user experience.
 - Implementation: MongoDB stores messages, allowing users to fetch past messages when rejoining a chat.

##### Responsive Design:
 - Description: The application is designed to be responsive and userfriendly across various devices.
 - Implementation: The React.js frontend is styled using responsive design principles and frameworks like Tailwind.

##### Education:
 - Description: All famous trading app is shown real time data with their all features like current price, loss or gain etc..
 - Implementation: Fetches api for real time data and fronted used for a better ui

## Technologies Used
- **Socket Io**
- **UI :** Chakra UI
- **Frontend :** HTML, CSS, JavaScript, React.js
- **Backend :** Node.js, Express.js
- **Database :** MongoDB, Cloudinary

## Getting Started

To run this application, follow these steps :
- Setup the file and folder
- Open the command prompt
```bash
  cd CHAT_APP
```
- clone the repository
```bash
  git clone https://github.com/ARBhanu/TradeCollaB.git
```
- open the project in vs code
- run the project
```bash
  npm run start
```

## Contact

For any inquiries, please contact :
- Amit Kumar
- amitrajjaynagar2002@gmail.com

