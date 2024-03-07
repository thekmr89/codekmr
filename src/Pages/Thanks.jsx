import {React} from "react";
import { Link } from "react-router-dom";

export const Thanks = () => {
    return (
        <>
            <main>
                <div className="banner home-banner">
                    <div className="container">
                        <div className="content">
                            <h1>Thank You!</h1>
                            <p>Your Query is submitted. I'll be in touch shortly.</p>
                            <div className="btn"><Link to={'/codekmr'}>Back to Home</Link></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
