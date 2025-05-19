/**
 * id
 * title
 * body
 * date
 *
 *
 * *Actions
 * // create a post
 * // get posts
 * // get a single post
 * // delete a post
 * // update
 *
 * => domain/action
 */

const postReducer = (state = [], action) => {
  switch (action.type) {
    case "post/addPost":
      return [...state, action.payload];

    case "post/editPost":
      const { id, title, body } = action.payload;

      return [
        ...state?.map((post) => {
          if (post.id === id) {
            post.title = title;
            post.body = body;
          }

          return post;
        }),
      ];

    default:
      return state;
  }
};

export default postReducer;
