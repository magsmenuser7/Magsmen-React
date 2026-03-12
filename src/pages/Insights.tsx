import React from 'react';
import { Link,useParams, useSearchParams } from 'react-router-dom';

import { Calendar, Clock, ArrowRight } from 'lucide-react';
import hyperpersonalizationcraftingbrandexperiences from '/assets/blogs/hyper-personalization-crafting-brand-experiences-that-speak-to-gen-zs-individuality.jpg'
import thefutureofbrandingtrendsshapingthenextdecade from '/assets/blogs/the-future-of-branding-trends-shaping-the-next-decade.jpg'
import thebrandjourneyguidingstartupsfromideatoiconic from '/assets/blogs/the-brand-journey-guiding-startups-from-idea-to-iconic.jpg'
import whyyourbrandneedsauniquetoneofvoice from '/assets/blogs/why-your-brand-needs-a-unique-tone-of-voice.jpg'
import visualstorytellinginbranding from '/assets/blogs/visual-storytelling-in-branding.jpeg'
import theglobalbrandplaybookhowtostayculturallyrelevantindiversemarkets from '/assets/blogs/the-global-brand-playbook-how-to-stay-culturally-relevant-in-diverse-markets.png'
import theintersectionofdataandcreativityinbranding from '/assets/blogs/the-intersection-of-data-and-creativity-in-branding.jpg'
import thepowerofstrategicbrandpositioning from '/assets/blogs/The-Power-of-Strategic-Brand-Positioning.jpg'
import developingascalable from '/assets/blogs/developing_a_scalable.png'
import rebrandingintheeraofdigitaldisruption from '/assets/blogs/rebranding_in_the_era.png'
import futureproofingthrough from '/assets/blogs/future_proofing_through.png'
import futureproofingyourbrand from '/assets/blogs/the-future-of-branding-embracing-digital-transformation_NTYVQ3k.jpg'
import craftingastorybrand from '/assets/blogs/crafting-a-strong-brand-identity-essential-elements.jpg'
import simplifyingyourbrandstrategy from '/assets/blogs/how-simplifying-your-brand-strategy-can-lead-to-success.jpg'
import thefutureofbranding from '/assets/blogs/the-future-of-branding-embracing-digital-transformation.jpg'
import brandDifferentiation from '/assets/blogs/brand-defination.jpeg'
import impactofbrandexperience from '/assets/blogs/the-effects-of-customer-experience.jpg'
import whystartupsneed from '/assets/blogs/why-startups-need-to-focus-on.png'
import audiobranding from '/assets/blogs/audio-branding.jpg'
import brandarchitecture from '/assets/blogs/Brand_architecture_is_a_companys_organizational_structure_for_its_parent_brand_a_2icY6hG.png'
import brandmanagementforfamily from '/assets/blogs/brand-management-for-family.jpg'
import threeyearsofbuildingiconic from '/assets/blogs/web_cover_page_2.jpg'
import rewritingtherules from '/assets/blogs/india_ads.jpg'
import elevatingyourbrand from '/assets/blogs/BLOG_DESIGN_TEMPLATE.png'
import understandingthepowerofbranding from '/assets/blogs/BLOG_DESIGN_TEMPLATE_1.png'
import theroleofbrandstrategy from '/assets/blogs/BLOG_DESIGN_TEMPLATE_3.png'
import thevalueofbrandconsultation from '/assets/blogs/BLOG_DESIGN_TEMPLATE_3.jpg'
import blogdesigntemplate from '/assets/blogs/BLOG_DESIGN_TEMPLATE_2.jpg'
import thepowerofbrnadconsistency from '/assets/blogs/blog_7.png'
import buildingastrongbrandidentity from '/assets/blogs/blog_6.png'
import navigatingconsumerbehaviour from '/assets/blogs/blog_5.png'
import buildingandrefreshingyourbrand from '/assets/blogs/blog_4.png'
import harnessingthepowerofcoloursinbranding from '/assets/blogs/blog_3.png'
import postcoviddigitalmarketingstratgies from '/assets/blogs/Blog_2.png'
import decodingbrandingmarketingadvertising from '/assets/blogs/decosing.png'
import goodvsbadbrands from '/assets/blogs/Goods-vs-bad-brands.png'
import unlockingthepowerofbrandpositioning from '/assets/blogs/unlocking_the_power_of_brand.jpg'
import startyourbrandstrategy from '/assets/blogs/magsmen-ideaspage-start-your-brand-strategy-1200x630.png'
import youcanbrandanything from '/assets/blogs/magsmen-ideaspage-you-can-brand-anything-1200x630.png'
import beunforgettable from '/assets/blogs/blogpostmagsmen.jpg'
import theroleofbrandpurposeinbusiness from '/assets/blogs/role-of-business-in-purpose.jpg'
import colouryoursummerwithfunandvibrance from '/assets/blogs/magsmen-blog.jpg'
import uniquandcreativesummerbrandingstrategies from '/assets/blogs/Summer_blog.jpg'
import brandrefreshing from '/assets/blogs/Brand_Refreshing.jpg'
import focusingonanicheforyourbrand from '/assets/blogs/LawofContraction.jpg'
import barndconsistencychecklist from '/assets/blogs/Consistency_Checklist.jpg'
import hereiswhybrandconsistencyfails from '/assets/blogs/LawOfConsistency (1).jpg'
import colourphyscologyinbusiness from '/assets/blogs/color-psychology-in-business-how-it-impacts-decisions.jpg'
import importanceofaperfectwebsitedesign from '/assets/blogs/importance-of-a-perfect-website-design.png'
import howtocreateaneffectivebrandname from '/assets/blogs/how-to-create-an-effective-brand-name-for-your-product-service.png'
import understandthedifferencebetweenmarketingandbranding from '/assets/blogs/understand-the-difference-between-marketing-and-branding.png'
import socilamediamarketingforsmallbusiness from '/assets/blogs/magsmen-social-media-marketing-for-small-businesses.jpg'
import differencebetweenbrandingmarketingadvertising from '/assets/blogs/Magsmen-Difference-between-Branding-Marketing-and-Advertising.png'
import isinfluencermarkeitingthecurrenttrend from '/assets/blogs/Magsmen-Is-Influencer-Marketing-The-Current-Trend-1.jpg'
import whatistheimpactofcovid19onconsumerpurchase from '/assets/blogs/Magsman-what-is-the-impact-of-Covid-19-on-consumer-purchase.png'
import howcansmallbusinesscangrow from '/assets/blogs/magsmen-how-can-small-businesses-grow-with-the-help-of-digital-marketing-service_4dJhgfM.png'
import marketinganditsgrowth from '/assets/blogs/magsmen-marketing-and-its-impact-on-growth-of-small-and-medium-scale-business-1024x532-1.png'
import loyalty from '/assets/blogs/loyalty.png'
import digitalmarketingpostcovid from '/assets/blogs/5-Strategies-to-know-about-digital-marketing-post-covid.png'
import tobuildabrandyouneedtoownaworldinthemind from '/assets/blogs/buildbrand_dI7DmnP.jpeg'
import howtobuildyourbrandin30days from '/assets/blogs/magsmen-blog-image_49vQ2cz.jpeg'
// import elevatingyourbrand from 'public/assets/blogs/elevatingyourbrand.png'

