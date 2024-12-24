function printHello(){
    console.log("hello!");
};

export default function Button(){
    return(
        <button onClick={printHello}> Click Me !</button>
    );
}