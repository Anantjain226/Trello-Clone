import React, {useState} from 'react'
import styles from './style.module.css'
import rabbitLogo from './TrelloRabbit.png'

export const Navbar = () => {
    const [more, setMore] = useState(false)

    return (
        <div>
            <section className = {styles.navbar} >
                <div onClick = {() => setMore(!more)} > 
                    <img src = "https://www.flaticon.com/svg/vstatic/svg/847/847581.svg?token=exp=1614588625~hmac=2e35528cc39ed08fbf09e3a57316fe7f"/>
                </div>
                <div> 
                    <img  src ="https://www.flaticon.com/svg/vstatic/svg/709/709537.svg?token=exp=1614588712~hmac=e48c3d27eaa95682367cc9a8baa103de"/> 
                </div>
                <div> 
                    <img src = "https://www.flaticon.com/svg/vstatic/svg/2111/2111815.svg?token=exp=1614588783~hmac=d29af99a98ec2685ce60aa5e014dc93e"/>
                    <p> Boards </p>
                </div>
                <div>
                    <input placeholder = "Jump to..." />
                    <img src= "https://www.flaticon.com/svg/vstatic/svg/482/482631.svg?token=exp=1614589434~hmac=71c02a66537598f31a270a3e5b3324cb" />
                </div>
                <div>
                    <img src = {rabbitLogo} ></img>
                </div>
                <div>
                    <img src = "https://www.seekpng.com/png/full/213-2134127_trello-logo-blue-trello-logo-white-png.png" ></img>
                </div>
            </section>
            {/* {
                more ? 
                <section className = {styles.more} >
                    <div>
                        <p>More from Atlassian</p>
                        <p>X</p>
                    </div>
                    <hr />
                    <p>SWITCH TO</p>
                    <div>
                        <img src ="http://assets.stickpng.com/images/58482beecef1014c0b5e4a36.png" />
                        <p>Trello</p>
                    </div>
                    <p>DISCOVER</p>
                    <div>
                        <div>
                            <img src ="https://seeklogo.com/images/C/confluence-logo-D9B07137C2-seeklogo.com.png" />
                        </div>
                        <p>Trello</p>
                    </div>
                    <div>
                        <div>
                            <img src ="https://www.solarwinds.com/-/media/solarwinds/swdcv2/licensed-products/service-desk/integrations/sd-integrations-logo-jira.ashx?rev=701fbaa7f8ac4ae08e0406c8984c43e7&hash=75D4F04DE99B88DE7B2C4193F0616F1F" />
                        </div>
                        <p>Trello</p>
                    </div>
                    <div>
                        <div>
                            <img src ="https://seeklogo.com/images/C/confluence-logo-D9B07137C2-seeklogo.com.png" />
                        </div>
                        <p>Trello</p>
                    </div>
                    <div>
                        <div>
                            <img src ="https://seeklogo.com/images/C/confluence-logo-D9B07137C2-seeklogo.com.png" />
                        </div>
                        <p>Trello</p>
                    </div>
                    
                </section> : ""
            } */}
        </div>
    )
}