import chess from '/assets/blogs/chess.png'


const POSTS_PER_PAGE = 6;

const blogPosts = [
    {
      id: 1,
      title: 'Hyper-Personalization: Crafting Brand Experiences That Speak to Gen Z’s Individuality',
      excerpt: "Gen Z demands more than just generic ads they seek personalization and authenticity in every brand interaction. To connect with this audience, brands must deliver hyper-personalized experiences that cater to their unique preferences and values. Here's how to do it.",
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-11-22',
      publishedAt: '2024-11-22',
      readTime: '6:06pm',
      // image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      slug: 'crafting-brand-experiences-that-speak-to-gen-zs-individuality',
      imageUrl:hyperpersonalizationcraftingbrandexperiences
    },
    {
      id: 2,
      title: 'The Future of Branding: Trends Shaping the Next Decade',
      excerpt: 'In the world of branding, what resonates with consumers is evolving quickly. To thrive, brands must not only keep up with these shifts but set the pace for what’s next. At Magsmen Brand Consultants, we’re diving into the top trends set to define branding in the coming decade.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-11-18',
      publishedAt: '2024-11-18',
      readTime: '5:06pm',
      // image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      slug: 'the-future-of-branding-trends-shaping-the-next-decade',
      imageUrl:thefutureofbrandingtrendsshapingthenextdecade
    },
    {
      id: 3,
      title: 'The Brand Journey: Guiding Startups from Idea to Iconic',
      excerpt: 'Building an iconic brand doesn’t just happen overnight. It’s a journey that takes a clear purpose, creative consistency, and the right strategy to grow into something people truly recognize and trust.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-11-12',
      publishedAt: '2024-11-12',
      readTime: '5:50pm',
      // image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      slug: 'the-brand-journey-guiding-startups-from-idea-to-iconic',
      imageUrl:thebrandjourneyguidingstartupsfromideatoiconic
    },
    {
      id: 4,
      title: 'Why Your Brand Needs a Unique Tone of Voice',
      excerpt: 'In today’s cluttered digital landscape, everyone is talking, but few are truly connecting. Why? Because their tone doesn’t resonate. ',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-11-11',
      publishedAt: '2024-11-11',
      readTime: '5:30pm',
      // image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      slug: 'why-your-brand-needs-a-unique-tone-of-voice',
      imageUrl:whyyourbrandneedsauniquetoneofvoice
    },
    {
      id: 5,
      title: 'Visual Storytelling in Branding: Creating Impact Through Design',
      excerpt: "In an era dominated by visuals, effective branding goes beyond aesthetics it's about storytelling. Visual storytelling leverages design elements like color, imagery, and typography to convey a brand’s message in a way that resonates emotionally with audiences.",
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-22',
      publishedAt: '2024-10-22',
      readTime: '5:44pm',
      // image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
      slug: 'visual-storytelling-in-branding:-creating-impact-through-design',
      imageUrl:visualstorytellinginbranding
    },
    {
      id: 6,
      title: 'The Global Brand Playbook How to Stay Culturally Relevant in Diverse Markets',
      excerpt: 'In today’s globalized market, maintaining cultural relevance across diverse regions is essential for brands looking to expand internationally.',
      category: 'Beranding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-17',
      publishedAt: '2024-10-17',
      readTime: '4:03pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'the-global-brand-playbook-how-to-stay-culturally-relevant-in-diverse-markets',
      imageUrl:theglobalbrandplaybookhowtostayculturallyrelevantindiversemarkets
    },
     {
      id: 7,
      title: 'The Intersection of Data and Creativity in Branding: Finding the Perfect Balance',
      excerpt: 'In the age of digital transformation, brands have access to a wealth of consumer data. From social media engagement metrics to in-depth customer behaviour insights, data provides a blueprint for understanding what resonates with your target audience.',
      category: 'Beranding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-10-15',
      readTime: '4:10pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'the-intersection-of-data-and-creativity-in-branding',
      imageUrl:theintersectionofdataandcreativityinbranding
    },{
      id: 8,
      title: 'The Power of Strategic Brand Positioning: How to Carve Your Niche in a Saturated Market',
      excerpt: 'In today’s competitive marketplace, strategic brand positioning is critical for businesses looking to carve out a unique space. It’s more than just offering a good product—it’s about shaping perceptions and standing out in your audience’s minds. With the right approach, even in saturated markets, your brand can thrive.',
      category: 'Brand Strategy',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-10-08',
      readTime: '6:10pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'the-power-of-strategic-brand-positioning:-how-to-carve-your-niche-in-a-saturated-market',
      imageUrl:thepowerofstrategicbrandpositioning
    },
    {
      id: 9,
      title: 'Developing a Scalable Brand Strategy for Rapidly Growing Tech Startups',
      excerpt: 'Developing a scalable brand strategy for rapidly growing tech startups requires careful planning and a dynamic approach to ensure the brands longevity and adaptability. Here are key strategies for crafting a scalable brand for tech startups:',
      category: 'Brand Strategy',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-09-16',
      readTime: '4:56pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'developing-a-scalable-brand-strategy-for-rapidly-growing-tech-startups',
      imageUrl:developingascalable
    },
    {
      id: 10,
      title: 'Rebranding in the Era of Digital Disruption',
      excerpt: 'Brands have to change in the quick-paced digital environment of today, or else they risk falling behind. Businesses are being forced to reevaluate their identities and strategy due to digital disruption. These days, rebranding is more than just changing the look; it also involves changing to fit in with the digital-first world.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-09-12',
      readTime: '2:14pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'rebranding-in-the-era-of-digital-disruption',
      imageUrl:rebrandingintheeraofdigitaldisruption
    },
    {
      id: 11,
      title: 'Future-Proofing Through AI-Powered Branding',
      excerpt: 'As we stand on the brink of a new era in digital transformation, brands that embrace AI technology will not only survive but thrive. The question is, how can your brand leverage AI to stay ahead of the curve and ensure its long-term success?',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-09-09',
      readTime: '6:19pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'future-proofing-through-AI-powered-branding',
      imageUrl:futureproofingthrough
    },
    {
      id: 12,
      title: 'Future-Proofing Your Brand: Embracing Digital Transformation',
      excerpt: 'The digital revolution will shape branding in the future. Brands need to innovate to stay relevant and build meaningful connections with their audiences as technology transforms sectors. Brands hoping to survive in the digital era must embrace digital transformation.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-08-20',
      readTime: '7:20pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'future-proofing-your-brand:-embracing-digital-transformation',
      imageUrl:futureproofingyourbrand
    },
    {
      id: 13,
      title: 'How Simplifying Your Brand Strategy Can Lead to Success',
      excerpt: 'In the world of business, where things move quickly, complication may be dangerous. Even though it can seem odd, streamlining your brand approach can frequently result in increased success. This is the reason why:',
      category: 'Brand Strategy',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-08-20',
      readTime: '7:08pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'how-simplifying-your-brand-strategy-can-lead-to-success',
      imageUrl:simplifyingyourbrandstrategy
    },
    {
      id: 14,
      title: 'Crafting­ a­ Strong­ Brand­ Identity:­ Essential­Elements',
      excerpt: 'A brands identity is what makes it stand out and connect with consumers in the competitive market of today. We at Magsmen Brand Consultants explore the art and science of creating a strong brand identity that draws in customers and encourages loyalty. Come along as we discuss the essential components of developing a unique brand presence.',
      category: 'Beranding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-07-31',
      readTime: '6:30pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'crafting-a-strong-brand-identity-essential-elements',
      imageUrl:craftingastorybrand
    },
    {
      id: 15,
      title: 'The­ Future­ of­ Branding:­ Embracing­ Digital­ Transformation',
      excerpt: 'The digital revolution will shape branding in the future. Brands need to innovate to stay relevant and build meaningful connections with their audiences as technology transforms sectors. Brands hoping to survive in the digital era must embrace digital transformation.',
      category: 'Beranding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-07-23',
      readTime: '1:57am',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'the-future-of-branding-embracing-digital-transformation',
      imageUrl:thefutureofbranding
    },
    {
      id: 16,
      title: 'Brand­ Differentiation:­ Standing­ Out­ in­ a­ Competitive­ Market',
      excerpt: 'Being unique is not only advantageous in todays competitive business environment but essential for survival. In a sea of rival brands, every company aims to create a distinctive identity that connects with its target market. However, how can a brand accomplish meaningful distinction? Lets examine important tactics:',
      category: 'Beranding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-07-18',
      readTime: '5:30pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'brand-differentiation:standing-out-in-a-competitive-market',
      imageUrl:brandDifferentiation
    },
    {
      id: 17,
      title: 'The­ Effects­ of­ Customer­ Experience­ on­ Brand­ Loyalty',
      excerpt: 'Delivering exceptional experiences benefits consumers, companies, and the industry by minimizing friction, maximizing engagement, and making customers feel heard and appreciated.',
      category: 'Beranding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-07-08',
      readTime: '4:52pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'the-effects-of-customer-experience-on-brand-loyalty',
      imageUrl:impactofbrandexperience
    },
    {
      id: 18,
      title: 'Why­ Startups­ Need­ to­ Focus­ on­ Building­ a­ Great­ Brand­ from­ Zero',
      excerpt: 'In todays competitive market, startups must prioritize building a strong brand from the outset. A compelling brand not only differentiates a company but also fosters customer loyalty and attracts investment. Heres why startups need to focus on branding from the very beginning.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-07-01',
      publishedAt: '2024-10-15',
      readTime: '6:42pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'why-startups-need-to-focus-on-building-a-great-brand-from-zero',
      imageUrl:whystartupsneed
    },
    {
      id: 19,
      title: 'Why­ Audio­ Branding­ Matters­ in­ the­ Digital­ Age­:',
      excerpt: 'In todays crowded digital world, brands fight not just to be seen, but to be remembered. Visuals are powerful but sounds stay in the individuals conscious or subconscious. This is where audio branding, or sonic branding, comes in. Audio branding, or sonic branding, harnesses the power of sound to build a unique brand identity. Sound affects us profoundly, often more so than visuals, making a brands sonic identity as important as its visual counterpart. ',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-05-27',
      publishedAt: '2024-10-15',
      readTime: '12:57pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'why-audio-branding-matters-in-the-digital-age',
      imageUrl:audiobranding
    },
    {
      id: 20,
      title: 'Brand­ Architecture­ And­ Why­ Is­ It­ Very ­Important?',
      excerpt: 'Brand architecture is a company’s organizational structure for its parent brand and related sub-brands, products and services.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-06-18',
      readTime: '6:26pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'brand-architecture-and-why-is-it-very-important',
      imageUrl:brandarchitecture
    },
    {
      id: 21,
      title: 'Brand­ Management­ for­ Family-Owned ­Business',
      excerpt: 'Unlock the Power of Legacy: Transform your Family-Owned Business into an Enduring Brand Icon - Family-Owned Business (FOBs) face unique challenges and opportunities in brand management. Successfully navigating these can lead to significant competitive advantages',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-06-11',
      readTime: '11:15pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'brand-management-for-family-owned-business',
      imageUrl:brandmanagementforfamily
    },
    {
      id: 22,
      title: 'Unveiling­ Magsmens­ Trifecta­ A­ Journey­ of­ the­ Brand­ Brilliance!',
      excerpt: 'Three years ago, Magsmen began with the vision of using its unmatched brand strategy methodology to “turning businesses into brands” and create more meaningful brands.What started as a straightforward notion and dream is now a reality.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2023-08-07',
      publishedAt: '2024-10-15',
      readTime: '6:15pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'a-journey-of-the-brand-brilliance',
      imageUrl:threeyearsofbuildingiconic
    },
    {
      id: 23,
      title: 'From­ Idea­ to­ Impact:­ Indias­ 1st­ Brand­ Consulting­ Ad­ by ­Magsmen!',
      excerpt: 'At Magsmen Brand Consultants, we believe that every great journey begins with an idea. Its this spark of innovation that ignites the path to impactful results. Today, were excited to share a monumental milestone in our journey – the unveiling of India\'s 1st Brand Consulting Ad. This remarkable feat is a testament to our commitment to pushing boundaries, redefining norms, and embracing innovation in the world of brand consulting.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-08-12',
      publishedAt: '2024-10-15',
      readTime: '6:16pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'idea-Impact-India\'s-1st-Brand-Consulting-Ad',
      imageUrl:rewritingtherules
    },
    {
      id: 24,
      title: 'Elevating Your Brand: The Power of Consulting and Guidance',
      excerpt: 'In the fiercely competitive world of business, your brand is your identity. It\'s what sets you apart from the crowd and leaves a lasting impression on your audience. Your brand is more than just a logo or a color scheme; it\'s the promise you make to your customers and the reputation you build over time. But how do you ensure that your brand stands out and thrives in a sea of competitors?',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-09-12',
      readTime: '6:17pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'the-power-of-consulting-and-guidance',
      imageUrl:elevatingyourbrand
    },
    {
      id: 25,
      title: 'Understanding­ the­ Power­ of­ Branding­ in­ Today\'s­ Competitive ­Market',
      excerpt: 'In the age of digital transformation, brands have access to a wealth of consumer data. From social media engagement metrics to in-depth customer behaviour insights, data provides a blueprint for understanding what resonates with your target audience.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-10-15',
      readTime: '4:10pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'power-of-branding-in-today\'s-competitive-market',
      imageUrl:understandingthepowerofbranding
    },
    {
      id: 26,
      title: 'The­ Role­ of­ Brand­ Strategy:­ Developing­ a­ Strong­ Foundation­ for­ Your­ Business ­Identity',
      excerpt: 'In the dynamic and competitive world of business, a strong brand identity is crucial for standing out and connecting with your audience. But how do you build a brand that not only captures attention but also leaves a lasting impression? The answer lies in crafting a well-defined brand strategy.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-10-15',
      readTime: '4:10pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'the-role-of-brand-strategy',
      imageUrl:chess
    },{
      id: 27,
      title: 'The­ Value­ of­ Brand­ Consultation:­ Expert­ Guidance­ for­ Building­a­ Successful­ Brand ­Identity',
      excerpt: 'In the ever-evolving landscape of business, building a strong brand identity has never been more crucial. Your brand is more than just a logo and a catchy slogan; it\'s the essence of your business, the story you tell, and the impression you leave on your customers. To truly succeed in today\'s competitive market, you need more than a great product or service – you need a brand that resonates with your target audience. This is where brand consultation services come into play.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-09-20',
      readTime: '6:21pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'the-value-of-brand-consultation',
      imageUrl:thevalueofbrandconsultation
    },
    {
      id: 28,
      title: 'Why­ Branding­ Matters:­ Key­ Benefits­ and­ Advantages­ for ­Businesses',
      excerpt: 'In today\'s fiercely competitive business landscape, branding has emerged as a critical component of success. It\'s no longer just about logos and tag-lines; it\'s about crafting an identity that resonates with your target audience and sets you apart from the competition. So, why does branding matter so much? Let\'s delve into the key benefits and advantages it brings to businesses.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-09-20',
      readTime: '6:24pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'why-branding-matters',
      imageUrl:blogdesigntemplate
    },
    {
      id: 29,
      title: 'The­ Power­ of­ Brand­ Consistency:­ Why­ It­ Matters­ Across­ All­ Touchpoints­ and­ Checklist­ for Implementation',
      excerpt: 'In today\'s competitive business landscape, brand consistency has emerged as a powerful tool that can elevate a brand\'s reputation, foster customer trust, and drive long-term success. From your website to social media, packaging to customer service, every interaction with your brand leaves an impression. Maintaining a consistent brand image across all touchpoints is crucial for creating a cohesive and memorable brand experience. In this blog, we will explore the significance of brand consistency and provide you with a practical checklist to implement it successfully.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-07-18',
      readTime: '6:00pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'power-of-brand-consistency',
      imageUrl:thepowerofbrnadconsistency
    },
    {
      id: 30,
      title: 'Building­ a­ Strong­ Brand­ Identity:­ Crafting­ an­ Effective­ Brand­ Name­ and­ Designing­ a­ Perfect­ Website',
      excerpt: 'Creating a strong brand identity is the cornerstone of any successful business. It goes beyond just a logo or a fancy website; it is about shaping the perception of your brand in the minds of your target audience. At MAGSMEN, a leading brand consulting firm in Andhra Pradesh and Telangana, we understand the power of a well-crafted brand identity. In this blog, we will explore the crucial aspects of building a strong brand identity, from designing an effective brand name to creating a perfect website that resonates with your audience.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-07-18',
      readTime: '5:25am',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'building-a-strong-brand-identity',
      imageUrl:buildingastrongbrandidentity
    },
    {
      id: 31,
      title: 'Navigating­ Consumer­ Behaviour:­ The­ Influence­ of­ Covid-19­ and­ the­ Rise­ of­ Influencer ­Marketing',
      excerpt: 'The Covid-19 pandemic has undoubtedly brought about significant changes in consumer behaviour, reshaping how people interact with brands and make purchasing decisions. As the world faced lockdowns and restrictions, online activities surged, leading to the rapid growth of e-commerce and the increased significance of digital marketing strategies. Among these strategies, influencer marketing emerged as a powerful tool to connect with consumers in a more authentic and relatable way. In this blog, we explore the impact of Covid-19 on consumer behaviour and delve into the rise of influencer marketing as an effective means to reach and engage with audiences.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-07-18',
      readTime: '4:23am',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'navigating-consumer-behaviour',
      imageUrl:navigatingconsumerbehaviour
    },
    {
      id: 32,
      title: 'Building­ and­ Refreshing­ Your­ Brand:­ Strategies­ for­ Success­ in­ 30 ­Days',
      excerpt: 'Welcome to the world of brand building and refreshing! In this fast-paced business landscape, the significance of a well-crafted brand strategy cannot be overlooked. Whether you are starting from scratch or looking to revitalise your existing brand, Magsmen is here to guide you on a transformative journey to success. With our expert strategies and proven methodologies, we are committed to empowering your brand to thrive in just 30 days.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-07-18',
      readTime: '2:22pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'building-and-refreshing-your-brand',
      imageUrl:buildingandrefreshingyourbrand
    },
    {
      id: 33,
      title: 'Harnessing­ the­ Power­ of­ Colour­ in ­Branding',
      excerpt: 'In the world of branding, colours play a pivotal role in shaping perceptions, evoking emotions, and leaving a lasting impact on consumers. As brand consultants, we at MAGSMEN understand the immense significance of colour psychology in creating successful brand identities. In this blog, we will delve into the art of harnessing the power of colour to craft compelling and memorable brand experiences.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-07-18',
      readTime: '12:55pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'power-of-colour-in-branding',
      imageUrl:harnessingthepowerofcoloursinbranding
    },
    {
      id: 34,
      title: 'Post-COVID­ Digital­ Marketing­ Strategies­ for­ Business­ Success',
      excerpt: 'As the world transitions into a post-COVID era, the digital landscape has become more crucial than ever for businesses seeking success and growth. In this blog, we will explore the top digital marketing strategies that can help businesses thrive in the new normal. At MAGSMEN, a leading brand consulting firm, we understand the significance of adapting to changing times and leveraging digital platforms to stay ahead in the competitive market.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-07-18',
      readTime: '4:10pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'post-covid-digital-marketing-strategies',
      imageUrl:postcoviddigitalmarketingstratgies
    },
    {
      id: 35,
      title: 'Understanding­ the­ Differences',
      excerpt: 'In the ever-evolving world of business, the terms branding, marketing, and advertising are often used interchangeably, leading to confusion among many. However, these concepts hold distinct roles in shaping a brand\'s identity, communicating its value proposition, and driving customer engagement. To shed light on these differences and provide clarity, we delve into the realms of branding, marketing, and advertising, unravelling their unique contributions to a brand\'s success.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-10-15',
      readTime: '4:10pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'decoding-branding',
      imageUrl:decodingbrandingmarketingadvertising
    },
    {
      id: 36,
      title: 'Good­ vs­ Bad­ Brands:­ Branding­ Breakdown­ -­ the­ Key­ Differences',
      excerpt: 'In the competitive landscape of today\'s business world, brands play a crucial role in capturing the attention and loyalty of customers. However, not all brands are created equal. Some soar to great heights, captivating audiences and achieving lasting success, while others struggle to make an impact and fail to resonate with their target market. In this blog post, we will delve into the key differences between good and bad brands, exploring the essential elements that set them apart.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-06-06',
      readTime: '12:48pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'Good-brand-Bad-Brand',
      imageUrl:goodvsbadbrands
    },
    {
      id: 37,
      title: 'Unlocking­ the­ Power­ of­ Brand­ Positioning:­ Discover,­ Define,­ and­ Deploy­ Your­ Unique­ Position',
      excerpt: 'In the age of digital transformation, brands have access to a wealth of consumer data. From social media engagement metrics to in-depth customer behaviour insights, data provides a blueprint for understanding what resonates with your target audience.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-05-30',
      readTime: '11:44am',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'Unlocking-the-Power-of-Brand-Positioning',
      imageUrl:unlockingthepowerofbrandpositioning
    },
    {
      id: 38,
      title: 'Start­ Your­ Brand­ Strategy:­ A­ Guide­ to­ Building­ a­ Strong ­Foundation',
      excerpt: 'In today\'s competitive market, establishing a strong brand strategy is essential for the long-term success of any business. A well-defined brand strategy helps differentiate your company from competitors, build customer loyalty, and drive growth. If you\'re just starting out or looking to revamp your brand strategy, this guide will provide you with valuable insights and practical steps to lay a strong foundation for your brand.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-05-26',
      readTime: '12:11pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'start-your-brand-strategy',
      imageUrl:startyourbrandstrategy
    },
    {
      id: 39,
      title: 'You­ Can­ Brand ­Anything',
      excerpt: 'With the right strategy, creativity, and expertise, your product, service, or business has the potential to become a standout brand in its industry. At Magsmen Brand Consultants, we are passionate about helping our clients unleash that potential and achieve brand greatness.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-05-22',
      readTime: '12:03pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'you-can-brand-anything',
      imageUrl:youcanbrandanything
    },
    {
      id: 40,
      title: 'Be­ Unforgettable:­ How­ Brand­ Consultants­ can­ help­ you­ stand­out',
      excerpt: 'In today\'s competitive business world, it\'s essential to have a strong brand identity that sets you apart from the crowd. That\'s where brand consulting comes in, and Magsmen is the best brand consultant in Andhra Pradesh and Telangana.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2023-05-11',
      publishedAt: '2024-10-15',
      readTime: '7:25am',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'be-unforgettable-how-brand-consultants-can-help-you-stand-out',
      imageUrl:beunforgettable
    },
    {
      id: 41,
      title: 'A­ Role­ of­ Brand­ Purpose­ in ­Business',
      excerpt: 'As a brand consultant, Magsmen Brand Consultants understands that consumers today want more than just products or services that meet their needs. They want to support companies that align with their values and have a positive impact on society and the environment. This is where brand purpose comes in.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-05-09',
      readTime: '5:39am',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'a-role-of-brand-purpose-in-business',
      imageUrl:theroleofbrandpurposeinbusiness
    },
    {
      id: 42,
      title: 'Colour­ Your­ Summer­ with­ Fun­ and­ Vibrance­ :­ A­ Guide­ to­ Eye-Catching­ Branding',
      excerpt: 'In the age of digital transformation, brands have access to a wealth of consumer data. From social media engagement metrics to in-depth customer behaviour insights, data provides a blueprint for understanding what resonates with your target audience.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-17',
      readTime: '2:56am',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'colour-your-summer-with-fun-and-vibrance-a-guide-to-eye-catching-branding',
      imageUrl:colouryoursummerwithfunandvibrance
    },
    {
      id: 43,
      title: 'Unique­ &­ Creative­ summer­ branding­ strategies­ for­ your­ Brand­ this­ Summer!',
      excerpt: 'Summer is a great time for brands to refresh their branding strategies and create campaigns that appeal to their audience during the season. Here are some summer branding strategies for all types of brands:',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-04-20',
      readTime: '12:20pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'unique-creative-summer-branding-strategies',
      imageUrl:uniquandcreativesummerbrandingstrategies
    },
    {
      id: 44,
      title: 'Everything­ you­ should­ know­ about­ a­ Brand­ Refresh­ and­ why­ it­ is­ HIGHLY­RECOMMENDED!',
      excerpt: 'A brand refresh is a marketing strategy that involves updating or revamping various elements of a brand\'s identity to keep it relevant and appealing to its target audience. It is typically done to enhance the brand\'s image, differentiate it from competitors, and attract new customers while retaining existing ones.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-14',
      readTime: '4:33pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'brand-refresh-why-highly-recommended',
      imageUrl:brandrefreshing
    },
    {
      id: 45,
      title: 'Law­ Of­ Contraction',
      excerpt: 'The Law of Contraction is a powerful principle that can help brands achieve extraordinary success by narrowing their focus. This principle is based on the idea that by focusing on a single category, a brand can become a category killer and dominate its market.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-14',
      readTime: '4:28pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'law-of-conraction',
      imageUrl:focusingonanicheforyourbrand
    },
    {
      id: 46,
      title: 'Brand­ Consistency­ Checklist',
      excerpt: 'Here are some practical ways to implement the Law of Consistency in your branding efforts:',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-14',
      readTime: '4:25pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'brand-consistency-checklist',
      imageUrl:barndconsistencychecklist
    },
    {
      id: 47,
      title: 'Law­ Of Consistency',
      excerpt: 'In the age of digital transformation, brands have access to a wealth of consumer data. From social media engagement metrics to in-depth customer behaviour insights, data provides a blueprint for understanding what resonates with your target audience.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-03-14',
      readTime: '4:08pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'law-of-consistency',
      imageUrl:hereiswhybrandconsistencyfails
    },
    {
      id: 48,
      title: 'Color­ psychology­ in­ business:­ how­ it­ impacts­ decisions',
      excerpt: 'Several factors influence the decision to buy a product. Color is one of them, according to psychologists.Our bodies automatically respond in certain ways to specific colors. Meaning the color assortment in your marketing content will have some sway on whether the prospect will buy from you or not.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-02',
      readTime: '6:29pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'colour-physcology-in-business',
      imageUrl:colourphyscologyinbusiness
    },
    {
      id: 49,
      title: 'Importance­ of­ a­ perfect­ website ­design',
      excerpt: 'Let’s make an analogy to understand The Importance Of Website Design.You are new in an area and want to buy groceries. You have two stores. Let’s name them Store A and Store B. You visit Store A and find that it is a mess. No product is at a particular place. Everything is scattered and it’s hard to find what you are searching for. Moreover, the products are old and are about to expire. Clearly, you don’t buy anything and now go to Store B. There you find that it has proper sections for everything, the products are brand new and the store is clean. Of course, you are impressed and will visit this store every time you need something. Store A lost a customer and Store B got a lifetime customer.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-02',
      readTime: '6:27pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'importance-of-a-perfect-website-design',
      imageUrl:importanceofaperfectwebsitedesign
    },
    {
      id: 50,
      title: 'How­ to­ create­ an­ effective­ brand­ name­ for­ your ­product/service?',
      excerpt: 'So you’ve mustered up a new business idea, thought about a new line of products or services, have your company goals in place… but can’t think about a name. Business owners often wonder that how a mind so strong that can come up with a brilliant idea can struggle so helplessly when it comes to finalizing a brand name.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-02',
      readTime: '6:25pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'so-you’ve-mustered-up-a-new-business-idea-thought-about-a-new-line-of-products-or-services-have-your-company-goals-in-place',
      imageUrl:howtocreateaneffectivebrandname
    },
    {
      id: 51,
      title: 'Understand­ the­ difference­ between­ marketing­ &­ Branding',
      excerpt: 'In the business world, people often question the differences and impact of branding and marketing. While the two are obviously connected, there are minute differences between the two. If you own a product or a business, it is important that you learn about both, branding and marketing with precision and detail. Doing so will help you successfully apply them together.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-02',
      readTime: '6:43pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'understand-the-difference-between-marketing-and-branding',
      imageUrl:understandthedifferencebetweenmarketingandbranding
    },
    {
      id: 52,
      title: 'Social­ media­ marketing­ for­ small ­businesses',
      excerpt: 'Social media, it turned out to be the major mainstay for growth of any organisation and businesses. When it comes to budding start-ups or small scale businesses, they couldn\’t manage to afford more on advertising costs right from their beginnings. Where social media marketing is the best asset to bring them out and put them through the limelight thereafter from the starting day of their business and lead to the growth and reach of a wider audience.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2024-03-02',
      readTime: '6:06pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'social-media-for-small-businesses',
      imageUrl:socilamediamarketingforsmallbusiness
    },
    {
      id: 53,
      title: 'Difference­ between­ Branding,­ Marketing,­ and­Advertising',
      excerpt: 'We often feel the words \”Branding, Marketing, and Advertising\” are similar words. But there is a thin line to differentiate them. Where all of these terms aim for the growth of business internally as well externally.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-02',
      readTime: '6:03pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'difference-between-branding-marketing-and-advertisement',
      imageUrl:differencebetweenbrandingmarketingadvertising
    },
    {
      id: 54,
      title: 'Is­ influencer­ marketing­ the­ current­trend?',
      excerpt: 'Influencer Marketing is one of the latest trends in marketing. One has to create engaging and useful content which benefits and attracts the audiences. If you purchase something by the word of your famous celebrity or influencer, hence you\’re into the magic of influencer marketing. Once the audience starts to be attracted to you, you win the war of reach in influencer marketing. The rest is all about maintaining them and excelling in your promotions and Branding with exciting content and eye-catching ads.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-02',
      readTime: '5:53pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'is-influencer-marketing-the-current-trend',
      imageUrl:isinfluencermarkeitingthecurrenttrend
    },
    {
      id: 55,
      title: 'What Is The Impact Of Covid-19 On Consumer Purchase?',
      excerpt: 'The COVID-19 pandemic has had a profound impact on consumer purchasing behavior across the globe. The key effects include:',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-02',
      readTime: '5:55pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'what-is-the-impact-of-covid-19-on-consumer-purchase',
      imageUrl:whatistheimpactofcovid19onconsumerpurchase
    },
    {
      id: 56,
      title: 'How­ can­ small­ businesses­ grow­ with­ the­ help­ of­ digital­ marketing­ services­ after­ a ­pandemic',
      excerpt: 'In the hustle of beating and fighting with Covid-19, all of a sudden everything comes out down the lane. And so the budding entrepreneurs, small and medium scale businesses? Yes, they have been suffering a lot. ',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-02',
      readTime: '5:42pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'how-can-small-business-grow-with-the-help-og-digital-marketing-services-afyer-a-pandemic',
      imageUrl:howcansmallbusinesscangrow
    },
    {
      id: 57,
      title: 'Marketing­ and­ its­ impact­ on­ growth­ of­ small­ and­ medium­ scale­business',
      excerpt: 'Marketing, we always come across this in the form of advertisements, promotions, offers, sales, postures, social media posts, pamphlets and whatnot. But, one thing hit us in mind that marketing is a big thing and we have to spend so much on it. No wonder it\’s a big thing and we have to spend so much on it in the form of time, creativity, and attention. The new era of digital marketing is booming with colours and it has a great pace in the real time world. The reach of a product or service is within seconds at low cost, less time with proper marketing strategies where so many agencies are doing with correct outline. Check out how magsmen works for the growth of budding startups and already grown up businesses to reach a wider audience magsmen.in',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-02',
      readTime: '5:39pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'marketing-and-its-effects',
      imageUrl:marketinganditsgrowth
    },{
      id: 58,
      title: 'Social­ media­ Marketing­ for­ business­ :­ 7­ Reasons­ to­ know­why',
      excerpt: 'Social media is quickly becoming one of the most important aspects of digital marketing, which provides incredible benefits that help reach millions of customers worldwide. And if you are not applying this profitable source, you are missing out on an incredible marketing opportunity, as it makes it easy to spread the word about your product and mission.',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-02',
      readTime: '5:15pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'social-media-marketing-for-business',
      imageUrl:loyalty
    },
    {
      id: 59,
      title: 'Digital­ marketing­ post­ covid:­ 5­ Strategies­ to­ know',
      excerpt: 'The dawn of the digital age changed lives and the rise in digital marketing was a turning event across every industry vertical. The global business, including startups to enterprises and freelancers to corporate, was on an exponential growth track. But then something happened and before anyone could fathom it, the graph came crashing down. Yes, we are referring to COVID-19 that has affected billions of lives across the world',
      category: 'Brand Consultant',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-03-01',
      readTime: '6:41pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'digital-marketing-post-covid',
      imageUrl:digitalmarketingpostcovid
    },
     {
      id: 60,
      title: 'To , You­ Need­ to­ Own­ a­ Word­ in­ the­ Mind Build­ a­ Brand',
      excerpt: 'Procter & Gamble, widely known as a master of marketing, used to have a well-defined rule when writing memos on strategy—the first sentence had to articulate the recommendation in one succinct phrase. Unfortunately, this practice has waned within business plans over time; instead we are faced with countless ideas that can\'t possibly be boiled down into an effective summary statement. What then is the objective of a plan - merely outlining everything needed for success or something more? We need to remember our roots and refocus our attention back on making each plan start off strong by summarizing its true aim from Day 1.',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-02-15',
      readTime: '10:20am',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'to-you-need-to-own-a-word-in-the-mind-to-build-a-brand',
      imageUrl:tobuildabrandyouneedtoownaworldinthemind
    },
     {
      id: 61,
      title: 'Rebranding Your Business In 30 Days With Magsmen\'s Proven Strategies',
      excerpt: 'Analyze Your Current Brand and Identify Areas For Improvement. The first step to successful rebranding is doing an honest assessment of your current branding strategy. Take the time to analyze what you’re currently doing right and what could be improved upon. This includes everything from your website design, logo, messaging, color palette, and more. Once you’ve identified areas for improvement, it’s time to move on to the next step',
      category: 'Branding',
      author: { name: 'Magsmen', avatar: '/assets/avatar/magsmen.png' },
      date: '2024-10-15',
      publishedAt: '2023-02-13',
      readTime: '12:39pm',
      // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      slug: 'rebranding-your-business-in-30-days-with-magsmen-proven-strategies',
      imageUrl:howtobuildyourbrandin30days
    }
  ];


