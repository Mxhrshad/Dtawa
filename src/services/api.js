import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000" // Ensure this matches your server's base URL
});

export async function getKeychains() {
  const response = await client.get("/keychain"); // Fetch the keychain data
  return response.data;
}

export async function getSocks() {
  const response = await client.get("/socks"); // Fetch the socks data
  return response.data;
}