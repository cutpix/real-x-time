import React from 'react';


const Stream = ({tracks = []}) => {
    const styles = tracks ? { color: 'red' } : {};
    return (
        <div style={styles} className="stream">
            {
                tracks.map((track, key) => {
                    return (
                        <div className="track" key={key}>
                            {track.title}
                        </div>
                    );
                })
            }
        </div>
    );
};


export default Stream;