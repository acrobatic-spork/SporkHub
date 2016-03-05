const React = require('react');
const UserRepoList = require('./UserRepoList');
const SporkBar = require('./SporkBar');
const LoadingAnimation = require('./LoadingAnimation');

class UserInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="section">
        <div className="row center-align">
          <div>
            <img className="circle responsive-img" src={ this.props.avatar_url || 'http://static1.squarespace.com/static/55842e41e4b0875de16c3ebc/t/55e09d99e4b0db1790432d93/1440783771027/Profile+Holder.png' } width='200'/>
          </div>
          <div>
            <h5 className="cyan-text">{ this.props.name || 'Name' }</h5>
            <h6 className="grey-text text-darken-1">{this.props.username || 'Username'}</h6>
          </div>
        </div>
        <SporkBar user={this.props}/>
        <div className="col s12">
          <h4 className="center-align grey-text text-darken-2">Your sporked repos</h4>  
          {(!Array.isArray(this.props.userRepos)) && <LoadingAnimation /> }
          { Array.isArray(this.props.userRepos) && <UserRepoList repos={this.props.userRepos} username={this.props.username} refreshUserInfo={this.props.refreshUserInfo}/> }
        </div>
      </div>
    );
  }
}


module.exports = UserInfo;
