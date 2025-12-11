import {useParams, Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Award, Calendar, Building } from 'lucide-react';
import { title } from 'framer-motion/client';
import tenalidoublehorsevideo from '/assets/casestudies/tenali-double-horse.mp4'
import suryacolorsvideo from '/assets/casestudies/surya-colors-video.mp4'
import tdhrishikavideo from '/assets/casestudies/tdh-rishika.mp4'
import telugufoodsvideo from '/assets/casestudies/telugu-foods.mp4'
import triplexvideo from '/assets/casestudies/triplex-video.mp4'
import vsbvideo from '/assets/casestudies/vsbgroup.mp4'
import zavainevideo from '/assets/casestudies/zavaine-video.mp4'
import tenalidoublehorseImage1 from '/assets/casestudies/urad-gota.png';
import tenalidoublehorseImage2 from '/assets/casestudies/suma-packets.png';
import tenalidoublehorseImage3 from '/assets/casestudies/tenali-double-products.png';
import suryacolorsImage1 from '/assets/casestudies/surya-color-one.png';
import suryacolorsImage2 from '/assets/casestudies/surya-color-two.png';
import suryacolorsImage3 from '/assets/casestudies/surya-color-three.png';
import tdhrishikaImage1 from '/assets/casestudies/tdh-sunnundalu.png';
import tdhrishikaImage2 from '/assets/casestudies/tdh-dosa.png';
import tdhrishikaImage3 from '/assets/casestudies/tdh-garalu.png';
import telugufoodsImage1 from '/assets/casestudies/telugu-ginger-garlic.png';
import telugufoodsImage2 from '/assets/casestudies/telugu-tomato.png';
import telugufoodsImage3 from '/assets/casestudies/telugu-chicken-garam-meat.png';
import triplexImage1 from '/assets/casestudies/triplex-one.png';
import triplexImage2 from '/assets/casestudies/triplex-two.png';
import triplexImage3 from '/assets/casestudies/triplex-three.png';
import vsbImage1 from '/assets/casestudies/vsb-one.png';
import vsbImage2 from '/assets/casestudies/vsb-two.png';
import vsbImage3 from '/assets/casestudies/vsb-three.png';
import zavaineImage1 from '/assets/casestudies/zavaine-one.png';
import zavaineImage2 from '/assets/casestudies/zavaine-two.png';
import zavaineImage3 from '/assets/casestudies/zavaine-three.png';
import BrandingPatternLYN from '/assets/works/Branding-Pattern-LYN.jpg'
import { ChevronLeft, ChevronRight } from "lucide-react";
import telugutomato from '/assets/works/telugu-tomato.png'
import ConsultantLogoDesign1024x1024 from '/assets/services/Consultant_Logo_Design_3_1024x1024.webp';





