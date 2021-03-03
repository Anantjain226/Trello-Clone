import React, {useState, useEffect} from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import { getPersonalBoards } from '../../Redux/Boards/actions'
import styles from './style.module.css'
import {useDispatch, useSelector} from 'react-redux'

export const Boards = () => {
    const [arrow, setArrow] = useState(true)
    const dispatch = useDispatch()

    // const boards = useSelector(state => state.boards)

    useEffect(() => {
        dispatch(getPersonalBoards())
    },[])

    // console.log(boards)

    return (
        <div className = {styles.main} >
            <Navbar />
            {/* Left Section */}
            <section className = {styles.left} >
                <section className = {styles.leftTop} >
                    <div>
                        <img src= "https://www.flaticon.com/svg/vstatic/svg/2111/2111815.svg?token=exp=1614588783~hmac=d29af99a98ec2685ce60aa5e014dc93e" />
                        <p>Boards</p>
                    </div>
                    <div>
                        <img src = "https://www.flaticon.com/svg/vstatic/svg/2111/2111815.svg?token=exp=1614588783~hmac=d29af99a98ec2685ce60aa5e014dc93e" />
                        <p>Templates</p>
                    </div>
                    <div>
                        <img src = "https://www.flaticon.com/svg/vstatic/svg/819/819767.svg?token=exp=1614599447~hmac=a13311f808dad3914f7c7ab852cb0b40" />
                        <p>Home</p>
                    </div>
                </section>
                <section className = {styles.leftMiddle} >
                    <div>
                        <p>TEAMS</p>
                        <p > + </p>
                    </div>
                    <div>
                        <img src= "https://www.flaticon.com/svg/vstatic/svg/860/860800.svg?token=exp=1614600343~hmac=68ec303a443d5504d757f2875e20b8e5" />
                        <p> <b> Anant Jain's Workspace </b> </p>
                        {
                            arrow? 
                            <img onClick = {() => setArrow(!arrow)} src = "https://www.flaticon.com/svg/vstatic/svg/130/130906.svg?token=exp=1614600520~hmac=4f94c5b9f696b155f57e6e2b40008369" /> : ""
                        }
                        {
                            !arrow ? 
                            <img onClick = {() => setArrow(!arrow)} src = "https://www.flaticon.com/svg/vstatic/svg/892/892498.svg?token=exp=1614658320~hmac=8f04007a4fc7486bb540d50add8807df" /> : ""
                        } 
                    </div>
                </section>
                {
                    arrow? 
                    <section className = {styles.leftBottom} >
                        <div>
                            <img src = "https://www.flaticon.com/svg/vstatic/svg/522/522561.svg?token=exp=1614600954~hmac=4e844d0e93142e9db8f714bd1b28e326" />
                            <p> Getting Started </p>
                        </div>
                        <div>
                            <img src = "https://www.flaticon.com/svg/vstatic/svg/2111/2111815.svg?token=exp=1614588783~hmac=d29af99a98ec2685ce60aa5e014dc93e" />
                            <p> Boards </p>
                        </div>
                        <div>
                            <img src = "https://www.flaticon.com/svg/vstatic/svg/2456/2456758.svg?token=exp=1614601038~hmac=2308d6011a675940836dd96e4018e9f3" />
                            <p> Collections </p>
                        </div>
                        <div>
                            <img src = "https://www.flaticon.com/svg/vstatic/svg/1077/1077035.svg?token=exp=1614601087~hmac=8c278c63dd994a738cac2280e9f30418" />
                            <p> Highlights </p>
                        </div>
                        <div>
                            <img src = "https://www.flaticon.com/svg/vstatic/svg/2983/2983723.svg?token=exp=1614601139~hmac=6ea2de780b50cc3525227148f4bd05d4" />
                            <p> Team table </p>
                        </div>
                        <div>
                            <img src = "https://www.flaticon.com/svg/vstatic/svg/860/860800.svg?token=exp=1614600343~hmac=68ec303a443d5504d757f2875e20b8e5" />
                            <p> Members </p>
                        </div>
                        <div>
                            <img src = "https://www.flaticon.com/svg/vstatic/svg/3524/3524636.svg?token=exp=1614601187~hmac=85080d90033fdc78f7ce12a2c76006aa" />
                            <p> Settings </p>
                        </div>
                    </section> : ""
                }
            </section>
            {/* Right Section */}
            <section className = {styles.right} >
                <div>
                    <img src ="https://www.flaticon.com/svg/vstatic/svg/37/37663.svg?token=exp=1614660155~hmac=39aa2e678a42521fac97cb81d2afc2af" />
                    <p> <b> Recently Viewed </b></p>
                </div>
                <div>
                    <img src ="https://www.flaticon.com/svg/vstatic/svg/747/747376.svg?token=exp=1614660412~hmac=ab41c624d44b5386b4777288b93b9694" />
                    <p> <b> Personal Board </b></p>
                </div>
                
                <div>
                    <img src ="https://www.flaticon.com/svg/vstatic/svg/860/860800.svg?token=exp=1614600343~hmac=68ec303a443d5504d757f2875e20b8e5" />
                    <p> <b> Anant Jain's workspace </b></p>
                </div>
                


            </section>
        </div>
    )
}
