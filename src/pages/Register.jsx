import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase/firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function Register(props) {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress
        },
        (error) => {
          // error
          setErr(true);
        },
        async () => {
          // success
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          await updateProfile(user, {
            displayName,
            photoURL: downloadURL,
          });

          //create user on firestore
          await setDoc(doc(db, "users", user.uid), {
            displayName,
            email,
            photoURL: downloadURL,
            uid: user.uid,
          });

          await setDoc(doc(db, "userChats", user.uid), {});
          navigate("/");
        }
      );
      console.log("bien");
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Chat app</span>
          <span className="title">Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={Add} alt="Avatar" />
              <span>Add an Avatar</span>
            </label>
            <button>Sign up</button>
            {err && <span>Something went wrong</span>}
          </form>
          <p>
            You do have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
