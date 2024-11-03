<script>
    import { onMount } from 'svelte';
  
    let repos = [];
    let loading = true;
  
    onMount(async () => {
      try {
        // Fetch the top 10 repositories sorted by stars
        const response = await fetch('https://api.github.com/users/paulsybrandy/repos?sort=stars&per_page=10');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const reposData = await response.json();
  
        // For each repository, fetch the commit count
        for (const repo of reposData) {
          const commitsResponse = await fetch(repo.commits_url.replace('{/sha}', ''));
          const commitsData = await commitsResponse.json();
          repo.commits_count = commitsData.length; // Store commit count
          repos.push(repo); // Add the repo to the repos array
        }
      } catch (error) {
        console.error('Failed to fetch repositories or commits:', error);
      } finally {
        loading = false; // Set loading to false after fetching
      }
    });
  </script>
  
  <style>
    .card {
      background-color: #1e1e1e; /* Dark background */
      color: white; /* Text color */
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }
  
    .repo {
      margin: 10px 0;
    }
  
    h2 {
      margin-bottom: 10px;
    }
  
    .loading {
      color: #bbb; /* Lighter color for loading text */
    }
  </style>
  
  <div class="card">
    <h2>Top 10 GitHub Repositories</h2>
    {#if loading}
      <p class="loading">Loading...</p>
    {:else if repos.length === 0}
      <p>No repositories found.</p>
    {:else}
      <div class="repos">
        {#each repos as repo}
          <div class="repo">
            <strong>{repo.name}</strong> - Commits: {repo.commits_count || 'N/A'}
          </div>
        {/each}
      </div>
    {/if}
  </div>