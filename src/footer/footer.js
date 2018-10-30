import React from 'react';
import { connect } from 'react-redux';
import { loginActions } from '../_actions';

export const Footer = () => {
    return (<footer id="footer" data-stellar-background-ratio="0.5">
        <div className="container">
            <div className="row">
                <div className="copyright-text col-md-12 col-sm-12">
                    <div className="col-md-6 col-sm-6">
                        <p>Copyright &copy; 2018 Company Name:
                        <a rel="nofollow" href="/">Self Service 7/24</a></p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <ul className="social-icon">
                            <li><a href="#" className="fa fa-facebook-square" attr="facebook icon"></a></li>
                            <li><a href="#" className="fa fa-twitter"></a></li>
                            <li><a href="#" className="fa fa-instagram"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}
