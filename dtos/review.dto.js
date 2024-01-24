export const reviewDTO = (review) => {
  return {
    body: review[0].body,
    score: review[0].score,
    member_id: review[0].member_id,
    region_id: review[0].region_id,
    store_id: review[0].store_id,
  };
};
