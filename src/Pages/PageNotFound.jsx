import {React} from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
    return (
        <>
            <main>
                <div className="banner home-banner">
                    <div className="container">
                        <div className="content">
                            <h1>PAGE NOT FOUND!!</h1>
                            <p></p>
                            <div className="btn"><Link to={'/codekmr'}>Back to Home</Link></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
