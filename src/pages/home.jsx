import EnrolledCourseCard from "../components/EnrolledCourseCard";
import "./Home.css";
const userName = "Donald";
function Home() {
  return (
    <>
       <div className="hero-section">
      <h1>Welcome back, {userName}! </h1>

      <p>
        Continue your learning journey with SkillDo.
      </p>
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

export default Home;