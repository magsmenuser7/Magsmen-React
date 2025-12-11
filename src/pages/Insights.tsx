import React from 'react';
import { Link,useParams } from 'react-router-dom';

import { Calendar, Clock, ArrowRight } from 'lucide-react';
import hyperpersonalizationcraftingbrandexperiences from '/assets/blogs/hyper-personalization-crafting-brand-experiences-that-speak-to-gen-zs-individuality.jpg'
import thefutureofbrandingtrendsshapingthenextdecade from '/assets/blogs/the-future-of-branding-trends-shaping-the-next-decade.jpg'
import thebrandjourneyguidingstartupsfromideatoiconic from '/assets/blogs/the-brand-journey-guiding-startups-from-idea-to-iconic.jpg'
import whyyourbrandneedsauniquetoneofvoice from '/assets/blogs/why-your-brand-needs-a-unique-tone-of-voice.jpg'
import visualstorytellinginbranding from '/assets/blogs/visual-storytelling-in-branding.jpeg'
import theglobalbrandplaybookhowtostayculturallyrelevantindiversemarkets from '/assets/blogs/the-global-brand-playbook-how-to-stay-culturally-relevant-in-diverse-markets.png'
import theintersectionofdataandcreativityinbranding from '/assets/blogs/the-intersection-of-data-and-creativity-in-branding.jpg'

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
    }
  ];


const Insights: React.FC = () => {
  const featuredPost = blogPosts[0];
  const latestPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Brand <span className="text-purple-400">Insights</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Strategic insights, case studies, and actionable advice to help modern businesses build iconic brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Join Email Audit
            </button>
          </div>
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
            {latestPosts.map((post) => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}`}
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
//       category: 'Beranding',
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