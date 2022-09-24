import React, { useState, useContext } from "react";
import AttachFile from "../images/attach.png";
import AttachImage from "../images/img.png";

import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(data);

  const handleSend = async () => {
    console.log("sending");
    if (img) {
      //Create a unique image name
      const storageRef = ref(storage, uuidv4());
      //upload image
      const uploadTask = await uploadBytesResumable(storageRef, img).then(
        () => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            console.log("File available at", downloadURL);

            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuidv4(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuidv4(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    //update userChats to display the latest message to currentUser
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    //update userChats to display the latest message to other user
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <div className="send">
        <label htmlFor="file">
          <img src={AttachFile} alt="" />
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />

        <img src={AttachImage} alt="" />

        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
