import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import CourseForm from "../components/CourseForm";
import {
    getCourseById,
    updateCourse
} from "../services/courseService";

function EditCourse() {

    const { id } = useParams();

    const [courseData, setCourseData] = useState({
        image: "",
        instructor: "",
        category: "",
        title: "",
        description: "",
        duration: "",
        lectures: "",
        price: ""
    });
    useEffect(() => {

    fetchCourse();

}, [id]);
const fetchCourse = async () => {

    try {

        const response = await getCourseById(id);

        setCourseData(response.data);

    } catch (error) {

        console.log(error);

    }

};
const handleUpdate = async (e) => {

    e.preventDefault();

    try {

        const response = await updateCourse(id, courseData);

        alert(response.message);

    } catch (error) {

        console.log(error);

        alert(
            error.response?.data?.message ||
            "Failed to update course"
        );

    }

};

    return (

        <AdminLayout>

            <h1>Edit Course</h1>
            <CourseForm
    courseData={courseData}
    setCourseData={setCourseData}
    handleSubmit={handleUpdate}
    buttonText="Update Course"
/>

        </AdminLayout>

    );

}

export default EditCourse;