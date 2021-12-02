import React from 'react';
import styles from'./assets/scss/EmailList.scss';
import Email from './Email';

const EmailList = ({keyword,emails}) => {
    // console.log('emaillist: ',keyword)
    return (
        <ul className={styles.Emaillist}>
            {emails 
                    .filter(email => email.firstName.indexOf(keyword) !== -1 || email.lastName.indexOf(keyword) !== -1 || email.email.indexOf(keyword) !== -1)
                    .map(email => <Email 
                                        key={email.no} 
                                        firstName={email.firstName} 
                                        lastName={email.lastName} 
                                        email={email.email} />)
            }
        </ul>
    );
};

export default EmailList;