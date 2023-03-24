
import './header.css';

function Header() {
    return (
        <div>
            <div className="d_flex">
                <div className='logo'>
                </div>
                <ul className="d_flex jcb">
                    <li>Home
                        <ol>
                            <li></li>
                        </ol>
                    </li>
                    <li>Shop</li>
                    <li>Product</li>
                    <li>Blog</li>
                    <li>Featured</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
