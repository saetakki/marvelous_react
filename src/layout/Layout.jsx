import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css"

const Layout = ({ children }) => {
return (
    <div className="layout">
        <Header/>
        <div className="layout-body">{children}</div>
        <Footer/>
    </div>
    )
};

export default Layout;