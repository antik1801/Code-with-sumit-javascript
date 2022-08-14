
const domContainer = document.querySelector("#root");

// const myElement =(
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button">Increment ++</button>
//         </div>
//     </div>
// );

// ReactDOM.render(myElement,domContainer);  // render function consist off two parametrs 

const Increment = ()=>{
    const [counter, setCounter] = React.useState(0);
    return(
        <div>
            <h1 id="display">{ counter }</h1>
            <div>
                <button id="button" onClick={ () => setCounter(counter + 1)}>Increment+</button>
            </div>
        </div>
    );
}
React.render(
    <div className="container">
        <Increment />
    </div>
    
);