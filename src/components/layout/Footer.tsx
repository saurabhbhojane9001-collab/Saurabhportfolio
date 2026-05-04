import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div>
                    <p className="footer__copy">
                        &copy; {new Date().getFullYear()} Saurabh Bhojane
                    </p>
                    <span className="footer__status">
                        <span className="footer__status-dot" />
                        Available for opportunities
                    </span>
                </div>
                <nav className="footer__links">
                    <a href="https://linkedin.com/in/saurabh-bhojane-a466b2266" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:saurabhbhojane9001@gmail.com">Email</a>
                </nav>
            </div>
        </footer>
    );
}
