const request = require("supertest")
const baseURL = "http://localhost:3000"

const app = require("./index")

// Can add more assrtions on the way

describe("GET /users ", () => {
    test("It should respond with an array of users and should have the status 200", async () => {
        const response = await request(app).get("/users");
        expect(response.statusCode).toBe(200);
    });
 });

describe("POST /users ", () => {
    test("It should respond with a message and should have the status 200", async () => {
        const response = await request(app).post("/users").send({
            "fullName": "test",
            "mobile": "test",
            "address": "test",
            "email": "atest"
          });;
        expect(response.statusCode).toBe(200);
    });
});

afterAll(done => {
    done()
})