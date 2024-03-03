import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ErrorPage.scss";

function ErrorPage() {
    return (
        <div className="errorPage">
            <Header />
            <Error />
            <Footer />
        </div>
    );
}

export default ErrorPage;
