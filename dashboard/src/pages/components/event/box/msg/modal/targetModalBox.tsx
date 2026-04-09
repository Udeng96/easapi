import TargetItem from "../targetItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";

const TargetModalBox = () => {

            const checkTargetList = useSelector((state:RootState) => state.view.event.box.checkTargetList);

    return(
        <div className="target_area">
            <div className="target_area_in">
                {
                    checkTargetList.map((target)=> (
                        <TargetItem name={target} isModal={true}/>
                    ))
                }
            </div>
        </div>
    )

}

export default TargetModalBox