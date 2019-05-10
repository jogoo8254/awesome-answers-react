import { BASE_URL } from "../config";

// Requests
export const Question = {
  all() {
    return fetch(`${BASE_URL}/questions`, {
      // Makes include cookies in request and response for
      // cross-origin requests.
      credentials: "include"
    }).then(res => res.json());
  },
  async one(id) {
    // return await (await fetch(`${BASE_URL}/questions/${id}`)).json();
    const res = await fetch(`${BASE_URL}/questions/${id}`, {
      credentials: "include"
    });
    const question = await res.json();
    return question;
  },
  create(params) {
    return fetch(`${BASE_URL}/questions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};
