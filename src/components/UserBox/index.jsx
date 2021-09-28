import { Image } from "components/image/index.jsx";
import { Wrapper, MessageContainer } from "./styles.js";

export function UserBox({ avatar, name, lastMessage, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <Image src={avatar} alt="profile-IMG" />
      <MessageContainer>
        <strong>{name}</strong>
        <span>{lastMessage}</span>
      </MessageContainer>
    </Wrapper>
  );
}
