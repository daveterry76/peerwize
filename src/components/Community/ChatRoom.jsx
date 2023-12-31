import React from "react";
import { useState, useEffect, useRef } from "react";
import useChat from "../../hooks/useChat";
import { useParams } from "react-router-dom";
import {
  ShareIcon,
  SendIcon,
  CommunityIcon,
  AttachmentIcon,
  SearchIcon,
} from "./assets/Icons";
import "../Community/styles/chat.scss";
import "../Community/styles/stack.scss";
import Stack from "./Stack";

const ChatRoom = () => {
  const { roomId } = useParams();
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");
  const [search, setSearch] = useState("");
  const messageContainerRef = useRef();

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.length > 0) {
      sendMessage(newMessage);
      setNewMessage("");
    } else alert("Type something in the message field");
  };

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <div className="chatroom">
        <div className="search__container">
          <div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search keyword"
            />
            <SearchIcon />
          </div>
          <div>
            <CommunityIcon />
          </div>
        </div>
        <div className="message__container" ref={messageContainerRef}>
          {messages.length > 0 ? (
            <ol>
              {messages.map((message) => (
                <>
                  <li>
                    {message.ownedByCurrentUser ? (
                      <div style={{ visibility: "hidden" }}></div>
                    ) : (
                      <div className="sender-name">{message.senderName}</div>
                    )}
                    <div
                      className={
                        message.ownedByCurrentUser
                          ? "own-message"
                          : "sender-message"
                      }
                    >
                      <div className="message-heading">
                        {message.ownedByCurrentUser ? (
                          <p></p>
                        ) : (
                          <h3 className="message-name">
                            {message.firstName} {message.lastName}
                          </h3>
                        )}
                        <ShareIcon style={{ cursor: "pointer" }} />
                      </div>
                      <p className="message__body">{message.body}</p>{" "}
                      <div className="message__timestamp--container">
                        <p className="message__timestamp">
                          {message.timeStamp}
                        </p>
                      </div>
                    </div>
                  </li>
                </>
              ))}
            </ol>
          ) : (
            <div
              style={{
                display: "flex",
                fontSize: "1.5rem",
                justifyContent: "center",
                alignItems: "center",
                marginBlock: "100px",
              }}
            >
              No message for now! Type in the message field to send a message.
            </div>
          )}
        </div>
        <div className="message__field">
          <textarea
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Type message..."
            rows={Math.max(Math.ceil(newMessage.length / 45), 1)}
          ></textarea>
          <AttachmentIcon className="message__field--attachment" />
          <SendIcon
            onClick={handleSendMessage}
            className="message__field--btn"
          />
        </div>
      </div>
      <div className="stack">
        <Stack />
      </div>
    </>
  );
};

export default ChatRoom;
