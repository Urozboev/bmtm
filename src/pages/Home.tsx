import React from 'react';
import { BookOpen, ArrowRight, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contentData, questions } from '../data/content';

const TopicCard: React.FC<{ topic: any }> = ({ topic }) => {
  const topicQuestions = questions.filter(q => q.category === topic.id);
  const subsectionsCount = topic.subsections ? topic.subsections.length : 0;
  
  // Generate a random gradient color
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-purple-500 to-pink-600', 
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-indigo-500 to-blue-600',
    'from-pink-500 to-rose-600',
  ];
  const gradientIndex = topic.id.charCodeAt(0) % gradients.length;
  const gradient = gradients[gradientIndex];

  return (
    <Link to={`/topics/${topic.id}`}>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
        {/* Card Header with Gradient */}
        <div className={`bg-gradient-to-r ${gradient} p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-medium opacity-90">
                  {topic.id.includes('kirish') ? 'Kirish' : 
                   topic.id.includes('bob') ? `Bob ${topic.id.split('-')[1]}` : topic.id}
                </div>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {topic.title}
          </h3>
          
          {topic.content && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {topic.content.length > 150 
                ? `${topic.content.substring(0, 150)}...` 
                : topic.content}
            </p>
          )}

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{subsectionsCount} bo'lim</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{topicQuestions.length} savol</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
              O'qishni boshlash
            </span>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Home: React.FC = () => {
  // Filter out content without meaningful sections
  const topics = contentData.filter(item => 
    item.id !== 'kirish' || item.content
  );

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
        <h1 className="text-4xl font-bold mb-4 uppercase">
          Bolalarni maktabga tayyorlash metodikasi
        </h1>
        <p className="text-xl opacity-90 mb-6">
          O'quv qo'llanma
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
            <span className="text-sm font-medium">60110200 – Maktabgacha ta'lim</span>
          </div>
          <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
            <span className="text-sm font-medium">Angren universiteti</span>
          </div>
        </div>
      </div>

      {/* Topics Grid */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mavzular ro'yxati
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Har bir mavzuni alohida sahifa orqali o'rganing va mavzu bo'yicha maxsus 
            savollar bilan bilimlaringizni sinab ko'ring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Kurs haqida
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
            <div className="text-gray-600">Asosiy boblar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">36+</div>
            <div className="text-gray-600">Kichik bo'limlar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{questions.length}</div>
            <div className="text-gray-600">Test savollari</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
            <div className="text-gray-600">Muallif</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          O'rganishni boshlang!
        </h2>
        <p className="text-gray-700 mb-6">
          Yuqoridagi mavzulardan birini tanlang va bilimlar dunyosiga kirishni boshlang.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
            <Link to="/topics/kirish" className="hover:text-blue-100">
              Kirish bo'limidan boshlang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;