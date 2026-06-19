import pro_pic from "../assets/temparary_profile_picture.png";
import "./EditProfile.css";

import PhoneInputModule from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

import { useRef } from "react";
import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/userService";

function EditProfile() {
  const fileInputRef = useRef(null);
  const PhoneInput = PhoneInputModule.default;
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    profilePic: "",
    email: "",
    phoneNumber: "",
    address: "",
    gender: "",
    dateOfBirth: "",
    qualification: "",
    organizationName: ""
  });
  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const data = await getProfile();

        setFormData({
          fullName: data.fullName || "",
          profilePic: data.profilePic || "",
          email: data.email || "",
          phoneNumber: data.phoneNumber || "",
          address: data.address || "",
          gender: data.gender || "",
          dateOfBirth: data.dateOfBirth?.slice(0, 10) || "",
          qualification: data.qualification || "",
          organizationName: data.organizationName || ""
        });

      }

      catch (error) {

        console.log(error);

      }

    };

    fetchProfile();

  }, []);
  const handleInput = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };
  const handleImageUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    try {

      const data = new FormData();

      data.append(
        "profilePic",
        file
      );

      const response = await axios.post(

        "http://localhost:5000/api/upload",

        data

      );

      setFormData({

        ...formData,

        profilePic: response.data.imageUrl

      });

    }

    catch (error) {

      console.log(error);

    }

  };
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await updateProfile(formData);

      alert("Profile updated successfully");

    }

    catch (error) {

      console.log(error);

    }

  };


  return (
    <>
      <form className="edit-profile-container" onSubmit={handleSubmit}>

        <div className="profile-image-section">
          <img src={formData.profilePic || pro_pic} alt="Profile" className="profile-pic" />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />

          <button
            type="button"
            className="edit-image-btn"
            onClick={() => fileInputRef.current.click()}
          >
            ✏️
          </button>
        </div>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInput}
          required
        />

        {/* Phone + Email Row */}
        <div className="contact-row">

          <div className="phone-field">
            <label>Phone Number</label>

            <PhoneInput
              country={"in"}
              value={formData.phoneNumber}

              onChange={(value) =>
                setFormData({
                  ...formData,
                  phoneNumber: value
                })
              }
            />
          </div>

        </div>
        <div className="email-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            placeholder="Email"
            required
          />
        </div>

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInput}
          placeholder="Address"
          required
        />

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

        <label>Qualification</label>

        <select
          name="qualification"
          value={formData.qualification}
          onChange={handleInput}
        >
          <option value="">Select Qualification</option>
          <option value="student">Student</option>
          <option value="professional">Working Professional</option>
          <option value="teacher">Teacher</option>
          <option value="other">Other</option>
        </select>

        {formData.qualification === "student" && (
          <>
            <label>College Name</label>
            <input type="text" placeholder="Enter College Name" />
          </>
        )}

        {formData.qualification === "professional" && (
          <>
            <label>Organization Name</label>
            <input type="text" placeholder="Enter Organization Name" />
          </>
        )}

        {formData.qualification === "teacher" && (
          <>
            <label>Institution Name</label>
            <input type="text" placeholder="Enter Institution Name" />
          </>
        )}

        {formData.qualification === "other" && (
          <>
            <label>Organization / College</label>
            <input type="text" placeholder="Enter Details" />
          </>
        )}

        <div className="button-group">
          <button className="save-btn">
            Save Changes
          </button>

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