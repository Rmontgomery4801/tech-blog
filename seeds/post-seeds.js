const { Post } = require("../models");

// seeded post data that displays on the homepage

const postdata = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Mollitia ratione debitis culpa, earum voluptate illum neque facere placeat quam quaerat? Explicabo maxime tempore suscipit incidunt aperiam rem laudantium delectus ratione!",
    user_id: 1,
  },
  {
    title: "Sed, facilis ipsam",
    description:
      "Deleniti quasi molestias eos adipisci aliquid facilis, maxime sapiente harum. Sunt nobis voluptatum aut dolorum temporibus beatae dolores vel?. Eos quos est maiores nesciunt voluptatum eligendi cupiditate",
    user_id: 2,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    description:
      "Corrupti, voluptates ipsam sunt, assumenda sapiente mollitia in, animi sed accusantium autem eius. Tenetur natus dolor autem delectus tempore corporis? Iure, eius.",
    user_id: 3,
  },
  {
    title: "Pellentesque eget nunc.",
    description:
      "Provident veniam vero 🗡️ quidem id! Recusandae perferendis sit alias vel magni? Unde, quisquam cumque. Quas soluta vel aliquam deserunt laborum accusantium quos.",
    user_id: 1,
  },
  {
    title: "In hac habitasse platea dictumst.",
    description:
      "Impedit, quo. Minima voluptatem, nam voluptas dolores id magni placeat? Aliquam veritatis sapiente ad officia quisquam asperiores libero similique molestias iure earum.",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    description: "",
    user_id: 2,
  },
  {
    title: "Duis ac nibh.",
    description:
      "Tenetur, ad? Beatae repudiandae asperiores consequatur est, ex sint autem ab. Maiores quia aliquam ut temporibus blanditiis facere maxime vero assumenda earum.",
    user_id: 3,
  },
  {
    title: "In hac habitasse platea.",
    description:
      "Quo in voluptatum molestiae aperiam suscipit hic fuga illum inventore sequi saepe distinctio quis iste omnis quae quos, eos magnam rem porro?",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;