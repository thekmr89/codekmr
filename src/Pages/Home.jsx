import {React,useRef,useEffect} from "react";
import { useMasterContext } from '../components/MasterContext';
import { CustomSelect } from '../components/CustomSelect';
import { PortfolioData } from "../data/PortfolioData";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import $ from 'jquery';

export const Home = () => {
    const form = useRef();
    const {setloader} = useMasterContext();

    useEffect(() => {
        $('.form-control').each(function () {
            $(this).toggleClass("valid", this.value !== "");
        });
        $('.form-control').change(function () {
            $(this).toggleClass("valid", this.value !== "");
        });
    }, []);

    const validateForm = () => {
        let isInvalid = null;
        $('.InptFld input').each(function(){
            if ($(this).val().trim() === '') {
                isInvalid = this;
                return false;
            }
        });

        const invalidLabel = isInvalid ? $(isInvalid).siblings('label').text() : null;
        return { isInvalid , invalidLabel};
    };    

    const sendEmail = (e) => {
        e.preventDefault();
        const {isInvalid , invalidLabel} = validateForm();
        if (isInvalid === null) {
            setloader(true);
            emailjs.sendForm('service_4uu6zlq', 'template_ykjlkik', form.current, 'ndVVqni1uJxBnHQF4')
                .then((result) => {
                    form.current.reset();
                    $('.InptFld input,textarea').each(function(){
                        $(this).removeClass('valid');
                    });
                    window.location.href='https://thekmr89.github.io/codekmr/thank-you/';
                    setloader(null);
                })
                .catch((error) => {
                    $('#form1 .btn').after(`<p class="message">Something Went Wrong!</p>`)
                });
        } else {
            $(isInvalid).focus();
            alert(`Please enter ${invalidLabel}`);
        }
    };    
    return (
        <>
            <main>
                <div className="banner home-banner">
                    <div className="container">
                        <div className="content">
                            <h1>Crafted Code,<br />Elegant Design</h1>
                            <p>Hello, I am <b>Susheel Kumar</b> a Passionate full-stack web developer, seamlessly blending design and code to craft visually stunning and functionally robust websites.</p>
                            <div className="btn"><button onClick={() =>  document.querySelector('.homeSecA').scrollIntoView({ behavior: 'smooth' })}>View Portfolio</button></div>
                            <div className="btn"><Link to={'/codekmr/thank-you'}>Thank You</Link></div>
                        </div>
                    </div>
                </div>
                <section >
                    <div className="homeSecA">
                        <div className="container">
                            <div className="model-body">
                                <div className="colA">
                                    <div className="heading">
                                        <h3>Skillset <span>Spotlight</span></h3>
                                    </div>
                                    <div className="col">
                                        <span>Language</span>
                                        <div className="col-md-sec">
                                            <div className="col-md">
                                                <h4>HTML</h4>
                                                <progress value={95} max={100} />
                                            </div>
                                            <div className="col-md">
                                                <h4>CSS(LESS,SCSS,SASS)</h4>
                                                <progress value={95} max={100} />
                                            </div>
                                            <div className="col-md">
                                                <h4>JS</h4>
                                                <progress value={85} max={100} />
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="col">
                                        <span>Libraries</span>
                                        <div className="col-md-sec">
                                            <div className="col-md">
                                                <h4>ReactJS</h4>
                                                <progress value={75} max={100} />
                                            </div>
                                            <div className="col-md">
                                                <h4>jquery</h4>
                                                <progress value={95} max={100} />
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="col">
                                        <span>Backend</span>
                                        <div className="col-md-sec">
                                            <div className="col-md">
                                                <h4>Django</h4>
                                                <progress value={35} max={100} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="colB">
                                <div className="heading"><h3>About <span>Me</span></h3></div>
                                    <div className="WrapCol">
                                        <div className="headS">
                                            <div className="icon"><img src={require('../assets/images/image.jpg')} alt="" /></div>
                                            <div className="ttl">
                                                <h4>Susheel Kumar</h4>
                                                <p>Web Developer</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <p>From Gurugram, Haryana, India</p>
                                            <div className="flex">
                                                <div className="col-ms">
                                                    <p><b>Current Employment:</b></p>
                                                    <p>iBrandox Online Pvt. Ltd</p>
                                                    <p>Frontend Web Developer</p>
                                                    <p>2022 - Present</p>
                                                </div>
                                                <div className="colms">
                                                    <p><b>Education:</b></p>
                                                    <p>Bachelor of Science in Computer</p>
                                                    <p>DPG Degree College, Gurugram</p>
                                                    <p>2021</p>
                                                </div>
                                            </div>
                                            <ul>
                                                <li>Implemented responsive web designs for mobile devices using HTML5, CSS3, JavaScript, JQuery.</li>
                                                <li>Implemented responsive web designs for mobile devices, ensuring optimal viewing and interaction experiences across a wide range of devices and screen sizes.</li>
                                                <li>Created successful websites that met requirements for objectives such as load speed and design.</li>
                                                <li>Analyzed user feedback to identify areas of improvement in user experience.</li>
                                                <li>Assisted in developing a search engine optimization strategy for websites.</li>
                                                <li>Researched and tracked new web technologies to enhance applications.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="homeSecB">
                        <div className="container">
                            <div className="heading">
                                <h3>Projects</h3>
                            </div>
                            <div className="gridWrap">
                                <div className="grid">
                                    {PortfolioData &&
                                        PortfolioData.map((portfolio) => {
                                            const {url,image,title} = portfolio;
                                            return (
                                                <div className="col" key={title}>
                                                    <Link to={url} target="_blank">
                                                        <figure><img src={require(`../assets/images/project/${image}`)} alt="" /></figure>
                                                        <figcaption>{title}</figcaption>
                                                        <div className="web-link">
                                                            <button type="button"><img src={require(`../assets/icon/browser.png`)}/></button>
                                                        </div>
                                                    </Link>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="inquirySec">
                        <div className="container">
                            <div className="inquirySecwrap">
                                <div className="heading">
                                    <h3>Get in Touch </h3>
                                </div>
                                <form id='form1' ref={form} onSubmit={sendEmail}>
                                    <div className="InptFld">
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="user_name" placeholder="Enter Your Name" autoComplete='off' required/>
                                            <label>Name*</label>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="email" name="user_email" placeholder="Enter Your Email" autoComplete="off" required />
                                            <label>Email*</label>
                                        </div>
                                        <div className="form-group">
                                            <input className='form-control' type="text" minLength="7" maxLength="15" placeholder='Enter Your Contact' name="user_contact" onChange={(e) => e.target.value = e.target.value.replace(/[^0-9+-]/g,'')} required autoComplete="off" />
                                            <label>Contact*</label>
                                        </div>
                                        <div className="form-group">
                                            <CustomSelect select="service" label="Select Service" isrequired options={["Frontend Web Development", "FullStack Web Development", "UI/UX Design"]} />
                                        </div>
                                        <div className="form-group message-bx flex100">
                                            <textarea className='form-control' name="user_message" maxLength="200" placeholder='Maximum Charcter 200' required />
                                            <label>Message*</label>
                                        </div>
                                    </div>
                                    <div className="btn"><input type="submit" value="Submit" /></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
