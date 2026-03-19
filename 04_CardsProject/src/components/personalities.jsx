import React from 'react'
const personalities = [
  {
    name: "Elon Musk",
    backgroundImage: "https://i.pinimg.com/1200x/e2/93/bf/e293bff30b2e3e10c077b8d014d9ccf3.jpg",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8BA5j0hnJh5QJBqwO2xZbWWy7CrJmOmrnJT3XK6s_df2cBpFF2A0oxBFtMPLVrXYpW9gUKZLSIAAxe4z33YmOYoHHoXqFBiQG7OSZg&s=10",
    likes: "8.2M",
    posts: 4210,
    bio: "CEO of Tesla & SpaceX. Owner of X. Building the future of EVs, rockets, and AI.",
    views: "142M"
  },
  {
    name: "Cristiano Ronaldo",
    backgroundImage: "https://i.pinimg.com/1200x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg",
    photo: "https://i.pinimg.com/736x/97/8d/fe/978dfe2eed24660a344f07c8784065c8.jpg",
    likes: "42M",
    posts: 3800,
    bio: "Football legend. 5x Ballon d'Or winner. All-time top scorer. Playing for Al Nassr.",
    views: "620M"
  },
  {
    name: "Taylor Swift",
    backgroundImage: "https://i.pinimg.com/736x/aa/7a/08/aa7a08f32c58ae50c7f84bdd4fa8bd2f.jpg",
    photo: "https://i.pinimg.com/736x/4f/53/1e/4f531e49e7b13c576ab4e30b8e4ba702.jpg",
    likes: "38M",
    posts: 2950,
    bio: "Singer-songwriter. 14x Grammy winner. The Eras Tour. Turning heartbreaks into #1 hits.",
    views: "510M"
  },
  {
    name: "LeBron James",
    backgroundImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
    photo: "https://i.pinimg.com/1200x/26/f7/c1/26f7c1092b376d8fb10e78ea09a160ec.jpg",
    likes: "21M",
    posts: 3100,
    bio: "4x NBA Champion. Lakers star. Youngest to score 38,000 points. King of the court.",
    views: "380M"
  },
  {
    name: "Selena Gomez",
    backgroundImage: "https://i.pinimg.com/736x/cb/ba/e6/cbbae6f2069d2f34006f1638342377d1.jpg",
    photo: "https://i.pinimg.com/736x/1b/91/1c/1b911c48e80a1fa0926c04507441f305.jpg",
    likes: "35M",
    posts: 2700,
    bio: "Singer, actress & entrepreneur. Founder of Rare Beauty. Mental health advocate.",
    views: "490M"
  },
  {
    name: "Lionel Messi",
    backgroundImage: "https://i.pinimg.com/736x/3b/69/fa/3b69fa918762a9cc6748a6df9758c7b7.jpg",
    photo: "https://i.pinimg.com/1200x/90/4b/3e/904b3e5afe3cd8dc0f3d77d25fd632d1.jpg",
    likes: "39M",
    posts: 2100,
    bio: "8x Ballon d'Or winner. World Cup champion. Inter Miami star. Greatest of all time.",
    views: "580M"
  },
  {
    name: "Billie Eilish",
    backgroundImage: "https://i.pinimg.com/736x/9d/20/05/9d2005fd7b371532be5b076bbc7e3e28.jpg",
    photo: "https://i.pinimg.com/736x/41/72/ce/4172ced4a54f68048b750f1e7fc544ba.jpg",
    likes: "18M",
    posts: 1850,
    bio: "Grammy-winning singer at 17. Known for whispery pop and bold, genre-defying sound.",
    views: "290M"
  },
  {
    name: "Dwayne Johnson",
    backgroundImage: "https://i.pinimg.com/736x/e3/38/e1/e338e14eb67d60d2ebb4cd205f76d423.jpg",
    photo: "https://i.pinimg.com/736x/9c/8b/16/9c8b165933ea94a1a42c27f7f0fd6744.jpg",
    likes: "29M",
    posts: 4800,
    bio : "Actor, producer & ex-WWE Champion. The Rock. Highest-paid actor in Hollywood.",
    views: "430M"
  },
  {
    name: "Ariana Grande",
    backgroundImage: "https://i.pinimg.com/1200x/83/11/0d/83110db89b317f58df78d9e34536651d.jpg",
    photo: "https://i.pinimg.com/736x/59/52/26/595226f5cbd1a44da4449c44d0ae8819.jpg",
    likes: "33M",
    posts: 2400,
    bio: "Pop superstar. 7 studio albums. Known for her iconic ponytail and 4-octave range.",
    views: "470M"
  },
  {
    name: "Virat Kohli",
    backgroundImage: "https://i.pinimg.com/736x/9a/3e/7b/9a3e7baf153feab922293097dfff72d4.jpg",
    photo: "https://i.pinimg.com/736x/06/c8/3e/06c83e4ee573251638b8ad16829e3f55.jpg",
    likes: "25M",
    posts: 3300,
    bio: "Cricket legend. Former India captain. 80+ international centuries. King of modern batting.",
    views: "410M"
  }
];
export default personalities