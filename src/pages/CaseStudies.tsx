import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, TrendingUp, Award, Users,ArrowUpRight, ArrowRight } from 'lucide-react';
import magsmentelugufoods from '/assets/Telugu-foods.jpg'
import magsmensuryacolors from '/assets/Surya-Colours.jpg'
import magsmentdhrishika from '/assets/tdh-rishika.png'
import magsmentriplex from '/assets/Triplex.jpg'
import magsmenvsb from '/assets/VSB.png'
import magsmenzavaine from '/assets/Zavaiine.jpg'
import magsmenTenaliDoubleHorse from '/assets/magsmen-homepage-clients-tenalidoublehorse-168x168.png';
import BrandingPatternLYN from '/assets/works/Branding-Pattern-LYN.jpg'
import chickengarammeat from '/assets/works/chicken-garam-meat.png'
import suryacolorthree from '/assets/works/surya-color-three.png'
import tdhdosa from '/assets/works/tdh-dosa.png'
import tenalidoubleproducts from '/assets/works/tenali-double-products.png'
import triplexthree from '/assets/works/triplex-three.png'
import vsbthree from '/assets/works/vsb-three.png'
import zavainethree from '/assets/works/zavaine-three.png'



const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // const filters = ['All', 'FMCG', 'Ed-Tech', 'Real Estate', 'Media', 'Skincare', 'Healthcare'];
 const works = [
    {
      title: "Brand Consulting",
      description:
        "We help brands discover their unique voice and identity through a strategic consulting process tailored to your market goals.",
      image: BrandingPatternLYN,
    },
    {
      title: "Design Strategy",
      description:
        "Our team crafts design systems that blend creativity with functionality, delivering timeless brand experiences.",
      image: BrandingPatternLYN,
      reverse: true, // flips layout
    },
    {
      title: "Visual Identity",
      description:
        "From logos to brand palettes, we create distinctive and consistent visuals that make your brand stand out.",
      image: BrandingPatternLYN,
    },
  ];

  const caseStudies = [
   {
  id: 1,
  title: 'Telugu Foods',
  industry: 'FMCG',
  stage: 'Growth',
  description: 'Telugu Foods was struggling to increase brand awareness and sales in the highly competitive food industry.',
  challenge: 'Telugu Foods was struggling to increase brand awareness and sales in a highly competitive food industry. They lacked a clear digital and social media strategy, and their B2B business was underperforming.',
  outcome: '+25% brand awareness and +15% sales growth within 3 months',
  metrics: ['25% Brand Awareness Increase', '15% Sales Growth', 'Pan-India Expansion'],
  slug: 'telugu-foods',
  imageUrl: magsmentelugufoods
},
{
  id: 2,
  title: 'Surya Colors',
  industry: 'Paints & Coatings',
  stage: 'Growth',
  description: 'Surya Colors was struggling to increase brand stability and awareness in the highly competitive market. They lacked a clear digital and brand strategy, resulting in low engagement and product awareness.',
  challenge: 'Surya Colors faced difficulties in building brand stability and awareness. The absence of a strong digital and branding strategy led to weak customer engagement and limited visibility in a crowded market.',
  outcome: 'Improved brand stability by 40% and increased digital engagement by 50% within 4 months',
  metrics: ['40% Brand Stability Improvement', '50% Digital Engagement Growth', 'Enhanced Market Awareness'],
  slug: 'surya-colors',
  imageUrl: magsmensuryacolors
},
{
  id: 3,
  title: 'TDH Rishika',
  industry: 'FMCG – Younger Generation',
  stage: 'Launch',
  description: 'TDH, a Younger Generation brand from Tenali Double Horse focused on the FMCG industry, faced the challenge of establishing a unique brand identity and launching the product across India in a cost-efficient manner.',
  challenge: 'The brand needed to develop a comprehensive strategy for package design, brand strategy, and content & influencer marketing to improve brand awareness and sales while keeping costs optimized.',
  outcome: 'Achieved +35% brand awareness and +20% sales growth in the first 6 months through strategic packaging, influencer marketing, and digital campaigns',
  metrics: ['35% Brand Awareness Growth', '20% Sales Growth', 'Successful Pan-India Launch'],
  slug: 'tdh-rishika',
  imageUrl: magsmentdhrishika
    },
    {
      id: 4,
      title: 'Tenali Double Horse',
      industry: 'FMCG – Food Products',
      stage: 'Expansion',
      description: 'Tenali Double Horse, one of the biggest brands in South India, needed to focus on consistency, brand positioning, and clear strategy for new markets.',
      challenge: 'With multiple teams handling the brand, there was a lack of unified brand guidelines and digital strategy. This created inconsistencies in brand communication and slowed down expansion into new markets.',
      outcome: '+30% engagement, US market entry via Amazon, and unified brand guidelines implemented',
      metrics: ['30% Engagement Growth', 'US Market Entry via Amazon', 'Unified Brand Guidelines'],
      slug: 'tenali-double-horse',
      imageUrl: magsmenTenaliDoubleHorse
    },
    {
      id: 5,
      title: 'Triplex',
      industry: 'FMCG – Laundry & Cleaning Products',
      stage: 'Growth',
      description: 'Triplex, as a top detergent company in the Telugu states, faced the challenge of establishing a strong digital and social media presence to increase brand awareness and reach.',
      challenge: 'The brand needed to strengthen its online presence, build awareness in a highly competitive detergent market, and engage audiences through impactful digital and social media strategies.',
      outcome: '+25% social media followers, +30% engagement, +35% website traffic, and 500k+ video views',
      metrics: ['25% Social Media Growth', '30% Engagement Increase', '35% Website Traffic Boost', '500k+ Video Views'],
      slug: 'triplex',
      imageUrl: magsmentriplex
    },
    {
      id: 6,
      title: 'VSB Surface',
      industry: 'Granite & Quartz Export',
      stage: 'Expansion',
      description: 'VSB Group, one of the top exporters of granites and quartz in South India, faced the challenge of improving their brand presence both online and offline.',
      challenge: 'The brand needed a complete revamp to establish a strong digital identity and create a tailored branding approach for each of the 45 countries they export to, while maintaining global consistency.',
      outcome: 'Brand revamp across 45 countries, +40% digital visibility, and +25% client inquiries',
      metrics: ['45-Country Brand Revamp', '40% Digital Visibility Growth', '25% Increase in Client Inquiries'],
      slug: 'vsb',
      imageUrl: magsmenvsb
    },
    {
      id: 7,
      title: 'Zavaine',
      industry: 'FMCG – Laundry & Cleaning Products',
      stage: 'Launch',
      description: "Zavaine, India's first detergent tablet and a sister brand of Triplex, South India's biggest detergent brand, needed to establish itself as a market leader and increase product awareness and sales.",
      challenge: 'As a new product category in India, Zavaine needed to educate customers about detergent tablets, build trust as an innovative solution, and drive awareness and adoption through effective branding and launch campaigns.',
      outcome: '+20% brand awareness, +15% sales growth, and successful product launch campaigns',
      metrics: ['20% Brand Awareness Growth', '15% Sales Growth', 'Successful Product Launch Campaigns'],
      slug: 'zavaine',
      imageUrl: magsmenzavaine
    },



  ];

  const filteredCaseStudies = selectedFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Case <span className="text-[#683FBF]">Studies</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real transformations, measurable results. See how we've helped brands across industries achieve iconic status.
            </p>
          </motion.div>
        </div>
      </section> */}



      {/* Case Studies Grid */}
      <section className="pt-32 bg-white">
        <div className='max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 '>
          <div className='flex justify-between items-center'>
            <h1 className='text-black text-8xl font-bold'>Recent <br /> <span className='text-8xl font-thin'>Works</span></h1>
           <p className='max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni officia explicabo. Inventore, placeat. Alias facere nostrum, itaque architecto cupiditate voluptate velit optio quia cum, sed officiis facilis sapiente quod?</p>
          </div>
        </div>
      </section>


      <section className='max-w-8xl'>
        <div className='grid grid-cols-2 py-20 bg-black sm:px-4 lg:px-11 gap-0'>
          <div className='my-auto'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
            <p className='text-white text-2xl'>A legacy brand known for delivering <br /> the true taste of South India through its premium <br /> range of traditional snacks and spice blends.</p>
            <Link to={`/case-studies/telugu-foods`} className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </Link>
          </div>

          <div className='w-full'>
            <img src={chickengarammeat} alt="branding" className='w-full h-[400px]'/>
          </div>




          <div className='w-full'>
            <img src={suryacolorthree} alt="branding"  className='w-full h-[400px]'/>
          </div>

           <div className='my-auto mx-14'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
            <p className='text-white text-2xl'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Aliquam totam fugiat libero <br /> sequi quo laboriosam adipisci! Aperiam id eveniet ipsam?</p>
            <Link to={`/case-studies/surya-colors`} className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </Link>
          </div>



           <div className='my-auto'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
            <p className='text-white text-2xl'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Aliquam totam fugiat libero <br /> sequi quo laboriosam adipisci! Aperiam id eveniet ipsam?</p>
            <a href="#" className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </a>
          </div>


           <div className='w-full'>
            <img src={tdhdosa} alt="branding" className='w-full h-[400px]'/>
          </div>

          <div className='w-full'>
            <img src={tenalidoubleproducts} alt="branding" className='w-full h-[400px]'/>
          </div>


          <div className='my-auto mx-14'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
            <p className='text-white text-2xl'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Aliquam totam fugiat libero <br /> sequi quo laboriosam adipisci! Aperiam id eveniet ipsam?</p>
            <a href="#" className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </a>
          </div>



            <div className='my-auto'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
            <p className='text-white text-2xl'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Aliquam totam fugiat libero <br /> sequi quo laboriosam adipisci! Aperiam id eveniet ipsam?</p>
            <a href="#" className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </a>
          </div>


           <div className='w-full'>
            <img src={triplexthree} alt="branding"  className='w-full h-[400px]'/>
          </div>


          <div className='w-full'>
            <img src={vsbthree} alt="branding"  className='w-full h-[400px]'/>
          </div>


           <div className='my-auto mx-14'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
            <p className='text-white text-2xl'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Aliquam totam fugiat libero <br /> sequi quo laboriosam adipisci! Aperiam id eveniet ipsam?</p>
            <a href="#" className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </a>
          </div>


          <div className='my-auto mx-14'>
            <h6 className='text-purple-400 mb-7'>Brand Consulting</h6>
            <p className='text-white text-2xl'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Aliquam totam fugiat libero <br /> sequi quo laboriosam adipisci! Aperiam id eveniet ipsam?</p>
            <a href="#" className='mt-5 flex items-center gap-2'>
              <ArrowRight className="w-16 h-16 text-white bg-purple-500 rounded-full p-5" />
            </a>
          </div>


          <div className='w-full'>
            <img src={zavainethree} alt="branding"  className='w-full h-[400px]'/>
          </div>

          </div>  
      </section>





      {/* CTA Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Your Brand Could Be Our Next Success Story</h2>
            <p className="text-xl text-gray-900 mb-8">
              Ready to transform your business into an iconic brand? Let's discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#683FBF] text-white px-8 py-4 font-semibold hover:bg-[#5a35a3] transition-colors"
              >
                Book a Strategy Call
              </Link>
              <Link
                to="/brand-audit"
                className="border-2 border-[#683FBF] text-[#683FBF] px-8 py-4 font-semibold hover:bg-[#683FBF] hover:text-white transition-colors"
              >
                Take the Brand Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;