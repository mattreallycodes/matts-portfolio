import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Matt Shaver</h1>
		<h3>Web3 Crypto, NFT, VR, Solidity, Rust & DeFi, Proptech, Gaming & AI/ML, Data Science Full Stack Engineer</h3>
                <h3>INNOVATING WITH TECH AND CULTURE</h3>
            </div>
        </div>
        <nav>
            <ul>
                <li><button onClick={() => {props.onOpenArticle('intro')}}>Intro</button></li>
                <li><button onClick={() => {props.onOpenArticle('work')}}>Work</button></li>
                <li><button onClick={() => {props.onOpenArticle('about')}}>About</button></li>
                <li><button onClick={() => {props.onOpenArticle('contact')}}>Contact</button></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
