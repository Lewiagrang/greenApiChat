import "./Nav.css"
import getData from "../../actions/getData"

const Nav = () => {
    const logOut = () => {
        localStorage.clear();
        location.reload()
    }

    return(
    <nav className='nav'>
        <div onClick={getData} className='nav-message nav-button'></div>
        <div className='nav-status nav-button'></div>
        <div className='nav-community nav-button'></div>
        <div onClick={logOut} className='nav-exit nav-button'></div>
        <div className='nav-profile nav-button'></div>
    </nav>
    )
}

export default Nav