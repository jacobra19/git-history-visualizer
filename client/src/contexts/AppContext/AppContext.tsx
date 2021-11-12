import React, { createContext, useState, useEffect } from 'react';

export type AppContextType = {
    isAppLoading: boolean;
    setIsAppLoading: (isAppLoading: boolean) => void;
};

const AppContext = createContext<AppContextType>({
    isAppLoading: true,
    setIsAppLoading: () => {},
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAppLoading, setIsAppLoading] = useState(true);

    return (
        <AppContext.Provider
            value={{
                isAppLoading,
                setIsAppLoading,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = React.useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
};

export { AppContextProvider, useAppContext };
