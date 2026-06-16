import "./Profile.css";
import { useEffect, useState } from "react";
import { getProfile } from "../services/userService";
import EnrolledCourseCard from "../components/EnrolledCourseCard";
import { Link } from "react-router-dom";
import pro_pic from "../assets/temparary_profile_picture.png";
function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUser(data);
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <div className="profile-container">

        <img src={user?.profilePic ||  pro_pic} alt="Profile" className="profile-pic" />


        <div className="profile-info">
          <h2>{user?.fullName}</h2>
          <p>📞 {user?.phoneNumber || "Not Added"}</p>
          <p>{user?.email}</p>
          <div>
            <Link to="/edit-profile">
              <button className="edit-button">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>

      </div>
      <h2 className="enrolled-heading">Enrolled Courses</h2>
      <div className="enrolled-courses">
        <EnrolledCourseCard
          title="React JS Bootcamp"
          progress={75}
          completedLessons={12}
          totalLessons={16}
        />

        <EnrolledCourseCard
          title="Java DSA"
          progress={40}
          completedLessons={8}
          totalLessons={20}
        />

        <EnrolledCourseCard
          title="Spring Boot"
          progress={90}
          completedLessons={18}
          totalLessons={20}
        />
        <EnrolledCourseCard
          title="HTML & CSS"
          progress={100}
          completedLessons={8}
          totalLessons={20}
        />
      </div>
    </>
  );
}

export default Profile;