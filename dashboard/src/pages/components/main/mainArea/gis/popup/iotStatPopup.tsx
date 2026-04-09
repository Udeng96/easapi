import {Popup} from "react-leaflet";
import {RootState} from "../../../../../store/rootStore";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateActiveMainMarker} from "../../../../../store/view/main/mainStore";

const IotStatPopup = () => {

    const dispatch = useDispatch();
    const activeMainMarker = useSelector((state:RootState) => state.view.main.activeMainMarker);
    const [chartOpen, setChartOpen] = useState<boolean>(false);

    const onClickCloseBtn = () => {
        dispatch(updateActiveMainMarker(null));
    }

    const setDtmForm = (dtm:string) => {
        let month = dtm.substring(4,6);
        let date = dtm.substring(6,8);
        let hour = dtm.substring(8,10);
        let min = dtm.substring(10,12);

        return `${month}/${date} ${hour}:${min}`
    }

    return(
        <>
            {
                activeMainMarker &&
                <Popup
                    position = {[Number(activeMainMarker.coordy), Number(activeMainMarker.coordx)]}
                    interactive = {false}
                >
                        {/*gisSensorPopup*/}
                        <div className={`gis_sensor_popup ${chartOpen? 'active' : ''}`}>
                            <button type="button" className="btn_popup_close" onClick={onClickCloseBtn}></button>
                            <div className="gis_popup_title"><span
                                className={`state_type_${activeMainMarker.state}`}>{`[${activeMainMarker.stateNm}]`}</span> {activeMainMarker.dvcNm}
                            </div>
                            <div className="popup_row">
                                <div className="info_name loc_icon">위치</div>
                                <div className="info_txt loc_txt">{activeMainMarker.locate}</div>
                            </div>
                            <div className="popup_row latitude_row">
                                <div className="info_txt">{`위도: ${activeMainMarker.coordy}`}</div>
                                <div className="info_txt">{`경도: ${activeMainMarker.coordx}`}</div>
                            </div>
                            <div className="popup_row">
                                <div className="info_name measure_icon">최근 측정 수치</div>
                                <div className="info_txt">{activeMainMarker.latest}<span>m</span><span className="standard_value">{"( "+setDtmForm(activeMainMarker.updDtm)+" 측정기준 )"}</span>
                                </div>
                            </div>
                        </div>
                </Popup>
            }


        </>
    )


}

export default IotStatPopup