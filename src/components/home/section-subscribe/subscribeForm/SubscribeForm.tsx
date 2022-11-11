import React from 'react';
import './SubscribeForm.scss'

const SubscribeForm = () => {
    return (
        <form className='home-subscribe__form'>
            <input type="text" placeholder='Enter your e-mail' />
            <div className='home-subscribe__btn_inner'>
                <button>Send information</button>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.293 0.292787C10.4805 0.105316 10.7348 0 11 0C11.2652 0 11.5195 0.105316 11.707 0.292787L15.707 4.29279C15.8945 4.48031 15.9998 4.73462 15.9998 4.99979C15.9998 5.26495 15.8945 5.51926 15.707 5.70679L11.707 9.70679C11.5184 9.88894 11.2658 9.98974 11.0036 9.98746C10.7414 9.98518 10.4906 9.88001 10.3052 9.6946C10.1198 9.5092 10.0146 9.25838 10.0123 8.99619C10.01 8.73399 10.1108 8.48139 10.293 8.29279L12.586 5.99979H1C0.734784 5.99979 0.48043 5.89443 0.292893 5.70689C0.105357 5.51936 0 5.265 0 4.99979C0 4.73457 0.105357 4.48022 0.292893 4.29268C0.48043 4.10514 0.734784 3.99979 1 3.99979H12.586L10.293 1.70679C10.1055 1.51926 10.0002 1.26495 10.0002 0.999786C10.0002 0.734622 10.1055 0.480314 10.293 0.292787Z" fill="white" />
                </svg>
            </div>
        </form>
    );
};

export default SubscribeForm;