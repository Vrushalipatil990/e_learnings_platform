import { useState } from "react";
import "./LessonForm.css";
function LessonForm({ onSubmit, courseId }) {

    const [lessonData, setLessonData] = useState({
        course: courseId,
        title: "",
        video: "",
        notes: "",
        duration: "",
        order: ""
    });

    const handleInput = (e) => {

        setLessonData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(lessonData);

    };

    return (

        <form className="lesson-form" onSubmit={handleSubmit}>

            <input
                type="text"
                name="title"
                placeholder="Lesson Title"
                value={lessonData.title}
                onChange={handleInput}
            />

            <input
                type="text"
                name="duration"
                placeholder="Duration"
                value={lessonData.duration}
                onChange={handleInput}
            />

            <input
                type="number"
                name="order"
                placeholder="Order"
                value={lessonData.order}
                onChange={handleInput}
            />

            <input
                type="text"
                name="video"
                placeholder="Video URL"
                value={lessonData.video}
                onChange={handleInput}
            />

            <input
                type="text"
                name="notes"
                placeholder="Notes URL"
                value={lessonData.notes}
                onChange={handleInput}
            />

            <button type="submit">
                Add Lesson
            </button>

        </form>

    );

}

export default LessonForm;