export default function Price({oldPrice,newPrice}){
    let oldstyle = {
        textDecorationLine: "line-through",
    };
    let newstyles ={
        fontWeight: "bold",
    };
    return(
        <div>
            <span style={oldstyle}> {oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newstyles}> {newPrice} </span>
        </div>
    );
}