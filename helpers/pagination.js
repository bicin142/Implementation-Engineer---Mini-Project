function getPagination(page, size) {
  const limit = size;
  const offset = +page < 1 ? 0 : (+page - 1) * limit;

  return { limit, offset };
}

function getPagingDataForPosts(data, page, limit) {
  const { count: totalItems, rows: posts } = data;
  const currentPage = +page < 1 ? 1 : +page;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, totalPages, currentPage, posts };
}

function getPagingDataForReplies(data, page, limit) {
  const { count: totalItems, rows: replies } = data;
  const currentPage = +page < 1 ? 1 : +page;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, totalPages, currentPage, replies };
}

module.exports = {
  getPagination,
  getPagingDataForPosts,
  getPagingDataForReplies,
};
