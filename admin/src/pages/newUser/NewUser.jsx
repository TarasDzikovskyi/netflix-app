import "./newUser.css";
import { useContext, useState } from "react";

export default function NewUser() {
  const [user, setUser] = useState(null)
  const [img, setImg] = useState(null)



  const handleChange = (e) => {
    const value = e.target.value;
    setUser({...user, [e.target.name]: value})
  }



  const handleClick = () => {

  }

  console.log(user);

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" plan='username' placeholder="john" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name='email' placeholder="john@gmail.com" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name='password' placeholder="password" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Plan</label>
          <select className="newUserSelect" name="plan" id="active" onChange={handleChange}>
            <option value="Basic">Basic</option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Activated</label>
          <select className="newUserSelect" name="activated" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>User role</label>
          <div className="newUserGender">
            <input type="radio" name="isAdmin" id="user" value="false" onChange={handleChange}/>
            <label for="user">User</label>
            <input type="radio" name="isAdmin" id="admin" value="true" onChange={handleChange}/>
            <label for="admin">Admin</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Profile picture</label>
          <input type="file" name="profilePic" onChange={e => setImg(e.target.files[0])}/>
        </div>
        <button className="newUserButton" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
}
