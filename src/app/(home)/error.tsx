"use client";

interface ErrorProps {
    error: Error;
    reset: () => void;
}
export default function Error({error, reset}: ErrorProps){
    return(
        <div>
            <h1>:(</h1>
            <p>Error</p>
            <button onClick={reset}>Again</button>
        </div>

    )
}
