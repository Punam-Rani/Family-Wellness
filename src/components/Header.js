import './header.css';

const Header = () => {
    return (
        <div className='main'>
            <h1 className='heading'>Family Wellness</h1>
            <span>MASSAGE THERAPY</span>
            <ul>
                <li className='navItem lil'>HOME</li>
                <li className='navItem'>ABOUT</li>
                <li className='navItem'>SERVICES</li>
                <li className='navItem'>FAQ</li>
                <li className='navItem'>CONTACT</li>
            </ul>


        </div>
    );
}

export default Header;