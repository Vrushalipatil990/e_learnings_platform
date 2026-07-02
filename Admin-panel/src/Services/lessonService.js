import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/lessons";

export const getLessonsByCourse = async (courseId) => {

    const response = await axios.get(`${API_URL}/${courseId}`);

    return response.data;

};

export const createLesson = async (lessonData) => {

    const response = await axios.post(API_URL, lessonData);

    return response.data;

};