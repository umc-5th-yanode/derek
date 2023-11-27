// dtos/store_dto.js

export const addStoreDTO = (store) => {
  return {
    name: store[0].name,
    address: store[0].address,
    region_id: store[0].region_id,
  };
};

export const addReviewDTO = (review) => {
  return {
    body: review[0].body,
    score: review[0].score,
    member_id: review[0].member_id,
    store_id: review[0].store_id,
  };
};

export const addMissionDTO = (mission) => {
  return {
    store_id: mission[0].store_id,
    reward: mission[0].reward,
    deadline: mission[0].deadline,
    misson_spec: mission[0].misson_spec,
  };
};
