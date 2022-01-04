import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import AlbumList from './AlbumList';

AlbumFeatures.propTypes = {

};

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            name: 'Rap Việt kết hợp',
            url: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/9/9/6/9/9969acf2847baec32053cb25dd37e142.jpg',
        },
        {
            id: 2,
            name: 'EDM kết hợp',
            url: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/0/c/a/e/0caeae9f1e3a9f411688542a3044820b.jpg',

        },
        {
            id: 3,
            name: 'Kpop kết hợp',
            url: '	https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/e/3/6/4e367de79f25791bef38dd4a6d7a34cb.jpg',
        }
    ]
    return (
        <div>
            <h3>Nghe gì hôm nay</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeatures;