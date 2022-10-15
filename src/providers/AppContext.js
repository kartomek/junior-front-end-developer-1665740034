import { useContext, createContext } from "react"

const AppContext = createContext(null);

const AppProvider = props => {
    
//data
let data = [
    {
        id: 0,
        title: 'Appliction setup',
        status: 'DONE',
        context: [{
            id: 0,
            title: 'Titleefnkwnkfnweknkfnwejfnwjfnewfnj',
            content: 'Lorem ipsum dolor sit amet',
            author: 'Tomasz Karwowski',
            created_at: '2022-10-14',
            status: 'READ'
        },
        {
            id: 1,
            title: 'Titleefnkwnkfnweknkfnwejfnwjfnewfnj',
            content: 'Lorem ipsum dolor sit amet',
            author: 'Tomasz Karw',
            created_at: '2022-10-14',
            status: 'NEW'
        }]
    }, 
    {
        id: 1,
        title: 'Static books list',
        status: 'DONE',
        context: []
    }, 
    {
        id: 2,
        title: 'Administration panel',
        status: 'DONE',
        context: []
    }, 
    {
        id: 3,
        title: 'Connect admin with frontend',
        status: 'PROGRESS',
        context: []
    }, 
    {
        id: 4,
        title: 'Book review feature',
        status: 'CLOSED',
        context: [
            {
                id: 0,
                title: 'Titleefnkwnkfnweknkfnwejfnwjfnewfnj',
                content: 'Lorem ipsum dolor sit amet',
                author: 'Tomasz Karwowski',
                created_at: '2022-10-14',
                status: 'READ'
            },
            {
                id: 1,
                title: 'Titleefnkwnkfnweknkfnwejfnwjfnewfnj',
                content: 'Lorem ipsum dolor sit amet',
                author: 'Tomasz Karw',
                created_at: '2022-10-14',
                status: 'NEW'
            }
        ]
    }
]

    return(
        <AppContext.Provider
            value={{
                data
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

const useProvider = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useContext hook must be used within AppProvider");
    else return context;
}

export {
    AppProvider,
    useProvider
}