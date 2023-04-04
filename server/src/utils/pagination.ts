export const getPageParams = (page: number, limit: number) => {
  const take = Number(limit) || 10;
  const skip = page ? Number(page - 1) * take : 0;

  return { take, skip };
};
