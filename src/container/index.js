import React, { Component } from 'react';
import { Switch, Route, Redirect,Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { comRoutes, busRoutes } from '../routes'
import PrivateRoute from '../routes/PrivateRoute';

import AppSider from '../component/Sider';
import AppHeader from '../component/Header';


import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {
    constructor(props) {
        super(props);
	       //console.log(props);
    }

    render() {
        const { fetchParams } = this.props;
        let allRoutes = [...comRoutes, ...busRoutes];

        return (
                  <Layout>
                    <AppHeader />
                    <Layout>
                      <AppSider siders = { allRoutes } />
                      <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                          <Breadcrumb.Item>Home</Breadcrumb.Item>
                          <Breadcrumb.Item>List</Breadcrumb.Item>
                          <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 16, margin: 0, minHeight: 280 }}>
                          <Switch>

                            {
                              // allRoutes.map((item, index) => (
                              //   <Route
                              //     fetchParams={ fetchParams }
                              //     key = {index}
                              //     path={item.path}
                              //     exact={item.exact}
                              //     component={item.render}
                              //
                              //   />
                              // ))

                              // allRoutes.map((route, index) => (
                              //   <PrivateRoute
                              //     fetchParams={ fetchParams }
                              //     key={index}
                              //     path={route.path}
                              //     exact={route.exact}
                              //     component={route.render}
                              //   />
                              // ))

                              allRoutes.map((route, index) => {
                                return <PrivateRoute
                                  fetchParams={ fetchParams }
                                  key={index}
                                  path={route.path}
                                  exact={route.exact}
                                  component={route.render}
                                />
                              })
                            }
                            <Redirect to="/" />
                          </Switch>
                        </Content>
                      </Layout>
                  </Layout>
                </Layout>
        );
    }
}

const mapStateToProps  = (state) => ({
    // posts: state.posts
    // posts: state.posts.posts
});

const mapDispatchToProps = (dispatch) => ({
    fetchParams:(params) => dispatch(getParams(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);



// class App extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//               <div>
//                   <Layout>
//                     <AppHeader />
//                     <Layout>
//                       <AppSider />
//                       <Layout style={{ padding: '0 24px 24px' }}>
//                         <Breadcrumb style={{ margin: '16px 0' }}>
//                           <Breadcrumb.Item>Home</Breadcrumb.Item>
//                           <Breadcrumb.Item>List</Breadcrumb.Item>
//                           <Breadcrumb.Item>App</Breadcrumb.Item>
//                         </Breadcrumb>
//                         <Content style={{ background: '#fff', padding: 16, margin: 0, minHeight: 280 }}>
//                           <Switch>
//                               <Route path="/" exact render={() => <h1>Home Page</h1>} />
//                               <Route path="/users" exact component={UserList}></Route>
//                               <Route path="/posts" exact component={PostList}></Route>
//                               <Route path="/page" exact render={() => <h1>路由测试</h1>}></Route>
//                               <Route path="/test" exact component={Test}></Route>
//                               <Redirect to="/" />
//                           </Switch>
//                         </Content>
//                       </Layout>
//                   </Layout>
//                 </Layout>
//               </div>
//         );
//     }
// }

//export default App;
