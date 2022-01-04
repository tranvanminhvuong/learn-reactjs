import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Album.propTypes = {

};

function Album({ album }) {
    return (
        <div>
            <div className='album_url'>
                <img src={album.url} alt={album.name} />
            </div>
            <p className='album_name'>{album.name}</p>
        </div>
    );
}

export default Album;