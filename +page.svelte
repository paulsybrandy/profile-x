<script>
    import * as config from '$src/app.config';
    import DarkModeToggle from '$lib/components/DarkModeToggle';
    import XTwitter from '$lib/icons/XTwitter';
    import Github from '$lib/icons/Github';
    import Dribbble from '$lib/icons/Dribbble';
    import Codepen from '$lib/icons/Codepen';
    import BadgeCheck from '$lib/icons/BadgeCheck';
    import Astronaut from '$lib/icons/Astronaut';
    import ChatTMS from '$lib/icons/ChatTMS.svelte';
    import Death from '$lib/icons/Death';
    import ShortEdits from '$lib/icons/Shortedits';
    import ItBetterInThailand from '$lib/icons/ItBetterInThailand';
    import { onMount } from 'svelte';
    import GithubCard from '$lib/components/GithubCard.svelte'; 
    import Modal from '$lib/components/Modal.svelte'; 
    import RedditProfileCard from '$lib/components/RedditCard.svelte'; 
    import SpotifyProfileCard from '$lib/components/SpotifyProfileCard.svelte';

    let repos = [];
    let loading = true;
    let showModal = false;
    let myUsername = 'paulsybrandy1980'; // Replace this with your actual Reddit username
    
    const openPage = () => {
        window.open('https://paulsybrandy.com/badges.html', '_blank'); // Set the URL for your badges.
    };

    const toggleModal = () => {
        showModal = !showModal; // Toggle modal visibility
    };
    onMount(async () => {
        try {
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
                
                // Initialize details state for each repo
                detailsState[repo.name] = false; // Set initial state to closed
            }
        } catch (error) {
            console.error('Failed to fetch repositories or commits:', error);
        } finally {
            loading = false; // Set loading to false after fetching
        }
    });
</script>

<svelte:head>
	<title>{config.siteName}</title>
	<meta name="description" content={config.siteDescription} />
</svelte:head>

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

  .glow {
        position: relative;
        display: inline-block;
        color: #fff; /* or use your icon color */
    }

    .glow::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 253, 0, 0.6); /* Set the glow color, e.g., yellow */
        border-radius: 50%;
        z-index: -1;
        filter: blur(10px);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .glow:hover::after {
        opacity: 1; /* Make it visible on hover */
    }

    button {
        margin: 5px; /* Space between buttons */
        padding: 10px; /* Button padding */
        background-color: #007bff; /* Button color */
        color: white; /* Text color */
        border: none; /* No border */
        border-radius: 5px; /* Rounded corners */
        cursor: pointer; /* Pointer on hover */
    }

    button:hover {
        background-color: #0056b3; /* Darker shade on hover */
    }

</style>
      
<div class="w-full m-auto max-w-[1400px]">
	<div class="grid grid-cols-12 mx-auto lg:gap-16 xl:gap-20 2xl:gap-24">
		<div class="top-0 flex flex-col col-span-12 gap-6 p-6 overflow-y-auto lg:h-screen lg:sticky lg:col-span-6 xl:col-span-5 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 md:p-12 lg:p-16 xl:p-20 2xl:p-24 lg:pr-0 xl:pr-0 2xl:pr-0">
			<div class="flex flex-col items-center md:flex-row">
				<a class="flex flex-col items-center justify-center gap-3 pt-5 text-center md:pt-0 md:justify-start md:text-left md:flex-row md:gap-5 lg:gap-4 xl:gap-6" href="https://x.com/intent/follow?screen_name=loopsvariables" target="_blank">
					<!-- <Logo /> -->
					<img src="https://paulsybrandy.com/images/newest-neocube-logo-alt-circular.png" alt="neocube-profile-image" class="w-20 h-20 rounded-full md:w-16 md:h-16" />
					<div class="flex flex-col items-center justify-center text-xl md:items-start md:justify-start md:text-xl xl:text-xl">
						<span class="flex items-center gap-[0.3em] font-extrabold">Paul <BadgeCheck class="text-[#4a99e9] w-[1em] h-[1em]" /></span>
						<span class="font-medium opacity-60">@paulsybrandy</span>
					</div>
				</a>
				<div class="flex items-center gap-5 mt-6 md:mt-0 xl:gap-6 md:ml-auto">
					<div class="absolute top-10 right-10 md:top-0 md:right-0 md:relative opacity-40 hover:opacity-100">
						<DarkModeToggle className="w-6 h-6" />
					</div>
					<a class="text-lg xl:text-xl font-bold rounded-full bg-dark dark:bg-light hover:opacity-80 px-[1em] py-[0.5em] text-light dark:text-dark" href="https://x.com/intent/follow?screen_name=loopsvariables" target="_blank">Follow</a>
				</div>
			</div>

			<div class="px-5 text-xl text-center md:text-left md:text-2xl lg:text-2xl xl:text-2xl md:px-0">
		</div>
			<h1><u>Navigation</u></h1>
			<nav>
				<ul>
					<li><a href="#section1">Coding & Design Links</a></li>
					<li><a href="#section2">Social Links</a></li>
					<li><a href="#section3">Chat Links</a></li>
					<li><a href="#section4">Music Links</a></li>
					<li><a href="#section5">Book & Reading Links</a></li>
					<li><a href="#section6">Other Profile Links</a></li>
				</ul>
			</nav>
