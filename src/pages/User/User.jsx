import "./User.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function User() {
    return (
        <div>
            <Header />
            <div className="main bg-dark">
                <div class="header">
                    <h1>
                        Welcome back
                        <br />
                        Tony Jarvis!
                    </h1>
                    <button class="edit-button">Edit Name</button>
                </div>
                <h2 class="sr-only">Accounts</h2>
            </div>
            <Footer />
        </div>
    );
}

export default User;
