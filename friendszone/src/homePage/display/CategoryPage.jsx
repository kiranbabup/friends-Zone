import './CategoryPage.scss';
import Header from "../header/Header";
import { usersStore } from "../../App";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CategoryPage = () => {
    const selectedCat = usersStore(state => state.selectedCategory);
    const navigate = useNavigate();
    useEffect(()=>{
        if(selectedCat == ""){
            navigate('/');
        }
    },[])
    const onAdvertiseClicked = ()=>{
        let knowUserdata =(localStorage.getItem("currentUser"));
        if(!knowUserdata){
            navigate('/login')
        }
        else{
            navigate('/advertise')
        }
    }
    let getConfirmedArray = JSON.parse(localStorage.getItem("confirmedAd"));
    let checkLoginStatus = JSON.parse(localStorage.getItem("currentUser"));
    
    return (
        <div className="categorypage">
            <Header />

            <div className='blankheader'>
                <nav>
                    <p>Hi friend! Do you wanna Advertise your business <button onClick={()=>onAdvertiseClicked()}>click here!</button></p>
                </nav>
            </div>

            <main>
                <section><p>{selectedCat}</p></section>
                <aside>
                    {
                       getConfirmedArray ? 
                         <div>
                            { getConfirmedArray.map((g)=>{return(
                                <div>
                                    <article>{g[0].BusinessType}</article>
                                    <article>{g[0].L_B_N}</article>
                                    <article>{g[1].Website}</article>
                                    { checkLoginStatus ? <div>
                                        <article>{g[1].ContactPerson}</article>
                                    <article>{g[1].EmailID}</article>
                                    <article>{g[1].Mobile}</article>
                                    </div> : <p>login for more details <button onClick={() => navigate('/login')} >Login</button></p>

                                    }
                                </div>
                            )})
                            }
                        </div> : "Data under maintenance"
                    }
                </aside>
            </main>
        </div>
    )
}
export default CategoryPage;