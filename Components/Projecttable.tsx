import React from 'react'
import styles from '../styles/projecttable.module.css'

const Projecttable = () => {
  return (
    <div>
        <div className={styles.first}>
            <table>
                <tr>
                    <th>00</th>
                    <th>ProjectID</th>
                    <th>Name</th>
                    <th>Client</th>
                    <th>Project Type</th>
                    <th>Project Responsible</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Project Status</th>
                    <th>Monthly Status</th>
                    <th>Options</th>
                </tr>
                <tr>
                    <td>00</td>
                    <td>001</td>
                    <td>security</td>
                    <td>JP Morgan Bank</td>
                    <td>Banking</td>
                    <td>Antonio Gurrates</td>
                    <td>22 September 2021</td>
                    <td>4 November 2021</td>
                    <td className={styles.green}>Running</td>
                    <td className={styles.red}>Behind Schedule</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>002</td>
                    <td>Action Game</td>
                    <td>Tencent Corporation</td>
                    <td>Gaming</td>
                    <td>Angelica hale</td>
                    <td>19 September 2019</td>
                    <td>22 November 2021</td>
                    <td className={styles.red}>Closed</td>
                    <td className={styles.green}>Ahead schedule</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>003</td>
                    <td>E-Commerce Application</td>
                    <td>Goodli</td>
                    <td>Private Company</td>
                    <td>Antonio Gurattes</td>
                    <td>23 January 2022</td>
                    <td>4 November 2023</td>
                    <td className={styles.green}>Running</td>
                    <td className={styles.green}>Ahead schedule</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>004</td>
                    <td>Heart disease prediction</td>
                    <td>Morgan Hospital</td>
                    <td>Healthcare</td>
                    <td>Jose</td>
                    <td>10 December 2021</td>
                    <td>4 November 2024</td>
                    <td className={styles.green}>Running</td>
                    <td className={styles.green}>On-Track</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>005</td>
                    <td>Ticket Booking app</td>
                    <td>GG</td>
                    <td>E-Commerce</td>
                    <td>Antonio</td>
                    <td>10 June 2022</td>
                    <td>21 November 2022</td>
                    <td className={styles.green}>Running</td>
                    <td className={styles.red}>Behind schedule</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>006</td>
                    <td>Movie Database</td>
                    <td>IMDB</td>
                    <td>E-commerce</td>
                    <td>Lily Jhonson</td>
                    <td>29 september 2021</td>
                    <td>1 November 2021</td>
                    <td className={styles.green}>Running</td>
                    <td className={styles.red}>Behind schedule</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>007</td>
                    <td>security</td>
                    <td>JP Morgan bank</td>
                    <td>Bank</td>
                    <td>Antonio Gurattes</td>
                    <td>22 september 2021</td>
                    <td>4 November 2021</td>
                    <td className={styles.green}>Running</td>
                    <td className={styles.red}>Behind schedule</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>008</td>
                    <td>Bank Database</td>
                    <td>Online payment system</td>
                    <td>Bank</td>
                    <td>Antonio Gurattes</td>
                    <td>11 November 2021</td>
                    <td>4 March 2022</td>
                    <td className={styles.red}>Closed</td>
                    <td className={styles.red}>Behind schedule</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>009</td>
                    <td>Retinal Lockers</td>
                    <td>JP Morgan bank</td>
                    <td>Bank</td>
                    <td>Antonio Gurattes</td>
                    <td>31 March 2022</td>
                    <td>4 August 2022</td>
                    <td className={styles.red}>Closed</td>
                    <td className={styles.green}>Ahead schedule</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>010</td>
                    <td>Hospital Database systems</td>
                    <td>Jhonson & Jhonson</td>
                    <td>Hospital</td>
                    <td>Kelly</td>
                    <td>19 September 2022</td>
                    <td>20 january 2023</td>
                    <td className={styles.green}>Running</td>
                    <td className={styles.green}>On-Track</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>011</td>
                    <td>Radar</td>
                    <td>US Airforce</td>
                    <td>US Government</td>
                    <td>Arnold</td>
                    <td>31 January 2021</td>
                    <td>3 March 2021</td>
                    <td className={styles.red}>Closed</td>
                    <td className={styles.green}>On-Track</td>
                    <td>lorem</td>
                </tr>
                <tr>
                    <td>00</td>
                    <td>012</td>
                    <td>Travel Website</td>
                    <td>Yatra</td>
                    <td>Travel App</td>
                    <td>Antonio Gurattes</td>
                    <td>09 January 2016</td>
                    <td>31 August 2016</td>
                    <td className={styles.red}>Closed</td>
                    <td className={styles.green}>On-Track</td>
                    <td>lorem</td>
                </tr>
            </table>
        </div>
      
    </div>
  )
}

export default Projecttable
