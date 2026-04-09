import CheckboxTree from 'react-checkbox-tree';
import Scrollbar from "react-scrollbars-custom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {FaCheck, FaChevronDown, FaChevronRight, FaRegSquare} from "react-icons/fa";
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import {Leaf, Subgroup, TreeParent} from "../../../../../../config/interface/event/eventInterface";
import {updateCheckTargetList, updateExpandTreeList} from "../../../../../store/view/event/box/eventBoxStore";

const TargetModalTree = () => {

    const dispatch = useDispatch();

    const [checked, setChecked] = useState<Array<string>>([]);
    const [expanded, setExpanded] = useState<Array<string>>([]);
    const [targetTree, setTargetTree] = useState<Subgroup[]>([]);

    const targetList = useSelector((state:RootState)=> state.server.event.targetList);
    const checkTargetList = useSelector((state:RootState) => state.view.event.box.checkTargetList);
    const expandTreeList = useSelector((state:RootState) => state.view.event.box.expandTargetList);



    const handleCheckCctvMarker = (e:string[]) => {


        let newExpandList = [...expandTreeList];
        let newCheckList = [...e];
        let findIndex = -1;
        e.map((item)=>{

            let group = item.split(' ')[0];
            findIndex = newExpandList.indexOf(group);
            if(findIndex===-1){
                newExpandList.push(group);
                dispatch(updateExpandTreeList(newExpandList));
            };
        })

        checkTargetList.map((item)=> {
            if(item.includes('newTarget')){
                newCheckList.push(item);
            }
        })


        setChecked(newCheckList);
    }

    useEffect(()=>{
        dispatch(updateCheckTargetList(checked));

    },[checked])

    const handleExpandedMarker = (e:string[]) => {
        setExpanded(e);
    }

    useEffect(()=>{
        dispatch(updateExpandTreeList(expanded));
    },[expanded])



    return(
        <div className="tree_area">
            {/* 트리 구조 */}
            <div className="tree_in" id="evtEditSmsTree">
                <Scrollbar className={"scroll tree"}>
                    <CheckboxTree
                        nodes={targetList}
                        checked={checkTargetList}
                        expanded={expandTreeList}
                        icons={{
                            check: <FaCheck style={{"color":"white", "backgroundColor" : "#f07422",  "borderRadius" : "5px"}}  className="rct-icon rct-icon-check" />,
                            halfCheck :<FaRegSquare style={{"color" : "transparent", "backgroundColor" : "transparent", "border":"solid 2px #b2b3b8", "borderRadius" : "5px"}} className="rct-icon rct-icon-uncheck" />,
                            uncheck: <FaRegSquare style={{"color" : "transparent", "backgroundColor" : "transparent", "border":"solid 2px #b2b3b8", "borderRadius" : "5px"}} className="rct-icon rct-icon-uncheck" />,
                            expandClose: <FaChevronRight color={'#b2b3b8'}  className="rct-icon rct-icon-expand-close" />,
                            expandOpen: <FaChevronDown color={'#b2b3b8'} className="rct-icon rct-icon-expand-open" />,
                            expandAll: <span className="rct-icon rct-icon-expand-all" />,
                            collapseAll: null,
                            parentClose: null,
                            parentOpen: null,
                            leaf: null,
                        }}
                        onCheck={(checked )=>handleCheckCctvMarker(checked)}
                        onExpand={expanded => handleExpandedMarker(expanded)}
                    />
                </Scrollbar>
            </div>
        </div>
    )

}

export default TargetModalTree