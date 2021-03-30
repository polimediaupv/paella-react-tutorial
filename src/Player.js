import { Paella } from 'paella-core';
import basicPluginContext from 'paella-basic-plugins';
import { useEffect } from 'react';

let paella = null;
function Player({ width, height }) {

    useEffect(() => {
        if (!paella) {
            paella = new Paella('player-container', {
                customPluginContext: [
                    basicPluginContext()
                ]
            });
            paella.loadManifest()
                .then(() => console.log("Done"))
                .catch(e => console.error(e));
        }

    }, [])

    return (
        <div id="player-container" className="player-container" style={{
            position: "relative",
            width: width,
            height: height,
            marginLeft: "auto",
            marginRight: "auto",
            left: "0",
            right: "0"
            }}></div>
    
    )
}

export default Player;