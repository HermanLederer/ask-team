import type { Content } from './Post.svelte';

const posts: Content[] = [
  {
    postedOn: 'Jan 18',
    tags: ['COCO'],
    question: 'How was the noodle teams presentation about glucose processing on the 5th of January?',
    answers: [
      { name: 'It was very interesting!', result: 10 },
      { name: 'I cannot recall the whole thing', result: 10 },
      { name: 'I was unfortunately not able to attend', result: 10 },
      { name: 'Where was my invitation?', result: 10 },
    ],
  },
  {
    postedOn: 'Jan 12',
    tags: ['General'],
    question: 'We are looking to launch a new product around the beginning of April of 2022',
    answers: [
      { name: 'Great!', result: 15 },
      { name: 'Easy, no sweat!', result: 4 },
      { name: 'What is it?', result: 6 },
    ],
  },
  {
    postedOn: 'Jan 19',
    tags: ['General'],
    question: 'What hobbies do you have? (Feel free to add your own answers!)',
    answers: [
      { name: 'Football', result: 20 },
      { name: 'Running', result: 4 },
      { name: 'Painting', result: 2 },
      { name: 'Reading', result: 1 },
    ],
  },
  {
    postedOn: 'Feb 2',
    tags: ['R&D'],
    question: 'Do you feel like your work is valued?',
    answers: [
      { name: 'Yes, very much so', result: 11 },
      { name: 'Yes', result: 10 },
      { name: 'Neutral', result: 6 },
      { name: 'No', result: 21 },
      { name: 'No, not at all', result: 10 },
    ],
  },
  {
    postedOn: 'Feb 3',
    tags: ['R&D'],
    question: 'How do you feel about the meeting yesterday?',
    answers: [
      { name: 'Intense but necessary', result: 29 },
      { name: 'Realistic and clear', result: 1 },
      { name: 'Too harsh', result: 0 },
    ],
  },
  {
    postedOn: 'Feb 4',
    tags: ['General'],
    question: 'How do you travel to work?',
    answers: [
      { name: 'Car', result: 12 },
      { name: 'Bike', result: 15 },
      { name: 'Public transport', result: 19 },
      { name: 'Walking', result: 10 },
      { name: 'Motorcycle', result: 1 },
    ],
  },
  {
    postedOn: 'Feb 17',
    tags: ['COCO'],
    question:
      'What skills do you hope to learn by collaborating with the research team next week?',
    answers: [],
  },
  {
    postedOn: 'Feb 17',
    tags: ['General'],
    question:
      'How satisfied are you with the management for handling the COVID restrictions thus far?',
    answers: [
      { name: 'Very satisfied', result: 1 },
      { name: 'Somewhat satisfied', result: 7 },
      { name: 'Somewhat dissatisfied', result: 25 },
      { name: 'Very dissatisfied', result: 5 },
    ],
  },
];

function loadPosts(page: number): Content[] {
  const res: Content[] = [];

  for (let i = 0; i < 4; ++i) {
    if (page * 4 + i < posts.length) {
      res.push(posts[page * 4 + i]);
    }
  }

  return res;
}

export { loadPosts };
