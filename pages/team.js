import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import logo from '../public/empicode logo.png';

function teamMember(pic, name, number,text) {    
    return (
        <table className={styles.teamMemberCard}>
            <tr>
                <td className={styles.teamCardImage}><Image src={pic} alt='team member face' width={200} height={200}></Image></td>
                <td className={styles.teamCardText}>
                    <h2>{name}</h2>
                    <h4>{number}</h4>
                    <p>{text}</p>
                </td>
            </tr>
        </table>
    );
}

export default function Team() {
    const link = '/privateportal/333133/ton/crs/Home/'
  
    return (
      <div className={styles.container}>
        <Head>
          <title>EmpiCode</title>
          <meta name="description" content="A team based on the Island of Empirion" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <header className={styles.header}>
            <h1 className={styles.title}>
              Meet The
        <Image src={logo} alt="EmpiCode" layout='fixed'/>  Team!
            </h1>
            <br></br>
        </header>
        <main className={styles.main}>
            <h1>Executives</h1> 
            <div className={styles.grid}>
                {teamMember('/../public/campbell.png', 'Reagan Campbell', '991-268-1104', '')}
                {teamMember('/../public/gwynn.jpg', 'Thomas Gwynn', '991-268-1103', '')}
                {teamMember('/../public/mays.jpg', 'Wilma Mays', '991-268-1102', '')}
                {teamMember('/../public/park.jpg', 'Maxwell Park', '991-268-1101', '')}
                {teamMember('/../public/robinson.jfif', 'Jacqueline Robinson', '991-268-1105', '')}
            </div>
            
            <h1>Programmers</h1> 
            <div className={styles.grid}>
                {teamMember('/../public/kamalnathan.jpg', 'Jasmine Kamalnathan', '991-268-1106', '')}
                {teamMember('/../public/muldrow.jpg', 'Nasier Muldrow', '991-268-1109', '')}
                {teamMember('/../public/garmoe.jfif', 'Gil Mundell', '991-268-1107', '')}
                {teamMember('/../public/Jacob Tierney.jpg', 'Jo Tiernee', '991-268-1108', '')}
                {teamMember('/../public/young.jpg', 'Loretta Young', '991-268-1110', '')}
            </div>
            
            <h1>Digital Art And Design</h1>
            <div className={styles.grid}>
                {teamMember('/../public/lange.jfif', 'Stevie Lange', '991-268-1111', '')}
                {teamMember('/../public/steinberg.jpg', 'Rebecca Steinberg', '991-268-1112', '')}
                {teamMember('/../public/zheng.jpg', 'Mandy Zheng', '991-268-1113', '')}
            </div>

            <h1>Information Technology</h1>
            <div className={styles.grid}>
                {teamMember('/../public/azari.png', 'Terry Azari', '991-268-1115', '')}
                {teamMember('/../public/garmoe.png', 'Barry Garmoe', '991-268-1114', '')}
                {teamMember('/../public/gaskins.png', 'Sammy Gaskins', '991-268-1116', '')}
            </div>

            <h1>Support Staff</h1>
            <div className={styles.grid}>
                {teamMember('/../public/lee.jpg', 'Fenix Lee', '991-268-1117', '')}
                {teamMember('/../public/moon.jpg', 'Andrew Moon', '991-268-1119', '')}
                {teamMember('/../public/fields.jpg', 'Zachary Fields', '991-268-1118', '')}
            </div>
        </main>
  
        <footer className={styles.footer}>
            <p>Powered by NorthView Mock Trial Academy</p>          
        </footer>
      </div>
    )
  }
  