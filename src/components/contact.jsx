import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <section className="colorlib-contact" data-section="contact">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<h2 className="colorlib-heading">Contact</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5">
							<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="colorlib-icon">
									<i className="icon-globe-outline"></i>
								</div>
								<div className="colorlib-text">
									<p>Let us meet through the Skype.</p>
									<p><a href="#">Skype Name</a> live:.cid.218d423e7b0cd156</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        )
    }
}