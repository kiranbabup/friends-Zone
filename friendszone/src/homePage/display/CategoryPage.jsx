import './CategoryPage.scss';
import Header from "../header/Header";
import { usersStore } from "../../App";

const CategoryPage = () => {
    const selectedCat = usersStore(state => state.selectedCategory);

    const onAdvertiseClicked = ()=>{
        
    }
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
                    hi
                </aside>
            </main>
        </div>
    )
}
export default CategoryPage;