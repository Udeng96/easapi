import GisSettingChkItem from "./gisSettingChkItem";

const GisSettingChk = (props:{isOpen:boolean}) => {

    return(
        <>
            <div className={`select_map_icon_area ${props.isOpen && 'active'}`}>
                <div className="check_box_area">
                    <GisSettingChkItem id={"cctv"} nm={"CCTV"}/>
                    <GisSettingChkItem id={'tidelevel'} nm={'수위계'}/>
                </div>
            </div>

        </>
    )

}

export default GisSettingChk