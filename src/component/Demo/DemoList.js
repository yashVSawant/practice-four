import React,{useMemo} from "react";

const DemoList = (props)=>{
    const {items ,order} = props;
    let sortedArray = useMemo(()=>{
        if(order === true) return items.sort((a,b)=>a-b);
        return items.sort((a,b)=>b-a);
    },[items , order]);
    
    return(
        <div>
            <h1>title</h1>
            <ul>
                {sortedArray.map((item ,i)=>{
                    return <li key={i}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default DemoList