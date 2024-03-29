import './VideoItem.css'
import React from 'react';

const VideoItem = ({video,onSelectedVideo}) => {
    return (
        <div className="video-item item" onClick={() => onSelectedVideo(video)}>
            <img 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.description} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )    
};

export default VideoItem;