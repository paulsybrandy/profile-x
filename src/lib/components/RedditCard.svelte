<script>
  import { onMount } from 'svelte';

  export let username; // Get the Reddit username from props
  let profileData = {};
  let loading = true;

  onMount(async () => {
    try {
      const response = await fetch(`https://www.reddit.com/user/${username}/about.json`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      profileData = data.data; // Extract profile data
    } catch (error) {
      console.error('Failed to fetch Reddit user data:', error);
    } finally {
      loading = false;
    }
  });
</script>

<style>
  .profile-card {
    background-color: #ff4500; /* Reddit color */
    color: white; /* Text color */
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px; /* Space from other components */
    display: flex;
    align-items: center; /* Align items vertically */
  }

  .avatar {
    width: 50px; /* Size of the avatar */
    height: 50px; /* Size of the avatar */
    border-radius: 50%; /* Circular avatar */
    margin-right: 15px; /* Space between avatar and text */
  }

  .profile-info {
    margin: 15px 0;  /* Spacing in profile section */
  }

  .label {
    font-weight: bold; /* Make labels bold */
  }
</style>


<div class="profile-card">
  {#if loading}
    <p>Loading...</p>
  {:else if Object.keys(profileData).length === 0}
    <p>No profile data found.</p>
  {:else}
    
    <div>
      
      <p class="label"><u>Username:</u></p> 
      <h2>{profileData.name}</h2> <!-- User's name -->
      <p>{profileData.username}</p> <!-- User's Reddit username -->
      <p class="label"><u>Karma:</u></p> 
      <p>{profileData.link_karma + profileData.comment_karma}</p> <!-- Sum of link and comment karma -->
      <p class="label"><u>Cake Day:</u></p>
      <p>{new Date(profileData.created_utc * 1000).toLocaleDateString()}</p> <!-- Convert Unix timestamp to date -->
    </div>
  {/if}
</div>