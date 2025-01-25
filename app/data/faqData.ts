type QuestionType = 'general' | 'changelog' | 'terms'

export interface FAQ {
  id: number
  type: QuestionType[]
  question: string
  answer: string
}

interface ImageSet {
  main: string
  shape: string
}

interface FAQImages {
  light: ImageSet
  dark: ImageSet
}

export const faqData: FAQ[] = [
  {
    id: 1,
    type: ['general', 'changelog'],
    question: 'What is a business agency?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. 'It\\'s not Latin.'",
  },
  {
    id: 2,
    type: ['general'],
    question: 'What services does a business agency provide?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. 'It\\'s not Latin.'",
  },
  {
    id: 3,
    type: ['general', 'changelog'],
    question: 'How often should I update my website?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. 'It\\'s not Latin.'",
  },
  {
    id: 4,
    type: ['general', 'terms'],
    question: 'How do subscriptions work?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. 'It\\'s not Latin.'",
  },
  {
    id: 5,
    type: ['changelog', 'terms'],
    question: 'What other services are you compatible with?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. 'It\\'s not Latin.'",
  },
  {
    id: 6,
    type: ['general', 'terms'],
    question: 'What other services are you compatible with?',
    answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. 'It\\'s not Latin.'",
  },
]

export const faqImages: FAQImages = {
  light: {
    main: '/images/home-4-img/analytics-faq.png',
    shape: '/images/home-4-img/analytics-faq-shape.png',
  },
  dark: {
    main: '/images/home-4-img/analytics-faq-dark.png',
    shape: '/images/home-4-img/analytics-faq-shape-dark.png',
  },
}
