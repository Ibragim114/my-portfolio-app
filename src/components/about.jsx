import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                        <span className="heading-meta">About Us</span>
                        <h2 className="colorlib-heading">Who Am I?</h2>
                        <p><strong>Hi I'm Ibragim Yandiyev</strong> I am a member of SCT, have been working as a senior web developer since 5 years ago.</p>
                        <p>I've completed many projects large and small both  successfully until now.</p>
                        <p>I love my wife heartly, Nadezhda, she is more beautiful than venus goddess. My stress release is fast car driving. I enjoy car driving. </p>
                    </div>
                </div>
                </div>
                <div className="row">
					<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
						<div className="services color-1">
							{/* <span className="icon2"><i className="icon-bulb"></i></span> */}
							<h3>Graphic Design</h3>
						</div>
					</div>
					<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
						<div className="services color-2">
							{/* <span className="icon2"><i className="icon-globe-outline"></i></span> */}
							<h3>Web Design</h3>
						</div>
					</div>
					<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
						<div className="services color-3">
							{/* <span className="icon2"><i className="icon-data"></i></span> */}
							<h3>Front End</h3>
						</div>
					</div>
					<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
						<div className="services color-4">
							{/* <span className="icon2"><i className="icon-phone3"></i></span> */}
							<h3>Back End</h3>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
						<div className="hire">
							<h2>I am happy to know you <br/>that 157+ projects done sucessfully!</h2>
							<a href="#" data-nav-section="contact" className="btn-hire">Hire me</a>
						</div>
					</div>
				</div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
