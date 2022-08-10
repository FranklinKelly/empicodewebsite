import styles from '../styles/privateportal.module.css';
import Image from 'next/image';
import logo from '../public/empicode logo.png';


function PrivatePortal() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Image src={logo} alt="EmpiCode" width={235.5} height={71} unoptimized={true}></Image>
            </header>
            <main className={styles.container}>
                <div>
                    <div className={styles.tableContainer} >
                        <table>
                            <thead className={styles.tableHead}>
                                <tr>
                                    <td><strong>User</strong></td>
                                    <td><strong>Clearance</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>RCampbell</td>
                                    <td>T4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.tableContainer}>
                        <table id={styles.tasks}>
                            <thead className={styles.tableHead}>
                                <tr><td><strong>Tasks</strong></td></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <button>Timesheet</button>
                                    </td>
                                    <td>
                                        <button>Project Editor</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button>My Mail</button>
                                    </td>
                                    <td>
                                        <button>EmpiCompiler</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button>My Projects</button>
                                    </td>
                                    <td>
                                        <button>Logout</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.tableContainer}>
                        <table>
                            <thead className={styles.tableHead}>
                                <tr><td><strong>Special Action Request</strong></td></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><button>Submit Request</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PrivatePortal;