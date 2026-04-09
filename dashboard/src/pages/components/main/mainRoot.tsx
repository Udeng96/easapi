import ListArea from "./list/listArea";
import MainArea from "./mainArea/mainArea";
import MainDetailArea from "./detailArea/mainDetailArea";



const MainRoot = (props:{isDetail:boolean}) => {

    return (

        <>
            <ListArea/>
            {
                props.isDetail? <MainDetailArea/> : <MainArea/>
            }
        </>
    )

}

export default MainRoot;