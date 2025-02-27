/* eslint-disable no-unused-vars */

// React.Suspense is a feature in React used to show a loading indicator while waiting for something to load, like components or data.

// ✅ It helps to:

// Display a fallback UI (like a spinner or text) while content is loading.
// Improve user experience by avoiding blank screens.
// Automatically hide the fallback when the content is ready.

//In easy words

//React.Suspense is like a waiting room — it shows a loading message while React is preparing your component or data in the background.

// 👉 React.Suspense = Waiting Room + Promise
// When Promise resolves, React automatically brings the component back!



import React, { Suspense, lazy } from "react";

const Profile = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./components/Profile"));
    }, 3000);
  });
});

function App() {
  return (
    <div className="h-screen flex items-center justify-center ">
      <Suspense fallback={<h2 className="text-blue-500 ">Loading Profile...</h2>}>
        <Profile />
      </Suspense>
    </div>
      
  );
}

export default App;


