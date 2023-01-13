import React from 'react'
import { Article } from '../../components'
import {blog01 , blog02 , blog03  , blog04 , blog05} from "./import"
import "./Blogging.css"

function Blogging() {
    return (
        <div className='gtp3__blog'>
            <div className="gpt3__blog-header">
                <h1 className="gradient__text">A lot is happening We are blogging about it.</h1>
            </div>

            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container-grp-A">
                    <Article image={blog01} title="THis is title" />
                </div>
                <div className="gpt3__blog-container-grp-B">
                    <Article  image={blog02} title="This is title"/>
                    <Article image={blog03} title="This is title"/>
                    <Article image={blog04} title="This is title"/>
                    <Article image={blog05} title="This is title"/>
                </div>
            </div>

        </div>
    )
}

export default Blogging
