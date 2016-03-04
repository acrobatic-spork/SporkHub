const React = require('react');
const getUsers = require('../js/users').getUsers;
const UserEntry = require('./UserEntry');

const ShowUsers = class ShowUsers extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      usersToRender: []
    }
  }

  getAllUsersList() {
    self = this;
    getUsers((data) => {
      if(data.length){
        self.setState({
          usersToRender: data
        });
      }
    }, console.log);
  }

  componentDidMount(){
    this.getAllUsersList();
  }

  render() {
    if(this.state.usersToRender.length === 0){
     return (<div>Hello World</div>) 
    } else {
        return (<div>
        <div class='all-users-view'>
        {this.state.usersToRender.map((user, index) => {
          <UserEntry user={user} key={index}/>
          })
        }
        </div>
      
      </div>)
    }
  }
}


module.exports = ShowUsers;