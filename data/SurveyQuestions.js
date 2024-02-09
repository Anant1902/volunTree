// data.js

// Survey questions for "Streaming Through Nature" activity
const stnQuestions = [
  // Gracious
  {
    id: '1',
    text: 'On a scale of 1 to 10, how much did participating in the "Streaming Through Nature" tour increase your awareness of others\' experiences and needs in the natural environment?',
  },
  {
    id: '2',
    text: 'To what extent did the activity encourage you to show kindness and compassion towards the living organisms you encountered during the tour (1 being not at all, 10 being very much)?',
  },
  {
    id: '3',
    text: 'How strongly did the guided tour inspire you to act kindly toward nature and its inhabitants in your daily life?',
  },
  // Green
  {
    id: '4',
    text: 'How effectively did the "Streaming Through Nature" experience enhance your understanding of environmentally friendly practices (1 being not at all, 10 being very much)?',
  },
  {
    id: '5',
    text: 'To what extent did the activity demonstrate the importance of the 6Rs (Rethink, Refuse, Reduce, Reuse, Recycle, Rot) in maintaining a sustainable environment?',
  },
  {
    id: '6',
    text: 'How well did the tour contribute to your knowledge of chemical-free farming and its impact on the ecosystem?',
  },
  // Giving
  {
    id: '7',
    text: 'How much did the activity encourage you to contribute to the sustainability of our natural resources (1 being not at all, 10 being very much)?',
  },
  {
    id: '8',
    text: 'In what measure did you feel cared for by the GUI team during your experience in the "Streaming Through Nature" tour?',
  },
  {
    id: '9',
    text: 'To what degree did the tour foster a sense of empathy within you for the efforts required to maintain a sustainable education farm?',
  },
  // Grounded
  {
    id: '10',
    text: 'After completing the tour, rate how connected you feel to the natural environment on a scale from 1 to 10.',
  },
  {
    id: '11',
    text: 'To what extent did the experience help you stay humble and sensible regarding your role in the ecosystem?',
  },
  {
    id: '12',
    text: 'How much did the "Streaming Through Nature" tour help you to remain grounded and authentic in your approach to environmental conservation?',
  },
  // Grateful
  {
    id: '13',
    text: 'How much more do you appreciate the natural spaces in Singapore after participating in the "Streaming Through Nature" tour?',
  },
  {
    id: '14',
    text: 'On a scale of 1 to 10, how grateful are you for the experiences provided during the tour that allowed you to connect with nature?',
  },
  {
    id: '15',
    text: 'How effectively did the tour prompt you to express thanks for the biodiversity and clean water sources that are still present in our environment?',
  },
];

// Additional questions for the Flute Workshop activity
const fluteWorkshopQuestions = [
  // Gracious
  {
    id: '1',
    text: "How much did the collaborative environment of the Flute Workshop enhance your awareness of others' creative processes (1 being not at all, 10 being very much)?",
  },
  {
    id: '2',
    text: "To what extent did the workshop experience encourage you to show kindness and patience towards fellow participants as you learned together?",
  },
  {
    id: '3',
    text: "Rate how the guidance provided by the instructor helped you to act with consideration and support towards your peers during the workshop.",
  },
  // Green
  {
    id: '4',
    text: "In shaping and customizing your own flute, how well did the activity reinforce the concept of environmental sustainability in craftsmanship (1 being not at all, 10 being very much)?",
  },
  {
    id: '5',
    text: "How effectively did the plant-based lunch provided align with and educate on green practices related to food consumption?",
  },
  {
    id: '6',
    text: "To what extent did the use of natural materials in flute-making increase your commitment to environmentally friendly practices?",
  },
  // Giving
  {
    id: '7',
    text: "How much did the act of creating your own flute contribute to your sense of giving something meaningful to yourself or others (1 being not at all, 10 being very much)?",
  },
  {
    id: '8',
    text: "How did the workshop foster a giving spirit, through sharing tools, materials, or assistance with other participants?",
  },
  {
    id: '9',
    text: "To what degree did the instructors give of their knowledge and time to ensure you had a rich learning experience?",
  },
  // Grounded
  {
    id: '10',
    text: "Rate how grounded you felt while engaging in the traditional craft of flute-making, in terms of cultural heritage and personal creativity.",
  },
  {
    id: '11',
    text: "How did the process of carving and decorating your totem help in keeping you focused and present in the activity?",
  },
  {
    id: '12',
    text: "To what extent did learning to play the flute help you stay centered and connected with your inner self?",
  },
  // Grateful
  {
    id: '13',
    text: "After completing the workshop, how much more do you appreciate the art and history of Indigenous flutes?",
  },
  {
    id: '14',
    text: "On a scale of 1 to 10, how grateful are you for the opportunity to express yourself musically through the Native American flute?",
  },
  {
    id: '15',
    text: "How effectively did the workshop experience make you feel thankful for the ability to engage in creative self-expression and its associated health benefits?",
  },
];

export { stnQuestions, fluteWorkshopQuestions };
