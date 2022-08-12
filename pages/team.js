import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import logo from '../public/empicode logo.png';


function teamMember(teamMemberObject) {    
    return (
        <table className={styles.teamMemberCard}>
            <tbody>
                <tr>
                    <td className={styles.teamCardImage}><Image src={teamMemberObject.photo} alt='team member face' width={200} height={200}></Image></td>
                    <td className={styles.teamCardText}>
                        <h2>{teamMemberObject.name}</h2>
                        <h4>{teamMemberObject.number}</h4>
                        <p>{teamMemberObject.bio}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default function Team() {
    const link = '/privateportal/333133/ton/crs/Home/'
    const members = {
        campbell : {
            name: 'Reagan Campbell',
            photo: '/teamphotos/campbell.png',
            number: '991-268-1104',
            bio: ''
        },
        gwynn : {
            name: 'Thomas Gwynn',
            photo: '/teamphotos/gwynn.jpg',
            number: '991-268-1103',
            bio: ''
        },
        mays : {
            name: 'Wilma Mays',
            photo: '/teamphotos/mays.jpg',
            number: '991-268-1102',
            bio: ''
        },
        park : {
            name: 'Maxwell Park',
            photo: '/teamphotos/park.jpg',
            number: '991-268-1101',
            bio: ''
        },
        robinson : {
            name: 'Jacqueline Robinson', 
            photo: '/teamphotos/robinson.jfif',
            number: '991-268-1105',
            bio: ''
        },
        kamalnathan : {
            name: 'Jasmine Kamalnathan',
            photo: '/teamphotos/kamalnathan.jpg',
            number: '991-268-1106',
            bio: ''
        },
        muldrow : {
            name: 'Nasier Muldrow',
            photo: '/teamphotos/muldrow.jpg',
            number: '991-268-1109',
            bio: ''
        },
        mundell : {
            name: 'Gil Mundell',
            photo: '/teamphotos/garmoe.jfif',
            number: '991-268-1107',
            bio: ''
        },
        tiernee : {
            name: 'Jo Tiernee',
            photo: '/teamphotos/Jacob Tierney.jpg',
            number: '991-268-1108',
            bio: ''
        },
        young : {
            name: 'Loretta Young',
            photo: '/teamphotos/young.jpg',
            number: '991-268-1110',
            bio: ''
        },
        lange : {
            name: 'Stevie Lange',
            photo: '/teamphotos/lange.jfif',
            number: '991-268-1111',
            bio: ''
        },
        steinberg : {
            name: 'Rebecca Steinberg',
            photo: '/teamphotos/steinberg.jpg',
            number: '991-268-1112',
            bio: ''
        },
        zheng : {
            name: 'Mandy Zheng',
            photo: '/teamphotos/zheng.jpg',
            number: '991-268-1113',
            bio: ''
        },
        azari : {
            name: 'Terry Azari', 
            photo: '/teamphotos/azari.png',
            number: '991-286-1115',
            bio: ''
        },
        garmoe : {
            name: 'Barry Garmoe',
            photo: '/teamphotos/garmoe.png',
            number: '991-268-1114',
            bio: ''
        },
        gaskins : {
            name: 'Sammy Gaskins',
            photo: '/teamphotos/gaskins.png',
            number: '991-268-1116',
            bio: ''
        },
        lee : {
            name: 'Fenix Lee',
            photo: '/teamphotos/lee.jpg',
            number: '991-268-1117',
            bio: ''
        },
        moon : {
            name: 'Andrew Moon',
            photo: '/teamphotos/moon.jpg',
            number: '991-268-1119',
            bio: ''
        },
        fields : {
            name: 'Zachary Fields',
            photo: '/teamphotos/fields.jpg',
            number: '991-268-1118',
            bio: ''
        }
    }
  
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
                {teamMember(members.campbell)}
                {teamMember(members.gwynn)}
                {teamMember(members.mays)}
                {teamMember(members.park)}
                {teamMember(members.robinson)}
            </div>
            
            <h1>Programmers</h1> 
            <div className={styles.grid}>
                {teamMember(members.kamalnathan)}
                {teamMember(members.muldrow)}
                {teamMember(members.mundell)}
                {teamMember(members.tiernee)}
                {teamMember(members.young)}
            </div>
            
            <h1>Digital Art And Design</h1>
            <div className={styles.grid}>
                {teamMember(members.lange)}
                {teamMember(members.steinberg)}
                {teamMember(members.zheng)}
            </div>

            <h1>Information Technology</h1>
            <div className={styles.grid}>
                {teamMember(members.azari)}
                {teamMember(members.garmoe)}
                {teamMember(members.gaskins)}
            </div>

            <h1>Support Staff</h1>
            <div className={styles.grid}>
                {teamMember(members.lee)}
                {teamMember(members.moon)}
                {teamMember(members.fields)}
            </div>
        </main>
  
        <footer className={styles.footer}>
            <p>Powered by NorthView Mock Trial Academy</p>          
        </footer>
      </div>
    )
  }
  