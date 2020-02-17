// const CLOUDINARY_BASE_PATH =
//   "https://res.cloudinary.com/kingisaac95/image/upload/w_252,h_252,c_thumb,g_face"

const Speakers = [
  // {
  //   name: "Dan Abramov",
  //   work: "Software Engineer, Facebook",
  //   title: "JustJavaScript",
  //   twitterHandle: "dan_abramov",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512774/unstack_speakers/DanAbramov.jpg`,
  // },
  // {
  //   name: "Vishwa Mehta",
  //   work: "Technical Writer",
  //   title: "A11y & React: Breaking the Confundus Charm",
  //   twitterHandle: "VishwaMehta30",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512779/unstack_speakers/VishwaMehta.jpg`,
  // },
  // {
  //   name: "Uzoamaka Anyanwu",
  //   work: "JavaScript Developer, Lambda School",
  //   title: "JavaScript Essentials for ReactJS",
  //   twitterHandle: "HeyAmaka",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512773/unstack_speakers/AnyanwuAmaka.jpg`,
  // },
  // {
  //   name: "Bolaji Olajide",
  //   work: "Software Engineer, Pluralsight",
  //   title: "Getting Started with GraphQL",
  //   twitterHandle: "Bolaji___",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512777/unstack_speakers/BolajiOlajide.jpg`,
  // },
  // {
  //   name: "Sid Chatterjee",
  //   work: "Senior Software Engineer, Gatsby",
  //   title: "Building a Gatsby Theme",
  //   twitterHandle: "chatsidhartha",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512779/unstack_speakers/SidharthaChatterjee.jpg`,
  // },
  // {
  //   name: "James Quick",
  //   work: "Developer Advocate, Auth0",
  //   title: "Securing React Applications with Auth0",
  //   twitterHandle: "jamesquick",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512777/unstack_speakers/JamesQuick.png`,
  // },
  // {
  //   name: "Obinna Ekwuno",
  //   work: "Software Engineer, Gatsby",
  //   title: "Let's build a blazings fast website with Gatsby magic.",
  //   twitterHandle: "obinnaspeaks",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512778/unstack_speakers/ObinnaEkwuno.jpg`,
  // },
  // {
  //   name: "Segun Ola",
  //   work: "Software Engineer, Andela",
  //   title: "Accessibility - Build, Test, Fix",
  //   twitterHandle: "segunolalive",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512778/unstack_speakers/SegunOla.jpg`,
  // },
  // {
  //   name: "Ekene Ashinze",
  //   work: "Web Developer, OPay",
  //   title: "Bundle Size Optimisation in JavaScript Applications",
  //   twitterHandle: "ashinzekene",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512776/unstack_speakers/EkeneAshinze.jpg`,
  // },
  // {
  //   name: "Orjiewuru Kingdom",
  //   work: "Software Engineer, Andela",
  //   title: "Rapid prototyping with Tailwind css",
  //   twitterHandle: "kingisaac95",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581961398/unstack_organizers/kingdom.png`,
  // },
  // {
  //   name: "Olaolu Olawuyi",
  //   work: "Senior Frontend Engineer",
  //   title: "Chrome DevTools Power Tips",
  //   twitterHandle: "mrolaolu",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512779/unstack_speakers/OlaoluOlawuyi.png`,
  // },
  // {
  //   name: "Shodipo Ayomide",
  //   work: "MDE, Cloudinary",
  //   title: "Cloudinary on Steroids",
  //   twitterHandle: "developerayo",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581960800/unstack_organizers/shodipoayomide.png`,
  // },
  // {
  //   name: "Akitunde Sultan",
  //   work: "Founder, DevCareer",
  //   title: "Moving from Beginner - Intermediate - Advanced as a developer",
  //   twitterHandle: "hacksultan",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512773/unstack_speakers/AkintundeSultan.jpg`,
  // },
  // {
  //   name: "Glad Chinda",
  //   work: "Frontend Engineer, Flutterwave",
  //   title: "A deep dive into using React hooks",
  //   twitterHandle: "gladchinda",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512778/unstack_speakers/GladChinda.jpg`,
  // },
  // {
  //   name: "Tamas Piros",
  //   work: "Developer Evangelist,	Full Stack Training",
  //   title: "Getting started with JAMstack",
  //   twitterHandle: "tpiros",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512778/unstack_speakers/TamasPiros.jpg`,
  // },
  // {
  //   name: "Akinbode Akinlolu",
  //   work: "Full Stack Developer, Gricd",
  //   title: "Loading React Components Dynamically with Hooks",
  //   twitterHandle: "weezykon",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512773/unstack_speakers/AkinbodeAkinlolu.jpg`,
  // },
  // {
  //   name: "Adora Nwodo",
  //   work: "Software Engineer, Microsoft",
  //   title: "7 Habits for highly effective engineering teams",
  //   twitterHandle: "adoranwodo",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581960796/unstack_organizers/adora.jpg`,
  // },
  // {
  //   name: "Bolaji Ayodeji",
  //   work: "Developer Relations, Hashnode",
  //   title:
  //     "Building Reusable UI Components in Isolation with React and Storybook",
  //   twitterHandle: "iambolajiayo",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512775/unstack_speakers/BolajiAyodeji.png`,
  // },
  // {
  //   name: "Seun Daramola Faluyi",
  //   work: "QA Engineer, Andela",
  //   title: "Deploying a React app to Netlify",
  //   twitterHandle: "seunzone",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512778/unstack_speakers/SeunDaramola.jpg`,
  // },
  // {
  //   name: "Ademola Hussain",
  //   work: "Software Engineer, Andela",
  //   title: "Deploying a React app to Heroku app",
  //   twitterHandle: "daemorelah",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512775/unstack_speakers/DemolaHussain.jpg`,
  // },
  // {
  //   name: "Etinosa Obaseki",
  //   work: "Software Engineer",
  //   title: "Building a note app with ReactJS and Firebase",
  //   twitterHandle: "obasekietinosa",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512776/unstack_speakers/EtinObaseki.jpg`,
  // },
  // {
  //   name: "Tobi Taiwo",
  //   work: "Software Engineer , Andela",
  //   title: "Using TypeScript with ReactJS	",
  //   twitterHandle: "rebirthtobi",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512780/unstack_speakers/TobiTaiwo.jpg`,
  // },
  // {
  //   name: "Idahosa Akioya",
  //   work: "Frontend Developer, Spinlet",
  //   title: "Components: Class & Functional Components in ReactJS",
  //   twitterHandle: "donrozay",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512775/unstack_speakers/IdahosaAkioya.jpg`,
  // },
  // {
  //   name: "Emmanuel Popoola",
  //   work: "Frontend Engineer	Quidax",
  //   title: "Setting up a ReactJS project",
  //   twitterHandle: "hemmayo",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512776/unstack_speakers/EmmanuelPopoola.jpg`,
  // },
  // {
  //   name: "Anayo Oleru",
  //   work: "Software Engineer and CTO	onekioskafrica",
  //   title: "Deploying a React app to ZEIT",
  //   twitterHandle: "AnayoOleru",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512774/unstack_speakers/AnayoOleru.jpg`,
  // },
  // {
  //   name: "Sodiq Akinjobi",
  //   work: "Lead	DSC Unilag",
  //   title: "Hooking React with WordPress",
  //   twitterHandle: "Geektutor",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512773/unstack_speakers/AkinjobiSodiq.jpg`,
  // },
  // {
  //   name: "Etinosa Obaseki",
  //   work: "Software Engineer",
  //   title: "Building a note app with ReactJS and Firebase",
  //   twitterHandle: "obasekietinosa",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512776/unstack_speakers/EtinObaseki.jpg`,
  // },
  // {
  //   name: "Olibie Jennifer",
  //   work: "Software Engineer",
  //   title: "Deploying a ReactJS app to Nginx",
  //   twitterHandle: "dera_jo",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512777/unstack_speakers/JenniferOlibie.jpg`,
  // },
  // {
  //   name: "Daniel Bamidele",
  //   work: "Software Engineer, Andela",
  //   title: "Handling Large-Scale State-Management with Context and Hooks",
  //   twitterHandle: "humanityjs",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512776/unstack_speakers/DanielBamidele.jpg`,
  // },
  // {
  //   name: "Chukwuemeka Chima",
  //   work: "Software Engineer, Andela",
  //   title: "Building Reusable Components in ReactJS",
  //   twitterHandle: "chukwuemekachm",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512775/unstack_speakers/ChukwuemekaChima.jpg`,
  // },
  // {
  //   name: "Iyiola osuagwu",
  //   work: "React/React Native Engineer, Camelot inc",
  //   title: "Measuring ReactJS App Performance	Iyiola",
  //   twitterHandle: "osuagwu",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512778/unstack_speakers/IyiolaOsuagwu.jpg`,
  // },
  // {
  //   name: "Auwal MS",
  //   work: "Program Manager, DSC,	Google",
  //   title: "Building a note app with ReactJS and Firebase",
  //   twitterHandle: "auwalms",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512774/unstack_speakers/AuwalMS.jpg`,
  // },
  // {
  //   name: "Umar Mash",
  //   work: "Software Developer",
  //   title: "Aggregating big data into meaningful buckets: Elasticsearch",
  //   twitterHandle: "1baga",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512780/unstack_speakers/UmarMash.jpg`,
  // },
  // {
  //   name: "Bami Ogunfemi",
  //   work: "Frontend Engineer",
  //   title: "CSS-in-JS",
  //   twitterHandle: "bamiogunfemi",
  //   imageSrc: `${CLOUDINARY_BASE_PATH}/v1581512778/unstack_speakers/OgunfemiAyobami.jpg`,
  // },
]

export default Speakers
