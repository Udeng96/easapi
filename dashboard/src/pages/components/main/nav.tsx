import {useDispatch, useSelector} from "react-redux";
import {updateNav} from "../../store/view/main/mainStore";
import {RootState} from "../../store/rootStore";
import {useEffect, useState} from "react";
import {NAV} from "../../../config/const/commonConst";
const Nav = () => {

    const dispatch = useDispatch();
    const mainStore = useSelector((state:RootState)=> state.view.main);
    const [activeNav, setActiveNav] = useState<string>(mainStore.activeNav);


    useEffect(()=>{

        setActiveNav(mainStore.activeNav);

    },[mainStore.activeNav])


    const onClickNav = (menu:string)=> {
        dispatch(updateNav(menu));
    }

    return(
        <nav className="nav_area">
            <ul className="menu_list">
                <li className={`btn_home ${activeNav === NAV.main && 'active'}`} onClick={(e)=> onClickNav(NAV.main)}><a href=""></a>
                    <p className="tooltip_text">홈</p>
                </li>
                <li className={`btn_event ${activeNav === NAV.event && 'active'}`} onClick={(e)=> onClickNav(NAV.event)}><a href=""></a>
                    <p className="tooltip_text">이벤트</p>
                </li>
                <li className={`btn_statis ${activeNav === NAV.stat && 'active'}`} onClick={(e)=> onClickNav(NAV.stat)}><a href=""></a>
                    <p className="tooltip_text">통계</p>
                </li>
            </ul>
        </nav>
    )

}

export default Nav;