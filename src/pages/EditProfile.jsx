 import pro_pic from "../assets/temparary_profile_picture.png";
 import "./EditProfile.css";
 function EditProfile() {
  return (
      <div className="edit-profile-container">

    <div className="profile-image-section">
        <img src={pro_pic} alt="Profile" className="profile-pic" />

        <button className="edit-image-btn">
            ✏️
        </button>
    </div>

    <input
        type="text"
        placeholder="Full Name"
    />

    <input
        type="tel"
        placeholder="Phone Number"
    />

    <input
        type="email"
        placeholder="Email"
    />

    <div className="button-group">
        <button className="save-btn">Save Changes</button>
        <button className="cancel-btn">Cancel</button>
    </div>

</div>
  );
}

export default EditProfile;
