// url or path of image 
//notes : if you want to use path of image type ${import.meta.env.VITE_BASE_URL}/Images/
//Because this is the best way to import photos without any expected problem using (environment variables ) .env
// If you want to use path images, please put the first image in the public/Images folder
// unlimited
const mobilesilder = [
    `${import.meta.env.VITE_BASE_URL}/Images/vitamine1.webp`, // path
    'https://uploads.unify.uno/content/2022/7/4/guide-aliments-70718100fc77ead5.jpeg', // url
    'https://skinkraft.com/cdn/shop/articles/Featured_1024x400.jpg?v=1639748395', //url
]
// max 3
const webimages = [
    `${import.meta.env.VITE_BASE_URL}/Images/vitamine1.webp`, // path
    'https://uploads.unify.uno/content/2022/7/4/guide-aliments-70718100fc77ead5.jpeg', // url
    'https://skinkraft.com/cdn/shop/articles/Featured_1024x400.jpg?v=1639748395', //url
]

export {mobilesilder,webimages}