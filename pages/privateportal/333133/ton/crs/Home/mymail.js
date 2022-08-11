import styles from '../../../../../../styles/privateportal.module.css';
import {PrivatePageHead,PrivatePageHeader,AccountInformation} from '../Home.js';
import Link from 'next/link';

function MyMail() {
    return (
        <div className={styles.page}>
            {PrivatePageHead()}
            {PrivatePageHeader('../../../../../')}
            <main className={styles.container}>
                {AccountInformation()}
                <div className={styles.tableContainer}>
                    <div className={styles.tableHead}><td><strong>My Mail</strong></td></div>
                    <table className={styles.tasks}>
                        <td>No new notifications</td>
                    </table>
                    <Link href='../Home'><td><button>Back</button></td></Link>
                </div>
            </main>
        </div>
    )
}

export default MyMail