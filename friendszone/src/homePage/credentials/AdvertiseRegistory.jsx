import { useNavigate } from 'react-router-dom';
import './AdvertiseRegistory.scss';
import Header from '../header/Header';
import { useEffect, useState } from 'react';
const AdvertiseRegistory = () => {
    const navigate = useNavigate();
    const [buttonId, setButtonId] = useState(1);
    const [showByClick1, setShowByClick1] = useState(true);
    const [showByClick2, setShowByClick2] = useState(false);
    const [showByClick3, setShowByClick3] = useState(false);
    const [page1, setPage1] = useState({});
    const [page2, setPage2] = useState({});
    const [page3, setPage3] = useState({
        isSubmitted: false,
    });

    const onAdvertiseSubmitClick = () => {
        alert('Submited Successfully')
        navigate('/advertise')
        let getBusinessData = JSON.parse(localStorage.getItem("userAdRequest"));
        let getCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
        if(!getBusinessData){
            localStorage.setItem("userAdRequest", JSON.stringify([[page1,page2,page3,getCurrentUser]]))
        }
        else{
        let getBusinessData2 = JSON.parse(localStorage.getItem("userAdRequest"));
            getBusinessData2.push([page1,page2,page3,getCurrentUser]);
            localStorage.setItem("userAdRequest", JSON.stringify(getBusinessData2))
        }
    }

    useEffect(() => {
        console.log(page1);
        console.log(page2);
        console.log(page3);
    }, [page1, page2, page3])

    const onButtonClick = (e, id) => {
        e.preventDefault();
        if (id == 1) {
            setButtonId(1)
            setShowByClick1(true)
            setShowByClick2(false)
            setShowByClick3(false)
        } else if (id == 2) {
            setButtonId(2)
            setShowByClick2(true)
            setShowByClick1(false)
            setShowByClick3(false)
        }
        else {
            setButtonId(3)
            setShowByClick3(true)
            setShowByClick2(false)
            setShowByClick1(false)
        }
    }

    return (
        <div className="advertiseRegistory">
            <Header />

            <main>
                <form onSubmit={() => onAdvertiseSubmitClick()}>
                    <aside>
                        <button
                            className={`btn1 ${showByClick1 && "button1"}`}
                            onClick={(e) => { onButtonClick(e, 1) }}>Location Information</button>

                        <button
                            className={`btn1 ${showByClick2 && "button2"}`}
                            onClick={(e) => { onButtonClick(e, 2) }}>Contact Information</button>

                        <button
                            className={`btn1 ${showByClick3 && "button3"}`}
                            onClick={(e) => { onButtonClick(e, 3) }}>Other Information</button>
                    </aside>
                    <section>
                        {
                            buttonId === 1 ?
                                <table>
                                    <tr>
                                        <td>Business Type<sup>*</sup>:</td>
                                        <td><input type="text" required name='BusinessType' value={page1.BusinessType} onChange={(e) => setPage1({ ...page1, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Legal Business Name<sup>*</sup>:</td>
                                        <td><input type="text" required name='L_B_N' value={page1.L_B_N} onChange={(e) => setPage1({ ...page1, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Building:</td>
                                        <td><input type="text" name='Building' value={page1.Building} onChange={(e) => setPage1({ ...page1, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Street:</td>
                                        <td><input type="text" name='Street' value={page1.Street} onChange={(e) => setPage1({ ...page1, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Landmark:</td>
                                        <td><input type="text" name='Landmark' value={page1.Landmark} onChange={(e) => setPage1({ ...page1, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Area<sup>*</sup>:</td>
                                        <td><input type="text" required name='Area' value={page1.Area} onChange={(e) => setPage1({ ...page1, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>City<sup>*</sup>:</td>
                                        <td><input type="text" required name='City' value={page1.City} onChange={(e) => setPage1({ ...page1, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Pin Code<sup>*</sup>:</td>
                                        <td><input type="text" required name='Pin' value={page1.Pin} onChange={(e) => setPage1({ ...page1, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>State<sup>*</sup>:</td>
                                        <td><input type="text" required name='State' value={page1.State} onChange={(e) => setPage1({ ...page1, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Country<sup>*</sup>:</td>
                                        <td><input type="text" required name='Country' value={page1.Country} onChange={(e) => setPage1({ ...page1, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                </table> : true
                        }
                        {
                            buttonId === 2 ?
                                <table>
                                    <tr>
                                        <td>Contact Person<sup>*</sup>:</td>
                                        <td>
                                            <select name="Title" id="" onChange={(e) => setPage2({ ...page2, [e.target.name]: e.target.value })}>
                                                <option value="">select</option>
                                                <option value={page2.Mr}>Mr</option>
                                                <option value={page2.Mrs}>Mrs</option>
                                                <option value={page2.Miss}>Miss</option>
                                            </select>
                                            <input type="text" required name='ContactPerson' value={page2.ContactPerson} onChange={(e) => setPage2({ ...page2, [e.target.name]: e.target.value })} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mobile number<sup>*</sup>:</td>
                                        <td><input type="number" required name='Mobile' value={page2.Mobile} onChange={(e) => setPage2({ ...page2, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Toll free no:</td>
                                        <td><input type="number" name='T_f_n' value={page2.T_f_n} onChange={(e) => setPage2({ ...page2, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Email ID<sup>*</sup>:</td>
                                        <td><input type="email" required name='EmailID' value={page2.EmailID} onChange={(e) => setPage2({ ...page2, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Website:</td>
                                        <td><input type="text" name='Website' value={page2.Website} onChange={(e) => setPage2({ ...page2, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Facebook:</td>
                                        <td><input type="text" name='Facebook' value={page2.Facebook} onChange={(e) => setPage2({ ...page2, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Twitter:</td>
                                        <td><input type="text" name='Twitter' value={page2.Twitter} onChange={(e) => setPage2({ ...page2, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Instagram:</td>
                                        <td><input type="text" name='Instagram' value={page2.Instagram} onChange={(e) => setPage2({ ...page2, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                </table> : true
                        }
                        {
                            buttonId === 3 ?
                                <table>
                                    <tr>
                                        <td>Company Information</td>
                                    </tr>
                                    <tr>
                                        <td>Year of Establishment<sup>*</sup>:</td>
                                        <td><input type="number" required name='Y_O_E' value={page3.Y_O_E} onChange={(e) => setPage3({ ...page3, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Annual Turnover:</td>
                                        <td><input type="number" name='A_T' value={page3.A_T} onChange={(e) => setPage3({ ...page3, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>No of Employees<sup>*</sup>:</td>
                                        <td><input type="number" required name='N_O_E' value={page3.N_O_E} onChange={(e) => setPage3({ ...page3, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                    <tr>
                                        <td>Certifications:</td>
                                        <td><input type="text" name='Certifications' value={page3.Certifications} onChange={(e) => setPage3({ ...page3, [e.target.name]: e.target.value })} /></td>
                                    </tr>
                                </table> : true
                        }

                    </section>
                    <footer>
                        {
                            buttonId == 3 ?
                                <div className='prevNextBtns'>
                                    <button onClick={(e) => { onButtonClick(e, 2) }}>Previous</button>
                                    <button type='submit' >Submit</button>
                                </div>
                                : <div>
                                    {
                                        buttonId == 1 ?
                                            <button onClick={(e) => { onButtonClick(e, 2) }}>Save & next</button>
                                            : <div className='prevNextBtns'>
                                                <button onClick={(e) => { onButtonClick(e, 1) }}>Previous</button>
                                                <button onClick={(e) => { onButtonClick(e, 3) }}>Save & next</button>
                                            </div>
                                    }
                                </div>
                        }
                    </footer>
                </form>
            </main>
        </div>
    )
}
export default AdvertiseRegistory;