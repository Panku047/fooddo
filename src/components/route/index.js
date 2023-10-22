import Home from '../feature/home/Home'
import Layout from '../layout';
import Header from '../feature/header/Header';
import Footer from '../feature/footer/Footer';
import About from '../feature/about/About'

const pagesData = [
    {
        path:"",
        element: <Layout />,
        title: "Layout"
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
        title: "home"
    }
]

export default pagesData;