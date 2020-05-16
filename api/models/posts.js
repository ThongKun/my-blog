const PATH = "./data.json";
const fs = require('fs')

class Post {

    get() {
        /** Get Posts */
        return this.readData();
    }

    getIndividualBlog() {
        // Get one blog post
    }

    add() {
        //  Add new post
    }

    readData() {
        let rawdata = fs.readFileSync(PATH)
        let posts = JSON.parse(rawdata);
        return posts
    }
}

module.exports = Post;