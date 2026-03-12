import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../pages/BlogPosts';

interface RelatedArticlesProps {
  posts: BlogPost[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ posts }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Related Articles
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post.id}
            to={`/blog/${post.id}`}
            className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{post.publishedAt}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-600">{post.author.name}</span>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;