import React, { useState, useEffect } from 'react';

// TODO: Phase 1: Define the track object

const WebPlayback = (props: any) => {
  // TODO: Phase 1: State hooks

  // TODO: Phase 1: Add useEffect to update the player state
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Bootcamp Spotify Project',
        getOAuthToken: (cb: any) => {
          cb(props.token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }: { device_id: any }) => {
        console.log('Ready with Device ID', device_id);
      });

      player.addListener('not_ready', ({ device_id }: { device_id: any }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.connect();
    };
  }, []);

  return <>{/* //TODO: Phase 1 */}</>;
};

export default WebPlayback;
