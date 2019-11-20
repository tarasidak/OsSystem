import React from 'react';
import './posts.css';
import Navigation from '../navigation';

export default class Posts extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/1/posts?userId=1')
        .then(res => res.json())
        .then(result => {
          this.setState({
            posts: result 
          })
        })
      }

      render(){
          const {posts} = this.state;
        return (
            <div>
                <Navigation/>
                {posts.map(post => 
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )}
            </div>
          )
      }
}