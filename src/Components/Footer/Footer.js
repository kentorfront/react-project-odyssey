import './Footer.css'

export default function Footer(){
    return(
        <footer>
            <div className='footer-up'>
                <div className='footer-logo-parent'>
                    <div className="footer-logo"></div>
                </div>
                <div className="center-footer">
                    <a className='center-footer-link' href='#'>Stay Connected</a>
                    <a className='center-footer-link' href='#'>Education</a>
                    <a className='center-footer-link' href='#'>Community</a>
                    <a className='center-footer-link' href='#'>About Us</a>
                </div>
                <div className='footer-right'>
                    <a className='footer-right-link' href='#'>Privacy policy</a>
                    <a className='footer-right-link' href='#'>Terms & Agreements</a>
                </div>
            </div>
            <div className='footer-down'>
            [contact@odyssey.com].
            </div>
        </footer>
    )
}