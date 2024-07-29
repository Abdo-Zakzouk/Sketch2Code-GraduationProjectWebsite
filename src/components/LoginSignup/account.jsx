import React, { useState, useEffect } from "react";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import Card from "./card";
import { data } from "./data"; // Your sample data structure
import "./account.css";
const Account = () => {
  const [websiteData, setWebsiteData] = useState([]);
  const [userIdInput, setUserIdInput] = useState("");
  const navigate = useNavigate();
  // Get the current user
  const currentUser = auth.currentUser;
  useEffect(() => {
    if (currentUser) {
      console.log("Fetching data for user:", currentUser.email);
      fetchData(currentUser.email);
    }
  }, [currentUser]);
  const fetchData = (email) => {
    if (!email) return;
    const q = query(
      collection(db, "websites"),
      where("userEmail", "==", email)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dataFromFirestore = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched data:", dataFromFirestore);
      setWebsiteData(dataFromFirestore);
    });
    return () => unsubscribe();
  };
  const handleAddUser = async () => {
    if (userIdInput && currentUser) {
      const userExists = websiteData.some(
        (item) => item.userId === userIdInput
      );
      if (!userExists) {
        const newUser = data.find((item) => item.userId === userIdInput);
        if (newUser) {
          try {
            const q = query(
              collection(db, "websites"),
              where("userEmail", "==", currentUser.email),
              where("userId", "==", userIdInput)
            );
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
              const docRef = await addDoc(collection(db, "websites"), {
                ...newUser,
                userEmail: currentUser.email,
              });
              console.log("Added document:", docRef.id);
              setWebsiteData((prevData) => [
                ...prevData,
                { id: docRef.id, ...newUser, userEmail: currentUser.email },
              ]);
              setUserIdInput(""); // Clear input after adding
            } else {
              alert("Project already exists in the account!");
            }
          } catch (error) {
            console.error("Error adding document:", error);
          }
        } else {
          alert("Project ID not found in data!");
        }
      } else {
        alert("Project already exists in the account!");
      }
    }
  };
  const handleRemoveUser = async () => {
    if (userIdInput && currentUser) {
      const userDoc = websiteData.find((item) => item.userId === userIdInput);
      if (userDoc) {
        try {
          await deleteDoc(doc(db, "websites", userDoc.id));
          console.log("Removed document:", userDoc.id);
          setWebsiteData((prevData) =>
            prevData.filter((item) => item.id !== userDoc.id)
          );
          setUserIdInput(""); // Clear input after removing
        } catch (error) {
          console.error("Error removing document:", error);
        }
      } else {
        alert("Project ID not found in your account!");
      }
    }
  };
  const handleSignout = () => {
    alert("You signed out :(");
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="top-element">
        <h1> My Websites </h1>
      </div>
      <div className="inputContent">
        <input
          type="text"
          placeholder="Enter Project ID"
          value={userIdInput}
          onChange={(e) => setUserIdInput(e.target.value)}
        />
        <button onClick={handleAddUser}>Add Project</button>
        <button onClick={handleRemoveUser}>Remove Project</button>
      </div>
      <div className="showContent">
        {websiteData.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <div className="outContent">
        <button onClick={handleSignout}>Sign out!</button>
      </div>
    </>
  );
};
export default Account;
