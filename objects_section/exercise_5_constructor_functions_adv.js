// Object Literal Syntax
const post_literal = {
    title: 'Lord Of the Rings',
    body: 'A Long Ass Story' ,
    author: 'J R R Token',
    views: 51223,
    comments: [
                {
                  author: 'George R R Martin',
                  body: 'You went in too deep, Professor Tweed Pants.'
                },
                {
                  author: 'J K Rowling',
                  body: 'Don\'t be a doucebag, Trump'
                },
              ],
    isLive: true
}

function Post({title, body, author}) {
  this.title = title 
  this.body = body 
  this.author = author 
  this.views = 0 
  this.comments = []
  this.isLive = false
}

const picked = (({ title, body, author }) => ({ title, body, author }))(post_literal);

const post_2 = new Post(picked)

console.log(post_2)