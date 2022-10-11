var result1 = [
  { id: 1, name: "Sandra", type: "user", username: "sandra" },
  { id: 2, name: "John", type: "admin", username: "johnny2" },
  { id: 3, name: "Peter", type: "user", username: "pete" },
  { id: 4, name: "Bobby", type: "user", username: "be_bob" },
];

var result2 = [
  { id: 2, name: "John", email: "johnny@example.com" },
  { id: 4, name: "Bobby", email: "bobby@example.com" },
];

let results = result1
  .filter((o1) => !result2.some((o2) => o1.id === o2.id))
  .map((result) => console.log(result.name));
