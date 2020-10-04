import React, {useState} from "react";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";

const Login = () => {
    const { push } = useHistory();
    const [data, setData] = useState({
        email: null,
        password: null
    });
    const [error, setError] = useState(null);

    const onChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const { email, password } = data;

        const login = async () => {
            setError(null);

            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                push("/");
            } catch (e) {
                setError(e.message);
            }
        };

        login();
    };

    return (
        <div className="row">
            <div className="col-4 offset-4">

                <ErrorMessage message={error} />

                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="email"
                            onChange={onChangeHandler}
                            placeholder="Email"
                            type="text"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            name="password"
                            onChange={onChangeHandler}
                            placeholder="Пароль"
                            type="password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Login;