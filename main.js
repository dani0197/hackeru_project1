const blogPost = {
    title: 'first Post1',
    body: 'this is the body',
    author: 'Mark',
    views: 991,
    comments: [
        {
            author: 'dave',
            comment: 'this is great!'
        },
        {
            author: 'bob',
            comment: 'wow, amazing!'
        },
        {
            author: 'bar',
            comment: 'lame!'
        },
        {
            author: 'roy',
            comment: 'best blog ever'
        }
    ],
    content: 'this is the content',
    isAlive: true
};


const user = {
    firstName: 'Sharon',
    lastName: 'Bar',

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    age: 45
};

console.log(user);