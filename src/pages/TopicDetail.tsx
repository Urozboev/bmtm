import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import { contentData, questions } from '../data/content';
import QuestionSpinner from '../components/QuestionSpinner';

interface AccordionItemProps {
  item: any;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
  const [subOpenItems, setSubOpenItems] = useState<Set<string>>(new Set());

  const toggleSubItem = (id: string) => {
    const newSet = new Set(subOpenItems);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSubOpenItems(newSet);
  };

  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      {/* Main Section */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-left transition-all duration-200 flex items-center justify-between"
      >
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">
            {item.id.split('-')[0] || '0'}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        </div>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-gray-600" />
        ) : (
          <ChevronRight className="h-5 w-5 text-gray-600" />
        )}
      </button>

      {/* Content */}
      {isOpen && (
        <div className="bg-white">
          {/* Introduction content */}
          {item.content && (
            <div className="px-6 py-4 border-b border-gray-100">
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          )}

          {/* Subsections */}
          {item.subsections && (
            <div className="pl-6">
              {item.subsections.map((subsection: any) => (
                <div key={subsection.id} className="border-l-2 border-blue-200 ml-4">
                  <button
                    onClick={() => toggleSubItem(subsection.id)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-purple-500 text-white rounded-full text-xs font-bold">
                        {subsection.id}
                      </div>
                      <span className="font-medium text-gray-800">{subsection.title}</span>
                    </div>
                    {subOpenItems.has(subsection.id) ? (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-500" />
                    )}
                  </button>

                  {/* Subsection Content */}
                  {subOpenItems.has(subsection.id) && (
                    <div className="px-4 pb-4 bg-gray-50">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{subsection.content}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const TopicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  
  const topic = contentData.find(item => item.id === id);
  const topicQuestions = questions.filter(q => q.category === id);
  
  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Mavzu topilmadi</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    );
  }

  const toggleItem = (topicId: string) => {
    const newSet = new Set(openItems);
    if (newSet.has(topicId)) {
      newSet.delete(topicId);
    } else {
      newSet.add(topicId);
    }
    setOpenItems(newSet);
  };

  const subsectionsCount = topic.subsections ? topic.subsections.length : 0;
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Bosh sahifaga qaytish
        </Link>
        
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white flex-shrink-0">
            <BookOpen className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-2">
              {id?.includes('kirish') ? 'Kirish bo\'limi' : 
               id?.includes('bob') ? `Bob ${id?.split('-')[1]}` : id}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{topic.title}</h1>
            {topic.content && (
              <p className="text-gray-700 leading-relaxed mb-4">{topic.content}</p>
            )}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>{subsectionsCount} bo'lim</span>
              <span>{topicQuestions.length} savol</span>
              <span>Interaktiv</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mavzu ma'lumotlari</h2>
            
            {/* Subsections */}
            {topic.subsections && topic.subsections.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Bo'limlar</h3>
                <div className="space-y-4">
                  {topic.subsections.map((subsection) => (
                    <AccordionItem
                      key={subsection.id}
                      item={subsection}
                      isOpen={openItems.has(subsection.id)}
                      onToggle={() => toggleItem(subsection.id)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Quiz */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            {topicQuestions.length > 0 ? (
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  Bilimlaringizni sinab ko'ring
                </h3>
                <p className="text-gray-700 text-sm text-center mb-6">
                  Bu mavzu bo'yicha {topicQuestions.length} ta savol mavjud
                </p>
                <QuestionSpinner filteredQuestions={topicQuestions} />
              </div>
            ) : (
              <div className="bg-gray-100 rounded-xl p-6 text-center border border-gray-200">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Savollar tayyorlanmoqda
                </h3>
                <p className="text-gray-500 text-sm">
                  Bu mavzu uchun savollar hali kiritilmagan
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Topics */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Boshqa mavzular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contentData
            .filter(item => item.id !== id)
            .slice(0, 4)
            .map((relatedTopic) => (
              <Link
                key={relatedTopic.id}
                to={`/topics/${relatedTopic.id}`}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm">
                    {relatedTopic.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {relatedTopic.subsections ? relatedTopic.subsections.length : 0} bo'lim
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;