// myReview.dto.js

export const myReviewResponseDTO = (data) => {
  const reviews = [];

  for (let i = 0; i < data.length; i++) {
    reviews.push({
      user_name: data[i].user_name,
      rate: data[i].rate,
      review_body: data[i].review_content,
      create_date: formatDate(data[i].created_at),
    });
  }
  return { reviewData: reviews, cursorId: data[data.length - 1].review_id };
};
