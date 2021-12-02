import React from 'react';
import styles from'./assets/scss/EmailList.scss';
import Email from './Email';

const EmailList = ({keyword,emails,onRemove}) => {
    // console.log('emaillist: ',keyword)
    const a = () => {

    }
    return (
        <ul className={styles.Emaillist}>
            {emails 
                    .filter(email => email.firstName.indexOf(keyword) !== -1 || email.lastName.indexOf(keyword) !== -1 || email.email.indexOf(keyword) !== -1)
                    .map(email => <Email 
                                        key={email.no} 
                                        firstName={email.firstName} 
                                        lastName={email.lastName} 
                                        email={email.email}
                                        onRemove={onRemove} 
                                        listno={email.no}/>)
            }
        </ul>
    );
};

export default EmailList;