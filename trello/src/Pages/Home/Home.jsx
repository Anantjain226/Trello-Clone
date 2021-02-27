import React from 'react'
import styles from './style.module.css'

export const Home = () => {
    return (
        <div className = {styles.main}>
            <header className = {styles.nav} >
                <img className src = "https://www.atlassian.com/dam/jcr:c135e4c1-d61c-4299-a536-c710530e2e64/Trello-icon-blue@2x.png"/>
                <div className = {styles.gap} > </div>
                <div className = {styles.navRight} >
                    <a className = {styles.login} href = "/Home" >Log in</a>
                    <div className = {styles.signup} > Sign up</div>
                </div>
            </header>

            <section className = {styles.Section1Head} >
                <div className = {styles.Section1} >
                    <p>Trello helps teams move work forward.</p>
                    <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
                    <div>
                        <input placeholder = "Email" ></input>
                        <button>Sign up—it’s free!</button>
                    </div>
                </div>
                <div>
                    <img src = "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png" ></img>
                </div>
            </section>

            <section className = {styles.Section2} >
                <div>
                    <p>It’s more than work. It’s a way of working together.</p>
                    <p>Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
                    <p>Start doing →</p>
                </div>
                <img src = "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/product/89d378b845766a8f0c48e955336266f8/board.png" ></img>
            </section>

            <section className = {styles.Section3}>
                <div>
                    <p>Features to help your team succeed</p>
                    <p> Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
                </div>
            </section>

            <section className = {styles.Section4}>
                <div>
                    <img src= "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/5f90e4a913ac52092f2ac7ff308c45c4/view.svg" ></img>
                    <div>
                        <p>CHOOSE A VIEW</p>
                        <p>The board is just the beginning</p>
                        <p>Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.</p>
                        <p> +   Learn more</p>
                    </div>
                </div>
            </section>
            <section className = {styles.Section5} >
                <div>
                    <div>
                        <p>DIVE INTO THE DETAILS</p>
                        <p>Cards contain everything you need</p>
                        <p>Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.</p>
                        <p>+  Learn more</p>
                    </div>
                    <img src = "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/b845022d8d738ba8fa5e8b293e434149/card-back.svg" ></img>
                </div>
            </section>
            <section className = {styles.Section4}>
                <div>
                    <img src= "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/35366a300daac434fa02bc3ef83d8132/automation.png" ></img>
                    <div>
                        <p>MEET YOUR NEW BUTLER</p>
                        <p>No-code automation</p>
                        <p>Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.</p>
                        <p> +  Learn more</p>
                    </div>
                </div>
            </section>
            <section className = {styles.Section5} >
                <div>
                    <div>
                        <p>POWER-UPS</p>
                        <p>Integrate top work tools</p>
                        <p>Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.</p>
                        <p>+  Learn more</p>
                    </div>
                    <img src = "https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/features/7a11db312701af17abefa8e691cf124a/power-ups.png" ></img>
                </div>
            </section>
        </div>
    )
}
