// dtos/user_dto.js

export const signinDTO = (memeber, prefer) => {
  const preferFood = [];
  for (let i = 0; i < prefer[0].length; i++) {
    preferFood.push(prefer[0][i].food_category_name);
  }
  return {
    email: memeber[0].email,
    name: memeber[0].name,
    preferCategory: preferFood,
  };
};

export const addUserMissionDTO = (data) => {
  return {
    member_id: data[0].member_id,
    mission_id: data[0].mission_id,
  };
};
