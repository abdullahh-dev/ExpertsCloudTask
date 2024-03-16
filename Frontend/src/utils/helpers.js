export const handleApiCall = async (callback) => {
  try {
    const response = await callback();
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
