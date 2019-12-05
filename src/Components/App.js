import React from 'react';
import youtube from '../apis/Youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = { videos: [],selectedVideo: null };
    componentDidMount() {
        this.onSearchSubmit('Web Development');
    }
    onSearchSubmit = async term => {
        const response = await youtube.get('/search',{
            params:{
                q: term
            }
        });

        videos: response.data.items,
        selectedVideo: response.data.items[0]
        });
    };
    onSelectedVideo = video =>{
        this.setState({selectedVideo: video});
    }
        
    render() {
        return(
            
            <div className="ui container" style={{ marginTop : '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">    
                            <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo} />
                        </div>    
                    </div>
                </div>
            </div>   
            
        );
    }
    
}

export default App; 
