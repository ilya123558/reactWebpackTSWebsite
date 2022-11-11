
import React from 'react';
import SubscribeDecor from './decor/SubscribeDecor';
import './HomeSubscribe.scss'
import SubscribeForm from './subscribeForm/SubscribeForm';

const HomeSubscribe = () => {
    return (
        <section className="section-home__subscribe">
            <SubscribeDecor />
            <div className="container">
                <div className="home-subscribe__title">Subscribe to us and stay tuned!</div>
                <SubscribeForm />
            </div>
        </section>
    );
};

export default HomeSubscribe;