import { ContentSection, Question, Author, BibliographyItem, AppInfo } from '../types/content';

export const contentData: ContentSection[] = [
  {
    id: 'bob-1',
    title: '1. Bolalarni maktabga tayyorlash metodikasi fan sifatida',
    subsections: [
      {
        id: '1.1',
        title: '1.1. "Bolalarni maktabga tayyorlash metodikasi" fan sifatida',
        content: `Jamiyatda tub islohotlarning amalga oshirilishi bevosita maktabgacha ta\'lim tizimiga ham ijobiy ta\'sir ko\'rsatmoqda. Ta\'limda innovatsion metodlardan foydalanish, zamonaviy texnologiyalarni maktabgacha ta\'lim tizimida qo\'llash, boshqaruvning yangi usullarini joriy etish kabi jarayonlar jadal rivojlanmoqda.`,
      },
      {
        id: '1.2',
        title: '1.2. Maktabgacha ta\'limning maqsadi',
        content: `Maktabgacha ta\'limning asosiy maqsadi yosh avlodni har tomonlama rivojlantirish, ularni maktab ta\'limiga tayyorlashdan iborat. Bu jarayonda bolalarning aqliy, jismoniy, ijtimoiy va axloqiy rivojlanishi ta\'minlanadi.`,
      },
      {
        id: '1.3',
        title: '1.3. "Bolalarni maktabga tayyorlash" fanining vazifalari',
        content: `Faning asosiy vazifalari bolalarni maktabga tayyorlashning nazariy asoslarini o\'rganish, amaliy metod va usullarni ishlab chiqish, bo\'lajak pedagoglarni tayyorlashdan iborat.`,
      },
      {
        id: '1.4',
        title: '1.4. Maktabgacha yoshdagi bolalarni maktab',
        content: `Maktabgacha yoshdagi bolalarni maktab ta\'limiga tayyorlash jarayoni bir necha bosqichdan iborat bo\'lib, har bir bosqichda muayyan ko\'nikma va malakalar shakllantiriladi.`,
      },
      {
        id: '1.5',
        title: '1.5. Olti yoshli bolalarni maktab ta\'limiga tayyorlash',
        content: `O\'zbekiston Respublikasi Prezidentining 2019 yil 8 maydagi qarori bilan tasdiqlangan "O\'zbekiston Respublikasi maktabgacha ta\'lim tizimini 2030 yilgacha rivojlantirish Konsepsiyasi"ga muvofiq, maktabgacha ta\'lim yoshidagi bolalar qamrovining yangi maqsadli ko\'rsatkichlariga ko\'ra, 2025 yilga kelib olti yoshli bolalarni majburiy bir yillik bepul tayyorlov guruhlariga to\'liq jalb qilish rejalashtirilgan.`,
      },
    ],
  },
  {
    id: 'bob-2',
    title: '2. Ilk va maktabgacha yoshdagi bolalarning rivojlanishiga qo\'yiladigan davlat talablari',
    subsections: [
      {
        id: '2.1',
        title: '2.1. Ilk va maktabgacha yoshdagi bolalarning rivojlanishiga qo\'yiladigan davlat talablari',
        content: `Davlat talablari maktabgacha yoshdagi bolalarning har tomonlama rivojlanishi uchun zaruriy shart-sharoitlarni belgilaydi. Bu talablar bola shaxsining barcha jihatlarini qamrab oladi.`,
      },
      {
        id: '2.2',
        title: '2.2. Maktabgacha ta\'limda faoliyat markazlarini tashkil etish bola shaxsini shakllantirish omili sifatida',
        content: `Faoliyat markazlari bolalarning mustaqil faoliyat ko\'rsatishi, ijodkorlik qobiliyatlarini rivojlantirishi uchun zaruriy shart-sharoitlarni yaratadi.`,
      },
      {
        id: '2.3',
        title: '2.3. Bolalarni maktabga tayyorlashda rivojlanish',
        content: `Bolalarni maktabga tayyorlash jarayonida ularning intellektual, ijtimoiy va shaxsiy rivojlanishiga alohida e\'tibor beriladi.`,
      },
    ],
  },
  {
    id: 'bob-3',
    title: '3. Maktabgacha yoshdagi bolalarda mehnat tarbiyasi',
    subsections: [
      {
        id: '3.1',
        title: '3.1. Maktabgacha yoshdagi bolalarda mehnat tarbiyasini shakllantirish mazmuni',
        content: `Mehnat tarbiyasi bolalarda mehnatsevarlik, tartiblilik, mas\'uliyat tuyg\'ularini shakllantirishga xizmat qiladi.`,
      },
      {
        id: '3.2',
        title: '3.2. Turli yosh guruhlardagi bolalarni kattalar mehnatiga o\'rgatish',
        content: `Har bir yosh guruh uchun mos mehnat faoliyatlari tanlanadi va bolalarning yosh xususiyatlari hisobga olinadi.`,
      },
      {
        id: '3.3',
        title: '3.3. MTT da bolalar mehnatining asosiy turlari',
        content: `Maktabgacha ta\'lim tashkilotida bolalar mehnatining turli turlari tashkil etiladi va ularning rivojlanishiga ta\'sir ko\'rsatadi.`,
      },
    ],
  },
  {
    id: 'bob-4',
    title: '4. Bolalarni maktabga tayyorlash metodlari va shakllari',
    subsections: [
      {
        id: '4.1',
        title: '4.1. Bolalarni maktabga tayyorlashning an\'anaviy metodlari va shakllari',
        content: `An\'anaviy metodlar va shakllar uzun yillik tajriba asosida yaratilgan bo\'lib, hozirgi kunda ham qo\'llanadi.`,
      },
      {
        id: '4.2',
        title: '4.2. Bolalarni maktab ta\'limiga tayyorlashning asosiy shakllari',
        content: `Maktabga tayyorlashning bir necha asosiy shakli mavjud bo\'lib, ular o\'zaro bog\'liq holda qo\'llanadi.`,
      },
      {
        id: '4.3',
        title: '4.4. Maktabga tayyorgarlikning asosiy yo\'nalishlari',
        content: `Maktabga tayyorgarlikning bir necha asosiy yo\'nalishi mavjud bo\'lib, ular bir-birini to\'ldiradi.`,
      },
      {
        id: '4.4',
        title: '4.4. Bolalarni maktabga tayyorlashning zamonaviy metodlari',
        content: `Zamonaviy metodlar yangi texnologiyalar va ilmiy yutuqlar asosida ishlab chiqilgan.`,
      },
    ],
  },
  {
    id: 'bob-5',
    title: '5. Bolani maktab ta\'limiga tayyorlashning asosiy yo\'nalishlari',
    subsections: [
      {
        id: '5.1',
        title: '5.1. Bolani jismoniy va aqliy jihatdan maktab ta\'limiga tayyorlash',
        content: `Bolaning jismoniy va aqliy tayyorgarligi maktabdagi muvaffaqiyatli o\'qish uchun zaruriy shartdir.`,
      },
      {
        id: '5.2',
        title: '5.2. Bolalarning maktab ta\'limiga tayyorlashda',
        content: `Bolalarning maktab ta\'limiga tayyorlash jarayoni bir necha jihatdan olib boriladi.`,
      },
      {
        id: '5.3',
        title: '5.3. Bola maktabda o\'qishiga ijtimoiy tayyorgarligi',
        content: `Ijtimoiy tayyorgarlik bola maktab muhitida o\'zini erkin his qilishi uchun zarur.`,
      },
      {
        id: '5.4',
        title: '5.4. Bolaning maktabda o\'kishiga jismoniy tayyorligi',
        content: `Jismoniy tayyorgarlik maktabdagi faoliyatni muvaffaqiyatli olib borish uchun zarur.`,
      },
      {
        id: '5.5',
        title: '5.5. Bolalarni maktabga tayyorlashda kun tartibining o\'rni',
        content: `Kun tartibi bolalarda mehnatsevarlik va tartiblilik tuyg\'ularini shakllantiradi.`,
      },
    ],
  },
  {
    id: 'bob-6',
    title: '6. Bolalarning tayyorlik darajasini tashxislash',
    subsections: [
      {
        id: '6.1',
        title: '6.1. Bolalarning sog\'ligi va jismoniy rivojlanganligi xolatini tashxislash',
        content: `Bolalarning sog\'ligi va rivojlanishini tashxislash uchun maxsus metodlar qo\'llanadi.`,
      },
      {
        id: '6.2',
        title: '6.2. Ta\'lim olish faoliyatining ko\'nikma va',
        content: `Ta\'lim olish faoliyati bo\'yicha ko\'nikmalarni baholash metodlari ishlab chiqilgan.`,
      },
      {
        id: '6.3',
        title: '6.3. Tashxislashning qo\'shimcha shakllari',
        content: `Qo\'shimcha tashxislash usullari bolalarning tayyorlik darajasini aniqroq baholashga yordam beradi.`,
      },
    ],
  },
  {
    id: 'bob-7',
    title: '7. Oila va maktabgacha ta\'lim tashkiloti hamkorligi',
    subsections: [
      {
        id: '7.1',
        title: '7.1. "Oila" tushunchasi va uning mohiyati',
        content: `Oila tushunchasi va uning bola tarbiyasidagi roli chuqur tahlil qilinadi.`,
      },
      {
        id: '7.2',
        title: '7.2. Oilaning bolani maktabga tayyorlashda o\'rni',
        content: `Oila bolani maktabga tayyorlash jarayonida eng muhim rol o\'ynaydi.`,
      },
      {
        id: '7.3',
        title: '7.3. MTTning oila bilan ishlash shakllari',
        content: `Maktabgacha ta\'lim tashkilotining oila bilan ishlash shakllari ko\'p xilligi bilan ajralib turadi.`,
      },
      {
        id: '7.4',
        title: '7.4. Aholi o\'rtasida pedagogik bilimlarni targ\'ib qilish',
        content: `Pedagogik bilimlarni targ\'ib qilish aholi o\'rtasida o\'qitish madaniyatini oshiradi.`,
      },
      {
        id: '7.5',
        title: '7.5. MTTda ota-onalar uchun kechalar va to\'garaklar uyushtirishning ahamiyati',
        content: `Ota-onalar uchun tashkil etiladigan tadbirlar oila va maktab hamkorligini mustahkamlaydi.`,
      },
      {
        id: '7.6',
        title: '7.6. Bolani bog\'chaga tayyorlash zarurmi?',
        content: `Bolani maktabgacha ta\'lim tashkotiga tayyorlash zarurligi haqida fikrlar yuritiladi.`,
      },
    ],
  },
  {
    id: 'bob-8',
    title: '8. Maktab bilan maktabgacha ta\'lim tashkiloti o\'rtasidagi uzviy aloqa',
    subsections: [
      {
        id: '8.1',
        title: '8.1. Oilaning bolani maktabga tayyorlashda o\'rni',
        content: `Oila maktabga tayyorlash jarayonida muhim o\'rin egallaydi.`,
      },
      {
        id: '8.2',
        title: '8.2. MTTda ota-onalar uchun kechalar va to\'garaklar uyushtirishning ahamiyati',
        content: `Ota-onalar ishtiroki maktab-maktabgacha ta\'lim hamkorligini mustahkamlaydi.`,
      },
      {
        id: '8.3',
        title: '8.3. Maktabgacha ta\'lim tashkiloti bilan maktab aloqasining shakllari',
        content: `Maktab va maktabgacha ta\'lim tashkiloti o\'rtasidagi aloqalar turli shakllarda olib boriladi.`,
      },
    ],
  },
  {
    id: 'bob-9',
    title: '9. Maktabgacha ta\'lim tashkilotida bolalarni maktabga tayyorlash',
    subsections: [
      {
        id: '9.1',
        title: '9.1. Bolalarni maktab ta\'limiga tayyorlash',
        content: `Maktabgacha ta\'lim tashkilotida bolalarni maktabga tayyorlash jarayoni tashkil etiladi.`,
      },
      {
        id: '9.2',
        title: '9.2. "Ilm yo\'li" variativ dasturining bolalarni maktabga tayyorlashdagi o\'rni va ahamiyati',
        content: `\'Ilm yo\'li\' dasturi bolalarni maktabga tayyorlashda muhim o\'rin egallaydi.`,
      },
    ],
  },
  {
    id: 'bob-10',
    title: '10. Qisqa muddatli guruhlarda bolalarni maktabga tayyorlash',
    subsections: [
      {
        id: '10.1',
        title: '10.1. Qisqa muddatli guruhlarda ta\'lim-tarbiya jarayonini tashkil yetishda yaratuvchanlik o\'yinlaridan foydalanish texnologiyasi',
        content: `Qisqa muddatli guruhlarda yaratuvchanlik o\'yinlari samarali qo\'llanadi.`,
      },
      {
        id: '10.2',
        title: '10.2. Qisqa muddatli maktabgacha ta\'lim',
        content: `Qisqa muddatli maktabgacha ta\'lim tashkiloti maxsus dastur asosida ishlaydi.`,
      },
      {
        id: '10.3',
        title: '10.3. Maktabgacha ta\'lim tashkilotiga qisqa muddatli guruhlarda bolalarni maktabga tayyorlash',
        content: `Qisqa muddatli guruhlarda bolalarni maktabga tayyorlashning o\'ziga xos xususiyatlari mavjud.`,
      },
    ],
  },
  {
    id: 'bob-11',
    title: '11. Raqamli texnologiyalar va "Ilk Qadam" dasturi',
    subsections: [
      {
        id: '11.1',
        title: '11.1. Raqamli texnologiyalar orqali kasblarni o\'rganishning ahamiyati',
        content: `Raqamli texnologiyalar bolalarni kasb tanlashda yordam beradi.`,
      },
      {
        id: '11.2',
        title: '11.2. Ilk Qadam dasturining maktabga tayyorgarlikdagi o\'rni',
        content: `\'Ilk Qadam\' dasturi maktabga tayyorgarlikda muhim ahamiyatga ega.`,
      },
      {
        id: '11.3',
        title: '11.3. "O\'yin orqali kasbga yo\'naltirish: ilk qadam dasturining amaliyoti"',
        content: `O\'yin orqali kasbga yo\'naltirish usuli samarali hisoblanadi.`,
      },
    ],
  },
  {
    id: 'bob-12',
    title: '12. Savod va nutq malakalarini shakllantirish',
    subsections: [
      {
        id: '12.1',
        title: '12.1. Bolani savodxonlik bilan tanishtirish asoslari',
        content: `Savodxonlik asoslarini o\'rgatish usullari ishlab chiqilgan.`,
      },
      {
        id: '12.2',
        title: '12.2. Katta va tayyorlov yosh guruhlarida bolalarni savodga o\'rgatish metodikasi',
        content: `Turli yosh guruhlar uchun mos savod o\'rgatish metodikasi mavjud.`,
      },
      {
        id: '12.3',
        title: '12.3. Nutq, muloqot, o\'qish va yozish malakalarining to\'g\'ri qo\'llanilishi',
        content: `Turli malakalar o\'zaro bog\'liq holda rivojlantiriladi.`,
      },
    ],
  },
];

