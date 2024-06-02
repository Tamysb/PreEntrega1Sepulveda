import CartWidget from "../CartWidget/CartWidget"

function Navbar(){
    return(<nav>
        <h1>Ecomerce</h1>
        <nav>
            <button>Home</button>
            <button>Productos</button>
            <button>Sale</button>
        </nav>
        <CartWidget/>
    </nav>
    
        
    )

}
export default Navbar