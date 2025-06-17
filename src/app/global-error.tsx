"use client";
import { JSX } from "react";

export default function __GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}): JSX.Element {
    console.error("An error occurred on the server.");
    return (
        <html>
            <body>
                <h1>Что-то пошло не так!</h1>
                <h1>Мы работаем над этим...</h1>
                <button onClick={() => reset()}>Попробовать снова</button>
            </body>
        </html>
    );
}
