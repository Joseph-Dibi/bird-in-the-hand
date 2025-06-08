// mongodb+srv://jjdibiasi:TyMWpVu1rb9Nhhve@dibiasicluster.siyginr.mongodb.net/
use('bird-in-the-hand');
db.photo_library.deleteMany({});
db.photo_library.insertMany([
  {
    title: 'Blue-Black Grassquit',
    photo: 'assets/birds/blue-black-grassquit.jpg',
    votes: 120,
    uploadDate: new Date('2025-05-01'),
    author: 'John Bird',
    comments: [
      {
        username: 'Jane Featherstone',
        date: new Date('2025-05-02'),
        profilePicture: 'assets/icons/jane-featherstone.jpg',
        text: "What a stunning capture! The colors are as vibrant as a bird's song at dawn."
      },
      {
        username: 'John Bird',
        date: new Date('2025-05-02'),
        profilePicture: 'assets/icons/profilepic4.png',
        text: "Thank you, Jane! Glad you enjoyed this feathery moment."
      }
    ],
    public: true,
    reports: 0,
  },
  {
    title: 'Village Weaver',
    photo: 'assets/birds/village-weaver1.jpg',
    votes: 95,
    uploadDate: new Date('2025-05-03'),
    author: 'Jane Featherstone',
    comments: [
      {
        username: 'Chris Flock',
        date: new Date('2025-05-04'),
        profilePicture: 'assets/icons/profilepic1.png',
        text: "This weaver looks ready to build the coziest nest! Beautiful shot."
      },
      {
        username: 'Jane Featherstone',
        date: new Date('2025-05-04'),
        profilePicture: 'assets/icons/jane-featherstone.jpg',
        text: "Thanks, Chris! I was lucky to catch it mid-flight."
      }
    ],
    public: true,
    reports: 0,
  },
  {
    title: 'Lilac-Breasted Roller',
    photo: 'assets/birds/lilac-breasted-roller.jpg',
    votes: 150,
    uploadDate: new Date('2025-05-05'),
    author: 'Alice Nestington',
    comments: [
      {
        username: 'Sarah Talon',
        date: new Date('2025-05-06'),
        profilePicture: 'assets/icons/profilepic3.jpg',
        text: "Those lilac feathers are absolutely dazzling! Like a rainbow in flight."
      },
      {
        username: 'Alice Nestington',
        date: new Date('2025-05-06'),
        profilePicture: 'assets/icons/profilepic2.png',
        text: "Thank you, Sarah! This roller really knows how to show off its plumage."
      }
    ],
    public: true,
    reports: 0,
  },
  {
    title: 'Better Village Weaver',
    photo: 'assets/birds/village-weaver2.jpg',
    votes: 200,
    uploadDate: new Date('2025-05-07'),
    author: 'Jane Featherstone',
    comments: [
      {
        username: 'Michael Beakman',
        date: new Date('2025-05-08'),
        profilePicture: 'assets/icons/profilepic3.png',
        text: "Such a sharp photo! That weaver's yellow is brighter than the morning sun."
      },
      {
        username: 'Jane Featherstone',
        date: new Date('2025-05-08'),
        profilePicture: 'assets/icons/jane-featherstone.jpg',
        text: "Thanks, Michael! The light was perfect for this shot."
      }
    ],
    public: true,
    reports: 0,
  },
  {
    title: 'Golden Pheasant',
    photo: 'assets/birds/lesser-spotted-eagle.jpg',
    votes: 180,
    uploadDate: new Date('2025-05-09'),
    author: 'Michael Beakman',
    comments: [
      {
        username: 'Alice Nestington',
        date: new Date('2025-05-10'),
        profilePicture: 'assets/icons/profilepic2.png',
        text: "That plumage is pure gold! What a majestic bird."
      },
      {
        username: 'Michael Beakman',
        date: new Date('2025-05-10'),
        profilePicture: 'assets/icons/profilepic3.png',
        text: "Thank you, Alice! This pheasant really strutted its stuff for the camera."
      }
    ],
    public: true,
    reports: 0,
  },
  {
    title: 'Toucan',
    photo: 'assets/birds/brown-hooded-kingfisher.jpg',
    votes: 170,
    uploadDate: new Date('2025-05-11'),
    author: 'Sarah Talon',
    comments: [
      {
        username: 'John Bird',
        date: new Date('2025-05-12'),
        profilePicture: 'assets/icons/profilepic4.png',
        text: "That beak could carry a whole fruit basket! Awesome toucan photo."
      },
      {
        username: 'Sarah Talon',
        date: new Date('2025-05-12'),
        profilePicture: 'assets/icons/profilepic3.jpg',
        text: "Thanks, John! Toucans always bring a splash of color."
      } ,
        {
        username: 'Michael Beakman',
        date: new Date('2025-05-14'),
        profilePicture: 'assets/icons/profilepic1.png',
        text: "Guys, are you sure this is a Toucan? I swear my fruit loops looked different.",
      },   

    ],
    public: true,
    reports: 1
  },
  {
    title: 'Crested Barbet',
    photo: 'assets/birds/crested-barbet.jpg',
    votes: 190,
    uploadDate: new Date('2025-05-13'),
    author: 'Chris Flock',
    comments: [
      {
        username: 'Jane Featherstone',
        date: new Date('2025-05-14'),
        profilePicture: 'assets/icons/jane-featherstone.jpg',
        text: "The crest on this barbet is fabulous! Looks like it's ready for a bird parade."
      },
      {
        username: 'Chris Flock',
        date: new Date('2025-05-14'),
        profilePicture: 'assets/icons/profilepic1.png',
        text: "Thank you, Jane! The barbet was definitely showing off."
      }
    ],
    public: true,
    reports: 0,
  },
  {
    title: 'Crested Barbet',
    photo: 'assets/birds/big-bird.jpg',
    votes: 190,
    uploadDate: new Date('2025-05-13'),
    author: 'Sarah Talon',
    comments: [
      {
        username: 'Michael Beakman',
        date: new Date('2025-05-14'),
        profilePicture: 'assets/icons/profilepic2.png',
        text: "What a bold bird! That crest is the envy of the flock."
      },
      {
        username: 'Sarah Talon',
        date: new Date('2025-05-14'),
        profilePicture: 'assets/icons/profilepic3.jpg',
        text: "Thanks, Michael! This barbet really knows how to pose."
      }
    ],
    public: true,
    reports: 0,
  },
]);
