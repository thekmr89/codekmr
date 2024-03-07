import React from 'react';
import { Link } from "react-router-dom";
import { useMasterContext } from '../components/MasterContext';

export const Footer = () => {
    const {loader} = useMasterContext();
      return (
        <>
           <footer>
                <div className="container-fluid">
                    <div className="flex">
                        <div className="colA">
                            <Link to={'/codekmr'}>
                                <img src={require("../assets/images/logo.png")} alt="codekmr" />
                            </Link>
                        </div>
                        <div className="colB">
                            <Link to={'mailto:kmr89susheel@gmail.com'} target='_blank'><img src={require("../assets/icon/mail.png")} alt="mail" /> kmr89susheel@gmail.com</Link>
                        </div>
                    </div>
                </div>
           </footer>
           {loader && 
                <div className="loader">
                    <div className="loader-img">
                        <img src={require("../assets/images/logo.png")} alt="codekmr" />
                    </div>
                </div>
           }
        </>
      );
}
