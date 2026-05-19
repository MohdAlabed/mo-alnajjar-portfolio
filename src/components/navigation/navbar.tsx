import NavLinks from './nav-links';

// 1. Structural framework runs entirely on the Server
const Navbar = () => {
    return (
        <nav className='fixed top-5.5 left-1/2 -translate-x-1/2 z-50'>
            <div className='bg-zinc-900/80 border border-zinc-800 backdrop-blur-md py-2 px-4 rounded-xl'>
                {/* The dynamic client portion is deeply nested inside */}
                <NavLinks />
            </div>
        </nav>
    );
};

export default Navbar;