import React from 'react'
import classes from './Skills.module.css'
import { Fragment } from 'react'
import OdooIcon from './../assets/odoo.png';
const Skills = () => {
    return (
        <Fragment>
            <div className={classes.wrapper}>
            <div className={classes.heading} id='Skills'>
                <h1>
                    Skills
                </h1>
            </div>
            <div className={classes.skills}>
                <div className={classes.backdrop}>
                    <i class="fa-brands fa-html5"></i>
                </div>
                <div className={classes.backdrop}>
                    <i class="fa-brands fa-css3-alt"></i>
                </div>
                <div className={classes.backdrop}>
                    <i class="fa-brands fa-python"></i>
                </div>
                <div className={classes.backdrop}>
                    <i class="fa-brands fa-cuttlefish"></i>
                </div>
                <div className={classes.backdrop}>
                    <img src={OdooIcon} alt="Odoo" className={classes.icon} />
                </div>
                <div className={classes.backdrop}>
                    <i class="fa-solid fa-database"></i>
                </div>
            </div>
        </div>
        </Fragment >
    )
}

export default Skills;
