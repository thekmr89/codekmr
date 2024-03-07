import React, { createContext, useContext, useState } from 'react'

const MakeMasterContext = createContext();

export const MasterContext = ({ children }) => {

    const [openPop, setOpenPop] = useState('');
    const [webImage, setwebImage] = useState('');
    const [loader, setloader] = useState(null);
    const showOpenPop = (popup) => {
        setOpenPop(popup);
        document.documentElement.style.setProperty('overflow', 'hidden');
    };
    const hideOpenPop = (popup) => {
        if (openPop === popup) {
            setOpenPop('');
            document.documentElement.style.setProperty('overflow', 'visible');
          }
    };

    return (
        <MakeMasterContext.Provider value={{ openPop,webImage,loader,setwebImage, showOpenPop,hideOpenPop,setloader}}>
            {children}
        </MakeMasterContext.Provider>
    );
};

export const useMasterContext = () => {
    return useContext(MakeMasterContext);
};
