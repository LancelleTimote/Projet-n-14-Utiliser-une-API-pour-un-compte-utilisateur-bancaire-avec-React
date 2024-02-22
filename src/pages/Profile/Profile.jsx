import "./Profile.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Account from "../../components/Account/Account";

function Profile() {
    return (
        <div>
            <Header />
            <div className="main bg-dark">
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
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

export default Profile;
