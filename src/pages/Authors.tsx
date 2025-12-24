import React from 'react';
import { Users, GraduationCap, Building, Award } from 'lucide-react';
import { authors } from '../data/content';

const Authors: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white">
        <div className="flex items-center justify-center mb-4">
          <Users className="h-12 w-12 mr-4" />
          <h1 className="text-4xl font-bold">Qo'llanma mualliflari</h1>
        </div>
        <p className="text-xl opacity-90">
          "Bolalarni maktabga tayyorlash metodikasi" fanining mutaxassislari
        </p>
      </div>

      {/* Authors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {authors.map((author, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center space-x-6">
                <div className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full">
                  <GraduationCap className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{author.name}</h3>
                  <p className="text-xl opacity-90">{author.position}</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tashkilot va kafedra:</h4>
                    <p className="text-gray-700">{author.affiliation}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Faoliyat sohasi:</h4>
                    <p className="text-gray-700">
                      Maktabgacha ta'lim metodikasi, pedagogika va psixologiya sohasida 
                      ilmiy va amaliy faoliyat olib boradi.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info for each author */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                {index === 0 && (
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Xasanova Shaxnoza To'xtasınovna</h4>
                    <p className="text-blue-800 text-sm">
                      Nizomiy nomidagi O'zbekiston milliy pedagogika universiteti "Maktabgacha ta'lim metodikasi" 
                      kafedrasi dotsenti. Maktabgacha ta'lim sohasida 15 yildan ortiq tajribaga ega.
                    </p>
                  </div>
                )}
                
                {index === 1 && (
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Isabekova Dilafruz Shermirzayevna</h4>
                    <p className="text-purple-800 text-sm">
                      Angren universiteti "Pedagogika va psixologiya" kafedrasi katta o'qituvchisi. 
                      Maktabgacha ta'lim va pedagogika sohasida ilmiy tadqiqotlar olib boradi.
                    </p>
                  </div>
                )}
                
                {index === 2 && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Giyasova Mushtariy Abduganiyevna</h4>
                    <p className="text-green-800 text-sm">
                      Angren universiteti "Pedagogika va psixologiya" kafedrasi o'qituvchisi. 
                      Yashil olim va pedagog sifatida katta tajribaga ega.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reviewers */}
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Taqrizchilar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              N.N.Djamilova
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Nizomiy nomidagi O'zbekiston milliy pedagogika universiteti, 
              Pedagogika fanlari doktori (DSc), professor
            </p>
            <div className="flex items-center text-blue-600">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Taqrizchi</span>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              N.X. Irbutayev
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Angren universiteti "Pedagogika va psixologiya" kafedra mudiri, 
              Pedagogika fanlari nomzodi
            </p>
            <div className="flex items-center text-purple-600">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Taqrizchi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Jamoa Statistikasi</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">3</div>
            <div className="text-lg opacity-90">Asosiy Muallif</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2</div>
            <div className="text-lg opacity-90">Taqrizchi</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2</div>
            <div className="text-lg opacity-90">Universitet</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">2025</div>
            <div className="text-lg opacity-90">Nashr yili</div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-900 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Mualliflar bilan bog'lanish</h2>
        <p className="text-gray-300 mb-4">
          Agar sizda o'quv qo'llanma bo'yicha savollaringiz yoki takliflaringiz bo'lsa, 
          quyidagi tashkilotlar orqali biz bilan bog'lanishingiz mumkin.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Nizomiy nomidagi O'zbekiston milliy pedagogika universiteti</h3>
            <p className="text-gray-300 text-sm">
              "Maktabgacha ta'lim metodikasi" kafedrasi
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Angren Universiteti</h3>
            <p className="text-gray-300 text-sm">
              "Pedagogika va psixologiya" kafedrasi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;