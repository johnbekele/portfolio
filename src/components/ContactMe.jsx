import './ContactMe.css';

const ContactMe = () => {
    return (
        <div id='contactMe' className='sectionContainer'>
            <div className='contactMeContainer'>
                <div className='flexSpaceBetween'>
                    <h2 className='sectionTitle'> <span className='linkText'> 04. </span> Contact Me </h2>
                    <div className='horizontalLine'></div>
                </div>
                <div className='salute'>
                    <span className='linkText' style={{fontFamily: "'Fira Code', monospace"}}> What's next? </span>
                    <h1> Get in touch </h1>
                    <p>
                        I’m looking for great new opportunities so my inbox is always open. Whether you have a question or just want to say hi, 
                        I will get back to you as soon as possible !
                    </p>
                    <a href='yohans.Bekele@thomsonreuters.com' rel='noreferrer'>
                        <button className='outlinedBtn' style={{padding: '15px 50px'}}> Say Hello </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;