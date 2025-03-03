import axios from "axios";

// const BASE_URL = import.meta.env.VUE_APP_API_URL;
const BASE_URL = "http://localhost:3000/api/v1";

export const TransactionService = {
  async getAll() {
    const response = await axios.get(`${BASE_URL}/transactions`);
    return response.data.data;
  },

  async create(transaction) {
    const response = await axios.post(`${BASE_URL}/transactions`, transaction);
    return response.data.data;
  },
  async update(id, transaction) {
    const response = await axios.put(
      `${BASE_URL}/transactions/${id}`,
      transaction
    );
    return response.data.data;
  },
  async delete(id) {
    const response = await axios.delete(`${BASE_URL}/transactions/${id}`);
  },
};
