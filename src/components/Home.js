import React from 'react';
// import React, { useEffect } from 'react';
// import axios from 'axios';

import Hero from './Hero';
import CardGrid from './CardGrid';
// import Card from './Card';

// class Home extends Component {
//     state = {
//         posts: []
//     }
//     componentDidMount() {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(res => {
//                 // console.log(res)
//                 this.setState({
//                     posts: res.data.slice(0, 10)
//                 })
//             })
//     }

//     render() {
//         const { posts } = this.state;
//         const postList = posts.length ? (posts.map(post => {
//             return (
//                 <Card key={post.id}></Card>)
//         })) : (<div>No posts found</div>)
//         return (
//             <>
//                 <div className="content">
//                     <Hero></Hero>
//                     <CardGrid>
//                         {postList}
//                     </CardGrid>
//                 </div>
//             </>
//         );
//     }
// }

const Home = () => {
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(res => { console.log(res) })
    // }, []);
    return (
        // <>
        <div className="content">
            <Hero></Hero>
            <CardGrid>

            </CardGrid>
        </div>
        // </>
    );
}

export default Home;