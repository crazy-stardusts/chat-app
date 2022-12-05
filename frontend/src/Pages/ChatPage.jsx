import React from "react";
import axios from "axios";
import { useEffect } from "react";

const ChatPage = () => {
    const [chats, setChats] = React.useState([]);

    const fetchChat = async () => {
        const { data } = await axios.get("/api");
        setChats(data);
    };

    useEffect(() => {
        fetchChat();
    }, []);

    return (
        <div>
            ChatPage <p>{chats.data}</p>
        </div>
    );
};

export default ChatPage;