export const questions: Question[] = [
  {
    id: 'q2',
    question: 'Maktabgacha ta\'lim tashkilotining asosiy vazifalari qaysilar?',
    category: 'bob-1',
  },
  {
    id: 'q3',
    question: 'Bolaning maktabga tayyorlik darajasini qanday aniqlash mumkin?',
    category: 'bob-6',
  },
  {
    id: 'q4',
    question: 'Oilaning bolani maktabga tayyorlashdagi roli qanday?',
    category: 'bob-7',
  },
  {
    id: 'q5',
    question: '"Ilm yo\'li" dasturining asosiy xususiyatlari nimalardan iborat?',
    category: 'bob-9',
  },
  {
    id: 'q6',
    question: 'Qisqa muddatli guruhlarning afzalliklari nimada?',
    category: 'bob-10',
  },
  {
    id: 'q7',
    question: 'Bolalarda mehnat tarbiyasini shakllantirish usullari qanday?',
    category: 'bob-3',
  },
  {
    id: 'q8',
    question: 'Savod o\'rgatishda qanday metodlardan foydalaniladi?',
    category: 'bob-12',
  },
  {
    id: 'q9',
    question: 'Bolalarning ijtimoiy tayyorgarligi nimani o\'z ichiga oladi?',
    category: 'bob-5',
  },
  {
    id: 'q10',
    question: 'Maktab va maktabgacha ta\'lim tashkiloti o\'rtasida qanday aloqa bo\'lishi kerak?',
    category: 'bob-8',
  },
  {
    id: 'q11',
    question: 'Bolalarni maktabga tayyorlashda kun tartibining roli qanday?',
    category: 'bob-5',
  },
  {
    id: 'q12',
    question: 'Raqamli texnologiyalarni maktabgacha ta\'limda qanday qo\'llash mumkin?',
    category: 'bob-11',
  },
  {
    id: 'q13',
    question: 'Bolalarning jismoniy tayyorgarligi nimani o\'z ichiga oladi?',
    category: 'bob-5',
  },
  {
    id: 'q14',
    question: 'Maktabga tayyorlashda ota-onalar qanday ishtirok etishlari kerak?',
    category: 'bob-7',
  },
  {
    id: 'q15',
    question: 'Yaratuvchanlik o\'yinlarining bolalar rivojlanishidagi ahamiyati qanday?',
    category: 'bob-10',
  },
  {
    id: 'q16',
    question: 'Maktabgacha ta\'lim tizimida innovatsion metodlarning ahamiyati nimada?',
    category: 'bob-1',
  },
  {
    id: 'q17',
    question: 'Davlat talablari maktabgacha ta\'limda qanday o\'rinda turadi?',
    category: 'bob-2',
  },
  {
    id: 'q18',
    question: 'Faoliyat markazlari qanday ahamiyatga ega?',
    category: 'bob-2',
  },
  {
    id: 'q19',
    question: 'Maktabga tayyorlashning an\'anaviy va zamonaviy metodlari farqi nimada?',
    category: 'bob-4',
  },
  {
    id: 'q20',
    question: 'Tashxis qilishda qanday qo\'shimcha shakllardan foydalaniladi?',
    category: 'bob-6',
  },
];

