import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLessonsByCourse } from "../Services/lessonService";
import LessonForm from "../components/LessonForm";
import { createLesson } from "../services/lessonService";
function ManageLessons() {
    const [lessons, setLessons] = useState([]);
    const { courseId } = useParams();
    useEffect(() => {

        fetchLessons();
    }, []);

    const handleCreateLesson = async (lessonData) => {

        try {

            const response = await createLesson(lessonData);

            alert(response.message);

            fetchLessons();

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Failed to create lesson"
            );

        }

    };

    const fetchLessons = async () => {

        try {

            const response = await getLessonsByCourse(courseId);

            setLessons(response.data);

        } catch (error) {

            console.log(error);

        }

    };
    return (
        <div>
            <h1>Manage Lessons</h1>


            <h3>Total Lessons : {lessons.length}</h3>
            <LessonForm
                courseId={courseId}
                onSubmit={handleCreateLesson}
            />

            <table>

                <thead>

                    <tr>

                        <th>Order</th>
                        <th>Title</th>
                        <th>Duration</th>

                    </tr>

                </thead>

                <tbody>

                    {lessons.map((lesson) => (

                        <tr key={lesson._id}>

                            <td>{lesson.order}</td>

                            <td>{lesson.title}</td>

                            <td>{lesson.duration}</td>

                        </tr>

                    ))}

                </tbody>

            </table>
        </div>
    );

}

export default ManageLessons;