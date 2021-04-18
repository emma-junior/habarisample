import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isAnswer, setIsAnswer] = useState(false)

const openSidebar = () => {
    setIsSidebarOpen(true)
}
const closeSidebar = () => {
    setIsSidebarOpen(false);
}

    return <AppContext.Provider value={{isSidebarOpen, isAnswer, setIsAnswer, openSidebar, closeSidebar}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider }
