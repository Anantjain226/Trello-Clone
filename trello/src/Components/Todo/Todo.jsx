import React, {useState} from 'react'
import { Navbar } from '../Navbar/Navbar'
import styles from './style.module.css'
import { Input } from 'antd';

export const Todo = () => {
    const [todo, setTodo] = useState(false)
    const [doing, setDoing] = useState(false)
    const [done, setDone] = useState(false)

    const { TextArea } = Input;
    console.log(todo)
    return (
        <div className = {styles.page} >
            {
                document.body.style.backgroundColor = "darkgoldenrod"
            }
            <Navbar />
            <section>
                <div className = {styles.miniNav} >
                    <img src = "https://www.flaticon.com/svg/vstatic/svg/864/864763.svg?token=exp=1614661360~hmac=4ccf3266955507682d7f414b4328d015" />
                    <p>Anant Jain's workspace </p>
                    <a>Learn More</a>
                    <button>Add payment method</button>
                </div>
            </section>
            <section className = {styles.miniNav2}>
                <div>
                    <img src = "https://www.flaticon.com/svg/vstatic/svg/624/624739.svg?token=exp=1614663840~hmac=aa0b9e42257eca2d86b1897b206aaceb" />
                    <p>Board</p>
                    <img src = "https://www.flaticon.com/svg/vstatic/svg/892/892498.svg?token=exp=1614663712~hmac=3f3d1e2ae596ab05b1ff8fad1511c88c" />
                </div>
                <div>
                    <p>Practice</p>
                </div>
                <div>
                    <img src = "https://www.flaticon.com/svg/vstatic/svg/1828/1828970.svg?token=exp=1614663982~hmac=ab5d89da50b3a840314c3783428e4129" />
                </div>
                <div>
                    <p>Anant Jain's workspace </p>
                </div>
                <div>
                    <p> Private </p>
                </div>
                <div>
                    <p> Invite </p>
                </div>
            </section>
            <section className = {styles.main} >
                <section className = {styles.Todo} >
                    <div>
                        <p>To Do</p>
                        <img src = "https://www.flaticon.com/svg/vstatic/svg/219/219423.svg?token=exp=1614670920~hmac=2572e06ed0a0debabf7ce87fd83898b0" />
                    </div>
                    {
                        !todo? 
                        <div>
                            <input placeholder = "+ Add another card" onClick = {() => setTodo(!todo)} />
                        </div> : 
                        <div className = {styles.TextArea} >
                            <TextArea placeholder = "Enter a title for this card..." rows = {4} />
                            <button>Add Card</button>
                            <img onClick = {() => setTodo(!todo)} src = "https://www.flaticon.com/svg/vstatic/svg/271/271203.svg?token=exp=1614673703~hmac=606b1cd186a2da13f7f3fab5061e6daa" />
                        </div>
                    }

                </section>
                <section className = {styles.Todo} >
                    <div>
                        <p>Doing</p>
                        <img src = "https://www.flaticon.com/svg/vstatic/svg/219/219423.svg?token=exp=1614670920~hmac=2572e06ed0a0debabf7ce87fd83898b0" />
                    </div>
                    {
                        !doing? 
                        <div>
                            <input placeholder = "+ Add another card" onClick = {() => setDoing(!doing)} />
                        </div> : 
                        <div className = {styles.TextArea} >
                            <TextArea placeholder = "Enter a title for this card..." rows = {4} />
                            <button>Add Card</button>
                            <img onClick = {() => setDoing(!doing)} src = "https://www.flaticon.com/svg/vstatic/svg/271/271203.svg?token=exp=1614673703~hmac=606b1cd186a2da13f7f3fab5061e6daa" />
                        </div>
                    }
                </section>
                <section className = {styles.Todo} >
                    <div>
                        <p>Done</p>
                        <img src = "https://www.flaticon.com/svg/vstatic/svg/219/219423.svg?token=exp=1614670920~hmac=2572e06ed0a0debabf7ce87fd83898b0" />
                    </div>
                    {
                        !done? 
                        <div>
                            <input placeholder = "+ Add another card" onClick = {() => setDone(!done)} />
                        </div> : 
                        <div className = {styles.TextArea} >
                            <TextArea placeholder = "Enter a title for this card..." rows = {4} />
                            <button>Add Card</button>
                            <img onClick = {() => setDone(!done)} src = "https://www.flaticon.com/svg/vstatic/svg/271/271203.svg?token=exp=1614673703~hmac=606b1cd186a2da13f7f3fab5061e6daa" />
                        </div>
                    }
                </section>
            </section>
        </div>
    )
}
