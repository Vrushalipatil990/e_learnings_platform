import "./Profile.css";
import { Link } from "react-router-dom";
import pro_pic from "../assets/temparary_profile_picture.png";
function Profile() {
  return (
    <>
    <div className="profile-container">

    <img src={pro_pic} alt="Profile" className="profile-pic" />


      <div className="profile-info">
        <h2>Donald Trump</h2>
        <p>📞 9876543210</p>
        <p>✉️ donald@gmail.com</p>
      <div>
  <Link to="/edit-profile">
    <button className="edit-button">
      Edit Profile
    </button>
  </Link>
</div> 
      </div>

    </div>
    </>
  );
}

export default Profile;