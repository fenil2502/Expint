module.exports = {
  trailingSlash: false,
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  async rewrites() {
    return [
      // Page Not Found
      { source: '/pageNotFound', destination: '/notFound/PageNotFound' },
      { source: '/chatbots', destination: '/chatbots/Chatbots' },
      { source: '/arvrTechnology', destination: '/arvrTechnology/ArvrTechnology' },
      { source: '/artificialIntelligence', destination: '/artificialIntelligence/ArtificialIntelligence' },
      { source: '/about', destination: '/about/About' },
      { source: '/contact', destination: '/contact/ContactUs' },
      { source: '/blog', destination: '/blog/Blog' },
      { source: '/', destination: '/home/Home' },
    ];
  },
};
