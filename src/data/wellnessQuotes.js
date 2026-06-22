export const wellnessQuotes = [
  {
    text: 'When we are no longer able to change a situation, we are challenged to change ourselves.',
    author: 'Viktor Frankl',
  },
  {
    text: 'The greatest weapon against stress is our ability to choose one thought over another.',
    author: 'William James',
  },
  {
    text: 'There is only one way to happiness: to stop worrying about things beyond the power of our will.',
    author: 'Epictetus',
  },
  {
    text: 'You have power over your mind — not outside events. Realize this, and you will find strength.',
    author: 'Marcus Aurelius',
  },
  {
    text: "Anything that's human is mentionable, and anything that is mentionable can be more manageable.",
    author: 'Fred Rogers',
  },
  {
    text: 'Caring for myself is not self-indulgence, it is self-preservation.',
    author: 'Audre Lorde',
  },
  {
    text: 'My mission in life is not merely to survive, but to thrive.',
    author: 'Maya Angelou',
  },
  {
    text: 'He who has a why to live can bear almost any how.',
    author: 'Friedrich Nietzsche',
  },
  {
    text: 'Peace comes from within. Do not seek it without.',
    author: 'Buddha',
  },
  {
    text: "You can't stop the waves, but you can learn to surf.",
    author: 'Jon Kabat-Zinn',
  },
  {
    text: 'Talk to yourself like you would to someone you love.',
    author: 'Brené Brown',
  },
  {
    text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Ralph Waldo Emerson',
  },
]

export function getRandomWellnessQuote() {
  return wellnessQuotes[Math.floor(Math.random() * wellnessQuotes.length)]
}
