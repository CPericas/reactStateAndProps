/* Task 1: Initializing and Displaying a List

Start by creating a MoviesList functional component.
Initialize a state with a hardcoded list of movie titles using the useState hook.

Task 2: Conditional Rendering of Movie Details

For each movie, implement a feature that toggles additional details (like a brief description) when the movie title is clicked.
Use conditional rendering to show or hide these details.

Task 3: Implementing Movie Removal

Add a 'Remove' button next to each movie title.
Implement a function to remove a movie from the list when this button is clicked.

Task 4: Toggling List View

Implement a button outside the list to toggle between showing all movies and only showing a specific genre (e.g., 'Action').
Use conditional rendering and state management to control the list's display based on this */

import { useState } from "react";

function TaskTwo() {
    const [movie, setMovies] = useState([
        { title: "IT", genre: "horror", description: "A horror movie about an entity that see your deepest fears and use them against you.", showDetails: false },
        { title: "Evil Dead", genre: "horror", description: "A cult classic about evil being released into the world.", showDetails: false },
        { title: "Bad Boys", genre: "action", description: "An action comendy about two cops.", showDetails: false },
    ]);

    const toggleDetails = (index) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie, i) =>
                i ===index ? { ...movie, showDetails: !movie.showDetails } : movie
            )
        );
    };

    const removeMovie = (index) => {
        setMovies((prevMovies) => prevMovies.filter((_, i) => i !==index));
    };

    const byGenre = (index) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.genre === "horror"));
    };

    return (
        <div>
            <h2>MOVIES</h2>
            <button onClick={byGenre} style={{ marginBottom: "10px"}}>
                Only Horror Movies
            </button>
            <ul>
                {movie.map((movie, index) =>(
                    <li key={index} style={{ marginBottom: "10px" }}>  
                        <span 
                            onClick={() => toggleDetails(index)}
                            style={{ cursor: "pointer", marginRight: "10px" }}
                        >
                            {movie.title}
                        </span>
                        <button onClick={() => removeMovie(index)} style={{marginLeft: "10px"}}>
                            Remove
                        </button>
                        {movie.showDetails && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskTwo