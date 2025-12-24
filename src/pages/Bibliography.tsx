import React from 'react';
import { FileText, ExternalLink, Calendar, Building } from 'lucide-react';
import { bibliography } from '../data/content';

const Bibliography: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white">
        <div className="flex items-center justify-center mb-4">
          <FileText className="h-12 w-12 mr-4" />
          <h1 className="text-4xl font-bold">Foydalanilgan adabiyotlar</h1>
        </div>
        <p className="text-xl opacity-90">
          "Bolalarni maktabga tayyorlash metodikasi" fani bo'yicha foydalanilgan adabiyotlar ro'yxati
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Kirish</h2>
        <p className="text-gray-700 leading-relaxed">
          Ushbu o'quv qo'llanma tayyorlashda keng ko'lamli ilmiy adabiyotlar, davlat hujjatlari, 
          metodik qo'llanmalar va zamonaviy tadqiqot ishlaridan foydalanilgan. Quyida keltirilgan 
          adabiyotlar ro'yxati maktabgacha ta'lim sohasida chuqur bilim olish uchun zaruriy manbalardir.
        </p>
      </div>

      {/* Bibliography List */}
      <div className="space-y-6">
        {bibliography.map((item, index) => (
          <div 
            key={item.id}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex items-start space-x-4">
              {/* Number */}
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold text-lg flex-shrink-0">
                {index + 1}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="font-medium">Mualliflar:</span>
                    <span className="ml-2">{item.authors}</span>
                  </div>
                  
                  {item.year && (
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">Yil:</span>
                      <span className="ml-2">{item.year}</span>
                    </div>
                  )}
                  
                  {item.publisher && (
                    <div className="flex items-center text-gray-600">
                      <FileText className="h-4 w-4 mr-2" />
                      <span className="font-medium">Nashriyot:</span>
                      <span className="ml-2">{item.publisher}</span>
                    </div>
                  )}
                  
                  {item.url && (
                    <div className="flex items-center text-blue-600 hover:text-blue-800 mt-3">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:underline"
                      >
                        Manbaga o'tish
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Qo'shimcha ma'lumot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Davlat hujjatlari</h3>
            <p className="text-gray-700 text-sm">
              O'zbekiston Respublikasi Prezidenti qarorlari, Vazirlar Mahkamasi qarorlari va 
              boshqa normativ-huquqiy hujjatlar asosida tayyorlangan.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ilmiy manbalar</h3>
            <p className="text-gray-700 text-sm">
              Maktabgacha ta'lim sohasidagi zamonaviy ilmiy tadqiqotlar va xalqaro tajriba 
              asosida tuzilgan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bibliography;