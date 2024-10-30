<script>
	import * as config from '$src/app.config';
	import DarkModeToggle from '$lib/components/DarkModeToggle';

	// icon svgs
	import XTwitter from '$lib/icons/XTwitter';
	import Github from '$lib/icons/Github';
	import Dribbble from '$lib/icons/Dribbble';
	import Codepen from '$lib/icons/Codepen';
	import BadgeCheck from '$lib/icons/BadgeCheck';

	// work/project list svgs
	import Astronaut from '$lib/icons/Astronaut';
	import ChatTMS from '$lib/icons/Chattms';
	import Death from '$lib/icons/Death';
	import ShortEdits from '$lib/icons/Shortedits';
	import ItBetterInThailand from '$lib/icons/ItBetterInThailand';
</script>

<svelte:head>
	<title>{config.siteName}</title>
	<meta name="description" content={config.siteDescription} />
</svelte:head>

<div class="w-full m-auto max-w-[1400px]">
	<div class="grid grid-cols-12 mx-auto lg:gap-16 xl:gap-20 2xl:gap-24">
		<div class="top-0 flex flex-col col-span-12 gap-6 p-6 overflow-y-auto lg:h-screen lg:sticky lg:col-span-6 xl:col-span-5 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 md:p-12 lg:p-16 xl:p-20 2xl:p-24 lg:pr-0 xl:pr-0 2xl:pr-0">
			<div class="flex flex-col items-center md:flex-row">
				<a class="flex flex-col items-center justify-center gap-3 pt-5 text-center md:pt-0 md:justify-start md:text-left md:flex-row md:gap-5 lg:gap-4 xl:gap-6" href="https://x.com/intent/follow?screen_name=loopsvariables" target="_blank">
					<!-- <Logo /> -->
					<img src="/images/profile.jpg" alt="Henry" class="w-20 h-20 rounded-full md:w-16 md:h-16" />
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

				<p class="mt-[1em]">Welcome to my main profile page!</p>
			</div>

			<div class="flex items-center justify-center gap-10 py-6 mt-auto lg:py-0 md:justify-start">
				<a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://x.com/intent/follow?screen_name=loopsvariables" target="_blank">
					<XTwitter class="w-8 h-8" />
				</a>
				<a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://dribbble.com/henry" target="_blank">
					<Dribbble class="w-8 h-8" />
				</a>
				<a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://github.com/loopsandvariables" target="_blank">
					<Github class="w-8 h-8" />
				</a>
				<a class="p-2 -m-2 opacity-100 hover:opacity-60" href="https://codepen.io/loopsandvariables" target="_blank">
					<Codepen class="w-8 h-8" />
				</a>
			</div>
		</div>
		<div class="col-span-12 p-6 -mt-6 lg:col-span-6 xl:col-span-7 md:p-12 lg:p-16 xl:p-20 2xl:p-24 lg:pl-0 xl:pl-0 2xl:pl-0 md:-mt-12 lg:mt-0">
			<div class="flex flex-col gap-6 text-base md:text-xl md:gap-6 lg:gap-7 xl:gap-8">
				<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://astronaut.build" target="_blank">
					<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
						<Astronaut />
					</div>
					<div class="flex flex-col">
						<h2 class="font-bold">Astronaut</h2>
						<p class="opacity-50 font-medium mt-[0.1em]">Build and launch your app with Astronaut, a production ready SvelteKit boilerplate.</p>
					</div>
				</a>

				<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https:/chattms.ai" target="_blank">
					<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
						<ChatTMS />
					</div>
					<div class="flex flex-col">
						<h2 class="font-bold">ChatTMS</h2>
						<p class="opacity-50 font-medium mt-[0.1em]">AI powered assistant for your TMS practice. Trained weekly with research, protocols, and more.</p>
					</div>
				</a>

				<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://death.iwasweak.com" target="_blank">
					<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
						<Death />
					</div>
					<div class="flex flex-col">
						<h2 class="font-bold">Death</h2>
						<p class="opacity-50 font-medium mt-[0.1em]">Turns out I only have 2,000 weeks left. I'm trying to make them count.</p>
					</div>
				</a>

				<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://shortedits.com" target="_blank">
					<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
						<ShortEdits />
					</div>
					<div class="flex flex-col">
						<h2 class="font-bold">Short Edits</h2>
						<p class="opacity-50 font-medium mt-[0.1em]">Productized video editing service. Get your videos edited like clockwork.</p>
					</div>
				</a>

				<a class="rounded-[20px] md:rounded-[25px] p-5 md:p-6 bg-dark/5 hover:bg-dark/10 dark:bg-light/5 dark:hover:bg-light/10 flex items-center gap-[1.5em]" href="https://itsbetterinthailand.com" target="_blank">
					<div class="w-[80px] md:w-[90px] md:h-[90px] md:rounded-[18px] h-[80px] rounded-[15px] shrink-0 flex items-center justify-center bg-light dark:bg-dark">
						<ItBetterInThailand />
					</div>
					<div class="flex flex-col">
						<h2 class="font-bold">It's better in Thailand</h2>
						<p class="opacity-50 font-medium mt-[0.1em]">A project I started in 2015. I had a crazy idea to travel to every province in Thailand.</p>
					</div>
				</a>

				<div class="opacity-50 flex flex-col items-center justify-center w-full gap-[1em] text-center p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">
					<span class="text-3xl font-medium">¯\_(ツ)_/¯</span>
					<p class="font-medium">I guess I should ship more.</p>
				</div>
			</div>
		</div>
	</div>
</div>
