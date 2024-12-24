import "./product.css";
import Price from "./Price";
function Product({title , idx}) {
    let oldPrice = ["12,899 ","2,500", "6,400", "899"];
    let newPrice = ["4,300","1,400","4,300" ,"200"];
    let description =["wireless earbuds", "mouse" , "use for ipad" , "gaand me le le"]
    return(
        <div className="Product">
            
            <h4> {title}</h4>
            <p> {description[idx]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
            
        </div>
    );
}
export default Product;