const Insights: React.FC = () => {
  const featuredPost = blogPosts[0];
  const latestPosts = blogPosts.slice(1);
  const [searchParams] = useSearchParams();
const currentPage = Number(searchParams.get("page")) || 1;

const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
const endIndex = startIndex + POSTS_PER_PAGE;

// const paginatedPosts = blogPosts.slice(startIndex, endIndex);
// const hasNextPage = endIndex < blogPosts.length;
const allPostsExceptFeatured = blogPosts.slice(1);

const paginatedPosts = allPostsExceptFeatured.slice(
  startIndex,
  endIndex
);

const hasNextPage = endIndex < allPostsExceptFeatured.length;
const hasPrevPage = currentPage > 1;


  

  return (
    <div className="min-h-screen bg-gray-150">
      {/* Header Section */}
      <header className=" bg-gray-200 bg-cover bg-center text-black md:py-56 py-32">
        {/* bg-gradient-to-r from-gray-500 to-gray-500 */}
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-6xl leading-tight md:leading-none mb-4 ">
            <span className="text-black"> Strategic insights and actionable advice to help modern businesses build <span className='text-4xl md:text-6xl font-bold'> ICONIC BRANDS.</span></span>
          </h1>
          {/* <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Strategic insights, case studies, and actionable advice to help modern businesses build iconic brands.
          </p> */}
          {/* <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Join Email Audit
            </button>
          </div> */}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Featured Insight */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Insight</h2>
          
          <Link 
            to={`/blog/${featuredPost.slug}`}
            className="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.imageUrl} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    Culture
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    /> */}
                    <div>
                      <div className="font-medium text-gray-900">{featuredPost.author.name}</div>
                      <div className="text-sm text-gray-500">{featuredPost.publishedAt}</div>
                    </div>
                  </div>
                  
                  <span className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
            
          </Link>
        </section>

        {/* Latest Insights */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Insights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}`}
                state={{ fromPage: currentPage }}
                className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    {post.category !== 'Culture' && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        Culture
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      {/* <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full mr-2"
                      /> */}
                      <span>{post.author.name}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{post.publishedAt}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-purple-600 font-medium mt-4 group-hover:text-purple-700">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Read More
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <div className="flex justify-between items-center mt-12">
  {/* PREVIOUS */}
  {hasPrevPage ? (
    <Link
      to={`/insights?page=${currentPage - 1}`}
      className="flex items-center gap-4 text-lg text-black"
    >
      <span className="hover:-translate-x-1 transition-transform">
        Previous
      </span>
      <span className="block w-px h-6 bg-black" />
    </Link>
  ) : (
    <div />
  )}

  {/* NEXT */}
  {hasNextPage && (
    <Link
      to={`/insights?page=${currentPage + 1}`}
      className="flex items-center gap-4 text-lg text-black"
    >
      <span className="block w-px h-6 bg-black" />
      <span className="hover:translate-x-1 transition-transform">
        Next
      </span>
    </Link>
  )}
</div>


      </main>
    </div>
  );
};

export default Insights;


















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Calendar, User, ArrowRight, Search, Filter, TrendingUp, Users, Target, Lightbulb } from 'lucide-react';
// import hyperpersonalizationcraftingbrandexperiences from '/assets/blogs/hyper-personalization-crafting-brand-experiences-that-speak-to-gen-zs-individuality.jpg'
// import thefutureofbrandingtrendsshapingthenextdecade from '/assets/blogs/the-future-of-branding-trends-shaping-the-next-decade.jpg'
// import thebrandjourneyguidingstartupsfromideatoiconic from '/assets/blogs/the-brand-journey-guiding-startups-from-idea-to-iconic.jpg'
// import whyyourbrandneedsauniquetoneofvoice from '/assets/blogs/why-your-brand-needs-a-unique-tone-of-voice.jpg'
// import visualstorytellinginbranding from '/assets/blogs/visual-storytelling-in-branding.jpeg'
// import theglobalbrandplaybookhowtostayculturallyrelevantindiversemarkets from '/assets/blogs/the-global-brand-playbook-how-to-stay-culturally-relevant-in-diverse-markets.png'
// import theintersectionofdataandcreativityinbranding from '/assets/blogs/the-intersection-of-data-and-creativity-in-branding.jpg'


// const Insights = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = [
//     'All',
//     'Branding for Indian Businesses',
//     'MSME Brand Growth',
//     'Case Study Breakdowns',
//     'Personal Branding Tips'
//   ];

//   const blogPosts = [
//     {
//       id: 1,
//       title: 'Hyper-Personalization: Crafting Brand Experiences That Speak to Gen Z’s Individuality',
//       excerpt: "Gen Z demands more than just generic ads they seek personalization and authenticity in every brand interaction. To connect with this audience, brands must deliver hyper-personalized experiences that cater to their unique preferences and values. Here's how to do it.",
//       category: 'Branding',
//       author: 'Magsmen',
//       date: '2024-11-22',
//       readTime: '6:06pm',
//       // image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
//       slug: 'crafting-brand-experiences-that-speak-to-gen-z’s-individuality',
//       imageUrl:hyperpersonalizationcraftingbrandexperiences
//     },
//     {
//       id: 2,
//       title: 'The Future of Branding: Trends Shaping the Next Decade',
//       excerpt: 'In the world of branding, what resonates with consumers is evolving quickly. To thrive, brands must not only keep up with these shifts but set the pace for what’s next. At Magsmen Brand Consultants, we’re diving into the top trends set to define branding in the coming decade.',
//       category: 'Branding',
//       author: 'Magsmen',
//       date: '2024-11-18',
//       readTime: '5:06pm',
//       // image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
//       slug: 'the-future-of-branding-trends-shaping-the-next-decade',
//       imageUrl:thefutureofbrandingtrendsshapingthenextdecade
//     },
//     {
//       id: 3,
//       title: 'The Brand Journey: Guiding Startups from Idea to Iconic',
//       excerpt: 'Building an iconic brand doesn’t just happen overnight. It’s a journey that takes a clear purpose, creative consistency, and the right strategy to grow into something people truly recognize and trust.',
//       category: 'Branding',
//       author: 'Magsmen',
//       date: '2024-11-12',
//       readTime: '5:50pm',
//       // image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
//       slug: 'the-brand-journey-guiding-startups-from-idea-to-iconic',
//       imageUrl:thebrandjourneyguidingstartupsfromideatoiconic
//     },
//     {
//       id: 4,
//       title: 'Why Your Brand Needs a Unique Tone of Voice',
//       excerpt: 'In today’s cluttered digital landscape, everyone is talking, but few are truly connecting. Why? Because their tone doesn’t resonate. ',
//       category: 'Branding',
//       author: 'Magsmen',
//       date: '2024-11-11',
//       readTime: '5:30pm',
//       // image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
//       slug: 'why-your-brand-needs-a-unique-tone-of-voice',
//       imageUrl:whyyourbrandneedsauniquetoneofvoice
//     },
//     {
//       id: 5,
//       title: 'Visual Storytelling in Branding: Creating Impact Through Design',
//       excerpt: "In an era dominated by visuals, effective branding goes beyond aesthetics it's about storytelling. Visual storytelling leverages design elements like color, imagery, and typography to convey a brand’s message in a way that resonates emotionally with audiences.",
//       category: 'Branding',
//       author: 'Magsmen',
//       date: '2024-10-22',
//       readTime: '5:44pm',
//       // image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
//       slug: 'visual-storytelling-in-branding:-creating-impact-through-design',
//       imageUrl:visualstorytellinginbranding
//     },
//     {
//       id: 6,
//       title: 'The Global Brand Playbook How to Stay Culturally Relevant in Diverse Markets',
//       excerpt: 'In today’s globalized market, maintaining cultural relevance across diverse regions is essential for brands looking to expand internationally.',
//       category: 'Branding',
//       author: 'Magsmen',
//       date: '2024-10-17',
//       readTime: '4:03pm',
//       // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
//       slug: 'tenali-double-horse-transformation',
//       imageUrl:theglobalbrandplaybookhowtostayculturallyrelevantindiversemarkets
//     },
//      {
//       id: 7,
//       title: 'The Intersection of Data and Creativity in Branding: Finding the Perfect Balance',
//       excerpt: 'In the age of digital transformation, brands have access to a wealth of consumer data. From social media engagement metrics to in-depth customer behaviour insights, data provides a blueprint for understanding what resonates with your target audience.',
//       category: 'Beranding',
//       author: 'Magsmen',
//       date: '2024-10-15',
//       readTime: '4:10pm',
//       // image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
//       slug: 'the-intersection-of-data-and-creativity-in-branding',
//       imageUrl:theintersectionofdataandcreativityinbranding
//     }
//   ];

//   const filteredPosts = blogPosts.filter(post => {
//     const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
//     const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const featuredPost = blogPosts[0];
//   const regularPosts = filteredPosts.slice(1);

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Brand <span className="text-[#683FBF]">Insights</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//               Strategic insights, case studies, and actionable advice to help Indian businesses build iconic brands.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <div className="relative max-w-md w-full">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search insights..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
//                 />
//               </div>
//               <Link
//                 to="/brand-audit"
//                 className="bg-[#683FBF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors whitespace-nowrap"
//               >
//                 Take Brand Audit
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Categories Filter */}
//       {/* <section className="py-8 bg-gray-50 border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <div className="flex items-center">
//               <Filter className="w-5 h-5 text-gray-600 mr-2" />
//               <span className="text-gray-700 font-medium">Filter by Category:</span>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                     selectedCategory === category
//                       ? 'bg-[#683FBF] text-white'
//                       : 'bg-white text-gray-700 hover:bg-gray-100'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Featured Article */}
//       {selectedCategory === 'All' && !searchTerm && (
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="mb-16"
//             >
//               <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Insight</h2>
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 <div className="aspect-video rounded-xl overflow-hidden">
//                   <img
//                     src={featuredPost.imageUrl}
//                     alt={featuredPost.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <span className="bg-purple-100 text-[#683FBF] px-3 py-1 rounded-full text-sm font-semibold mr-4">
//                       {featuredPost.category}
//                     </span>
//                     <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
//                   </div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
//                     {featuredPost.title}
//                   </h3>
//                   <p className="text-lg text-gray-600 mb-6 leading-relaxed line-clamp-2">
//                     {featuredPost.excerpt}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <User className="w-5 h-5 text-gray-400 mr-2" />
//                       <span className="text-gray-700 font-medium mr-4">{featuredPost.author}</span>
//                       <Calendar className="w-5 h-5 text-gray-400 mr-2" />
//                       <span className="text-gray-500">{new Date(featuredPost.date).toLocaleDateString()}</span>
//                     </div>
//                     <Link
//                       to={`/insights/${featuredPost.slug}`}
//                       className="inline-flex items-center text-[#683FBF] font-semibold hover:text-[#5a35a3] transition-colors"
//                     >
//                       Read Article
//                       <ArrowRight className="ml-2 w-5 h-5" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* Articles Grid */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 text-center">
//               {selectedCategory === 'All' ? 'Latest Insights' : selectedCategory}
//             </h2>
//             {filteredPosts.length === 0 && (
//               <p className="text-center text-gray-600 mt-4">
//                 No articles found matching your criteria.
//               </p>
//             )}
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {regularPosts.map((post, index) => (
//               <motion.article
//                 key={post.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
//               >
//                 <div className="aspect-video overflow-hidden">
//                   <img
//                     src={post.imageUrl}
//                     alt={post.title}
//                     className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-3">
//                     <span className="bg-purple-100 text-[#683FBF] px-3 py-1 rounded-full text-xs font-semibold">
//                       {post.category}
//                     </span>
//                     <span className="text-gray-500 text-sm">{post.readTime}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#683FBF] transition-colors">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
//                     {post.excerpt}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center text-sm text-gray-500">
//                       <User className="w-4 h-4 mr-1" />
//                       <span className="mr-3">{post.author}</span>
//                       <Calendar className="w-4 h-4 mr-1" />
//                       <span>{new Date(post.date).toLocaleDateString()}</span>
//                     </div>
//                     <Link
//                       to={`/insights/${post.slug}`}
//                       className="text-[#683FBF] hover:text-[#5a35a3] transition-colors"
//                     >
//                       <ArrowRight className="w-5 h-5" />
//                     </Link>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Signup */}
//       <section className="py-20 bg-black text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex justify-center mb-6">
//               <div className="bg-[#683FBF] p-4 rounded-full">
//                 <Lightbulb className="w-8 h-8 text-white" />
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Get weekly insights on brand strategy, case studies, and growth tactics delivered to your inbox.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#683FBF] focus:border-transparent"
//               />
//               <button className="bg-[#683FBF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a35a3] transition-colors">
//                 Subscribe
//               </button>
//             </div>
//             <p className="text-sm text-gray-400 mt-4">
//               Join 5,000+ brand builders. Unsubscribe anytime.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Categories Overview */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
//             <p className="text-lg text-gray-600">
//               Deep dive into specific areas of brand strategy and growth
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: 'Branding for Indian Businesses',
//                 description: 'Strategic insights tailored for the Indian market',
//                 icon: <Target className="w-8 h-8" />,
//                 count: blogPosts.filter(p => p.category === 'Branding for Indian Businesses').length
//               },
//               {
//                 title: 'MSME Brand Growth',
//                 description: 'Scaling strategies for small and medium enterprises',
//                 icon: <TrendingUp className="w-8 h-8" />,
//                 count: blogPosts.filter(p => p.category === 'MSME Brand Growth').length
//               },
//               {
//                 title: 'Case Study Breakdowns',
//                 description: 'Real transformations with detailed analysis',
//                 icon: <Users className="w-8 h-8" />,
//                 count: blogPosts.filter(p => p.category === 'Case Study Breakdowns').length
//               },
//               {
//                 title: 'Personal Branding Tips',
//                 description: 'Build your executive presence and thought leadership',
//                 icon: <User className="w-8 h-8" />,
//                 count: blogPosts.filter(p => p.category === 'Personal Branding Tips').length
//               }
//             ].map((category, index) => (
//               <motion.div
//                 key={category.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 onClick={() => setSelectedCategory(category.title)}
//                 className="bg-gray-50 p-6 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer group"
//               >
//                 <div className="text-[#683FBF] group-hover:text-[#5a35a3] mb-4">
//                   {category.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
//                 <p className="text-gray-600 mb-4">{category.description}</p>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-500">{category.count} articles</span>
//                   <ArrowRight className="w-4 h-4 text-[#683FBF] group-hover:text-[#5a35a3]" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Insights;