import axios from "axios";
import "../pages/Courses.css";  
import "../pages/AddCourse.css";

function CourseForm({
    courseData,
    setCourseData,
    handleSubmit,
    buttonText
}) {

    const handleInput = (e) => {

        setCourseData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    };

    const handleImageUpload = async (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const formData = new FormData();

        formData.append("profilePic", file);

        try {

            const response = await axios.post(
                "http://localhost:5000/api/upload",
                formData
            );

            setCourseData(prev => ({
                ...prev,
                image: response.data.imageUrl
            }));

        } catch (error) {

            console.log(error);

            alert("Image upload failed");

        }

    };

    return (

        <form
            className="course-form"
            onSubmit={handleSubmit}
        >

            <label>Course Thumbnail</label>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
            />

            {courseData.image && (

                <img
                    src={courseData.image}
                    alt="Thumbnail"
                    style={{
                        width: "180px",
                        marginTop: "10px",
                        borderRadius: "8px"
                    }}
                />

            )}

            <label>Instructor</label>

            <input
                type="text"
                name="instructor"
                value={courseData.instructor}
                onChange={handleInput}
                placeholder="Instructor Name"
            />

            <label>Category</label>

            <input
                type="text"
                name="category"
                value={courseData.category}
                onChange={handleInput}
                placeholder="Category"
            />

            <label>Course Title</label>

            <input
                type="text"
                name="title"
                value={courseData.title}
                onChange={handleInput}
                placeholder="Course Title"
            />

            <label>Description</label>

            <textarea
                name="description"
                value={courseData.description}
                onChange={handleInput}
                placeholder="Course Description"
            />

            <label>Duration</label>

            <input
                type="text"
                name="duration"
                value={courseData.duration}
                onChange={handleInput}
                placeholder="20 Hours"
            />

            <label>Lectures</label>

            <input
                type="number"
                name="lectures"
                value={courseData.lectures}
                onChange={handleInput}
                placeholder="45"
            />

            <label>Price</label>

            <input
                type="number"
                name="price"
                value={courseData.price}
                onChange={handleInput}
                placeholder="499"
            />

            <button type="submit">
                {buttonText}
            </button>

        </form>

    );

}

export default CourseForm;