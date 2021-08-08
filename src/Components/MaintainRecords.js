
import {connect} from "react-redux";
import {deleteUser,deletetoDo} from '../action';



import React,{Component} from 'react';

import  "./MaintainRecord.css";

import ModalW from "./ModalWindow";
import { Modal } from 'antd';





import { Tabs,Button,Table, Space,Input   } from 'antd';
const { TabPane } = Tabs;




function callback(key) {
   
  }

class MaintainRecords extends Component{
  state = { visible: false,name:"",sampledata :[], email:""};
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  hideModal = () => {
    // sampledata.push({name:this.state.name,email:this.state.email,id:Object.keys(sampledata).length})
    
   

    this.setState({
      visible: false,
      // sampledata:sampledata,
    });
  
  };


  
  DeleteRecord(idofuser){
       
      //  this.props.createUser({name:element.Name,email:element.Email,id:Object.keys(this.props.user).length});
       this.props.deleteUser(idofuser);
  }

  DeleteTodo(idoftodo){
    
   //  this.props.createUser({name:element.Name,email:element.Email,id:Object.keys(this.props.user).length});
    this.props.deletetoDo(idoftodo);
}
    
   ReusableModle =()=>{

    return(
      <>
     <Modal
     title="Creating User Modal"
     visible={this.state.visible}
     onOk={this.hideModal}
     onCancel={this.hideModal}
     okText="OK"
     cancelText="CANCEL"
     
   >
      <Input placeholder="Enter User Name" name="Name" value={this.state.Name} onChange={(e)=>{this.setState({name:e.target.value.trim()})}}/>
                     <br />
                     <Input placeholder="Enter User Email" name="Email" value={this.state.Email} onChange={(e)=>{this.setState({email:e.target.value.trim()})}}/>
                     </Modal>

     </>

    );
    
  } 
  
    render(){
         
        const columns = [
            {
              title: 'Name of user',
               dataIndex: "name",
              key: 'name',
                // render: text=><a>{text}</a> // when we want to render it custom
            },

            {
              title: 'Email of User',
               dataIndex: "email",
              key: 'email',
                // render: text=><a>{text}</a> // when we want to render it custom
            },
            
       
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                
                  <ModalW type={"link"} ButtonName={"Edit User"} id={record.key}></ModalW>
                  
                  
                  <Button type="link" onClick={()=>{this.DeleteRecord(record.key)}}>Delete</Button>
                  
                </Space>
              ),
            },
          ];


          const columns2 = [
            {
              title: 'Name of ToDO',
               dataIndex: "nameoftodo",
              key: 'nameoftodo',
                // render: text=><a>{text}</a> // when we want to render it custom
            },

            {
              title: 'TimeCreated',
               dataIndex: "timecreated",
              key: 'timecreated',
                // render: text=><a>{text}</a> // when we want to render it custom
            },
            
       
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                
                  <ModalW type={"link"} ButtonName={"Edit"} id={record.key}></ModalW>
                  
                  
                  <Button type="link" onClick={()=>{this.DeleteTodo(record.key)}}>Delete</Button>
                  
                </Space>
              ),
            },
          ];
          
          
          
          
          
          
          
          let dataSourceUsers = this.props.user.map((items)=>{return({name:items.name,key:items.id,email:items.email})})

          const dataSourceTodo = this.props.todoList.map((items)=>{return({nameoftodo:items.todo,key:items.id,timecreated:items.timec})})
   
        
         
        return (
            <div>
                <Tabs defaultActiveKey="1" centered onChange={callback}>
                        <TabPane tab="ToDos" key="1">
                      
                          <ModalW typebutton={"primary"} ButtonName={"Create ToDo"}/>
                          <Table columns={columns2} dataSource={dataSourceTodo}  size="middle" bordered size="small"/>
                       
                        </TabPane>
                        <TabPane tab="Users" key="2">
                          <ModalW typebutton={"primary"} ButtonName={"Create User"}/>
                        <Table columns={columns} dataSource={dataSourceUsers}  size="middle" bordered size="small"/> 
                        </TabPane> 
                </Tabs>     
            </div>
);
    }
}

const mapStateToProps =(state)=>{
   
   
  return {user:Object.values(state.users),todoList:Object.values(state.todos)}

}

export default connect(mapStateToProps,{deleteUser,deletetoDo})(MaintainRecords);
