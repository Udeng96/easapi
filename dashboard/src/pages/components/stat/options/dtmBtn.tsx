import {useEffect, useState} from "react";

const DtmBtn = (props:{id:string, nm:string}) =>{

    const [activeButton, setActiveButton] = useState('')

    const handleClick = (active: string) =>{
        if(active === activeButton){
            setActiveButton('')
        } else {
            setActiveButton(active)
        }
    }

    return(
        <button type="button" className={`btn_period ${props.id === activeButton ? 'active' : ''}`} id={props.id} onClick={()=>handleClick(props.id)}>{props.nm}</button>
    )
}

export default DtmBtn