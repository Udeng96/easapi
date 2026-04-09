import TargetItem from "./targetItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/rootStore";

const TargetArea = () => {

    const selectTargetList = useSelector((state:RootState) => state.view.event.box.selectTargetList);


    return(
        <div className="spread_target_area">
            {
                selectTargetList.map((target)=> (
                    <TargetItem name={target} isModal={false}/>
                ))
            }
        </div>
    )


}
export default TargetArea;