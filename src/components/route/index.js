import Home from '../feature/home/Home'
import Layout from '../layout';
import Header from '../feature/header/Header';
import Footer from '../feature/footer/Footer';
import About from '../feature/about/About'
import Contact from '../feature/contact/Contact';
import Investor from '../feature/investor/Investor';
import Cart from '../feature/cart/Cart';

const pagesData = [
    {
        path:"",
        element: <Layout />,
        title: "layout"
    },
    {
        path:"/home",
        element: (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        ),
        title: "home"
    },
    {
        path:"/about",
        element: (
            <div>
                <Header />
                <About />
                <Footer />
            </div>
        ),
        title: "about"
    },
    {
        path:"/contact",
        element: (
            <div>
                <Header />
                <Contact />
                <Footer />
            </div>
        ),
        title: "contact"
    },
    {
        path:"/investor",
        element: (
            <div>
                <Header />
                <Investor />
                <Footer />
            </div>
        ),
        title: "investor"
    },
    {
        path:"/cart",
        element: (
            <div>
                <Header />
                <Cart />
                <Footer />
            </div>
        ),
        title: "cart"
    }
]

export default pagesData;