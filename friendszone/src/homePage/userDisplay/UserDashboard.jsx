import Header from '../header/Header';
import './UserDashboard.scss';
const UserDashboard = ()=>{
    let rejectedStorage = JSON.parse(localStorage.getItem('rejectedAd'));
    let confirmedStorage = JSON.parse(localStorage.getItem('confirmedAd'));
    let checkLoginStatus = JSON.parse(localStorage.getItem("currentUser"));
    console.log(checkLoginStatus.username)
    // console.log(confirmedStorage[3].username)

    // let adConfirmed = confirmedStorage.filter((c)=>{
    //     if(c[3].username == checkLoginStatus.username)
    //         return c;
    // })
    // console.log(adConfirmed)
    return(
        <div className='userDashboard' >
            <Header/>
            <main>
                <section>
                    {/* {
                        confirmedStorage[3].username == checkLoginStatus.username ? <div>Advertisement has been approved</div> : "false"
                    } */}
                </section>

                hi user
            </main>
        </div>
    )
}
export default UserDashboard;