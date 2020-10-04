import React, {
    createContext,
    useContext,
    useState,
    useEffect
} from "react";
import firebase from "../firebase";

const Context = createContext({});

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        //firebase.auth().signOut()



        firebase
            .auth()
            .onAuthStateChanged(user => {
                setIsAuth(!! user);
            });
    }, []);

    return (
        <Context.Provider value={{
            isAuth
        }}>
            { children }
        </Context.Provider>
    );
};

export const useGlobalContext = () => useContext(Context);

export default Provider;