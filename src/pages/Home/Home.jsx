import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import "./Home.scss";
import Feature from "../../components/Feature/Feature";
import iconChat from "../../assets/icons/icon-chat.svg";
import iconMoney from "../../assets/icons/icon-money.svg";
import iconSecurity from "../../assets/icons/icon-security.svg";

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Feature
                    icon={iconChat}
                    description="Chat Icon"
                    title="You are our #1 priority"
                    paragraph="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
                />
                <Feature icon={iconMoney} description="Money Icon" title="More savings means higher rates" paragraph="The more you save with us, the higher your interest rate will be!" />
                <Feature
                    icon={iconSecurity}
                    description="Security Icon"
                    title="Security you can trust"
                    paragraph="We use top of the line encryption to make sure your data and money
            is always safe."
                />
            </section>
            <Footer />
        </div>
    );
}

export default Home;
