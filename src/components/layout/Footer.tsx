import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <p className="footer__copy">
                    &copy; {new Date().getFullYear()} Saurabh Bhojane
                </p>
                <nav className="footer__links">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:hello@example.com">Email</a>
                </nav>
            </div>
        </footer>
    );
}
