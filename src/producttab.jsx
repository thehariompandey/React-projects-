import Product from "./product.jsx";
import Button from "./button.jsx";

function Producttab( props) {
    let style ={
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignitems: "center",
    };
    return(
        <div style={style}>
        <Button/>
        <Product title="Ptron" idx={0}/>
        <Product title="Zebronics" idx={1}/>
        <Product title="Apple pencil gen 2" idx={2}/>
        <Product title="MKC" idx={3}/>
        {/* <Product title="phone" price={15000} features={options}/> */}
        {/* <Product title="laptop" price={40000}/> */}
        {/* <Product title="tv" price={25000}/> */}
        </div>
    );
}
export default Producttab;