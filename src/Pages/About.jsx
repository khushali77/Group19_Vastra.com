import React from "react";
import '../Css/about.css';

function About(){
    return(
        <section className="section_all bg-light" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title_all text-center">
                            <h3 className="font-weight-bold fwb">Welcome to <span className="text-custom">Vastra</span></h3>
                            <div className="">
                                <i className=""></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row vertical_content_manage mt-5">
                    <div className="col-lg-6">
                        <div className="about_header_main mt-3">
                            <h4 className="about_heading text-capitalize font-weight-bold mt-4 fwb2">Lorem Ipsum is simply dummy text of the printing industry.</h4>
                            <p className="text-muted mt-3">Contrary to popular belief, Lorem Ipsum is not simply random text. essor at Hampden-Sydney College in Virginia, Richard McClintock, It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                            <p className="text-muted mt-3"> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, Richard McClintock, a Latin professor at Hampden-Sydney Col,looked up one of the more obscuremaking it over 2000 years old.Contrary to popular belief, Lor Latin words, consectetur, making it over 2000 years old.Contrary to popular belief, Lor from a ey College in Virginia, looked up one of the Lorem Ipsum passage, f classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img_about mt-3">
                            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" class="img-fluid mx-auto d-block"/>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    )
}

export default About;

