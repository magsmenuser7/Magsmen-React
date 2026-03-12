import React from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What does a brand consulting firm do?",
    answer:
      "A brand consulting service can offer your business a number of benefits. A good brand strategy will give your business a clear direction and help you to focus your marketing efforts. It can also make it easier to target your ideal customers and position your business in the market. A brand consultant can also help you to develop a unique selling proposition and create a distinctive brand identity. In addition, a brand consultant can provide valuable insights into the latest trends and developments in the world of branding. Ultimately, a brand consulting service can help you to take your business to the next level.",
  },
  {
    question: "When do businesses need brand consulting?",
    answer:
      "Every business is on a journey. They start small, with just a few employees and a handful of customers. But as they grow, they quickly realize that they need to start thinking about their brand. That's when they need brand consulting. A brand consultant can help businesses to articulate their values and create a unique identity that will resonate with their target audience. Without a strong brand, businesses will struggle to stand out from the competition and attract new customers. But with the help of a brand consultant, businesses can reach new heights and achieve their growth goals.",
  },
  {
    question: "What is the difference between brand consulting and digital marketing?",
    answer:
      "Brand consulting and digital marketing may seem like similar fields, but there are several key differences between the two. Brand consultants help organizations to develop and grow their brands. This can involve everything from market research and analysis to brand strategy and identity development. Digital marketers, on the other hand, focus on promoting and selling products or services online. This can involve developing and managing online campaigns, creating digital content, and driving traffic to websites. While both brand consultants and digital marketers play important roles in growth and marketing, they have different focus areas and use different tools and strategies.",
  },
  {
    question: "What includes in personal branding?",
    answer:
      "Personal branding is the process of marketing and promoting yourself as a brand. This can be done by creating and managing your online presence, including your website, social media accounts, and personal blog. It also involves developing and sharing your personal story, mission, and values. personal branding can help you to build credibility and expertise, attract new opportunities, and make better connections. Ultimately, it can help you to achieve your personal and professional goals.",
  },
  {
    question: "How image consulting can help you?",
    answer:
      "Image is everything, especially in the business world. Making the right impression can mean the difference between landing a major client and being passed over for the competition. This is where image consulting comes in. Image consultants work with their clients to help them build the right image for their business. This can involve everything from choosing the right clothing to developing new body language and speaking skills. Image consulting can be an invaluable tool for business owners who want to make sure they are putting their best foot forward. With the help of an image consultant, you can ensure that you are making the right impression and positioning yourself for success.",
  },
  {
    question: "Does your business needs social media?",
    answer:
      "It was only a matter of time before social media changed the business world forever. In the past, businesses had to rely on brick-and-mortar locations and word-of-mouth to build their customer base. But with the advent of social media, businesses can now reach a global audience with just a few clicks of a button And for businesses that don't even have a physical presence, social media can be a game-changer. With platforms like Instagram commerce, businesses can sell their products directly to consumers without ever having to open a store. As a result, social media has created opportunities for businesses of all sizes to succeed. Whether you're a small start-up or a large corporation, there's no excuse not to have a social media presence. So if you're not already on social media, what are you waiting for?",
  },
  {
    question: "What can i expect from Magsmen for my business?",
    answer:
      "Magsmen can provide your business with the strategic guidance it needs to grow. Whether you're looking to launch a new product or refresh your company's image, Magsmen can help you achieve your goals. The first step is to assess your current situation and develop a strategy for moving forward. Once a plan is in place, the brand consultancy will work with you to implement it, making sure that every detail is accounted for. Throughout the process, we will provide ongoing support and advice, ensuring that your brand remains on track. By working with Magsmen, you can rest assured that your business is in good hands. What type of companies do you work with? + FMCG + Industrial + Granite + Marbles + Quartz + Detergents + Chemicals + Construction + Real estate + Hospitality + Healthcare + Cosmetic",
  },
  {
    question: "How can we hire a brand consultant if our business is already struggling?",
    answer:
      "We believe the answer is, how can you afford not to hire someone to help you, as typically business challenges only get worse not better. More importantly, you need to partner with a consulting firm that can actually deliver ‘results’… not just any results, but results that will positively impact your business and breathe new life into your company. That’s why our initial consultation with a potential new client is a nocost, no-risk meeting where we can determine if we can provide a viable, cost-effective solution to you, and more importantly, you can learn more about our firm and whether we would be a good fit for you and your company.",
  },
];

const Faq = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Quick answers to common questions about working with Magsmen
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-8 py-8 shadow-sm"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
