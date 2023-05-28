import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import './UserDashboard.scss';
import { usersStore } from '../../App';
const UserDashboard = () => {
    const navigate = useNavigate();
    let rejectedStorage = JSON.parse(localStorage.getItem('rejectedAd'));
    let confirmedStorage = JSON.parse(localStorage.getItem('confirmedAd'));
    let checkLoginStatus = JSON.parse(localStorage.getItem("currentUser"));
    console.log(checkLoginStatus.username);
    const { setEditRequest, editRequest}=usersStore()
    console.log(editRequest);

    const onDeleteClicked = (ar) => {
        console.log(ar);
        console.log(ar[4].registerAdId);
        let getconfirmedStorage = JSON.parse(localStorage.getItem('confirmedAd'));
        console.log(getconfirmedStorage);
        let leftOver = getconfirmedStorage.filter((f) => {
            if (f[4].registerAdId != ar[4].registerAdId) {
                return f;
            }
        })
        console.log(leftOver);
        let neededArr = getconfirmedStorage.filter((f) => {
            if (f[4].registerAdId == ar[4].registerAdId) {
                return f;
            }
        })
        console.log(neededArr);
        let flagChange = neededArr.filter((f) => {
            if (f[2].isDeleted == false) {
                f[2].isDeleted = true
                return f;
            }
            else {
                alert('you have already raised Delete request')
                return f;
            }
        })
        console.log(flagChange);
        localStorage.removeItem('confirmedAd');
        localStorage.setItem('confirmedAd', JSON.stringify([flagChange[0]]))
        leftOver.map((i) => {
            let getconfirmeddata1 = JSON.parse(localStorage.getItem('confirmedAd'));
            getconfirmeddata1.push(i)
            localStorage.setItem('confirmedAd', JSON.stringify(getconfirmeddata1));
            console.log(getconfirmeddata1);
        })
        alert('Delete request raised')
        navigate('/userdashboard')
    }
    const onEditClicked = (editArr) => {
        console.log(editArr)
        console.log(editArr[2].isDeleted)
        if(editArr[2].isDeleted == true){
        alert('Delete request raised cannot be edited')
        }else{
            console.log("false")
            setEditRequest(editArr);
        }
    }
    return (
        <div className='userDashboard' >
            <Header />
            <main>
                <section>
                    {confirmedStorage ?
                        confirmedStorage.map((arr) => {
                            console.log(arr)
                            if (arr[3].username == checkLoginStatus.username) {
                                // console.log("approved")
                                return (<div>
                                    <div>
                                        <article>Advertisement request has been approved for BusinessType: {arr[0].BusinessType}</article>
                                        <article>
                                            <button onClick={() => onDeleteClicked(arr)}>Delete details</button>
                                            <button onClick={() => onEditClicked(arr)}>Edit details</button>
                                        </article>
                                        <article></article>
                                    </div>
                                </div>)
                            }
                        }) : true
                    }
                </section>
                <section>
                    {rejectedStorage ?
                        rejectedStorage.map((arr) => {
                            // console.log(arr[3].username)
                            if (arr[3].username == checkLoginStatus.username) {
                                // console.log("approved")
                                return (<div>Advertisement request has been rejected</div>)
                            }
                        }) : true
                    }
                </section>
            </main>
        </div>
    )
}
export default UserDashboard;