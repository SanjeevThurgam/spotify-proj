export {};
declare global {
    interface Window {
        onSpotifyWebPlaybackSDKReady: any;
        Spotify: any;
    }
}

window.onSpotifyWebPlaybackSDKReady = window.onSpotifyWebPlaybackSDKReady || {};
window.Spotify = window.Spotify || {};