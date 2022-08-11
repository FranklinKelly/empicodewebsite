import styles from '../../../../../styles/privateportal.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../../public/empicode logo.png';
import Head from 'next/head';

const root = '/';

export function PrivatePageHead() {
    return (
        <Head>
            <title>EmpiCode</title>
            <meta name="description" content="A team based on the Island of Empirion" />
            <link rel="icon" href="/favicon.png" />
        </Head>
    );
}

export function PrivatePageHeader(homeHref) {
    return (
        <header className={styles.header}>
            <Link href={homeHref}>
                <Image src={logo} alt="EmpiCode" width={235.5} height={71}></Image>
            </Link>
        </header>
    );
}

export function AccountInformation() {
    return (
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
    );
}

function Tasks() {
    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableHead}>
                <td><strong>Tasks</strong></td>
            </div>
            <table className={styles.tasks}>
                <tbody>
                    <tr>
                        <td>
                            <Link href="./Home/timesheet"><button>Timesheet</button></Link>
                        </td>
                        <td>
                            <Link href="./Home/projecteditor"><button>Project Editor</button></Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="./Home/mymail"><button>My Mail</button></Link>
                        </td>
                        <td>
                            <Link href="./Home/empicompiler"><button>EmpiCompiler</button></Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link href="./Home/myprojects"><button>My Projects</button></Link>
                        </td>
                        <td>
                            <Link href={root}><button>Log Out</button></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function SpecialActionRequest() {
    return (
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
    );
}

function PrivatePortal() {
    return (
        <div className={styles.page}>
            {PrivatePageHead()}
            {PrivatePageHeader(root)}
            <main className={styles.container}>
                <div>
                    {AccountInformation()}
                    {Tasks()}
                    {SpecialActionRequest()}
                </div>
            </main>
        </div>
    )
}

export default PrivatePortal;