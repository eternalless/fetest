const axios = require('axios');
const { expect } = require('chai');
// const superagent = require('supertest');
// const app = require('./app');
//
// function request(){
//     return superagent(app.listen());
// }
// describe("node接口测试",function(){
//     it("test 接口测试",function(done){
//         request()
//             .get('/test')
//             .expect('Content-Type', /json/)
//             .expect(200)
//             .end(function(err, res) {
//                 if(res.data == "Hello World!"){
//                     done();
//                 }else{
//                     done(err);
//                 }
//                 //   if (err) throw err;
//             });
//     });
// });
describe("node接口测试",function(){
    it("test 接口测试",(done) => {
        axios.get('http://localhost:3000/test')
            .then(function (res) {
            expect(res.status).to.equal(200);
            console.log(res.data)
            if(res.data.data == "Hello World!"){
                    done();
            }else{
                    done(new Error('结果不符合预期!!!'));
            }
            }).catch(function (error) {
            done(error);
        });
    });
});