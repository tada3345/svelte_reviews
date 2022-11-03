import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 10,
    rating: 5,
    text: 'スキルも知識もプロジェクトも平均的でした',
  },
  {
    id: 2,
    rating: 8,
    text: '良いのですが、特に優れているわけではないです。',
  },

  {
    id: 3,
    rating: 6,
    text: '日本語よりも英語のほうが得意なのかなと思いました。',
  },
]);
