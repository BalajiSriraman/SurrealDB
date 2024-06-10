import { Surreal } from 'surrealdb.js';

const db = new Surreal();

type Cat = {
  name: string;
  age: number;
  dp: string;
  parent: string;
  location: string;
}



const cats = [
  {
    name: 'Fluffy',
    age: 4,
    dp: 'https://d2kwjcq8j5htsz.cloudfront.net/2014/11/04141949/why-cats-cry.jpg',
  },
  {
    name: 'Pussy',
    age: 5,
    dp: "https://www.bluecross.org.uk/sites/default/files/pets/411340.jpg"
  }, {
    name: 'Pur',
    age: 6,
    dp: "https://www.aspca.org/sites/default/files/cat-care_cat-nutrition-tips_kitten_body1_right.jpg"
  },
  {
    name: 'Simba',
    age: 7,
    dp: "https://cdn.images.express.co.uk/img/dynamic/109/590x/secondary/cat-615490.jpg"
  },
  {
    name: 'Leo',
    age: 8,
    dp: "https://www.pinknews.co.uk/images/2018/02/pexels-photo-596590-650x433.jpeg"
  },
  {
    name: 'Jude',
    age: 9,
    dp: "https://static.boredpanda.com/blog/wp-content/uploads/2017/12/siberian-farm-cats-alla-lebedeva-11-5a3380d6de9fa__880.jpg"
  },
  {
    name: 'Leo',
    age: 10,
    dp: "https://www.petsworld.in/blog/wp-content/uploads/2015/10/3.png"
  },
  {
    name: 'Jude',
    age: 11,
    dp: "https://www.cathaven.com.au/assets/headers/_resampled/CroppedImage970295-Home-page-header.jpg"
  },
  {
    name: 'Leo',
    age: 12,
    dp: "https://media.buzzle.com/media/images-en/photos/mammals/cats/1200-57610618-sphynx-cat.jpg"
  },
  {
    name: 'Jude',
    age: 13,
    dp: "https://www.pets4homes.co.uk/images/articles/2390/large/more-information-on-the-attractive-and-unusual-serengeti-cat-548ff497a8260.jpg"
  },
  {
    name: 'Leo',
    age: 14,
    dp: "https://cdn.drfoxmag.com/wp-content/uploads/2017/11/A.-Best-cat-dental-treats.jpg"
  },
  {
    name: 'Jude',
    age: 15,
    dp: "https://cdn.kinsights.com/cache/91/41/91415d6514934cfb48da15664722ee3a.jpg"
  },
  {
    name: 'Leo',
    age: 16,
    dp: "https://img.buzzfeed.com/buzzfeed-static/static/2018-01/31/13/tmp/buzzfeed-prod-fastlane-02/tmp-name-2-27603-1517424563-1_dblbig.jpg"
  },
  {
    name: 'Jude',
    age: 17,
    dp: "http://a57.foxnews.com/images.foxnews.com/content/fox-news/us/2017/12/26/missing-for-10-years-cat-finds-his-way-back-to-family-after-california-wildfires/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1514343787192.jpg?ve=1&tl=1&text=big-top-image"
  },
  {
    name: 'Leo',
    age: 18,
    dp: "https://vmcdn.ca/f/files/halifaxtoday/images/animals/011118-cat-kitten-adobestock_86096187.jpeg"
  },
  {
    name: 'Jude',
    age: 19,
    dp: "https://yorkshiremeow.files.wordpress.com/2017/01/93791862_thinkstockphotos-585524268.jpg"
  },
  {
    name: 'Leo',
    age: 20,
    dp: "https://wallpapers.pictures/media/hi-human-3-wallpaper-background-1080x1920.jpg"
  },
  {
    name: 'Jude',
    age: 21,
    dp: "http://image.oregonlive.com/home/olive-media/width600/img/today/photo/grumpy-cat-tabatha-bundesen-60de1b3beabdbc21.jpg"
  },
]

await db.connect('http://127.0.0.1:8000/rpc', {
  // Set the namespace and database for the connection
  namespace: 'test',
  database: 'test',

  // Set the authentication details for the connection
  auth: {
    username: 'root',
    password: 'root',
  },
});

export const root = async () => {

  // Create a new record
  // const res = await db.create('cats', {
  //   name: 'Fluffy',
  //   age: 4,
  // })

  // This method returns the record of an authenticated scope user.
  // const user = await db.info();

  const query = `

  `

  return result
}
