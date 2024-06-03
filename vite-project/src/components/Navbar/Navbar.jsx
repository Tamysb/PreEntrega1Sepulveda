import CartWidget from "../CartWidget/CartWidget"

function Navbar(){
    return(<nav>
        <h1 className="text-3xl font-blod">Ecomerce</h1>
        <nav className="text-xl flex item-center gap-2">
            <a href="">Home</a>
            <a href="">Productos</a>
            <a href="">Sale</a>
        </nav>
        <CartWidget/>
    </nav>
    
        
    )

}
export default Navbar