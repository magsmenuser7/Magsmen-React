import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, BookmarkPlus } from 'lucide-react';
import { getBlogPost, getRelatedPosts } from '../pages/BlogPosts';
import RelatedArticles from '../pages/RelatedArticles';

const BlogDetail: React.FC = () => {
  // ✅ use slug instead of id
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || '');
  const relatedPosts = getRelatedPosts(slug || '', post?.relatedPosts);



  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link 
            to="/insights" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/insights" 
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-purple-600 text-purple-100 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            {post.author && (
              <div className="flex items-center">
                {post.author.avatar && (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                )}
                <div>
                  <div className="font-medium text-white">{post.author.name}</div>
                  <div className="text-sm">Author</div>
                </div>
              </div>
            )}
            
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.publishedAt}</span>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>

            {/* <div className="ml-auto flex items-center gap-3">
              <button className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
              <button className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <BookmarkPlus className="w-4 h-4 mr-2" />
                Save
              </button>
            </div> */}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.imageUrl && (
        <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:p-4 prose-blockquote:rounded-lg prose-blockquote:text-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          {post.author && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start space-x-4">
                {/* {post.author.avatar && (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full"
                  />
                )} */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {/* About {post.author.name} */}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {/* {post.author.bio} */}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Social Share */}
          {/* <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h4>
            <div className="flex gap-4">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Share on Twitter
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                Share on LinkedIn
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Copy Link
              </button>
            </div>
          </div> */}
        </div>
      </article>

      {/* Related Articles */}
      {/* {relatedPosts.length > 0 && (
        <RelatedArticles posts={relatedPosts} />
      )} */}

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Brand Insights</h3>
          <p className="text-purple-100 mb-8 text-lg">
            Get the latest articles on branding, strategy, and marketing delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
















// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft, Calendar, Clock, User, Share2, BookmarkPlus } from 'lucide-react';
// import { getBlogPost, getRelatedPosts } from '../pages/BlogPosts';
// import RelatedArticles from '../pages/RelatedArticles';

// const BlogDetail: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const post = getBlogPost(id || '');
//   const relatedPosts = getRelatedPosts(id || '', post?.relatedPosts);

//   if (!post) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
//           <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
//           <Link 
//             to="/insights" 
//             className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Articles
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
//         <div className="max-w-4xl mx-auto px-4">
//           <Link 
//             to="/insights" 
//             className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Insights
//           </Link>
          
//           <div className="mb-6">
//             <span className="inline-block px-3 py-1 bg-purple-600 text-purple-100 text-sm font-medium rounded-full mb-4">
//               {post.category}
//             </span>
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//               {post.title}
//             </h1>
//             <p className="text-xl text-gray-300 leading-relaxed">
//               {post.excerpt}
//             </p>
//           </div>

//           {/* Article Meta */}
//           <div className="flex flex-wrap items-center gap-6 text-gray-300">
//             <div className="flex items-center">
//               <img 
//                 src={post.author.avatar} 
//                 alt={post.author.name}
//                 className="w-10 h-10 rounded-full mr-3"
//               />
//               <div>
//                 <div className="font-medium text-white">{post.author.name}</div>
//                 <div className="text-sm">Author</div>
//               </div>
//             </div>
            
//             <div className="flex items-center">
//               <Calendar className="w-4 h-4 mr-2" />
//               <span>{post.publishedAt}</span>
//             </div>
            
//             <div className="flex items-center">
//               <Clock className="w-4 h-4 mr-2" />
//               <span>{post.readTime}</span>
//             </div>

//             <div className="ml-auto flex items-center gap-3">
//               <button className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
//                 <Share2 className="w-4 h-4 mr-2" />
//                 Share
//               </button>
//               <button className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
//                 <BookmarkPlus className="w-4 h-4 mr-2" />
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Featured Image */}
//       <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <img 
//             src={post.featuredImage} 
//             alt={post.title}
//             className="w-full h-64 md:h-96 object-cover"
//           />
//         </div>
//       </div>

//       {/* Article Content */}
//       <article className="max-w-4xl mx-auto px-4 py-12">
//         <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-8">
//             {post.tags.map((tag, index) => (
//               <span 
//                 key={index}
//                 className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>

//           {/* Article Body */}
//           <div 
//             className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:p-4 prose-blockquote:rounded-lg prose-blockquote:text-gray-800"
//             dangerouslySetInnerHTML={{ __html: post.content }}
//           />

//           {/* Author Bio */}
//           <div className="mt-12 pt-8 border-t border-gray-200">
//             <div className="flex items-start space-x-4">
//               <img 
//                 src={post.author.avatar} 
//                 alt={post.author.name}
//                 className="w-16 h-16 rounded-full"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   About {post.author.name}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {post.author.bio}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Social Share */}
//           <div className="mt-8 pt-8 border-t border-gray-200">
//             <h4 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h4>
//             <div className="flex gap-4">
//               <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                 Share on Twitter
//               </button>
//               <button className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
//                 Share on LinkedIn
//               </button>
//               <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
//                 Copy Link
//               </button>
//             </div>
//           </div>
//         </div>
//       </article>

//       {/* Related Articles */}
//       {relatedPosts.length > 0 && (
//         <RelatedArticles posts={relatedPosts} />
//       )}

//       {/* Newsletter Signup */}
//       <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h3 className="text-3xl font-bold mb-4">Stay Updated with Brand Insights</h3>
//           <p className="text-purple-100 mb-8 text-lg">
//             Get the latest articles on branding, strategy, and marketing delivered to your inbox.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//             <input 
//               type="email" 
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
//             />
//             <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BlogDetail;