const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [index, setIndex] = useState(0);
  const images = [BrandingPatternLYN, BrandingPatternLYN, BrandingPatternLYN];


  // Case study data - in a real app, this would come from a CMS
  const caseStudies = {
    'telugu-foods': {
      title: 'Digital & Social Strategy to Boost Brand Awareness, B2B Sales, and Market Position',
      client: 'Telugu Foods',
      industry: 'Food Industry (FMCG)',
      stage: 'Growth',
      duration: '12 Months',
      services: ['Digital Strategy', 'Social Media Marketing', 'B2B Events', 'Influencer Marketing'],
      heroImage: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',  // Use actual hero image path or imported variable
      heroVideo : telugufoodsvideo,
      challenge: 'Telugu Foods was struggling to increase brand awareness and sales in a highly competitive food industry. They lacked a clear digital and social media strategy, and their B2B business was underperforming.',

      strategy: [
        {
          title: 'Digital & Social Media Planning',
          description: 'Created a comprehensive digital and social media plan to engage with users and increase product awareness.'
        },
        {
          title: 'Shows & Events Execution',
          description: 'Planned and executed successful shows and events to boost B2B sales and visibility.'
        },
        {
          title: 'Annual Brand Plans',
          description: 'Designed and implemented annual brand plans to improve the overall brand strategy.'
        },
        // {
        //   title: 'Influencer & Viral Campaigns',
        //   description: 'Executed influencer marketing and viral campaigns to attract new users and improve market position.'
        // }
      ],

      results: [
        'Increased market positioning by 16x',
        'Increased social conversation by 22x',
        'Engagement increased 159x',
        'Comprehensive digital and social strategy successfully improved brand awareness.',
        'B2B business performance significantly improved through shows and events.',
        'PAN India strategy implemented to grow brand presence and sales through e-commerce and social media.'
      ],

      testimonial: {
        quote: 'Magsmen helped us turn our digital presence into a powerful growth engine. Their strategic thinking and flawless execution helped us dramatically improve brand awareness, B2B performance, and market positioning.',
        author: 'Managing Director',
        company: 'Telugu Foods'
      },

      gallery: [
        telugufoodsImage1,
        telugufoodsImage2,
        telugufoodsImage3
      ]
    },
    'tenali-double-horse': {
      // title: 'From Heritage FMCG to Premium National Brand',
      title:'Transformative Brand Strategy & Market Expansion Roadmap for Tenali Double Horse',
      client: 'Tenali Double Horse',
      industry: 'FMCG - Food Products',
      stage: 'Growth',
      duration: '12 Months',
      services: ['Brand Strategy', 'Brand Architecture', 'Rebranding'],
      heroImage: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg',
      heroVideo : tenalidoublehorsevideo,
      challenge: 'Tenali Double Horse was a household name in Andhra Pradesh, but brand perception limited them to regional recognition. The challenge was clear: reposition for a premium national market without losing their heritage trust, and simultaneously enter new global channels.',
      strategy: [
        {
          title: 'Brand Audit',
          description: 'Analysed positioning gaps across 7 states, studied competitors in FMCG premium rice segment.'
        },
        {
          title: 'Repositioning',
          description: 'Developed a corporate brand architecture to house all SKUs and sub-brands under a premium umbrella.'
        },
        {
          title: 'Activation',
          description: 'E-commerce launch on Amazon India & US, celebrity-driven "Anubandham" campaign, vendor coordination for packaging refresh.'
        }
      ],
      results: [
        '+30% Brand Engagement in 12 months',
        'US Market Entry via Amazon and direct distribution',
        'Pan-India Distribution roadmap activated for Q4 2024'
      ],
      testimonial: {
        quote: 'Magsmen helped us see a whole new Tenali Double Horse. Their clarity, time management, and transparency made the repositioning a success. We\'re continuing our journey together.',
        author: 'Managing Director',
        company: 'Tenali Double Horse'
      },
      gallery: [
        tenalidoublehorseImage1,
        tenalidoublehorseImage2,
        tenalidoublehorseImage3,

      ]
    },
    'surya-colors': {
      title: 'Comprehensive Digital & Brand Strategy to Boost Engagement, Awareness, and Brand Stability',
      client: 'Surya Colors',
      industry: 'Paints & Coatings',
      stage: 'Growth Stage',
      duration: '8 Months',
      services: ['Brand Creation', 'Go-to-Market Strategy', 'Digital Launch'],
      heroVideo : suryacolorsvideo,
      heroImage: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
      challenge: 'Build a strong digital and brand strategy from scratch to increase product awareness, user engagement, and brand stability for Surya Colors in a competitive paints & coatings market.',
      strategy: [
        {
          title: 'Market Research',
          description: 'Deep dive into Indian skincare preferences, price sensitivity, and inclusivity gaps in existing brands.'
        },
        {
          title: 'Brand Creation',
          description: 'Developed complete brand identity, packaging design, and messaging framework for affordable luxury positioning.'
        },
        {
          title: 'Launch Strategy',
          description: 'Multi-channel launch strategy focusing on digital-first approach with selective retail partnerships.'
        }
      ],
      results: [
        'Affordable luxury positioning achieved',
        'Strong retail uptake across 5 states',
        'Brand recognition in target demographic'
      ],
      testimonial: {
        quote: 'Magsmen crafted a robust digital and brand strategy that significantly increased our brand visibility, engagement, and market reach. Their strategic guidance helped us expand our product line and enter new markets successfully.',
        author: 'Founder & CEO',
        company: 'Surya Colors'
      },
      gallery: [
       suryacolorsImage1,
       suryacolorsImage2,
       suryacolorsImage3,
        
      ]
    },
    'tdh-rishika': {
      title: 'Comprehensive Brand Strategy & Pan-India Launch for TDH Products',
      client: 'TDH Rishika',
      industry: 'FMCG & Younger Generation',
      stage: 'Legacy',
      duration: '10 Months',
      services: ['Brand Repositioning', 'Visual Identity', 'Content Strategy'],
      heroVideo : tdhrishikavideo,
      heroImage: 'https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg',
      challenge: 'Develop a comprehensive brand strategy for TDH to improve brand awareness and sales, establish a unique identity in the FMCG & Younger Generation industry, and execute a cost-efficient pan-India launch while building strong customer engagement.',
      strategy: [
        {
          title: 'Brand Listening',
          description: 'Analyzed brand equity, industry perception, and identified positioning gaps in the production house landscape.'
        },
        {
          title: 'Identity Redesign',
          description: 'Created standalone brand voice while leveraging Suma\'s credibility, focusing on emerging creator support.'
        },
        {
          title: 'Platform Consistency',
          description: 'Unified messaging across all platforms, aligning with the mission of supporting first-time creators.'
        }
      ],
      results: [
        'Clear brand positioning achieved',
        'Younger audience engagement boosted',
        'Industry recognition as creator launchpad'
      ],
      testimonial: {
        quote: 'Magsmen helped us develop a distinctive brand strategy and execute an impactful pan-India launch campaign. Their expertise in packaging, influencer marketing, and strategic planning significantly boosted our brand visibility and customer engagement.',
        author: 'Founder & CEO',
        company: 'TDH Rishika'
      },
      gallery: [
        tdhrishikaImage1,
        tdhrishikaImage2,
        tdhrishikaImage3
      ]
    },
    'triplex': {
      title: 'Comprehensive Digital Strategy to Boost Brand Awareness, Engagement, and Market Reach',
      client: 'Triplex',
      industry: 'Detergent / FMCG',
      stage: 'Growth',
      duration: '12 Months',
      services: ['Digital Strategy', 'Digital Brand Positioning', 'Content Marketing', 'Reputation Management'],
      heroImage: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg', // Replace with actual image or imported variable
      heroVideo : triplexvideo,
      challenge: 'Triplex, a leading detergent company in the Telugu states, faced the challenge of establishing a strong digital and social media presence to increase brand awareness and reach. The brand needed to improve its digital strategy, positioning, and reputation management to maintain its competitive edge.',

      strategy: [
        {
          title: 'Digital Strategy',
          description: 'Utilized digital marketing channels such as email, social media, and SEO to increase brand awareness and reach.'
        },
        {
          title: 'Content Marketing & Campaigns',
          description: 'Developed engaging content that resonated with the target audience, improved followers, and leveraged social media influencers to increase brand awareness.'
        },
        {
          title: 'Digital Brand Positioning',
          description: 'Positioned Triplex as a top detergent brand in the Telugu states through a strong digital presence and engaging content.'
        },
        {
          title: 'Digital Introduction',
          description: 'Introduced Triplex to new digital and social media platforms to expand the brand\'s reach and increase awareness.'
        },
        {
          title: 'Reputation Management',
          description: 'Managed the brand\'s online reputation by monitoring reviews and responding to customer feedback professionally and promptly.'
        }
      ],

      results: [
        'Increased engagement by 315x through a comprehensive digital and social media strategy.',
        'Launched Triplex in the Tamil Nadu market, expanding the brand\'s presence and reach.',
        'Promoted 17 new product launches on social media, increasing brand awareness and sales.'
      ],

      testimonial: {
        quote: 'Magsmen helped us strengthen our digital presence and engagement while expanding into new markets. Their strategies for content marketing, campaigns, and reputation management significantly improved our brand awareness and followers.',
        author: 'Marketing Director',
        company: 'Triplex'
      },

      gallery: [
        triplexImage1,
        triplexImage2,
        triplexImage3
      ]
    },
    'vsb': {
      title: 'Comprehensive Brand Revamp & Global Market Positioning for VSB Group',
      client: 'VSB Surfaces',
      industry: 'Granite & Quartz Exports',
      stage: 'Growth',
      duration: '12 Months',
      services: ['Brand Strategy', 'Rebranding', 'Digital Presence', 'Brand Architecture', 'Events & Expos'],
      heroImage: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg', // Replace with actual image or imported variable
      heroVideo : vsbvideo,
      challenge: 'VSB Surfaces, a leading exporter of granites and quartz in South India, faced the challenge of improving their brand presence both online and offline. The brand required a complete revamp with a tailored approach for each of the 45 countries they export to. Additionally, a brand architecture was needed for their group of companies and individual line of brand positioning for each company.',

      strategy: [
        {
          title: 'Complete Rebranding',
          description: 'Conducted a full brand revamp to create a unique and consistent identity for VSB Group.'
        },
        {
          title: 'Tailored International Approach',
          description: 'Developed a customized strategy for each of the 45 export countries, creating a unique voice and positioning for every market.'
        },
        {
          title: 'Brand Architecture',
          description: 'Designed a comprehensive brand architecture for the group of companies and individual line of brand positioning.'
        },
        {
          title: 'Digital Presence',
          description: 'Improved online presence through a digital strategy including social media, email marketing, and SEO.'
        },
        {
          title: 'Events & Expos',
          description: 'Enhanced brand visibility through events and expos across India and Germany, boosting B2B market opportunities.'
        }
      ],

      results: [
        'Created a unique and consistent brand identity across the group.',
        'Developed a tailored approach for each of the 45 export countries, strengthening international presence.',
        'Established a clear brand architecture for the group and individual companies.',
        'Improved online brand presence through social media, SEO, and email marketing.',
        'Increased brand visibility and B2B opportunities through events and expos in India and Germany.'
      ],

      testimonial: {
        quote: 'Magsmen helped us completely revamp our brand identity and establish a strong presence both online and offline. Their tailored approach for each market significantly strengthened our global brand positioning.',
        author: 'Managing Director',
        company: 'VSB Surfaces'
      },

      gallery: [
        vsbImage1,
        vsbImage2,
        vsbImage3
      ]
    },
    'zavaine': {
      title: 'Establishing India\'s First Detergent Tablet Brand with a Strong Digital Strategy',
      client: 'Zavaine',
      industry: 'Detergent / FMCG',
      stage: 'Startup',
      duration: '6 Months',
      services: ['Brand Positioning', 'Digital Strategy', 'Social Media Marketing', 'E-commerce Strategy'],
      heroImage: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg', // Replace with actual image or imported variable
      heroVideo : zavainevideo,
      challenge: 'Zavaine, India\'s first detergent tablet and a sister brand of Triplex, needed to establish itself as a market leader and increase product awareness and sales. As the first brand consultants in India to market the product, we faced the challenge of building the brand from scratch.',

      strategy: [
        {
          title: 'Brand Positioning',
          description: 'Positioned Zavaine as a high-quality, convenient, and eco-friendly detergent solution for customers who value time and convenience without compromising on performance.'
        },
        {
          title: 'Digital & Social Strategy',
          description: 'Implemented a comprehensive digital strategy to increase product awareness and engagement. Social media campaigns were designed to actively engage with customers and promote the brand.'
        },
        {
          title: 'Budget Roadmap',
          description: 'Developed a cost-efficient marketing plan to ensure that all brand marketing efforts were effective and aligned with business goals.'
        },
        {
          title: 'E-commerce Expansion',
          description: 'Leveraged platforms like Amazon and Flipkart to expand product reach and drive sales.'
        }
      ],

      results: [
        'Increased engagement by 15x and brand recall by 217x through a comprehensive digital and social media strategy.',
        'Achieved 124,299 sales in the first 3 months through e-commerce platforms.',
        'Expanded the brand\'s presence in 3 new markets, increasing visibility and reach.'
      ],

      testimonial: {
        quote: 'Magsmen helped us establish Zavaine as India\'s first detergent tablet brand and effectively built its market presence from scratch. Their innovative digital strategy and social media campaigns significantly increased brand engagement, recall, and sales.',
        author: 'Marketing Director',
        company: 'Zavaine'
      },

      gallery: [
        zavaineImage1,
        zavaineImage2,
        zavaineImage3
      ]
    }

  };

  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-yellow-600 hover:text-yellow-700">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <section className='mx-auto py-24 md:px-10 '>

      <div className='flex justify-between items-center'>
        <h1 className='text-5xl pt-16 pb-10'>Sleep therapy’s product landing page design with ecommerce integration.</h1>
        <div className=''>
            <h2 className='text-gray-500'>Case Study</h2>
            <p className='font-thin'>Telugu Foods</p>
        </div>

          <div>
            <h1 className='font-bold text-black'>Industry</h1>
            <p className='font-thin'>Food & Beverages, Restaurant/Café</p>
          </div>


          <div>
            <h1 className='font-bold text-black'>Areas</h1>
            <p className='font-thin'>Brand Strategy, Brand Design, Collateral Design</p>
          </div>
        </div>

        <div className='mx-auto pt-20'>
          <img src={telugutomato} alt="" />
        </div>
      </section>


      <section className='bg-[#d4d4d4] py-5'>
        <div className='mx-auto lg:px-9'>
          <h2 className='text-black text-3xl'>Telugu Foods: A South Indian FMCG brand celebrated for bringing authentic regional flavors to every kitchen with its wide range of traditional snacks and spice mixes.</h2>
        </div>
      </section>

      <section className='bg-gray-200 py-24'>
        <div className='lg:px-9'>
          <h2 className='text-5xl py-5 font-bold'>Problem</h2>
          <p>Telugu Foods was struggling to increase brand awareness and sales in the highly competitive food industry. They lacked a clear digital and social media strategy, and their B2B business was not performing as well as they had hoped</p>
        </div>

        <div className='px-9  py-5'>
          <h2 className='text-5xl py-5 font-bold'>Strategy</h2>
          <p>Our strategy was to create a comprehensive digital and social media plan to engage with users and increase product awareness. We also planned and executed shows and events to increase B2B business, and wrote annual brand plans to improve overall brand strategy. Finally, we implemented influencer marketing campaigns and viral marketing efforts to attract new users and improve market position.</p>
        </div>

        <div className='lg:px-9'>
          <h2 className='text-5xl py-5 font-bold'>Results</h2>

          <ul>
            <li>Created a comprehensive digital and social media plan to increase product awareness.</li>
            <li>Engaged with users through messaging to improve customer experience.</li>
            <li>Planned and executed successful shows and events to increase B2B sales</li>
            <li>Implemented annual brand plans to improve overall brand strategy.</li>
            <li>Leveraged influencer marketing campaigns and viral marketing efforts to attract new users and improve market position.</li>
            <li>Implemented a PAN India strategy to increase brand growth and sales through e-commerce and social media promotions.</li>
            <li>Increased the market positioning by 16x</li>
            <li>Increased the social conversation by 22x
            </li>

            <li>Engagement increased 159x
            </li>
          </ul>
        </div>
      </section>


      <section className='lg:px-9 bg-gray-100'>
         <div className='mx-auto pt-16'>
          <img src={telugutomato} alt="" />
        </div>
      </section>

        <section className='lg:px-9 bg-gray-100'>
         <div className='grid grid-cols-2 mx-auto pt-2 gap-2'>
          <img src={telugutomato} alt="" />
           <img src={telugutomato} alt="" />
        </div>
      </section>

        <section className='lg:px-9 bg-gray-100'>
         <div className='mx-auto pt-2'>
          <img src={telugutomato} alt="" />
        </div>
      </section>

       <section className='lg:px-9 bg-gray-100 pb-14'>
         <div className='grid grid-cols-3 mx-auto pt-2 gap-2'>
          <img src={telugutomato} alt="" />
           <img src={telugutomato} alt="" />
            <img src={telugutomato} alt="" />
        </div>
      </section>


      <section>
        <div className="py-28 bg-gray-200">
        <div className="grid grid-cols-2 mx-auto items-center justify-center max-w-6xl">
          <div>
            <h1 className="text-5xl md:text-8xl font-bold text-black">
              Related <br /> <span className="font-thin">Works</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ea suscipit accusantium nobis hic voluptatum alias iusto quis, maxime debitis, tempora doloremque maiores. Non et ex fugiat. Minima, expedita delectus?</p>
          </div>

          <div className="w-full h-full shadow-xl">
            <img src={ConsultantLogoDesign1024x1024} alt="image-1" />
          </div>

          <div className="w-full h-full shadow-xl">
            <img src={ConsultantLogoDesign1024x1024} alt="image-2" />
          </div>

          {/* Hidden but space preserved */}
          <div className="w-full h-full shadow-xl ">
            <img src={ConsultantLogoDesign1024x1024} alt="image-3" />
          </div>

          
        </div>
</div>
      </section>

       

      



      {/* Related Case Studies */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Transformations</h2>
            <p className="text-lg text-gray-600">Explore other success stories</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(caseStudies)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, study], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={study.heroImage}
                      alt={study.client}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-yellow-600 font-semibold mb-2">{study.industry}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{study.client}</h3>
                    <p className="text-gray-600 mb-4">{study.title}</p>
                    <Link
                      to={`/case-studies/${key}`}
                      className="inline-flex items-center text-[#683FBF] font-semibold hover:text-[#5a35a3] transition-colors"
                    >
                      Read Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section> */}

      
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Your Brand Could Be Our Next Success Story</h2>
            <p className="text-xl text-gray-300 mb-8">
              Want results like this? Let's discuss your brand's transformation.
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
                className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-colors"
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

export default CaseStudyDetail;