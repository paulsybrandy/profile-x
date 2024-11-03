<script>
    import { onMount } from 'svelte';
    
    let topTracks = [];
    
    // Replace 'YOUR_ACCESS_TOKEN' with a valid Spotify access token
    const accessToken = 'fdd66ddf85584822bf59562633e73190';
  
    async function fetchTopTracks() {
      const res = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const data = await res.json();
      topTracks = data.items;
    }
  
    onMount(() => {
      fetchTopTracks();
    });
  </script>
  
  <style>
    .spotify-card {
      background: #1db954;
      border-radius: 10px;
      padding: 20px;
      color: white;
      max-width: 300px;
      margin: auto;
    }
    .track {
      display: flex;
      align-items: center;
      margin: 10px 0;
    }
    .track img {
      border-radius: 5px;
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  </style>
  
  <div class="spotify-card">
    <h2>Your Top Tracks</h2>
    {#if topTracks.length > 0}
      {#each topTracks as track}
        <div class="track">
          <img src={track.album.images[0].url} alt={track.name} />
          <div>
            <div>{track.name}</div>
            <div>{track.artists.map(artist => artist.name).join(', ')}</div>
          </div>
        </div>
      {/each}
    {:else}
      <p>Loading...</p>
    {/if}
  </div>