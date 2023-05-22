import { useNavigate } from 'react-router-dom';
import './AdvertiseRegistory.scss';
import Header from '../header/Header';
import { useState } from 'react';
const AdvertiseRegistory = () => {
    const navigate = useNavigate();
    const [buttonId, setButtonId] = useState(1);

    const onAdvertiseClick = () => {
        alert('Submited Successfully')
        navigate('/')
    }
    return (
        <div className="advertiseRegistory">
            <Header />

            <main>
                <form >
                    <aside>
                        <button onClick={(e) => { setButtonId(1); e.preventDefault() }}>Location Information</button>
                        <button onClick={(e) => { setButtonId(2); e.preventDefault() }}>Contact Information</button>
                        <button onClick={(e) => { setButtonId(3); e.preventDefault() }}>Other Information</button>
                        {/* <button></button> */}
                    </aside>
                    <section>
                        {
                            buttonId === 1 ?
                                <table>
                                    <tr>
                                        <td>
                                            Business Name:
                                        </td>
                                        <td>
                                            <input type="text" />
                                        </td>
                                    </tr>
                                </table> : true
                        }
                        {
                            buttonId === 2 ?
                                <table>
                                    <tr>
                                        <td>
                                            Contact Person:
                                        </td>
                                        <td>
                                            <input type="text" />
                                        </td>
                                    </tr>
                                </table> : true
                        }
                        {
                            buttonId === 3 ?
                                <table>
                                    <tr>
                                        <td>
                                            Hours of operation:
                                        </td>
                                        <td>
                                            <input type="text" />
                                        </td>
                                    </tr>
                                </table> : true
                        }

                    </section>
                    <footer>
                        <button type='submit' onSubmit={onAdvertiseClick}>Submit</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}
export default AdvertiseRegistory;