import classes from './Education.module.css';
import ldrp from '../assets/daxina_murti.jpeg'
import krishna from '../assets/alpha.jpeg'
import carmel from '../assets/msu.jpeg'
const Education = () => {
    return (
        <div className={classes.education} id="Education" >
            <div className={classes.heading}>
                <h1>Education</h1>
            </div>
            <div className={classes.educationpart}>
                <div className={classes.info}>
                    <div className={classes.aimg}><img src={ldrp} alt="" /></div>
                    <div className={classes.about}>
                        <h2>Daxina Murti Vidhya Mandir</h2>
                        <p>SSC |  2016
                            {/* Bechelor of Engineering in Computer Engineering */}
                        </p>
                        <span>2016 | Completed</span>
                    </div>
                </div>
                <div className={classes.info}>
                    <div className={classes.aimg}><img src={krishna} alt="" /></div>
                    <div className={classes.about}>
                        <h2>Alpha Vidhya Sankul - Junagadh</h2>
                        <span>2016-2018 | Completed</span>
                    </div>
                </div>
                <div className={classes.info}>
                    <div className={classes.aimg}><img src={carmel} alt="" /></div>
                    <div className={classes.about}>
                        <h2>The Maharaja Sayajirao University - Baroda
                        </h2>
                        <p>Bachelor Of Science </p>
                        <span>2018-2021 | Completed</span>
                    </div>
                </div>
                <div className={classes.info}>
                    <div className={classes.aimg}><img src={carmel} alt="" /></div>
                    <div className={classes.about}>
                        <h2>The Maharaja Sayajirao University - Baroda
                        </h2>
                        <p>Master Of Science </p>
                        <span>2021-2023 | Completed</span>
                    </div>
                </div>
                {/* <div className={classes.info}>
                    <div className={classes.aimg}><img src={krishna} alt="" /></div>
                    <div className={classes.about}>
                        <h2>Bechelor of Engineering in Computer Engineering
                            HSC Science | Informatic Practices
                        </h2>
                        <p>Krishna School of science</p>
                        <span>2018-2020 | Completed</span>
                    </div>
                </div> */}
            </div>
        </div>)
}

export default Education;