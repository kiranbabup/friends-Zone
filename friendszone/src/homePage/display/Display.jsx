import './Display.scss';
import { assets } from "../../assets/assets";
import { useNavigate } from 'react-router-dom';
const Display = () => {
    const navigate = useNavigate();

    const onCategoryClicked =(e)=>{
        console.log(e)
        if(e == "Popular Categories"){
            console.log("correct")
            navigate('/display')
        }
        else{
            console.log("no")
        }
    }
    return (
        <div className="display">
            <div className='blankheader'></div>
            <main>Home
                <aside>
                    { assets.map((a) => {
                        return (
                            <section onClick={()=>onCategoryClicked(a.category)}>
                                <div className='imageCat'><div className='catImg'><img src={a.url} alt='image' /></div></div>
                                <article>{a.category}</article>
                            </section>
                        )
                    })
                    }
                </aside>

            </main>
        </div>
    )
}
export default Display;