import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getExpenses = async () => {
  const res = await axios.get(`${API}/expenses`);
  return res.data;
};

export const addExpense = async (expense) => {
  const res = await axios.post(`${API}/expenses`, expense);
  return res.data;
};

export const deleteExpense = async (id) => {
  const res = await axios.delete(`${API}/expenses/${id}`);
  return res.data;
};

export const updateExpense = async (id, expense) => {
  const res = await axios.put(`${API}/expenses/${id}`, expense)
  return res.data
}