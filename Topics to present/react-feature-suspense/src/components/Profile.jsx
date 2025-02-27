/* eslint-disable no-unused-vars */
import React from "react";

function Profile() {
  const user = {
    name: "Tanish Gupta",
    bio: "MERN Stack Developer | Passionate about Project-Based Learning 🚀",
    location: "India",
    skills: ["React", "Express", "MongoDB", "Node.js"],
  };

  return (
    <div className="bg-blue-200 p-6 rounded-lg text-center shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-blue-700">{user.name}</h2>
      <p className="text-gray-700 mt-2">{user.bio}</p>
      <p className="text-gray-600 mt-1">📍{user.location}</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Skills:</h3>
        <ul className="flex gap-3 justify-center flex-wrap">
          {user.skills.map((skill, index) => (
            <li key={index} className="bg-blue-500 text-white px-3 py-1 rounded-lg">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;

  
  

