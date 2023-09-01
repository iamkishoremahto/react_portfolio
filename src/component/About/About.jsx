
import './About.scss'
import Work from './Work'
import workData from './workData'
const About = () => {

    return (
        <>
            <div className="row about">
                <h1>About <span className='blueFont'>Me</span></h1>
                <div className="row about_info">
                    <div className="col-md-6 about_decription">
                        <p>
                            Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.
                        </p>
                    </div>
                    <div className="col-md-6 about_basic_description">
                        <p><span className='blueFont'>Age</span > 32</p>
                        <p><span className='blueFont'>Residence</span> USA</p>
                        <p><span className='blueFont'>Address</span> 88 Some Street, Some Town</p>
                        <p><span className='blueFont'>e-mail</span> email@example.com</p>
                        <p><span className='blueFont'>Phone</span> +0123 123 456 789</p>
                    </div>


                </div>

                <div className="row what_i_do">
                    <h4>What <span className='blueFont'>I Do</span></h4>
                    <div className="row work_wrapper">


                        {
                            workData.map(data => (
                                <Work data={data} key={data.id} />
                            ))
                        }

                    </div>

                </div>

                <div className="row testimonials">
                <h4>Testimonials</h4>

                <div className="row testimonial_wraper">
                    
                </div>
                </div>







            </div>
        </>
    );
};

export default About