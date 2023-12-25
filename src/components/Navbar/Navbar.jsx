import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        { id: 1, name: 'HOME', link: '/' },
        { id: 2, name: 'ABOUT', link: '/about' },
        { id: 3, name: 'ADD COFFEE', link: '/addCoffee' },
        { id: 4, name: 'Contact', link: '/contact' },
    ]
    return (
        <nav>
            <div className="flex justify-between">
                {/* left */}
                <div className="">
                    <h1>Coffee Shop</h1>
                </div>
                {/* Middle */}
                <div className="">
                    <ul className="flex items-center gap-5">
                        {
                            navLinks.map(data =>
                                (<li key={data.id}>
                                    <NavLink
                                        to={data.link}
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? 
                                            "py-2 border-b-2 text-yellow-300 border-yellow-300 transition-colors duration-500 text-lg font-medium" :
                                                    "py-2 hover:border-b-2 hover:text-yellow-200 hover:border-yellow-200 transition-colors duration-500 text-lg font-medium"
                                        }
                                    >
                                        {data.name}
                                    </NavLink>
                                </li>
                                ))
                        }
                    </ul>
                </div>
                {/* Right */}
                <div className="">
                    <Link to={'/login'}><button className="btn btn-ghost">Login</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;