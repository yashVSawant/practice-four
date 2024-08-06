import React,{useState} from "react";

const Button = (props)=>{
    const [sortIsAscending , setSortIsAscending] = useState(false)
    const buttonClickHandler = ()=>{
        setSortIsAscending(!sortIsAscending);
        props.onClick(sortIsAscending)
    }
    return(
        <button type="button" onClick={buttonClickHandler}>{sortIsAscending ? 'Ascending':'Descending'}</button>
    )
}

export default Button