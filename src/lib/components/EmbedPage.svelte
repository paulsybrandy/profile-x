<script>
    export let url = "https://paulsybrandy.com/card/index.html"; // Default URL
    export let width = "100%"; // Default width
    export let height = "500px"; // Default height
</script>

<style>
    .embed-container {
        overflow: hidden;
        position: relative;
        height: var(--embed-height); /* CSS variable */
    }
    .embed-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 750;
        height:500;
        border: none; /* Removes the default border of the iframe */
    }
</style>

<div class="embed-container" style="--embed-height: {height};">
    <iframe 
        src={url} 
        title="Embedded Content" 
        allowfullscreen 
        loading="lazy">
    </iframe>
</div>