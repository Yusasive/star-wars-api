import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>StatusText: {error.statusText} ErrorMessage: {error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage