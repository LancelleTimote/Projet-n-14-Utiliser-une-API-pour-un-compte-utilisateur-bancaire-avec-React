import "./Profile.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Account from "../../components/Account/Account";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName } from "../../store/authThunk";

function Profile() {
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [display, setDisplay] = useState(true);

    //récup du token dans le state redux
    const token = useSelector((state) => state.auth.token);
    //init dispatch pour envoyer actions à Redux
    const dispatch = useDispatch();
    //récup des données utilisateur dans le store
    const userData = useSelector((state) => state.user.userData);

    useEffect(() => {
        setNewFirstName(userData.firstName);
        setNewLastName(userData.lastName);
    }, [userData.firstName, userData.lastName]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        try {
            await dispatch(updateUserName({ token, newFirstName, newLastName })).unwrap();
            setDisplay(true);
            setNewFirstName("");
            setNewLastName("");
        } catch (error) {
            console.error("Failed to update username : ", error);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleCancel = () => {
        setNewFirstName("");
        setNewLastName("");
        setDisplay(true);
    };

    return (
        <div>
            <Header />
            <div className="main bg-dark">
                <div className="header">
                    {display ? (
                        <div>
                            <h1>
                                Welcome back
                                <br />
                                {userData.firstName} {userData.lastName} !
                            </h1>
                            <button className="edit-button" onClick={() => setDisplay(!display)}>
                                Edit Name
                            </button>
                        </div>
                    ) : (
                        <div>
                            <h1>Welcome back</h1>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="firstname"></label>
                                    <input type="text" id="firstname" value={newFirstName} placeholder={userData.firstName} onChange={(e) => setNewFirstName(e.target.value)} disabled={isUpdating} />
                                </div>
                                <div>
                                    <label htmlFor="lastname"></label>
                                    <input type="text" id="lastname" value={newLastName} placeholder={userData.lastName} onChange={(e) => setNewLastName(e.target.value)} disabled={isUpdating} />
                                </div>
                                <div>
                                    <button type="submit" disabled={isUpdating}>
                                        Save
                                    </button>
                                    <button type="button" onClick={handleCancel} disabled={isUpdating}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                            {isUpdating && <p>Updating...</p>}
                        </div>
                    )}
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

export default Profile;
