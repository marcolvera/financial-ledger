import React, { Component } from 'react';
import styles from './Contact.module.css';
import axios from 'axios';
// import e from 'express';

const API_PATH = 'http://localhost:3001/api/contact.php';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            fname:'',
            lname:'',
            email:'',
            subject:'',
            mailSent: false,
            error: null
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: {'content-type': 'application/json'},
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error=> this.setState({error:error.message}));
    }
    
    render() {
        return(
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.column1}>
                        <img className={styles.img} src="https://i.imgur.com/D8ANy3w.jpg" alt=""/>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.column2}>
                        <h2 className={styles.h2}>Request Callback</h2>
                        <form action="/action_page.php">
                            <label>First Name</label>
                            <input type="text" id='fname' name="firstname" placeholder="Your name..."
                            value={this.state.fname}
                            onChange={e => this.setState({fname: e.target.value})}
                            />
                            <label>Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name..."
                            value={this.state.lname}
                            onChange={e => this.setState({lname: e.target.value})}/>
                            <label>Email</label>
                            <input type="text" id="email" name="email" placeholder="Your email..."
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}/>
                            <label>Subject</label>
                            <textarea id="subject" name='subject' placeholder="Write something..."
                            value={this.state.subject}
                            onChange={e => this.setState({subject: e.target.value})}></textarea>
                            <input className={styles.btn} type="submit" onClick={e => this.handleFormSubmit(e)} value="Send"/>
                            <div>
                                {this.state.mailSent &&
                                <div>Thank you for contacting us.</div>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
                    