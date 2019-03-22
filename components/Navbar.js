import Link from 'next/link';
import '../sass/styles.scss';

const NAVIGATION = [
    {
        link: '/',
        label: 'Popular'
    },
    {
        link: '/movies',
        label: 'Movies'
    },
    {
        link: '/shows',
        label: 'Shows'
    }
];

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
            {NAVIGATION.map((navItem) => <li key={navItem.link} className="nav-item">
                <Link href={navItem.link}><a className="nav-link">{navItem.label}</a></Link>
            </li>)}
        </ul>
        <img src="https://lh3.googleusercontent.com/z61emcjy_0JatoBNeD2xsZswRXXnwvUdPeR2zFka5muBH8v94ljqD18fcxeGjztOEOM" className="rounded float-right" alt="..." height="50" />
    </nav>
)

export default Navbar;