export const authors: Author[] = [
  {
    name: 'Xasanova Shaxnoza To\'xtasınovna',
    position: 'Dotsent',
    affiliation: 'Nizomiy nomidagi O\'zbek Milliy Pedagogika Universiteti, "Maktabgacha ta\'lim metodikasi" kafedrasi',
  },
  {
    name: 'Isabekova Dılafruz Shermırzayevna',
    position: 'Katta o\'qituvchi',
    affiliation: 'Angren universiteti "Pedagogika va psixologiya" kafedrasi',
  },
  {
    name: 'Gıyasova Mushtarıy Abduganıyevna',
    position: 'O\'qituvchi',
    affiliation: 'Angren universiteti "Pedagogika va psixologiya" kafedrasi',
  },
];

export const bibliography: BibliographyItem[] = [
  {
    id: 'b1',
    title: 'O\'zbekiston Respublikasi maktabgacha ta\'lim tizimini 2030 yilgacha rivojlantirish Konsepsiyasi',
    authors: 'O\'zbekiston Respublikasi Prezidenti',
    year: '2019',
    publisher: 'O\'zbekiston Respublikasi Hukumati',
  },
  {
    id: 'b2',
    title: 'Bolalarni boshlang\'ich ta\'limga majburiy bir yillik tayyorlash tizimini yanada rivojlantirish chora-tadbirlari to\'g\'risida',
    authors: 'Vazirlar Mahkamasi',
    year: '2020',
    publisher: 'O\'zbekiston Respublikasi Hukumati',
  },
  {
    id: 'b3',
    title: 'Maktabgacha ta\'lim va tarbiya to\'g\'risida',
    authors: 'O\'zbekiston Respublikasi Oliy Majlisi',
    year: '2019',
    publisher: 'O\'zbekiston Respublikasi Matbuot va axborot agentligi',
  },
  {
    id: 'b4',
    title: 'Maktabgacha ta\'lim tashkilotlarida tarbiyachilar faoliyatini tashkil etish bo\'yicha metodik qo\'llanma',
    authors: 'Maktabgacha ta\'lim vazirligi',
    year: '2021',
    publisher: 'Maktabgacha ta\'lim vazirligi',
  },
  {
    id: 'b5',
    title: 'Ilk va maktabgacha yoshdagi bolalarning rivojlanishiga qo\'yiladigan davlat talablari',
    authors: 'Maktabgacha ta\'lim vazirligi',
    year: '2022',
    publisher: 'Maktabgacha ta\'lim vazirligi',
  },
];