import http from "node:http";

const people = {
  1: {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    city: "New York",
    country: "United States",
    email: "john.doe@example.com",
    phone: "1234567890",
    website: "https://www.john.com",
  },
  2: {
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    city: "Los Angeles",
    country: "United States",
    email: "jane.doe@example.com",
    phone: "1234567890",
    website: "https://www.jane.com",
  },
};

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/people/1") {
    const person = people[1];
    await new Promise((resolve) => setTimeout(resolve, 1000 * 5));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(person));
    return;
  } else if (req.url === "/api/people/2") {
    const person = people[2];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(person));
    return;
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
    retuern;
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
