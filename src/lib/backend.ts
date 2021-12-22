import type { Content } from './Post.svelte';

const posts: Content[] = [
  {
    postedOn: 'Jan 18',
    tags: ['COCO'],
    question: 'Are you satisfied with your work times?',
    answers: [
      { name: 'Yes totally', result: 10 },
      { name: 'It is okay', result: 10 },
      { name: 'Neutral', result: 10 },
      { name: 'Not really', result: 10 },
      { name: 'Absolutely not', result: 10 },
    ],
  },
  {
    postedOn: 'Jan 12',
    tags: ['General'],
    question: 'Would you want to see more canteen sessions per month?',
    answers: [
      { name: 'Yes, there should be more', result: 10 },
      { name: 'The current amount is good', result: 10 },
      { name: 'No, there should be less', result: 10 },
    ],
  },
  {
    postedOn: 'Jan 19',
    tags: ['General'],
    question: 'What hobbies do you have? (Feel free to add your own answers!)',
    answers: [
      { name: 'Football', result: 10 },
      { name: 'Running', result: 10 },
      { name: 'Painting', result: 10 },
      { name: 'Reading', result: 10 },
    ],
  },
  {
    postedOn: 'Feb 2',
    tags: ['R&D'],
    question: 'Do you feel like your work is valued?',
    answers: [
      { name: 'Yes, very much so', result: 10 },
      { name: 'Yes', result: 10 },
      { name: 'Neutral', result: 10 },
      { name: 'No', result: 10 },
      { name: 'No, not at all', result: 10 },
    ],
  },
  {
    postedOn: 'Feb 3',
    tags: ['R&D'],
    question: 'How do you feel about the meeting yesterday?',
    answers: [
      { name: 'Intense but necessary', result: 10 },
      { name: 'Realistic and clear', result: 10 },
      { name: 'Too harsh', result: 10 },
    ],
  },
  {
    postedOn: 'Feb 4',
    tags: ['General'],
    question: 'How do you travel to work?',
    answers: [
      { name: 'Car', result: 10 },
      { name: 'Bike', result: 10 },
      { name: 'Public transport', result: 10 },
      { name: 'Walking', result: 10 },
      { name: 'Motorcycle', result: 10 },
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
      { name: 'Very satisfied', result: 10 },
      { name: 'Somewhat satisfied', result: 10 },
      { name: 'Somewhat dissatisfied', result: 10 },
      { name: 'Very dissatisfied', result: 10 },
    ],
  },
];

function loadPosts(page: number): Content[] {
  const res: Content[] = [];

  for (let i = 0; i < 4; ++i) {
    if (page * 4 + i < posts.length) {
      res.push(posts[page * 4 + i]);
      res[res.length - 1].id = (page * 4 + i);
    }
  }

  return res;
}

export { loadPosts };
