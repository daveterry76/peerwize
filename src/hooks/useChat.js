import { useContext } from "react";
import { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import { AuthContext } from "../contexts/AuthContextProvider";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
const SOCKET_SERVER_URL = "https://peerwize.vercel.app";

const useChat = (roomId) => {
  //   const { firstName, lastName } = useContext(AuthContext);
  const firstName = "Sim";
  const lastName = "Fubara";
  const senderName = `${firstName.slice(0, 1)}${lastName.slice(0, 1)}`;

  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });
  const socketRef = useRef();

  useEffect(() => {
    // localStorage.removeItem("chatMessages");
    // Connect to the Socket.io Server
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    //  Listening for incoming message
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
        timeStamp: formatTimestamp(message.timeStamp),
      };
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages, incomingMessage];

        // Store updated messages in localStorage
        localStorage.setItem("chatMessages", JSON.stringify(newMessages));
        return newMessages;
      });
    });

    // Unsubscribe
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes}`;
  };
  

  // Function to be attached to the 'Send' button
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
      firstName,
      lastName,
      senderName,
      timeStamp: new Date().toISOString(),
    });
  };

  return {
    messages,
    sendMessage,
  };
};

export default useChat;
