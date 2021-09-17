const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index");
const TodoModel = require("../src/model/todo");

chai.use(chaiHttp);

describe("Dummy test suite 01", () => {

    beforeEach(async () => {
        await TodoModel.deleteMany()
    })

    // GET Todos
    describe("/GET todos", () => {
        it("Should return all todos", (done) => {
            chai.request(app)
                .get("/todos")
                .end((err, response) => {
                    chai.expect(response.status).to.be.eql(200);
                    chai.expect(response.body).to.be.an("array");
                    chai.expect(response.body.length).to.equal(0);
                    done()
                })
        })
    })

    // POST Todos
    describe("/POST todos", () => {
        it("Should create one record", (done) => {
            const todo = new TodoModel({label : "to drink the coffee"})
            chai.request(app)
                .post("/todos")
                .send(todo)
                .end((err, res) => {
                    chai.expect(res.status).to.be.eql(200);
                    chai.expect(res.body.label).to.eql(todo.label);
                    chai.expect(res.body._id).not.to.be.undefined;
                    done()
                })
        })
    })
    
    // GET / DELETE / PATCH

})