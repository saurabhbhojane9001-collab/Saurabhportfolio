import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import ScrollToTop from './components/common/ScrollToTop';

/* Page transition wrapper */
function PageTransition({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const [transitionKey, setTransitionKey] = useState(location.pathname);

    useEffect(() => {
        setTransitionKey(location.pathname);
    }, [location.pathname]);

    return (
        <div key={transitionKey} className="page-transition">
            {children}
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Container>
                <PageTransition>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/case-study/:id" element={<CaseStudy />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </PageTransition>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}
