// myReview.provider.js

export const getReview = async (member_id, query) => {
  const { reviewId, size = 3 } = query;
  return previewReviewResponseDTO(
    await getPreviewReview(reviewId, size, member_id)
  );
};
