import Header from "../header/Header";
import './AdminDashBoard.scss';

export const AdminDashBoard = () => {
    const onConfirmClicked= () => {}
    const onRejectClicked= () => {}

    let getBusinessData = JSON.parse(localStorage.getItem("userAdRequest"));

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
                                            <article>username: {b[3].username}</article>
                                            <article>ContactPerson: {b[1].ContactPerson}</article>
                                            <article>Mobile: {b[1].Mobile}</article>
                                            <article>EmailID: {b[1].EmailID}</article>
                                            <article>Y_O_E: {b[2].Y_O_E}</article>
                                            <article>N_O_E: {b[2].N_O_E}</article>
                                        </div>
                                        <div className="RdownSide">
                                                <button onClick={()=>onConfirmClicked(b)}>Confirm</button>
                                                <button onClick={()=>onRejectClicked(b)}>Reject</button>
                                        </div>
                                    </div>
                                </section>
                            )
                        }) : "Non of the User's requested for advertising"
                }

            </main>
        </div>
    )
}
export default AdminDashBoard;