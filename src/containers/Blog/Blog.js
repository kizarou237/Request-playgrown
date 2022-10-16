import React, { Component } from 'react';
import { Route, NavLink, Switch} from 'react-router-dom';

//import axios from 'axios';

//import Posts from './Posts/Posts';

// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';

//import NewPost from './NewPost/NewPost';
const AsyncComponent = asyncComponent(() =>{
    return import('./NewPost/NewPost');
}
   );

class Blog extends Component {

    state ={
        auth: true
    }



    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts/" 
                            exact
                            activeClassName='samusa'
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'              
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                {/* <Route path="/" exact render={() => <h1>Home</h1>}  />
                <Route path="/" render={() => <h1>Home 2</h1>}  />    */}
                <Switch>
                {this.state.auth ? <Route path="/new-post" component={AsyncComponent}/> : null }
                <Route path="/posts" component={Posts}/>

                <Route render={()=> <h1> Page not found</h1>} />


                {/* <Redirect from ="/" to ="/posts" /> */}
                {/* <Route path="/" component={Posts}/> */}
                
                </Switch>
            </div>
        );
    }
}

export default Blog;