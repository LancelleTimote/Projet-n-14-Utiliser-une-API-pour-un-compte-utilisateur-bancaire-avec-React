import "./User.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Account from "../../components/Account/Account";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../store/userSlice";

function User() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <div className="main bg-dark">
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {user.loading ? (
                            <p>Chargement...</p>
                        ) : (
                            <>
                                {user.firstName} {user.lastName}
                            </>
                        )}
                    </h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} amountDescription={"Available Balance"} buttonText={"View transactions"} />
                <Account title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"} amountDescription={"Available Balance"} buttonText={"View transactions"} />
                <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"} amountDescription={"Current Balance"} buttonText={"View transactions"} />
            </div>
            <Footer />
        </div>
    );
}

export default User;
