import './Display.scss';
import { assets } from "../../assets/assets";
import { useNavigate } from 'react-router-dom';
import { usersStore } from '../../App';
import { asset } from '../../assets/assets';

const Display = () => {
    const navigate = useNavigate();
    const setSelectedCat = usersStore(state => state.updateSelectedCategory);
    const selectedCat = usersStore(state => state.selectedCategory);

    const onCategoryClicked = (e) => {
        setSelectedCat(e);
        if (e === "Popular Categories") {
            return selectedCat;
        }
        else {
            navigate('/categorypage')
        }
    }
    return (
        <div className="display">
            <main>
                <aside>
                    {assets.map((a) => {
                        return (
                            <section onClick={() => onCategoryClicked(a.category)}>
                                <div className='imageCat'><div className='catImg'><img src={a.url} alt='image' /></div></div>
                                <article>{a.category}</article>
                            </section>
                        )
                    })
                    }
                </aside>
                {
                    (selectedCat === "Popular Categories") ?
                        <div className='home_aside2'>
                            <article>
                                <button onClick={() => setSelectedCat("")} >X</button>
                            </article>
                            <section>
                                {asset.map((a) => {
                                    return (
                                        <button onClick={() => onCategoryClicked(a)}>{a}</button>
                                    )
                                })}
                            </section>
                        </div> : false
                }
            </main>
        </div>
    )
}
export default Display;