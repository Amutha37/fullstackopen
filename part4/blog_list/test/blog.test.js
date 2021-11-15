/* eslint-disable no-undef */
const listHelper = require('../utils/list_helper');

describe('dummy data', () => {
  test('dummy returns one', () => {
    const blogs = [];

    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
  });
});

describe('total likes', () => {
  const blogs = [
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
  ];

  test('when list has only two blogs, add the likes of that', () => {
    const result = listHelper.TotalLikes(blogs);
    expect(result).toBe(12);
  });

  const listMoreBlogs = [
    {
      _id: '61846a7e203d0a5c62b64a8a',
      title: 'Neil Patel/blog',
      author: 'Neil Patel',
      url: 'https://neilpatel.com/blog/',
      likes: 14,
      __v: 0,
    },
  ];

  test('when list has only one blog,equal the likes of that', () => {
    const result = listHelper.TotalLikes(listMoreBlogs);
    expect(result).toBe(14);
  });
});

describe('favourite blog', () => {
  const blogss = [
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 7,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
    {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0,
    },
  ];

  test('when list has only 3 blogs, print the blogs with most likes 3rd block', () => {
    const expectThisResult = {
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12,
    };

    const result = listHelper.FavouriteBlog(blogss);
    expect(result).toEqual(expectThisResult);
  });

  const bloggs2 = [
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 0,
      __v: 0,
    },
  ];

  test('when list has only 3 blogs with two same likes, print the last block', () => {
    const expectThisResult2 = {
      title: 'React patterns',
      author: 'Michael Chan',
      likes: 0,
    };
    //   {
    //   title: 'React patterns',
    //     author: 'Michael Chan',
    //     likes: 12,
    // };

    const result = listHelper.FavouriteBlog(bloggs2);
    expect(result).toEqual(expectThisResult2);
  });
});
