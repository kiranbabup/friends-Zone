import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import './AdminDashBoard.scss';
import { useEffect } from "react";

export const AdminDashBoard = () => {
    const getBusinessData = JSON.parse(localStorage.getItem("userAdRequest"));
    const navigate = useNavigate();
    let getDeleteRequest = JSON.parse(localStorage.getItem('confirmedAd'));

    // useEffect(()=>{
    // localStorage.removeItem('confirmedAd')
    // },[])

    const onConfirmClicked = (adId) => {
        let confirmedData = getBusinessData.filter((c) => {
            if (c[4].registerAdId == adId) { return c; }
        })
        console.log(confirmedData)
        let LeftUnconfirmedData = getBusinessData.filter((u) => {
            if (u[4].registerAdId != adId) { return u; }
        })
        console.log(LeftUnconfirmedData)
        localStorage.removeItem("userAdRequest");
        let confirmedStorage = JSON.parse(localStorage.getItem('confirmedAd'));
        if (!confirmedStorage) {
            localStorage.setItem("confirmedAd", JSON.stringify(confirmedData));
            if (LeftUnconfirmedData.length != 0) {
                localStorage.setItem("userAdRequest", JSON.stringify(LeftUnconfirmedData));
            }
            navigate('/admindashboard')
        }
        else {
            let CDS = JSON.parse(localStorage.getItem('confirmedAd'));
            // console.log(CDS)
            // let pushArray = [...CDS,confirmedData]
            CDS.push(confirmedData[0]);
            // console.log(CDS)
            localStorage.setItem("confirmedAd", JSON.stringify(CDS));
            // console.log(CDS)
            if (LeftUnconfirmedData.length != 0) {
                localStorage.setItem("userAdRequest", JSON.stringify(LeftUnconfirmedData));
            }
            navigate('/admindashboard')
        }
    }

    const onRejectClicked = (adId) => {
        let rejectedData = getBusinessData.filter((c) => {
            if (c[4].registerAdId == adId) { return c; }
        })
        let LeftUnrejectedData = getBusinessData.filter((u) => {
            if (u[4].registerAdId != adId) { return u; }
        })
        localStorage.removeItem("userAdRequest");
        let rejectedStorage = JSON.parse(localStorage.getItem('rejectedAd'));
        if (!rejectedStorage) {
            localStorage.setItem("rejectedAd", JSON.stringify(rejectedData));
            if (LeftUnrejectedData.length != 0) {
                localStorage.setItem("userAdRequest", JSON.stringify(LeftUnrejectedData));
            }
            navigate('/admindashboard')
        }
        else {
            let RDS = JSON.parse(localStorage.getItem('rejectedAd'));
            RDS.push(rejectedData[0]);
            localStorage.setItem("rejectedAd", JSON.stringify(RDS));
            if (LeftUnrejectedData.length != 0) {
                localStorage.setItem("userAdRequest", JSON.stringify(LeftUnrejectedData));
            }
            navigate('/admindashboard')
        }
    }
    const onDeleteAdClick = (id) => {
        console.log(id)
        let getConfirmData = JSON.parse(localStorage.getItem('confirmedAd'));
        let leftData = getConfirmData.filter((f) => {
            console.log(f[4].registerAdId)
            if (f[4].registerAdId != id) {
                return f;
            }
        })
        console.log(leftData);
        localStorage.removeItem('confirmedAd');
        localStorage.setItem('confirmedAd', JSON.stringify(leftData));
        navigate('/admindashboard')
    }

    return (
        <div className="adminDashBoard">
            <Header />
            <main>
                {
                    getBusinessData ?
                        getBusinessData.map((b) => {
                            return (
                                <section>
                                    <div className="leftSide">
                                        <article>BusinessType: {b[0].BusinessType}</article>
                                        <article>L_B_N: {b[0].L_B_N}</article>
                                        <article>Area: {b[0].Area}</article>
                                        <article>City: {b[0].City}</article>
                                        <article>Pin: {b[0].Pin}</article>
                                        <article>State: {b[0].State}</article>
                                        <article>Country: {b[0].Country}</article>
                                    </div>
                                    <div className="rightSide">
                                        <div className="RtopSide">
                                            <article>registerAdId: {b[4].registerAdId}</article>
                                            <article>username: {b[3].username}</article>
                                            <article>ContactPerson: {b[1].ContactPerson}</article>
                                            <article>Mobile: {b[1].Mobile}</article>
                                            <article>EmailID: {b[1].EmailID}</article>
                                            <article>Y_O_E: {b[2].Y_O_E}</article>
                                            <article>N_O_E: {b[2].N_O_E}</article>
                                        </div>
                                        <div className="RdownSide">
                                            <button onClick={() => onConfirmClicked(b[4].registerAdId)}>Confirm</button>
                                            <button onClick={() => onRejectClicked(b[4].registerAdId)}>Reject</button>
                                        </div>
                                    </div>
                                </section>
                            )
                        }) : "None of the User's requested for advertising"
                }
                {getDeleteRequest ? getDeleteRequest.map((d) => {
                    return ((d[2].isDeleted == true) ?
                        <div>
                            <section>
                                <article>{d[0].BusinessType}</article>
                                <article>{d[3].username}</article>
                            </section>
                            <aside>
                                <button onClick={() => onDeleteAdClick(d[4].registerAdId)}>delete</button>
                            </aside>
                        </div>
                        :
                        <div>username: {d[3].username} BusinessType: {d[0].BusinessType} Id: {d[4].registerAdId} has not requested for Deleting advertisement</div>
                    )
                })
                    : <div>None of the advertisement is confirmed</div>
                }
            </main>
        </div>
    )
}
export default AdminDashBoard;