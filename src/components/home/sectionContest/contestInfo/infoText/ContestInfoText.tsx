import React from 'react';
import './ContestInfoText.scss'

const ContestInfoText = () => {
    return (
        <div className='home-contest__info_inner'>
            <p className="home-contest__info-text">
                Test the FOIL NFT storage, send and receive encrypted messages, transactions and save
                NFT content over blockchain and bring the crypto benchmark tests of FOIL Network live!
                1,250,000 FOIL are reserved for the crypto airdrop and bounty participants.
            </p>
            <div className='home-contest__arrow_inner'>
                <h3 className="home-contest__info-title">
                    Join FOIL Blockchain Interactions and earn FOIL crypto.
                </h3 >
                <div className="home-contest__info-arrow">
                    <svg width="138" height="138" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="68.8715" cy="68.8684" r="63.8597" transform="rotate(176.34 68.8715 68.8684)" stroke="#21D4FD" strokeOpacity="0.4" strokeWidth="2" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M74.679 72.5914C74.8855 72.8141 75.0015 73.1161 75.0015 73.431C75.0015 73.7458 74.8855 74.0478 74.679 74.2705L70.2735 79.0206C70.0669 79.2432 69.7869 79.3683 69.4948 79.3683C69.2028 79.3683 68.9227 79.2432 68.7161 79.0206L64.3106 74.2705C64.11 74.0466 63.999 73.7466 64.0015 73.4352C64.004 73.1239 64.1198 72.826 64.3241 72.6059C64.5283 72.3857 64.8045 72.2608 65.0933 72.2581C65.382 72.2554 65.6603 72.3751 65.868 72.5914L68.3934 75.3144L68.3934 61.5558C68.3934 61.2409 68.5095 60.9388 68.716 60.7161C68.9226 60.4934 69.2027 60.3683 69.4948 60.3683C69.7869 60.3683 70.0671 60.4934 70.2736 60.7161C70.4802 60.9388 70.5962 61.2409 70.5962 61.5558L70.5962 75.3144L73.1216 72.5914C73.3282 72.3688 73.6083 72.2437 73.9003 72.2437C74.1924 72.2437 74.4725 72.3688 74.679 72.5914Z" fill="#21D4FD" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ContestInfoText;