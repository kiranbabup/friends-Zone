import './Display.scss';
import { assets } from "../../assets/assets";
const Display = () => {
    return (
        <div className="display">
            <div className='blankheader'></div>
            <main>Home
                <aside>
                    { assets.map((a) => {
                        return (
                            <section>
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