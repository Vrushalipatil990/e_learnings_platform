import axios from "axios";

export const getProfile = async () => {

  const token = localStorage.getItem("token");

  const response = await axios.get(
    "http://localhost:5000/api/users/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
};

export const updateProfile = async (userData) => {

    const token = localStorage.getItem("token");

    const response = await axios.put(

        "http://localhost:5000/api/users/profile",

        userData,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );

    return response.data;

};
export const deleteProfile = async () => {

    const token = localStorage.getItem("token");

    const response = await axios.delete(

        "http://localhost:5000/api/users/profile",

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );

    return response.data;
};