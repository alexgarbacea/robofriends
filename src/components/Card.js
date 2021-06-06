import React from 'react';

const Card = ({name, email, id}) => {
    // const{name, email, id} = props;
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2 className="f4 tc grtxt">{name}</h2>
                <p className="tc">{email}</p>
            </div>
        </div>
    );
}

export default Card;