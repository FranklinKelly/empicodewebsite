import styles from '../../../../../../styles/privateportal.module.css';
import {PrivatePageHead,PrivatePageHeader,AccountInformation} from '../Home.js';
import Link from 'next/link';

function Timesheet() {
    return (
        <div className={styles.page}>
            {PrivatePageHead()}
            {PrivatePageHeader('../../../../../')}
            <main className={styles.container}>
                {AccountInformation()}
                <div className={styles.tableContainer}>
                    <div className={styles.tableHead}><td><strong>EmpiCompiler</strong></td></div>
                    <form className={styles.tasks}>
                        <td><label for='cmd'>Compiler Cmd</label></td>
                        <td><input type='text' name='cmd'/></td>
                    </form>
                    <Link href='../Home'><td><button>Back</button></td></Link>
                </div>
            </main>
        </div>
    )
}

export default Timesheet