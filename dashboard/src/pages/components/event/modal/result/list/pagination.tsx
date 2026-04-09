import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store/rootStore";
import {updateActiveEvent, updateActivePage} from "../../../../../store/view/event/list/eventListStore";
import {ModalParam} from "../../../../../../config/interface/event/eventInterface";
import * as EventActions from "../../../../../saga/actions/event/eventActions";
import {useState} from "react";

const Pagination = (props: { pageCnt: number, totalPage: number }) => {

    const dispatch = useDispatch();

    const activePage = useSelector((state: RootState) => state.view.event.list.activePage);
    const paramStore = useSelector((state:RootState) => state.view.event.list.modalOption);

    const setGrade = ()=>{
        let result = "";
        paramStore.eventGrade.map((option,index)=>{
            if (index<paramStore.eventGrade.length-1){
                result += ` ${option},`;
            }else{
                result += option;
            }
        })

        return result;
    }



    const setParam = (page : number) => {

        let startParam : string = paramStore.startDtm.replaceAll("-","");
        let endParam : string =  paramStore.endDtm.replaceAll("-","");

        const param : ModalParam = {
            startDtm : startParam,
            endDtm : endParam,
            eventGrade : setGrade(),
            rows : 10,
            pageNumber : page
        };


        return param

    }

    const onclickPage = (page: number) => {
        dispatch(updateActivePage(page));
        dispatch(EventActions.actions.requestGetModalEventList(setParam(page)))
    }

    const onClickPrev = () => {

        if(activePage !== 1){

            dispatch(updateActivePage(activePage - 1));
            dispatch(EventActions.actions.requestGetModalEventList(setParam(activePage - 1)))
        }

    }

    const onClickNext = () => {

        if(props.totalPage !== activePage){
            dispatch(updateActivePage(activePage + 1));
            dispatch(EventActions.actions.requestGetModalEventList(setParam(activePage +1)))

        }

    }

    const onClickForemost = () => {

        dispatch(updateActivePage(1));
        dispatch(EventActions.actions.requestGetModalEventList(setParam(1)))

    }

    const onClickLast = () => {
        dispatch(updateActivePage(props.totalPage));
        dispatch(EventActions.actions.requestGetModalEventList(setParam(props.totalPage)))

    }

    const setPages  = ()  => {

        let pageGroup: number = Math.ceil(activePage / props.pageCnt);
        let lastPage: number = pageGroup * props.pageCnt;
        if (lastPage > props.totalPage) {
            lastPage = props.totalPage;
        }
        let firstPage: number = 1 + ((pageGroup - 1) * props.pageCnt);

        const rendering = [];
        for (let i = firstPage; i < lastPage + 1; i++) {
            rendering.push(
                <li><a className={`${activePage === i ? 'active' : ''}`} onClick={(e) => onclickPage(i)}>{i}</a></li>
            )
        }

        return <>{rendering}</>;
    }

    return (
        <div className="paging_wrap">
            <ul>
                    <li><a className="btn_foremost" onClick={onClickForemost}></a></li>
                    <li><a className="btn_prev" onClick={onClickPrev}></a></li>
                    {
                        setPages()
                    }
                    <li><a className="btn_next" onClick={onClickNext}></a></li>
                    <li><a className="btn_last" onClick={onClickLast}></a></li>
            </ul>
        </div>
    )

}

export default Pagination