const students = [
  {
    id: 1,
    name: "John Doe",
    class: "SS1",
    subjects: [
      { name: "Math", score: 85 },
      { name: "English", score: 70 },
      { name: "Biology", score: 90 },
    ],
  },

  {
    id: 2,
    name: "Sarah James",
    class: "SS2",
    subjects: [
      { name: "Math", score: 40 },
      { name: "English", score: 65 },
      { name: "Chemistry", score: 50 },
    ],
  },

  {
    id: 3,
    name: "Michael King",
    class: "SS1",
    subjects: [
      { name: "Math", score: 95 },
      { name: "English", score: 88 },
      { name: "Physics", score: 91 },
    ],
  },
  
  {
    id: 4,
    name: "Adeola Blessing",
    class: "SS2",
    subjects: [
      { name: "Government", score: 60 },
      { name: "Civic Education", score: 38 },
      { name: "Literature in English", score: 50 },

    ],
  },
  {
    id: 5,
    name: "Damilola Babajide",
    class: "SS2",
    subjects: [
      { name: "Math", score: 40 },
      { name: "English", score: 18 },
      { name: "Physics", score: 20 },
    ],
  },
     
  {
    id: 6,
    name: "Chinedu Okafor",
    class: "SS1",
    subjects: [
      { name: "Mathematics", score: 65 },
      { name: "English", score: 72 },
      { name: "Biology", score: 58 },
    ],
  },
  {
    id: 7,
    name: "Aisha Bello",
    class: "SS2",
    subjects: [
      { name: "Chemistry", score: 49 },
      { name: "Physics", score: 55 },
      { name: "Government", score: 61 },
      { name: "English", score: 70 },
    ],
  },
  {
    id: 8,
    name: "Tunde Adeyemi",
    class: "SS3",
    subjects: [
      { name: "Mathematics", score: 80 },
      { name: "Economics", score: 67 },
      { name: "Commerce", score: 74 },
    ],
  },
  {
    id: 9,
    name: "Ngozi Uchenna",
    class: "SS2",
    subjects: [
      { name: "English", score: 85 },
      { name: "Literature", score: 77 },
      { name: "History", score: 69 },
    ],
  },
  {
    id: 10,
    name: "Musa Ibrahim",
    class: "SS1",
    subjects: [
      { name: "Physics", score: 52 },
      { name: "Mathematics", score: 60 },
      { name: "Biology", score: 55 },
      { name: "Geography", score: 63 },
    ],
  },
  {
    id: 11,
    name: "Blessing Eze",
    class: "SS3",
    subjects: [
      { name: "English", score: 78 },
      { name: "Civic Education", score: 82 },
      { name: "Government", score: 71 },
    ],
  },
  {
    id: 12,
    name: "Kabiru Sani",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 59 },
      { name: "Chemistry", score: 62 },
      { name: "Physics", score: 64 },
      { name: "Biology", score: 60 },
    ],
  },
  {
    id: 13,
    name: "Patience Oladipo",
    class: "SS1",
    subjects: [
      { name: "English", score: 73 },
      { name: "Literature", score: 68 },
      { name: "Fine Arts", score: 80 },
    ],
  },
  {
    id: 14,
    name: "Emeka Nnamdi",
    class: "SS3",
    subjects: [
      { name: "Mathematics", score: 88 },
      { name: "Physics", score: 76 },
      { name: "Chemistry", score: 69 },
      { name: "Biology", score: 72 },
    ],
  },
  {
    id: 15,
    name: "Halima Yusuf",
    class: "SS2",
    subjects: [
      { name: "English", score: 81 },
      { name: "Geography", score: 65 },
      { name: "Economics", score: 70 },
    ],
  },

  {
    id: 15,
    name: "Adeola Femi",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 72 },
      { name: "English", score: 65 },
      { name: "Biology", score: 58 },
    ],
  },
  {
    id: 16,
    name: "Chiamaka Obi",
    class: "SS1",
    subjects: [
      { name: "Chemistry", score: 49 },
      { name: "Physics", score: 55 },
      { name: "Government", score: 61 },
      { name: "English", score: 70 },
    ],
  },
  {
    id: 17,
    name: "Ibrahim Musa",
    class: "SS3",
    subjects: [
      { name: "Mathematics", score: 80 },
      { name: "Economics", score: 67 },
      { name: "Commerce", score: 74 },
    ],
  },
  {
    id: 18,
    name: "Ngozi Chisom",
    class: "SS2",
    subjects: [
      { name: "English", score: 85 },
      { name: "Literature", score: 77 },
      { name: "History", score: 69 },
    ],
  },
  {
    id: 19,
    name: "Kabiru Sani",
    class: "SS1",
    subjects: [
      { name: "Physics", score: 52 },
      { name: "Mathematics", score: 60 },
      { name: "Biology", score: 55 },
      { name: "Geography", score: 63 },
    ],
  },
  {
    id: 20,
    name: "Blessing Eze",
    class: "SS3",
    subjects: [
      { name: "English", score: 78 },
      { name: "Civic Education", score: 82 },
      { name: "Government", score: 71 },
    ],
  },
  {
    id: 21,
    name: "Halima Yusuf",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 59 },
      { name: "Chemistry", score: 62 },
      { name: "Physics", score: 64 },
      { name: "Biology", score: 60 },
    ],
  },
  {
    id: 22,
    name: "Patience Oladipo",
    class: "SS1",
    subjects: [
      { name: "English", score: 73 },
      { name: "Literature", score: 68 },
      { name: "Fine Arts", score: 80 },
    ],
  },
  {
    id: 23,
    name: "Emeka Nnamdi",
    class: "SS3",
    subjects: [
      { name: "Mathematics", score: 88 },
      { name: "Physics", score: 76 },
      { name: "Chemistry", score: 69 },
      { name: "Biology", score: 72 },
    ],
  },
  {
    id: 24,
    name: "Aisha Bello",
    class: "SS2",
    subjects: [
      { name: "English", score: 81 },
      { name: "Geography", score: 65 },
      { name: "Economics", score: 70 },
    ],
  },
  {
    id: 25,
    name: "Tunde Adeyemi",
    class: "SS1",
    subjects: [
      { name: "Mathematics", score: 74 },
      { name: "Physics", score: 68 },
      { name: "Chemistry", score: 59 },
    ],
  },
  {
    id: 26,
    name: "Chinedu Okafor",
    class: "SS3",
    subjects: [
      { name: "English", score: 77 },
      { name: "Biology", score: 62 },
      { name: "Civic Education", score: 80 },
    ],
  },
  {
    id: 27,
    name: "Fatima Abdullahi",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 69 },
      { name: "Economics", score: 72 },
      { name: "Government", score: 65 },
    ],
  },
  {
    id: 28,
    name: "Obinna Uzo",
    class: "SS1",
    subjects: [
      { name: "Physics", score: 55 },
      { name: "Chemistry", score: 61 },
      { name: "Biology", score: 58 },
    ],
  },
  {
    id: 29,
    name: "Maryam Sule",
    class: "SS3",
    subjects: [
      { name: "English", score: 82 },
      { name: "Literature", score: 75 },
      { name: "History", score: 70 },
    ],
  },
  {
    id: 30,
    name: "Gbenga Afolabi",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 85 },
      { name: "Physics", score: 78 },
      { name: "Chemistry", score: 73 },
      { name: "Biology", score: 69 },
    ],
  },
  {
    id: 31,
    name: "Ifeoma Nweke",
    class: "SS1",
    subjects: [
      { name: "English", score: 79 },
      { name: "Civic Education", score: 83 },
      { name: "Government", score: 68 },
    ],
  },
  {
    id: 32,
    name: "Umar Abdulkadir",
    class: "SS3",
    subjects: [
      { name: "Mathematics", score: 90 },
      { name: "Economics", score: 74 },
      { name: "Commerce", score: 77 },
    ],
  },
  {
    id: 33,
    name: "Joy Okeke",
    class: "SS2",
    subjects: [
      { name: "English", score: 84 },
      { name: "Literature", score: 71 },
      { name: "Fine Arts", score: 76 },
    ],
  },
  {
    id: 34,
    name: "Sani Mohammed",
    class: "SS1",
    subjects: [
      { name: "Physics", score: 63 },
      { name: "Mathematics", score: 70 },
      { name: "Biology", score: 66 },
    ],
  },

  {
    id: 35,
    name: "Chisom Udeh",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 71 },
      { name: "English", score: 66 },
      { name: "Biology", score: 59 },
    ],
  },
  {
    id: 36,
    name: "Aminu Bello",
    class: "SS1",
    subjects: [
      { name: "Chemistry", score: 52 },
      { name: "Physics", score: 57 },
      { name: "Government", score: 63 },
      { name: "English", score: 68 },
    ],
  },
  {
    id: 37,
    name: "Temitope Adebayo",
    class: "SS3",
    subjects: [
      { name: "Mathematics", score: 82 },
      { name: "Economics", score: 69 },
      { name: "Commerce", score: 75 },
    ],
  },
  {
    id: 38,
    name: "Ijeoma Nwosu",
    class: "SS2",
    subjects: [
      { name: "English", score: 84 },
      { name: "Literature", score: 76 },
      { name: "History", score: 70 },
    ],
  },
  {
    id: 39,
    name: "Usman Abdullahi",
    class: "SS1",
    subjects: [
      { name: "Physics", score: 54 },
      { name: "Mathematics", score: 62 },
      { name: "Biology", score: 56 },
      { name: "Geography", score: 64 },
    ],
  },
  {
    id: 40,
    name: "Precious Okeke",
    class: "SS3",
    subjects: [
      { name: "English", score: 79 },
      { name: "Civic Education", score: 83 },
      { name: "Government", score: 72 },
    ],
  },
  {
    id: 41,
    name: "Zainab Mohammed",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 61 },
      { name: "Chemistry", score: 64 },
      { name: "Physics", score: 66 },
      { name: "Biology", score: 62 },
    ],
  },
  {
    id: 42,
    name: "Confidence Eze",
    class: "SS1",
    subjects: [
      { name: "English", score: 75 },
      { name: "Literature", score: 70 },
      { name: "Fine Arts", score: 82 },
    ],
  },
  {
    id: 43,
    name: "Obi Nnamdi",
    class: "SS3",
    subjects: [
      { name: "Mathematics", score: 87 },
      { name: "Physics", score: 77 },
      { name: "Chemistry", score: 71 },
      { name: "Biology", score: 73 },
    ],
  },
  {
    id: 44,
    name: "Halima Sulaiman",
    class: "SS2",
    subjects: [
      { name: "English", score: 80 },
      { name: "Geography", score: 67 },
      { name: "Economics", score: 72 },
    ],
  },
  {
    id: 45,
    name: "Ayodele Johnson",
    class: "SS1",
    subjects: [
      { name: "Mathematics", score: 76 },
      { name: "Physics", score: 69 },
      { name: "Chemistry", score: 61 },
    ],
  },
  {
    id: 46,
    name: "Chukwuemeka Eze",
    class: "SS3",
    subjects: [
      { name: "English", score: 78 },
      { name: "Biology", score: 64 },
      { name: "Civic Education", score: 81 },
    ],
  },
  {
    id: 47,
    name: "Fatima Aliyu",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 70 },
      { name: "Economics", score: 73 },
      { name: "Government", score: 67 },
    ],
  },
  {
    id: 48,
    name: "Obinna Chike",
    class: "SS1",
    subjects: [
      { name: "Physics", score: 56 },
      { name: "Chemistry", score: 62 },
      { name: "Biology", score: 59 },
    ],
  },
  {
    id: 49,
    name: "Maryam Abdulkadir",
    class: "SS3",
    subjects: [
      { name: "English", score: 83 },
      { name: "Literature", score: 76 },
      { name: "History", score: 71 },
    ],
  },
  {
    id: 50,
    name: "Gbenga Oladipo",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 86 },
      { name: "Physics", score: 79 },
      { name: "Chemistry", score: 74 },
      { name: "Biology", score: 70 },
    ],
  },
  {
    id: 51,
    name: "Ifeanyi Okoro",
    class: "SS1",
    subjects: [
      { name: "English", score: 80 },
      { name: "Civic Education", score: 84 },
      { name: "Government", score: 69 },
    ],
  },
  {
    id: 52,
    name: "Umar Sani",
    class: "SS3",
    subjects: [
      { name: "Mathematics", score: 91 },
      { name: "Economics", score: 75 },
      { name: "Commerce", score: 78 },
    ],
  },
  {
    id: 53,
    name: "Joy Uzo",
    class: "SS2",
    subjects: [
      { name: "English", score: 85 },
      { name: "Literature", score: 72 },
      { name: "Fine Arts", score: 77 },
    ],
  },
  {
    id: 54,
    name: "Sani Abdullahi",
    class: "SS1",
    subjects: [
      { name: "Physics", score: 64 },
      { name: "Mathematics", score: 71 },
      { name: "Biology", score: 67 },
    ],
  },
  {
    id: 55,
    name: "Ngozi Okeke",
    class: "SS3",
    subjects: [
      { name: "English", score: 82 },
      { name: "Government", score: 74 },
      { name: "History", score: 69 },
    ],
  },
  {
    id: 56,
    name: "Blessing Adeola",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 73 },
      { name: "Physics", score: 68 },
      { name: "Chemistry", score: 65 },
    ],
  },
  {
    id: 57,
    name: "Chinedu Umeh",
    class: "SS1",
    subjects: [
      { name: "English", score: 77 },
      { name: "Literature", score: 71 },
      { name: "Fine Arts", score: 79 },
    ],
  },
  {
    id: 58,
    name: "Aisha Sule",
    class: "SS3",
    subjects: [
      { name: "Mathematics", score: 89 },
      { name: "Economics", score: 73 },
      { name: "Commerce", score: 76 },
    ],
  },
  {
    id: 59,
    name: "Tunde Olawale",
    class: "SS2",
    subjects: [
      { name: "English", score: 81 },
      { name: "Geography", score: 66 },
      { name: "Economics", score: 71 },
    ],
  },
  {
    id: 60,
    name: "Ibrahim Abdullahi",
    class: "SS1",
    subjects: [
      { name: "Mathematics", score: 75 },
      { name: "Physics", score: 68 },
      { name: "Chemistry", score: 62 },
    ],
  },
  {
    id: 61,
    name: "Ngozi Udeh",
    class: "SS3",
    subjects: [
      { name: "English", score: 79 },
      { name: "Biology", score: 65 },
      { name: "Civic Education", score: 82 },
    ],
  },
  {
    id: 62,
    name: "Fatima Yusuf",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 71 },
      { name: "Economics", score: 74 },
    ]
  },

  {
  id: 65,
  name: "Chinyere Okoro",
  class: "SS2",
  subjects: [
    { name: "Mathematics", score: 72 },
    { name: "English", score: 68 },
    { name: "Biology", score: 61 },
  ],
},
{
  id: 66,
  name: "Ahmed Suleiman",
  class: "SS1",
  subjects: [
    { name: "Chemistry", score: 55 },
    { name: "Physics", score: 60 },
    { name: "Government", score: 64 },
    { name: "English", score: 70 },
  ],
},
{
  id: 67,
  name: "Oluwaseun Adeyemi",
  class: "SS3",
  subjects: [
    { name: "Mathematics", score: 83 },
    { name: "Economics", score: 71 },
    { name: "Commerce", score: 76 },
  ],
},
{
  id: 68,
  name: "Amarachi Nwankwo",
  class: "SS2",
  subjects: [
    { name: "English", score: 86 },
    { name: "Literature", score: 78 },
    { name: "History", score: 72 },
  ],
},
{
  id: 69,
  name: "Yusuf Abdullahi",
  class: "SS1",
  subjects: [
    { name: "Physics", score: 57 },
    { name: "Mathematics", score: 63 },
    { name: "Biology", score: 60 },
    { name: "Geography", score: 65 },
  ],
},
{
  id: 70,
  name: "Victory Eze",
  class: "SS3",
  subjects: [
    { name: "English", score: 80 },
    { name: "Civic Education", score: 84 },
    { name: "Government", score: 73 },
  ],
},
{
  id: 71,
  name: "Zainab Ali",
  class: "SS2",
  subjects: [
    { name: "Mathematics", score: 62 },
    { name: "Chemistry", score: 65 },
    { name: "Physics", score: 67 },
    { name: "Biology", score: 63 },
  ],
},
{
  id: 72,
  name: "Promise Okafor",
  class: "SS1",
  subjects: [
    { name: "English", score: 76 },
    { name: "Literature", score: 71 },
    { name: "Fine Arts", score: 83 },
  ],
},
{
  id: 73,
  name: "Obinna Chukwu",
  class: "SS3",
  subjects: [
    { name: "Mathematics", score: 88 },
    { name: "Physics", score: 78 },
    { name: "Chemistry", score: 72 },
    { name: "Biology", score: 74 },
  ],
},
{
  id: 74,
  name: "Halima Abdulkadir",
  class: "SS2",
  subjects: [
    { name: "English", score: 82 },
    { name: "Geography", score: 68 },
    { name: "Economics", score: 73 },
  ],
},
{
  id: 75,
  name: "Ayomide Johnson",
  class: "SS1",
  subjects: [
    { name: "Mathematics", score: 77 },
    { name: "Physics", score: 70 },
    { name: "Chemistry", score: 63 },
  ],
},
{
  id: 76,
  name: "Chukwuemeka Obi",
  class: "SS3",
  subjects: [
    { name: "English", score: 79 },
    { name: "Biology", score: 66 },
    { name: "Civic Education", score: 83 },
  ],
},
{
  id: 77,
  name: "Fatima Mohammed",
  class: "SS2",
  subjects: [
    { name: "Mathematics", score: 72 },
    { name: "Economics", score: 75 },
    { name: "Government", score: 68 },
  ],
},
{
  id: 78,
  name: "Obioma Nnamdi",
  class: "SS1",
  subjects: [
    { name: "Physics", score: 58 },
    { name: "Chemistry", score: 63 },
    { name: "Biology", score: 60 },
  ],
},
{
  id: 79,
  name: "Maryam Usman",
  class: "SS3",
  subjects: [
    { name: "English", score: 84 },
    { name: "Literature", score: 77 },
    { name: "History", score: 72 },
  ],
},
{
  id: 80,
  name: "Gbenga Akinwale",
  class: "SS2",
  subjects: [
    { name: "Mathematics", score: 87 },
    { name: "Physics", score: 80 },
    { name: "Chemistry", score: 75 },
    { name: "Biology", score: 71 },
  ],
},
{
  id: 81,
  name: "Ifeanyi Uzo",
  class: "SS1",
  subjects: [
    { name: "English", score: 81 },
    { name: "Civic Education", score: 85 },
    { name: "Government", score: 70 },
  ],
},
{
  id: 82,
  name: "Umar Sule",
  class: "SS3",
  subjects: [
    { name: "Mathematics", score: 92 },
    { name: "Economics", score: 76 },
    { name: "Commerce", score: 79 },
  ],
},
{
  id: 83,
  name: "Joy Nwosu",
  class: "SS2",
  subjects: [
    { name: "English", score: 86 },
    { name: "Literature", score: 73 },
    { name: "Fine Arts", score: 78 },
  ],
},
{
  id: 84,
  name: "Sani Ibrahim",
  class: "SS1",
  subjects: [
    { name: "Physics", score: 65 },
    { name: "Mathematics", score: 72 },
    { name: "Biology", score: 68 },
  ],
},
{
  id: 85,
  name: "Ngozi Umeh",
  class: "SS3",
  subjects: [
    { name: "English", score: 83 },
    { name: "Government", score: 75 },
    { name: "History", score: 70 },
  ],
},
{
  id: 86,
  name: "Blessing Adeyemi",
  class: "SS2",
  subjects: [
    { name: "Mathematics", score: 74 },
    { name: "Physics", score: 69 },
    { name: "Chemistry", score: 66 },
  ],
},
{
  id: 87,
  name: "Chinedu Uzo",
  class: "SS1",
  subjects: [
    { name: "English", score: 78 },
    { name: "Literature", score: 72 },
    { name: "Fine Arts", score: 80 },
  ],
},
{
  id: 88,
  name: "Aisha Abdullahi",
  class: "SS3",
  subjects: [
    { name: "Mathematics", score: 90 },
    { name: "Economics", score: 74 },
    { name: "Commerce", score: 77 },
  ],
},
{
  id: 89,
  name: "Tunde Oladimeji",
  class: "SS2",
  subjects: [
    { name: "English", score: 82 },
    { name: "Geography", score: 67 },
    { name: "Economics", score: 72 },
  ],
},
{
  id: 90,
  name: "Ibrahim Sani",
  class: "SS1",
  subjects: [
    { name: "Mathematics", score: 76 },
    { name: "Physics", score: 69 },
    { name: "Chemistry", score: 63 },
  ],
},
{
  id: 91,
  name: "Ngozi Chukwu",
  class: "SS3",
  subjects: [
    { name: "English", score: 80 },
    { name: "Biology", score: 67 },
    { name: "Civic Education", score: 84 },
  ],
},
  {
    id: 92,
    name: "Fatima Sule",
    class: "SS2",
    subjects: [
      { name: "Mathematics", score: 72 },
      { name: "Economics", score: 75 },
      { name: "Civic Education", score: 12 },
    ]
  },

  {
  id: 95,
  name: "Chinedu Umeh",
  class: "SS2",
  subjects: [
    { name: "Mathematics", score: 22 },
    { name: "English", score: 18 },
    { name: "Biology", score: 30 },
  ],
},
{
  id: 96,
  name: "Aisha Sule",
  class: "SS1",
  subjects: [
    { name: "Chemistry", score: 25 },
    { name: "Physics", score: 19 },
    { name: "Government", score: 33 },
    { name: "English", score: 28 },
  ],
},
{
  id: 97,
  name: "Tunde Olawale",
  class: "SS3",
  subjects: [
    { name: "Mathematics", score: 35 },
    { name: "Economics", score: 27 },
    { name: "Commerce", score: 31 },
  ],
},
{
  id: 98,
  name: "Ngozi Udeh",
  class: "SS2",
  subjects: [
    { name: "English", score: 29 },
    { name: "Literature", score: 24 },
    { name: "History", score: 32 },
  ],
},
{
  id: 99,
  name: "Musa Abdullahi",
  class: "SS1",
  subjects: [
    { name: "Physics", score: 20 },
    { name: "Mathematics", score: 26 },
    { name: "Biology", score: 18 },
    { name: "Geography", score: 34 },
  ],
},
{
  id: 100,
  name: "Blessing Okeke",
  class: "SS3",
  subjects: [
    { name: "English", score: 36 },
    { name: "Civic Education", score: 28 },
    { name: "Government", score: 22 },
  ],
},
{
  id: 101,
  name: "Kabiru Sani",
  class: "SS2",
  subjects: [
    { name: "Mathematics", score: 31 },
    { name: "Chemistry", score: 19 },
    { name: "Physics", score: 25 },
    { name: "Biology", score: 30 },
  ],
},
{
  id: 102,
  name: "Patience Oladipo",
  class: "SS1",
  subjects: [
    { name: "English", score: 27 },
    { name: "Literature", score: 21 },
    { name: "Fine Arts", score: 33 },
  ],
},
{
  id: 103,
  name: "Emeka Nnamdi",
  class: "SS3",
  subjects: [
    { name: "Mathematics", score: 40 },
    { name: "Physics", score: 35 },
    { name: "Chemistry", score: 28 },
    { name: "Biology", score: 32 },
  ],
},
{
  id: 104,
  name: "Halima Yusuf",
  class: "SS2",
  subjects: [
    { name: "English", score: 30 },
    { name: "Geography", score: 26 },
    { name: "Economics", score: 19 },
  ],
},
{
  id: 105,
  name: "Ayodele Johnson",
  class: "SS1",
  subjects: [
    { name: "Mathematics", score: 34 },
    { name: "Physics", score: 29 },
    { name: "Chemistry", score: 22 },
  ],
},
{
  id: 106,
  name: "Chukwuemeka Eze",
  class: "SS3",
  subjects: [
    { name: "English", score: 25 },
    { name: "Biology", score: 20 },
    { name: "Civic Education", score: 31 },
  ],
},
{
  id: 107,
  name: "Fatima Aliyu",
  class: "SS2",
  subjects: [
    { name: "Mathematics", score: 28 },
    { name: "Economics", score: 24 },
    { name: "Government", score: 19 },
  ],
},
{
  id: 108,
  name: "Obinna Chike",
  class: "SS1",
  subjects: [
    { name: "Physics", score: 18 },
    { name: "Chemistry", score: 23 },
    { name: "Biology", score: 20 },
  ],
},
{
  id: 109,
  name: "Maryam Abdulkadir",
  class: "SS3",
  subjects: [
    { name: "English", score: 32 },
    { name: "Literature", score: 27 },
    { name: "History", score: 21 },
  ],
},
{
  id: 110,
  name: "Gbenga Oladipo",
  class: "SS2",
  subjects: [
    { name: "Mathematics", score: 39 },
    { name: "Physics", score: 33 },
    { name: "Chemistry", score: 28 },
    { name: "Biology", score: 30 },
  ],
},
{
  id: 111,
  name: "Ifeanyi Okoro",
  class: "SS1",
  subjects: [
    { name: "English", score: 29 },
    { name: "Civic Education", score: 34 },
    { name: "Government", score: 22 },
  ],
},
{
  id: 112,
  name: "Umar Sani",
  class: "SS3",
  subjects: [
    { name: "Mathematics", score: 37 },
    { name: "Economics", score: 30 },
    { name: "Commerce", score: 25 },
  ],
},
{
  id: 113,
  name: "Joy Uzo",
  class: "SS2",
  subjects: [
    { name: "English", score: 33 },
    { name: "Literature", score: 28 },
    { name: "Fine Arts", score: 19 },
  ],
},
{
  id: 114,
  name: "Sani Abdullahi",
  class: "SS1",
  subjects: [
    { name: "Physics", score: 24 },
    { name: "Mathematics", score: 29 },
    { name: "Biology", score: 20 },
  ],
},
{
  id: 115,
  name: "Ngozi Okeke",
  class: "SS3",
  subjects: [
    { name: "English", score: 31 },
    { name: "Government", score: 26 },
    { name: "History", score: 19 },
  ],
},
{
  id: 116,
  name: "Blessing Adeola",
  class: "SS2",
  subjects: [
    { name: "Mathematics", score: 27 },
    { name: "Physics", score: 22 },
    { name: "Chemistry", score: 19 },
  ],
},
{
  id: 117,
  name: "Chinedu Umeh",
  class: "SS1",
  subjects: [
    { name: "English", score: 28 },
    { name: "Literature", score: 23 },
    { name: "Fine Arts", score: 20 },
  ],
},
{
  id: 118,
  name: "Aisha Sule",
  class: "SS3",
  subjects: [
    { name: "Mathematics", score: 36 },
    { name: "Economics", score: 29 },
    { name: "Commerce", score: 24 },
  ],
},
{
  id: 119,
  name: "Tunde Oladimeji",
  class: "SS2",
  subjects: [
    { name: "English", score: 30 },
    { name: "Geography", score: 25 },
    { name: "Economics", score: 19 },
  ],
},
{
  id: 120,
  name: "Ibrahim Sani",
  class: "SS1",
  subjects: [
    { name: "Mathematics", score: 34 },
    { name: "Physics", score: 28 },
    { name: "Chemistry", score: 22 },
  ],
},


];

export default students;