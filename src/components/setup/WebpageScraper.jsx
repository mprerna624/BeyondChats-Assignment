import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, AlertCircle, ChevronRight, FileText } from 'lucide-react';

const dummyPages = [
  { url: '/home', status: 'completed', chunks: ['About our company', 'Our mission', 'Contact information'], progress: 100 },
  { url: '/products', status: 'in_progress', chunks: ['Product catalog', 'Pricing details'], progress: 65 },
  { url: '/services', status: 'pending', chunks: [], progress: 0 },
  { url: '/contact', status: 'completed', chunks: ['Office locations', 'Support email', 'Phone numbers'], progress: 100 },
  { url: '/about', status: 'completed', chunks: ['Company history', 'Team members', 'Values'], progress: 100 }
];

const WebpageScraper = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [pages, setPages] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPages(prev => {
        if (prev.length < dummyPages.length) {
          return dummyPages.slice(0, prev.length + 1);
        }
        clearInterval(timer);
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const totalProgress = pages.reduce((acc, page) => {
      if (page.status === 'completed') return acc + 100;
      if (page.status === 'in_progress') return acc + page.progress;
      return acc;
    }, 0) / dummyPages.length;
    setProgress(totalProgress);
  }, [pages]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in_progress': return <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />;
      case 'pending': return <AlertCircle className="w-5 h-5 text-gray-400" />;
      default: return null;
    }
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 text-green-600';
      case 'in_progress':
        return 'bg-blue-50 text-blue-600';
      case 'pending':
        return 'bg-gray-50 text-gray-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="animate-fade-in-up">
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Website Scraping Status
            </h3>
            <p className="mt-1 text-gray-600">Training your chatbot with website content</p>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between mb-2 text-sm font-medium">
              <span className="text-gray-600">Scraping Progress</span>
              <span className="text-blue-600">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out animate-shimmer"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Pages List */}
        <div className="divide-y divide-gray-100">
          {pages.map((page, index) => (
            <div
              key={index}
              onClick={() => setSelectedPage(selectedPage === index ? null : index)}
              className={`
                group relative overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02]
                ${selectedPage === index ? 'bg-white' : 'hover:bg-white'}
              `}
            >
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(page.status)}
                    <span className="font-medium text-gray-900">{page.url}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`hidden sm:inline-block text-sm px-3 py-1 rounded-full ${getStatusStyles(page.status)}`}>
                      {page.status.replace('_', ' ')}
                    </span>
                    <ChevronRight 
                      className={`w-5 h-5 text-gray-400 transition-transform ease-out duration-300 
                        ${selectedPage === index ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                    />
                  </div>
                </div>

                {/* Chunks */}
                {selectedPage === index && page.chunks.length > 0 && (
                  <div className="mt-4 pl-8 space-y-2 animate-slide-right">
                    {page.chunks.map((chunk, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-gray-100 
                                 shadow-sm transition-transform ease-out duration-300 hover:scale-[1.02]"
                      >
                        <FileText className="w-4 h-4 text-blue-500" />
                        <p className="text-sm text-gray-600">{chunk}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebpageScraper;