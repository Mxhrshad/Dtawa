import axios from "axios";

const client = axios.create({
  baseURL: "https://raw.githubusercontent.com/Mxhrshad/Dtawa/main/data/db.json"
});

export async function getKeychains() {
  const response = await client.get();
  return response.data.keychain; 
}

export async function getSocks() {
  const response = await client.get();
  return response.data.socks;
}