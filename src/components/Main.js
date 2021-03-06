import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'
import pic07 from '../images/pic07.jpg'

class Main extends React.Component {
  render() {
    let close = (
        <div
            className="close"
            onClick={() => {
            this.props.onCloseArticle()
        }}></div>
    )
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout
        ? {
            display: 'flex'
        }
        : {
            display: 'none'
        }}>
        <article
          id="intro"
          className={`${this.props.article === 'intro'
          ? 'active'
          : ''} ${this.props.articleTimeout
              ? 'timeout'
              : ''}`}
          style={{
          display: 'none'
        }}>
            <h2 className="major">Intro</h2>
            <span
              className="image main"
              style={{
              textAlign: 'center'
            }}>
              <img
                style={{
                  display: 'inline-block',
                  width: '53%',
                  padding: '8px',
                  borderRadius: '100%'
                }}
                src={pic01}
                alt="Portrait Shot of Matt."/>
            </span>
            <h3>Transforming the world via technology</h3>
            <p>
              Matt Shaver is a Quant Trading Systems, DeFi, Fintech Engineer, Executive, Social Entrepreneur & Researcher interested in working in the Americas, Oceania, Latin America, 
              Africa, Europe, Asia, & the Middle East.
              Matt is interested in new senior engineering & executive roles involving Quantitative Finance, DeFi, Trading Systems, & AI. 
            </p>
            <p>
              Matt supports diversity, improving education, STEM, equality, & humanity. 
              He appreciates nature, is an animal lover(cats & dogs included.), is an artist/musician(hopefully he will finish something one day.).
              He enjoys dark humor, chess, art, food, philosophy, physics, spending way too much time reading research papers, & traveling. 
            </p> 
            <p>
              Matt has been programming since 2007 using Python, Java, C, C++, C# with personal studies focusing more in Computer Science, Data Science, & Statistics.
              Responsibility brings out the best in Matt & he doesn't mind high expectations. 
              Matt is very knowledgeable about everything to do with Web3, Mathematics, Finance, & Tech in many different fields, industries.
            </p> 
            <p> 
              In his spare time, Matt is building a Web3 impact org & community-driven digital products. 
              Matt has certs from MITx, online coding courses/boot camps & thousands of hours invested in online courses, books, & references.
              Matt studies global crypto laws, global economics & global regulations. AI Advancement, Climate Change, Culture Change.
            </p> 
            <p> 
              Matt has created an esports team, an eCommerce brand, and two marketing agencies as well as contributed to many early-stage Web3 ventures.
              He can advise companies, orgs on developing technology solutions as well as navigating existing regulations with new projects, & feature additions. 
              Matt gives business not legal advice. 
            </p>
            <p>
              Matt is interested in working with companies, orgs who need help with: Trading Systems, DeFI products, Web3 business development, fundraising & Real Estate Projects. 
              Matt is looking to work with leaders in technology, finance, real estate & art.
            </p>
            <p>
              He can help with: Trading Systems Development, Internal Alignment, Business Development, Tech Solution Development, Presentations, Fundraising, Token Engineering, Engineering & Marketing Team Building & Strategy, Org Strategy, Advisory & much more.
            </p> 
            <p> 
             Contact Matt at: 
             mattreallycodes@protonmail.com
            </p>
            {close}
          </article>
          <article
              id="work"
              className={`${this.props.article === 'work'
              ? 'active'
              : ''} ${this.props.articleTimeout
                  ? 'timeout'
                  : ''}`}
              style={{
              display: 'none'
          }}>
            <h2 className="major">Works</h2>
	        <div className="image main">
	    	    <h3>Adding more Web3 projects soon.</h3> 
                   <ul>
                    Some examples:
                    <br/> 
                    <li>CivilianDAO - DAO, framework and dAPP around crisis management.</li>
                    <li>Occuwave - NFT Marketplace.</li>
                    <li>Revochain - Developer Guild for Web3.</li>
                    <li>EEstate - Proptech Startup.</li> 
                    <li>Evolvee - Web3 game.</li>
                    <li>Oversky- Originally Web2 agency, shifted to Web3. UI/UX for dApps.</li>
                   </ul>
	            <h3>Please check back here for more social links, free educational content offerings..</h3> 
	        </div>
            <div className="image main">
              <a href="https://www.canva.com/design/DAFBROd3hLU/inD6Qey6rBXXmNR0sHaC2Q/view?utm_content=DAFBROd3hLU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                <img src={pic07}  alt="Tradechain logo."/>
              </a>
            </div>
            <div> 
                <h3>Tradechain</h3>
                <p>
                  A Secuima product, custom blockchain for DeFi, Quant developers designed with latency in mind.
                  <br/><br/>
                  This custom blockchain supports Solidity contracts. aims for the fastest tx speed & best in class interoperability.  
                  <br/><br/> 
                </p>
                <a href="https://www.canva.com/design/DAFBROd3hLU/inD6Qey6rBXXmNR0sHaC2Q/view?utm_content=DAFBROd3hLU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  <h3>View Presentation</h3>
                </a>
                <a href="https://github.com/mattreallycodes/trade-chain">
                  <h3>View Code</h3>
                </a>
            </div>
            {close}
        </article>
         {/*  <div className="image main">
              <a href="https://carolinas.aaa.com/membership/">
                  <img src={pic02} alt="A glimpse of AAA site."/>
              </a>
            </div>
            <h3>CRWN CLOTHING APP</h3>
            <p>
              The Crwn Clothing App was built using ReactJS, Redux, SCSS, CSS Grid, Flexbox, 
              Styled Components, Redux Saga, Stripe, React Hooks, Firebase.
              <br/><br/>
              This fully responsive app's features include a Test Stripe integration, Google Auth Sign In,
              Email/Password Sign In, Shopping Cart, Data Fetching/Storing with Firebase + More.
            <div className="image main">
              <a href="https://camelcitygoods.com">
                <img src={pic04} alt="A glimpse of Camel City Goods site."/>
              </a>
            </div>
            <h3>
              CAMEL CITY GOODS
            </h3>
            <p>
              Camel City Goods is a retail brand that was born in Winston Salem, NC via the
              Airtype agency. Matt developed their Shopify website while working for the
              Airtype agency a few years ago using technologies such as Liquid, HTML, CSS,
              jQuery, Javascript, JSON, Gulp, Git.
            </p>
            <a href="https://camelcitygoods.com">
                <h3>Visit Camel City Goods</h3>
            </a>
            <div className="image main">
                <a href="https://ddn.com">
                  <img src={pic05} alt="A glimpse of the DDN website."/>
                </a>
            </div>
            <h3>
              DDN
            </h3>
            <p>
              DDN is America's largest Private Storage Provider. They are headquartered in
              Chatsworth, California. Matt worked on several templates and created new UI
              functionality, components for their Wordpress, Bootstrap Website.
            </p>
            <a href="https://ddn.com">
              <h3>Visit DDN</h3>
            </a>
            <div className="image main">
              <a href="https://razzafrazza.github.io/AIA/">
                  <img src={pic06} alt="A glimpse of the AIA website."/>
              </a>
            </div>
            <h3>AMERICAN INSTITUTE OF ARCHITECTS</h3>
            <p>
              Based in Washington, D.C. the AIA has been the leading professional membership
              association for licensed architects, emerging professionals, and allied partners
              since 1857. Matt created the American Institute of Architect's Single Page
              Application using HTML, CSS, jQuery, SVGS.
            </p>
            <a href="https://razzafrazza.github.io/AIA/">
              <h3>Visit AIA</h3>
            </a> */}
        {/*  <article
            id="about"
            className={`${this.props.article === 'about'
            ? 'active'
            : ''} ${this.props.articleTimeout
                ? 'timeout'
                : ''}`}
            style={{
            display: 'none'
          }}>
         <h2 className="major">About</h2>
            <span
              className="image main"
              style={{
              textAlign: 'center'
            }}>
              <img
                style={{
                  display: 'inline-block',
                  width: '53%',
                  padding: '8px',
                  borderRadius: '100%'
                }}
                src={pic01}
                alt="Portrait Shot of Matt."/>
            </span>
            <h3>THE BEGINNING</h3>
                  padding: '8px',
                  borderRadius: '100%'
                }}
                src={pic01}
                alt="Portrait Shot of Matt."/>
            </span>
            <h3>THE BEGINNING</h3>
            <p>
              Matt developed his first website in middle school after his favorite online games at
              the time were blocked by the school's IT Administrator. The website he created was a
              way for himself, classmates to circumvent this block. Matt took his first
              freelance assignment as a web developer while he was in highschool using HTML, CSS, Image Maps, Wordpress. Matt initially became interested in programming due to an interest in building better worlds. Matt was/is(debateable) also a complete nerd and into fanfiction, anime and writing alternate storylines to existing games as well as an avid reader of everything Fantasy and SciFi. 
            </p>
            <p>
              Matt was helping others with social profiles using Front End Engineering skills in highschool also. He went on to briefly study at college, he quickly left before completeing an associate's degree and then later went on to study graduate courses via MITx which he still needs to finish at some point though ultimately he wants to gain a master's  degree or similar via contributions to tech. 
            </p>
            <p>
              Since then Matt has spent a ton of time teaching himself as well as learning through experience:
              comp sci fundamentals, programming + much more. He has completed online courses through MITx, freeCodeCamp, Udemy 
              and more. Matt has thousands of hours invested in books, courses, and projects. 
            </p>
            <p>
              Matt has since went on to work as part of start-up, agency and corporate
              based teams working with B2B, B2C companies in several industries including:
            </p>
            <ul>
              <li>Health</li>
              <li>Marketing</li>
              <li>Finance</li>
              <li>Food</li>
              <li>Coaching</li>
              <li>Construction</li>
              <li>Tourism</li>
              <li>Humanitarian</li>
              <li>Beauty</li>
              <li>Fine Jewelry, Apparel</li>
            </ul>
            <p>Not only that, Matt has helped entrepreneurs define their personal brands through their
               websites, marketing strategies.
               Matt is currently selectively interested in new roles or projectsand looking for compensation of 150k+ in part time or full time capacity(ideally300k+). Matt is building early stage companies with a focus on social impact in DeFi, Gaming, Proptech, Crisis Management and raising funds for early stage companies in many different areas.  
            </p>
            <h3>INNOVATION, PASSION</h3>
            <p>
              Matt believes that if he doesn't learn something new on any given day, then that day
              is a failure. Matt believes in honesty, integrity in all aspects of life.</p>
            <p>
              Matt is great at managing multiple responsibilities, time management, naturally independant, 
              and constantly seeking new challenges.
            </p>
            <p>
              Matt stays on top of the latest trends in Engineering, Development, Design #reactamsterdam
              Matt is someone you can count on to put in the hard work required for success.
            </p> 
        </div> 
           */}
                <article
            id="contact"
            className={`${this.props.article === 'contact'
            ? 'active'
            : ''} ${this.props.articleTimeout
                ? 'timeout'
                : ''}`}
            style={{
            display: 'none'
          }}>
            <h2 className="major">Contact</h2>
            <form id="contact" name="contact" method="POST" data-netlify="true"  data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact"/>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <ul className="actions">
                <li>
                  <button type="submit" value="Send Message" className="special">Send Message</button>
                </li>
                <li>
                  <input type="reset" name="reset" value="Reset"/>
                </li>
              </ul>
            </form>
            <ul className="icons">
              <li>
                <a href="https://linkedin.com/in/mattliveshere" className="icon fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/mattreallycodes" className="icon fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
            {close}
          </article>
      </div>
      )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired
}

export default Main 
