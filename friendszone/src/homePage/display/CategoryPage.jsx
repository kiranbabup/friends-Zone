import './CategoryPage.scss';
import Header from "../header/Header";
import { usersStore } from "../../App";
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
    const selectedCat = usersStore(state => state.selectedCategory);
    const navigate = useNavigate();
    
    const onAdvertiseClicked = ()=>{
        let knowUserdata =(localStorage.getItem("currentUser"));
        if(!knowUserdata){
            navigate('/login')
        }
        else{
            navigate('/advertise')
        }
    }
    let getConfirmedArray = JSON.parse(localStorage.getItem("userAdRequest"));
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
                        getConfirmedArray[0].isSubmitted == true ? <div>
                            {
                                getConfirmedArray.map((c)=>{return(
                                    <div>
                                        <article>{c[0].BusinessType}</article>
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