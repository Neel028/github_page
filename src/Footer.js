
import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className="d-flex">
                <div className='w_50'>
                    <h1>JOIN US</h1>
                    <h2>New subscribers receive 10% off their first purchase</h2>
                    <div className='mail'>Your email
                    </div><hr />
                </div>
                <div className='w_50 d-flex'>
                    <div className='w_33'>
                        <h1>CATEGOIRES</h1>
                        <h4>Tops</h4>
                        <h4>Basics</h4>
                        <h4>Shirts & Blouses</h4>
                        <h4>Pants</h4>
                        <h4>Blazers & Vests</h4>
                        <h4> Shorts</h4>

                    </div>
                    <div className='w_33'>
                        <h1>SERVICES</h1>
                        <h4>Sale</h4>
                        <h4>Quick Ship</h4>
                        <h4>New Designs</h4>
                        <h4>Accidental Fabric Protection</h4>
                        <h4>Furniture Care</h4>
                        <h4>Gift Cards</h4>

                    </div>
                    <div className='w_33'>
                        <h1>INFORMATION</h1>
                        <h4>                        Return Policy</h4>
                        <h4>Start a Return</h4>
                        <h4>FAQ</h4>
                        <h4>Terms and Conditions</h4>
                        <h4>Privacy Policy</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
