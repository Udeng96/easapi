import BoxArea from "./box/boxArea";
import DetailGisArea from "./gis/detailGisArea";
import "../../../../public/static/dashboard/css/gisArea.css";




const MainDetailArea = () => {

    return(
        <>
            <DetailGisArea/>
            <BoxArea/>
        </>
    )

}

export default MainDetailArea