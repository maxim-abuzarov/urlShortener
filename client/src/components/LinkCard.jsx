import React from 'react';

const LinkCard = ({link}) => {
    return (
        <div className='center-align'>
            <h2>URL</h2>

            <p>Your url: <a href={link.to} target='_blank' rel="noreferrer noopener">{link.to}</a></p>
            <p>From: <a href={link.from} target='_blank' rel="noreferrer noopener">{link.from}</a></p>
            <p>Clicks: <strong>{link.clicks}</strong></p>
            <p>Date: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </div>
    );
};

export default LinkCard;