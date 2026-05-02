import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <p className="footer__copy">
                    &copy; {new Date().getFullYear()} Saurabh Bhojane
                </p>
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
