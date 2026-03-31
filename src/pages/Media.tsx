import React from "react";


import media07 from "/assets/media/media-07.png"
import media06 from "/assets/media/media-06.png"
import media05 from "/assets/media/media-05.png"
import media04 from "/assets/media/media-04.png"
import media03 from "/assets/media/media-03.png"
import media02 from "/assets/media/media-02.png"
import media01 from "/assets/media/media-01.png"
import media011 from "/assets/media/media-011.png"
import lvluparticle from "/assets/media/lvlup-article.webp"

type MediaItem = {
  id: number;
  title: string;
  image: string;
  link: string;
};

const mediaData: MediaItem[] = [
  
  {
    id: 1,
    title:
      "Andhra Pradesh-based brand consulting firm Magsmen on the limelight in scaling…",
    image: media06,
    link: "https://theprint.in/ani-press-releases/andhra-pradesh-based-brand-consulting-firm-magsmen-on-the-limelight-in-scaling-up-brands-growth-to-10x-in-less-than-9-months/1233451/",
  },
  {
    id: 2,
    title:
      "Magsmen and VIT AP Partnership: A Catalyst for Innovation and Entrepreneuri…",
    image: media05,
    link: "https://up18news.com/tag/magsmen-brand-consultants/",
  },
  {
    id: 3,
    title: "Discover the Next Frontier in Brand Consulting as Magsmen Elevates the…",
    image: media04,
    link: "https://www.zee5.com/articles/discover-the-next-frontier-in-brand-consulting-as-magsmen-elevates-the-industry-landscape",
  },
  {
    id: 4,
    title: "Magsmen: Turning Business in to Brands",
    image: media03,
    link: "https://marketing.siliconindia.com/vendor/magsmen-turning-business-in-to-brands-cid-16030.html",
  },
  {
    id: 5,
    title: "Andhra Pradesh-based brand consulting firm Magsmen on the limelight in scaling up…",
    image: media02,
    link: "https://www.aninews.in/news/business/business/andhra-pradesh-based-brand-consulting-firm-magsmen-on-the-limelight-in-scaling-up-brands-growth-to-10x-in-less-than-9-months20221124151723/",
  },
  {
    id: 6,
    title: "Expanding Horizons: Magsmen’s Journey Of Growth, Partnerships, And Ethical Brands...",
    image: media01,
    link: "https://up18news.com/expanding-horizons-magsmens-journey-of-growth-partnerships-and-ethical-brands/",
  },
  {
    id: 7,
    title: "Magsmen and VIT AP Partnership: A Catalyst for Innovation and Entrepreneurial…",
    image: media011,
    link: "https://firstindia.co.in/news/press-releases/magsmen-and-vit-ap-partnership-a-catalyst-for-innovation-and-entrepreneurial-success",
  },
  {
    id: 8,
    title: "Magsmen And VIT AP Partnership:A Catalyst For Innovation and Entrepreneurial…",
    image: media011,
    link: "https://www.uniindia.com/GenericErrorPage.htm?aspxerrorpath=/article/news.aspx#google_vignette",
  },
  {
    id:9,
    title: "How a Brand Consultants Firm from Hyderabad Built a ₹16 Crore Offline Retail Empire in a Town Most Investors Overlooked",
    image: lvluparticle,
    link: "https://www.indianeconomicsnews.co.in/2026/03/how-brand-consultants-firm-from.html",
  },
  {
    id: 10,
    title:
      "Magsmen Ventures into International Territory with Launch of First Australian…",
    image: media07,
    link: "https://deccanbusiness.com/magsmen-ventures-into-international-territory-with-launch-of-first-australian-office-in-rowville-melbourne/",
  },
  {
    id:11,
    title: "How a Brand Consultants Firm from Hyderabad Built a ₹16 Crore Offline Retail Empire in a Town Most Investors Overlooked",
    image: lvluparticle,
    link: "https://m.dailyhunt.in/news/india/english/punjabbytes-epaper-dhb7faabc774324241990251ac4336f653/-newsid-dhb7faabc774324241990251ac4336f653_4a5f40012f5741019cc212a4e123dba1?sm=Y",
  },
];

const Media = () => {
  return (

    
    <section className="bg-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
              <section className="bg-white md:py-24 py-10">
        <div className='max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 mx-auto '>
          <div className='flex md:flex-row justify-around mx-auto md:gap-24 gap-5 items-center flex-col'>
            <h1 className='text-black text-8xl font-bold'>Media <br /> <span className='text-8xl font-thin'></span></h1>
           <p className='max-w-2xl'>
Explore diverse facets of branding through our latest insights and visionary concepts. Gain profound knowledge about the essential elements that empower a brand’s success.</p>
          </div>
        </div>
      </section>

        

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {[...mediaData].reverse().map((item) => (
            <article key={item.id} className="group">
              {/* Image */}
              <div className="overflow-hidden rounded-sm bg-gray-100 mb-6">
                <img
  src={item.image}
  alt={item.title}
  className="w-full h-full object-cover object-center"
/>
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium leading-snug mb-6 ">
                {item.title}
              </h3>

              {/* Read more */}
              <a
                href={item.link}
                className="inline-flex items-center gap-3 text-sm font-medium"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5a35a3] text-black transition-transform group-hover:translate-x-1">
                  →
                </span>
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
