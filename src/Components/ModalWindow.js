import React, { useState } from 'react';
import { Modal, Button,Input } from 'antd';

import {connect} from "react-redux";
import {createUser,editUser,createtoDo,edittoDo} from '../action';

const ModalWindow = (props) => {

    let element ={};
    let typeofbutton = (props.typebutton==="primary") ? "primary" : "link"

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(false);


  const showModal = () => {
    if(props.ButtonName==="Create User"){
      setIsModalVisible(true);
      setIsModalVisible2(false);
      setIsModalVisible3(false);
      setIsModalVisible4(false);
    }
    if(props.ButtonName==="Create ToDo"){
      setIsModalVisible(false);
      setIsModalVisible2(true);
      setIsModalVisible3(false);
      setIsModalVisible4(false);
    }
    if(props.ButtonName==="Edit User"){
      setIsModalVisible(false);
      setIsModalVisible2(false);
      setIsModalVisible3(true);
      setIsModalVisible4(false);
    }
    if(props.ButtonName==="Edit"){
      setIsModalVisible(false);
      setIsModalVisible2(false);
      setIsModalVisible3(false);
      setIsModalVisible4(true);
    }
    
  };


 
  async function wait(duration=1000){
    await new Promise(resolve=>setTimeout(resolve,duration));
      setVisible(false);
      console.log("iam in wait function")
    setConfirmLoading(false);
  }
  const handleOk = async () => {
    
    
    
    setConfirmLoading(true);
    // setTimeout(() => {
    //   setVisible(false);
    //   setConfirmLoading(false);
    // }, 2000);
 
    await wait(2000);
    props.createUser({name:element.Name,email:element.Email,id:Object.keys(props.user).length});
    setIsModalVisible(false);
   
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
    
    props.createtoDo({todo:element.TODO,timec:element.TimeCreated,id:Object.keys(props.todoList).length});
  };

  const handleOk3 = () => {
    setIsModalVisible3(false);
    
    //  props.createUser({name:element.Name,email:element.Email,id:Object.keys(props.user).length});
    // props.editUser(props.id,element.Name);
    
    props.editUser({name:element.Name,email:element.Email,id:props.id});
  };

  const handleOk4 = () => {
    setIsModalVisible4(false);
    
    //  props.createUser({name:element.Name,email:element.Email,id:Object.keys(props.user).length});
    // props.editUser(props.id,element.Name);
    
    props.edittoDo({todo:element.TODO,timec:element.TimeCreated,id:props.id});
  };

  const handleCancel = () => {
    if(props.ButtonName==="Create User"){
      setIsModalVisible(false);
     
    }
    if(props.ButtonName==="Create ToDo"){
      setIsModalVisible2(false);
   
    }
    if(props.ButtonName==="Edit User"){
      setIsModalVisible3(false);
      
    }
    if(props.ButtonName==="Edit"){
      setIsModalVisible4(false);
      
    }

   
  };

  return (
    <>
      <Button type={typeofbutton} onClick={showModal}>
        {props.ButtonName}
      </Button>
      
      <Modal title={props.ButtonName} visible={isModalVisible} confirmLoading={confirmLoading} onOk={handleOk}  onCancel={handleCancel} >
        
                <Input placeholder="Enter User Name" name="Name"  type="text" value="asdf" onChange={(e)=>{element["Name"]=e.target.value;}}/>
                <br />
                <Input placeholder="Enter User Email" name="Email" type="text" value="asdf" onChange={(e)=>{element["Email"]=e.target.value}}/>
        </Modal>

        <Modal title={props.ButtonName} visible={isModalVisible2} onOk={handleOk2} onCancel={handleCancel}>
                <Input placeholder="Enter User Name" name="Name" value={element["TODO"]} onChange={(e)=>{element["TODO"]=e.target.value;let current = new Date();element["TimeCreated"]=current.toLocaleTimeString()}}/>
                {/* <br />
                <Input placeholder="Enter User Email" name="Email" value={element["Email"]} onChange={(e)=>{element["Email"]=e.target.value}}/> */}
        </Modal>

        <Modal title={props.ButtonName} visible={isModalVisible3} onOk={handleOk3} onCancel={handleCancel}>
                
                <Input placeholder="Enter User Name to Edit" name="Name" value={element["Name"]} onChange={(e)=>{element["Name"]=e.target.value}}/>
                <br />
                <Input placeholder="Enter User Email" name="Email" value={element["Email"]} onChange={(e)=>{element["Email"]=e.target.value}}/>
                
        </Modal>

        <Modal title={props.ButtonName} visible={isModalVisible4} onOk={handleOk4} onCancel={handleCancel}>
                <Input placeholder="Enter User Name" name="Name" value={element["TODO"]} onChange={(e)=>{element["TODO"]=e.target.value;let current = new Date();element["TimeCreated"]=current.toLocaleTimeString()}}/>
               
        </Modal>

        

     
        

      
      
    </>
  );
};

const mapStateToProps =(state)=>{
 


  return {user:Object.values(state.users),todoList:Object.values(state.todos)}
  
 

}

export default connect(mapStateToProps,{createUser,editUser,createtoDo,edittoDo})(ModalWindow);