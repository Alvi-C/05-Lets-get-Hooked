const Title = () => {
    return (
        <a href="/">
            <img
                className="logo"
                src="https://img.freepik.com/premium-vector/food-lover-logo-designs-concept-vector-restaurant-logo-symbol-icon_316493-176.jpg?w=2000"
                alt="logo"
            />
        </a>
    )
}


const Navbar = () => {
    return (
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <Title />
            <Navbar />
        </div>
    )
}

export default Header;