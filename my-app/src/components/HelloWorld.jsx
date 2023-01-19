/*
export  function HelloWorld(){
    return(
        <h3>Hello World</h3>
    )

}
*/

/*
export  function HelloWorld(props){
    return(
        <h3>{props.text}</h3>
    )

}
*/

export  function HelloWorld({text}){
    return(
        <h3>{text}</h3>
    )

}

// export default HelloWorld

export function ByeWorld(){
    return(
        <h3>Bye World</h3>
    )
}

