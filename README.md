# Chat Server with Broadcast & Private Messaging

 A simple Node.js chat server using Express and Socket.IO that supports:

 - Broadcast messages in rooms (group chat)

 - Private messages between specific users

 - Real-time message updates

- Multiple users in the same room

## Features
1. Broadcast (Group) Chat

- Users can join a room by entering a username and room name.

- All messages sent in that room are broadcast to everyone in the room.

- Messages show the sender's username.

2. Private Messaging

- Users register a username upon connecting.

- Users can send a private message to another registered username.

- Only the targeted user receives the message.

- The sender’s username is displayed instead of socket ID.

## Setup

### Clone the repository:
```bash
git clone <your-repo-url>
cd <repo-directory>
```

### Install dependencies:
```bash
npm install
```

### Start the server:
```bash
node server.js
```

## Open your browser and navigate to:

http://localhost:3000

## How to Use
### Group Chat

- Enter a username and room name.

- Click Join Room.

- Type a message and click Send Message.

- All users in the same room will see the message.

### Private Chat

- Enter a username in the Private Message section and click Register User.

- Enter the recipient's username and your message.

- Click Send.

- Only the recipient sees the message.

- Usage Example (Two Browsers)

### Browser A:

Open http://localhost:3000.

1. Join Room:

- Username: Faruq

- Room: General

2. Register for private messages:

- Private Username: Faruq

### Browser B:

Open another tab or browser at http://localhost:3000.

1. Join Room:

- Username: Oreva

- Room: General

2. Register for private messages:

- Private Username: Oreva

### Test Broadcast Message:

- Browser A sends a message in the group chat → Browser B sees it.

- Browser B sends a message in the group chat → Browser A sees it.

### Test Private Message:

- Browser A sends a private message to Oreva → only Browser B sees it.

- Browser B sends a private message to Faruq → only Browser A sees it.

## Code Structure

- server.js → Express + Socket.IO server handling connections, rooms, broadcast, and private messages

- public/index.html → Frontend UI for broadcast and private messaging

- public/script.js → Client-side Socket.IO logic

## Notes

- Each browser/tab connection is a unique socket.

- Private messaging relies on registered usernames to route messages.

- Messages are displayed in real-time using Socket.IO events.


✍️ Author
Dev_faruq