import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000/"
});


export async function getKeychains() {
  const response = await client.get("/keychain");
  return response.data;
}


export async function getSocks() {
  const response = await client.get("/socks");
  return response.data;
}