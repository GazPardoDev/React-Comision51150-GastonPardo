import CartWidget from "../CartWidget/CartWidget"
import LogoRopa from "../LogoRopa/LogoRopa"

function NavBar() {
    return (
        <nav style={{ backgroundColor: '#b0d4e4', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <LogoRopa />
            <section>
                <button style="color: red">REMERAS</button>
                <button>PANTALONES</button>
                <button>CAMPERAS</button>
            </section>
            <CartWidget />
        </nav>
    )
}

export default NavBar