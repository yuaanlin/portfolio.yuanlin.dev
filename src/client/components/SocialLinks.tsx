import React from "react";
import "../Styles/SocialLinks.less";

export default class SocialLinks extends React.Component {
    render() {
        return (
            <div className="social-link">
                <div className="icon">
                    <a href="https://www.instagram.com/yuanlin___">
                        <img src="assets/icons/instagram.svg" alt="instagram" />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://www.facebook.com/ken20001207">
                        <img src="assets/icons/facebook.svg" alt="facebook" />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://github.com/ken20001207">
                        <img src="assets/icons/github.svg" alt="github" />
                    </a>
                </div>
                <div className="icon">
                    <a href="https://www.behance.net/yuanlinlin">
                        <img src="assets/icons/behance.svg" alt="behance" />
                    </a>
                </div>
            </div>
        );
    }
}