</div>

		<div class="col-span-12 p-6 -mt-6 lg:col-span-6 xl:col-span-7 md:p-12 lg:p-16 xl:p-20 2xl:p-24 lg:pl-0 xl:pl-0 2xl:pl-0 md:-mt-12 lg:mt-0">
		<div class="flex flex-col gap-6 text-base md:text-xl md:gap-6 lg:gap-7 xl:gap-8">
			<embed src="https://paulsybrandy.com/prosidebar/typing-alt.html" style="width:100%; height: 260px;">

			<button on:click={openPage}>
				Click here for my Profile Badges.
			</button>

		  
			<!-- Header for Coding & Design Links -->
			<u><h2 id="section1" class="text-xl font-bold">Coding & Design Links</h2></u>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<Github class="glow w-8 h-8" />
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">GitHub</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Check out my open source projects and contributions.</p>
					<main>
						<button on:click={toggleModal}>Show Top 10 GitHub Repositories</button> <!-- Button to open modal -->
						
						<!-- Modal showing when showModal is true -->
						<Modal show={showModal} onClose={toggleModal}>
						  <GithubCard />
						</Modal>
					  </main>					  
				</div>
			</a>
			
			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://gitlab.com/paulsybrandy" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="./images/gitlab2.png" class="glow w-8 h-8" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">GitLab</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Check out my open source projects and contributions.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://app.daily.dev/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/daily-dev.png" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">daily.dev</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Daily.dev is a free, open-source platform that provides developers with a personalized feed of tech content.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://gitbook.paulsybrandy.com" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/TISKBAF.png" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">TISKBAF (Gitbook)</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">GitBook is a platform for creating, editing, and sharing technical documentation. TISKBS
						AF (Things I SHould Know But Always Forget) is my notebook for remembering All sorts of tech stuff.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://codepen.io/paulsybrandy" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/codepen.png" width="35">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Codepen</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://stackoverflow.com/users/22722142/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/stackoverflow.webp" width="35">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Stack Overflow</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Where developers learn, share, & build.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.devlopea.com/profile/66a5bceb9df6bf1841f46172" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/devlopea.avif" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Devlopea</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Check out the developer social media platform.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://cara.app/paulneocube/all" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/cara.png" width="35">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Cara <span style="font-size: 12px; color: red">NEW</span></h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My profile on the new (beta) artist social and portfolio platform.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.deviantart.com/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/deviantart.webp" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">DeviantArt</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My profile on the world's original artist social and portfolio platform.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.figma.com/@7bd70e92_3cac_4" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/figma.webp" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Figma <span style="font-size: 12px; color: red">NEW</span></h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My profile on the popular collaborative design tool.</p>
				</div>
			</a>
			
			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.codechef.com/users/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/codechef.png" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">CodeChef <span style="font-size: 12px; color: red">NEW</span></h3>
					<p class="opacity-50 font-medium mt-[0.1em]">The popular and growing online educational and Programming Education platform</p>
				</div>
			</a>

			<!-- Header for Social Links -->
			<u><h2 id="section2" class="text-xl font-bold">Social Links</h2></u>
			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://linkedin.com/in/paulgsybrandy" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/linkedin.png" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">LinkedIn</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">See my professional profile on world's largest professional network.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.reddit.com/user/Paulsybrandy1980/" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/reddit.webp" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Reddit</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">See my reddits and subreddits.</p>
					<RedditProfileCard username={myUsername} />
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://clubsall.com/u/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/clubsall.png" width="35">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">ClubsAll <span style="font-size: 12px; color: red">NEW</span></h3>
					<p class="opacity-50 font-medium mt-[0.1em]">A decentralized Reddit platform alternative in the Fediverse.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://scribe.disroot.org/u/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/d-scribe.png" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">D-scribe</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Another decentralized Reddit alternative in the Fediverse, powered by the ActivityPub protocol.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://theres.life/@paulsybrandy" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/thereslife.png" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">There's Life</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Decentralized social media platform powered by Mastodon.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://fe.disroot.org/@paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/fedisroot.png" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">FEDIsroot</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Decentralized social media platform powered by Mastodon.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://bsky.app/profile/paulneocube.bsky.social" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/bluesky.png" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Bluesky</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My profile on the decentralized Twitter (now X) alternative.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://iris.to/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/iris.png" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Nostr - Iris.to</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My public profile on the decentralized social media platform powered by Nostr.</p>
				</div>
			</a>

			<!-- Header for Chat Links -->
		<u><h2 id="section3" class="text-xl font-bold">Chat Links</h2></u>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://t.me/PGSneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/telegram.webp" width="40">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Telegram</h3>
					<p class="opacity-50 font-medium mt-[0.1em]"></p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://web.groupme.com/contact/105795312/4YtQ8knY" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/groupme.webp" width="50">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">GroupMe</h3>
					<p class="opacity-50 font-medium mt-[0.1em]"></p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://threema.id/947DNXAS" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/threema.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Threema</h3>
					<p class="opacity-50 font-medium mt-[0.1em]"></p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://signal.group/#CjQKILNfRX7qULQ-h0_2ZVbmqZ7w3E-46PdnDkoZU6upfT1rEhBiCoPPPXwjLJECNt-tdM5M" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/signal.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Signal</h3>
					<p class="opacity-50 font-medium mt-[0.1em]"></p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://discord.com/users/1080950833950244936" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/discord.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Discord</h3>
					<p class="opacity-50 font-medium mt-[0.1em]"></p>
				</div>
			</a>


			<!-- Header for Music Links -->
		<u><h2 id="section4" class="text-xl font-bold">Music Links</h2></u>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.last.fm/user/paul-neocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/last-fm.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">last.fm</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My music world on last.fm.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://libre.fm/user/paul-neocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/libre-fm.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">libre.fm</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My music world on libre.fm.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://music.amazon.com/profiles/phnpxgxn7okks33zkqvdbkzifm?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_XJQ96kOC30gokb2Y8VD4vtr9q" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/amazon-music.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Amazon Music</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My Amazon Music playlists.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://open.spotify.com/user/tqpgy94he93ysjrpl29jutt6z?si=0667c8adae44481b&nd=1&dlsi=824e49685fe84309" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/spotify.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Spotify</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My Spotify playlists.</p>
				</div>
			</a>

			<!-- Header for Book & Reading Links -->
		<u><h2 id="section5" class="text-xl font-bold">Book & Reading Links</h2></u>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.goodreads.com/author/show/20517079.Paul_Sybrandy" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/goodreads.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Goodreads  - Author Profile</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My author profile on the social book cataloging website and online community for book lovers.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.librarything.com/author/sybrandypaul" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/librarything.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">LibraryThing  - Author Profile</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My author profile on the social cataloging and networking website for book lovers that allows users to create and share book catalogs.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.librarything.com/profile/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/librarything.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">LibraryThing  - Member Profile</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My member profile on the social cataloging and networking website for book lovers that allows users to create and share book catalogs.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.librarycat.org/lib/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/librarycat.png" width="45">
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">TinyCat - My Book Library</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My book library catalog hosted by TinyCat.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex flex-col gap-2" href="https://paulneocube.notion.site/My-Calibre-Book-Library-5b08c6cfdeab47738123713e51a575ba#95b3847cc6394aeaa7297862aee7b440" target="_blank">
				<!-- Change the "div" containing the image to occupy the full width -->
				<div class="w-full h-full rounded-[15px] shrink-0 flex items-center justify-center overflow-hidden bg-light dark:bg-dark">
					<img src="images/calibre-banner.png" alt="TinyCat - My Book Library" class="w-full h-auto" /> <!-- Ensures the image takes up full width -->
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">My Calibre Book Library - Notion database</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">My book library database hosted on the Notion platform.</p>
				</div>
			</a>

	
			<!-- Header for Other "Link-in-bio" Links -->
		<u><h2 id="section6" class="text-xl font-bold">Other Profile Links</h2></u>
			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://read.cv/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/read.cv.png" width="35" />
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">read.cv</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Visit my profile on the resume and projects website.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://tiles.bio/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/tiles.png" width="35" />
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Tiles <span style="font-size: 12px; color: red">NEW</span></h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Visit my Tiles link-in-bio.</p>
				</div>
			</a>

			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://hackerpulse.io/hacker/*paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/hackerpulse2.png" width="35" />
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">Hacker//Pulse</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Visit my profile on the a career growth copilot website for developers.</p>
				</div>
			</a>
			
			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://www.polywork.com/paul_sybrandy" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/pollywork.png" width="45" />
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">PollyWork</h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Visit my profile on the resume and projects website.</p>
				</div>
			</a>
			
			<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://bento.me/paulneocube" target="_blank">
				<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
					<img src="images/bentohub.png" width="35" />
				</div>
				<div class="flex flex-col">
					<h3 class="font-bold">BentoHub <span style="font-size: 12px; color: red">NEW</span></h3>
					<p class="opacity-50 font-medium mt-[0.1em]">Online github customization platform.</p>
				</div>
			</a>
	
		</div>
	</div>
	</div>
	</div>

