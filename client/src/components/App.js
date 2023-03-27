import { Route, Switch } from "react-router";
import Header from "./Header";
import WorkOutList from "./WorkOutList";
import WorkOutForm from "./WorkOutForm";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <WorkOutList />
        </Route>
        <Route exact path="/new">
          <WorkOutForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;

// import { useState, useEffect } from "react";

// function App() {
//   const [workouts, setWorkouts] = useState([]);

//   useEffect(() => {
//     fetch("/workouts")
//       .then((r) => r.json())
//       .then((workouts) => setWorkouts(workouts));
//   }, []);

//   return (
//     <div>
//       <h1>Hello from React!</h1>
//       <ul>
//         {workouts.map((workout) => (
//           <li key={workout.id}>
//             <h2>{workout.title}</h2>
//             <img src={workout.image_url} alt={workout.image_description} />
//             <p>{workout.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     fetch("/workouts")
//       .then((r) => r.json())
//       .then((workouts) => console.log(workouts));
//   }, []);

//   return <h1>Hello from React!</h1>;
// }

// export default App;