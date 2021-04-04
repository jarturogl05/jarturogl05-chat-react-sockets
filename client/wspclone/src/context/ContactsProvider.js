import React, {useContext} from 'react'

const ContactsContext = React.createContext();

export function ContactsProvider({children}) {
    return (
        <div>
            <ContactsContext.Provider value={{ContactsProvider, createContact}}>
                {children}
            </ContactsContext.Provider>
        </div>
    )
}
