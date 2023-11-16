import React from "react";
import ChatItem from "./ChatItem";
import emranImg from "../../assets/emran.jpg";
// import emonImg from "../../assets/em.jpg";
// import ekramImg from "../../assets/ek.jpg";
import { useGetConversationsQuery } from "../../features/conversations/conversationsApi";
import { useSelector } from "react-redux";
import Error from "../ui/Error";
import moment from "moment/moment";
import getPartnerInfo from "../../utils/getPartnerInfo";
import gravatarUrl from "gravatar-url";
import { Link } from "react-router-dom";

const ChatItems = () => {
  const { user } = useSelector((state) => state.auth);
  const { email } = user || {};
  const {
    data: conversations,
    isLoading,
    isError,
    error,
  } = useGetConversationsQuery(email);

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <li className="m-2 text-center">Loading ....</li>;
  } else if (!isLoading && isError) {
    content = (
      <li className="m-2 text-center">
        <Error message={error?.data} />
      </li>
    );
  } else if (!isLoading && !isError && conversations?.length === 0) {
    content = <li className="m-2 text-center">No conversations found!</li>;
  } else if (!isLoading && !isError && conversations?.length > 0) {
    content = conversations.map((conversation) => {
      const { id, message, timestamp, users } = conversation;
      const { name } = getPartnerInfo(users, email);
      return (
        <li key={id}>
          <Link to={`/inbox/${id}`}>
            <ChatItem
              avatar={gravatarUrl(emranImg, {
                size: 80,
              })}
              name={name}
              lastMessage={message}
              lastTime={moment(timestamp).fromNow()}
            />
          </Link>
        </li>
      );
    });
  }
  return <ul>{content}</ul>;
};

export default ChatItems;
