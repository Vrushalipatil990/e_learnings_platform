import pro_pic from "../assets/temparary_profile_picture.png";
import "./EditProfile.css";
import React, { useState } from "react";

function EditProfile() {
  const [showWarning, setShowWarning] = useState(false);
  const [qualification, setQualification] = useState("");

  return (
    <>
      <form className="edit-profile-container">

      
        <div className="profile-image-section">
          <img src={pro_pic} alt="Profile" className="profile-pic" />

          <button type="button" className="edit-image-btn">
            ✏️
          </button>
        </div>

       
        <input type="text" placeholder="Full Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Address" required />

      
        <label>Gender</label>

        <div className="gender-group">
          <label>
            <input type="radio" name="gender" value="male" />
            Male
          </label>

          <label>
            <input type="radio" name="gender" value="female" />
            Female
          </label>

          <label>
            <input type="radio" name="gender" value="other" />
            Other
          </label>
        </div>

    
        <div className="dob-age-row">

          <div className="dob-field">
            <label>Date of Birth</label>
            <input type="date" />
          </div>

          <div className="age-field">
            <label>Age</label>
            <input type="number" placeholder="Age" disabled />
          </div>

        </div>

        {/* Qualification */}
        <label>Qualification</label>

        <select
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        >
          <option value="">Select Qualification</option>
          <option value="student">Student</option>
          <option value="professional">Working Professional</option>
          <option value="teacher">Teacher</option>
          <option value="other">Other</option>
        </select>

        {qualification === "student" && (
          <>
            <label>College Name</label>
            <input type="text" placeholder="Enter College Name" />
          </>
        )}

        {qualification === "professional" && (
          <>
            <label>Organization Name</label>
            <input type="text" placeholder="Enter Organization Name" />
          </>
        )}

        {qualification === "teacher" && (
          <>
            <label>Institution Name</label>
            <input type="text" placeholder="Enter Institution Name" />
          </>
        )}

        {qualification === "other" && (
          <>
            <label>Organization / College</label>
            <input type="text" placeholder="Enter Details" />
          </>
        )}

       
        <div className="button-group">
          <button className="save-btn">Save Changes</button>

          <button type="button" className="cancel-btn">
            Cancel
          </button>

        </div>
        <button
            type="button"
            className="delete-profile-btn"
            onClick={() => setShowWarning(true)}
          >
            Delete Account
          </button>

      </form>
      

      
      {showWarning && (
        <div className="warning-popup">
          <h3>Delete Account?</h3>

          <p>This action cannot be undone.</p>

          <div className="warning-buttons">
            <button
              type="button"
              className="cancel-delete-btn"
              onClick={() => setShowWarning(false)}
            >
              Cancel
            </button>

            <button
              type="button"
              className="confirm-delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default EditProfile;