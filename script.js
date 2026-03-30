body {
  margin: 0;
  display: flex;
  background: #0f172a;
  color: white;
  font-family: Arial;
}

/* Background canvas */
#bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

/* Sidebar */
.sidebar {
  width: 70px;
  background: #020617;
}

/* Channels */
.channels {
  width: 200px;
  background: #020617;
  padding: 20px;
}

/* Chat */
.chat {
  flex: 1;
  padding: 20px;
}

/* Message */
.message {
  background: #1e293b;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
}

/* Button */
.join-btn {
  background: #5865F2;
  border: none;
  padding: 10px;
  color: white;
  cursor: pointer;
}

/* Typing */
#typing {
  opacity: 0.7;
  font-style: italic;
}

/* Status */
.status {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.online {
  background: lime;
}
