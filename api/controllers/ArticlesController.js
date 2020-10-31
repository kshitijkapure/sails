/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const axios = require('axios');

module.exports = {
  list: (req, res) =>{
    console.log('hello');
    axios.get('http://dummy.restapiexample.com/api/v1/employees'
    )
      .then((response) => {
        console.log(response.data.data);
        res.view('articles/articles', {articles: response.data.data});
      }, (error) => {
        console.log(error);
      });
  },
};

