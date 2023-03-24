import React, { useState, useEffect, useCallback } from 'react'
import { socket } from './conection';
import paper from '../images/paper.png';
import InputEmoji from "react-input-emoji";
import axios from 'axios';
import back from '../images/back.png';

export const Chats = ({ chanelUnique, setChanelUnique,chat,setChat,setUsers,setperfilUser,setcolor}) => {

   const sessionUser = JSON.parse(sessionStorage.getItem('USER'));

   const dataUser = sessionUser;

   const [message, setMessage] = useState('');
   const [messages, setMessages] = useState([]);

   const [messagesPersonal, setMessagesPersonal] = useState([]);
  

   const [messagesFilter, setMessageFilter] = useState([]);


   const [messagesBd, setmessagesBd] = useState([]);
   const [messagesBdGrl, setMessagesBdGrl] = useState([]);

   let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
   useEffect( () => {
      axios.get('https://chatowl-2l34.onrender.com/direct/messages',axiosConfig)
         .then((response) => {
            const messagePersonalBd = [];
            response.data.forEach(e => {
         


                  const dataDirectMessage={
                     textmessagePersonal:e.textmessage,
                     idUserSendPersonal:e.id_usersend,
                     nameUserSendPersonal:e.id_usersend===sessionUser.id?"Yo":e.name_usersend,
                     dateTimePersonal:e.date_time,
                     nameUserRecivePersonal:e.name_userrecive,
                     idUserRecivePersonal:e.id_userrecive,
                   }
               
            
                   messagePersonalBd.push(dataDirectMessage)
            })
            // setNameUsers(users);

            setMessagesPersonal([...messagePersonalBd, ...messagesPersonal]);
         })
         .catch(error => {
            console.error(error.message);
         })

   },[])
   // useEffect(() => {
   //    setNameChanelsGn([...nameChanelBd, ...nameChanel])  
   // }, [nameChanelBd, nameChanel])
   // console.log(messagesPersonalBd);

   const handleSubmitInput = (e) => {
      e.preventDefault();

      const date = new Date();
      const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      if(message.length>0){ 
    
      if(chanelUnique[0].id_channel){
         const objMessage = {
            textmessage: message,
            idUser: dataUser.id,
            dateTime: hour + ':' + minutes,
            idChannel: chanelUnique[0].id_channel,
            nameuser: dataUser.name
         }
         axios.post('https://chatowl-2l34.onrender.com/messages', objMessage,axiosConfig)
         .then(() => {
            socket.emit('chatmessage', objMessage);
            const newMessage = {
               textmessage: message,
               idUser: dataUser.id,
               dateTime: hour + ':' + minutes,
               idChannel: chanelUnique[0].id_channel,
               nameuser: "Yo"
            }
            setMessages([...messages, newMessage])
            setMessage('');
            // if(screen.width > 900) {
            //    window.scrollTo(0, 1200);

            // }
         })
         .catch((error) => {


            console.log(error, 'error');

         });
      }else if(chanelUnique[0].id){

         const dataDirectMessage={
            textmessagePersonal:message,
            idUserSendPersonal:sessionUser.id,
            nameUserSendPersonal:sessionUser.name,
            dateTimePersonal:hour + ':' + minutes,
            nameUserRecivePersonal:chanelUnique[0].name,
            idUserRecivePersonal:chanelUnique[0].id,
          }
         axios.post('https://chatowl-2l34.onrender.com/direct/messages', dataDirectMessage,axiosConfig)
         .then(() => {
            socket.emit('dataDirectMessage', dataDirectMessage);
            const datasDirectMessage={
               textmessagePersonal:message,
               idUserSendPersonal:sessionUser.id,
               nameUserSendPersonal:"Yo",
               dateTimePersonal:hour + ':' + minutes,
               nameUserRecivePersonal:chanelUnique[0].name,
               idUserRecivePersonal:chanelUnique[0].id,
             }
            setMessagesPersonal([...messagesPersonal, datasDirectMessage])
            setMessage('');
            
         })
         .catch((error) => {


            console.log(error, 'error');

         });
      }
      }

      

      

   }
// Messages Chanel
   const receiveMessage = useCallback((message) => {
      setMessages((prevState) => [...prevState, message])

   }, [setMessages])

   useEffect(() => {
      socket.on('message', receiveMessage)

      return () => {
         socket.off('message', receiveMessage)
         console.log('cerrando socket');
      }
   }, [receiveMessage]);
   // Message Personal
   const receiveMessagePersonal = useCallback((message) => {
      setMessagesPersonal((prevState) => [...prevState, message])

   }, [setMessagesPersonal])

   useEffect(() => {
      socket.on('messagePersonal', receiveMessagePersonal)

      return () => {
         socket.off('messagePersonal', receiveMessagePersonal)
         console.log('cerrando socket');
      }
   }, [receiveMessagePersonal]);



   useEffect(() => {
      setMessagesBdGrl([...messagesBd, ...messages])

   }, [messagesBd, messages])

   const removedMessage = useCallback((removedMessageSocketId) => {
    

      setMessageFilter(messagesFilter.filter((e) => e.idChannel !== removedMessageSocketId))
      setChanelUnique([{
         id_channel: 1,
         namechanel: "#channelGeneral"
      }])

   }, [messagesFilter, setMessageFilter])

   useEffect(() => {
      socket.on('removedChannel', removedMessage)
      return () => {
         socket.off('removedChannel', removedMessage)
      }
   }, [removedMessage]);

   const editMessage = useCallback((editMessageSocketId) => {
      setChanelUnique(chanelUnique.map((e) => {
         if (e.id_channel === editMessageSocketId.id_channel) {
            e.namechanel = editMessageSocketId.namechanel
         }
         return e;
      }))

   }, [chanelUnique, setChanelUnique])

   useEffect(() => {
      socket.on('editedChanel', editMessage)
      return () => {
         socket.off('editedChanel', editMessage)
      }
   }, [editMessage]);


   useEffect(() => {
  
      if(chanelUnique[0].id_channel){
         const messagefil = messages.filter((e) => e.idChannel === chanelUnique[0].id_channel)
         setMessageFilter(messagefil)
      }else{
         const messagefil = messagesPersonal.filter((e) =>(e.idUserRecivePersonal===chanelUnique[0].id && e.idUserSendPersonal===sessionUser.id)||(e.idUserRecivePersonal=== sessionUser.id&& e.idUserSendPersonal===chanelUnique[0].id) )

         setMessageFilter(messagefil)
      }
      
    

   }, [messages,messagesPersonal,chanelUnique,setMessageFilter])
   function backChanel(){
      setUsers(false);
      setperfilUser(false);
      setChat(false);
      setcolor(true);
   }
  
   return (
      <div className={chat?'boxMessage block':'boxMessage non'}>
         {
            chanelUnique.map((channel, index) => (
               <div key={index} className='nameChanelHome'>
                  <div className='back'>
                     <img className="buhoLogo" alt='imágen de atra' src={back} onClick={backChanel} />
                  </div>
                  <h2 id='chatNames' className='hh'>{channel.namechanel || channel.name} </h2>
               </div>
            ))

         }
         <div className='messageContainer'>
            { messagesFilter.map((message, index) => (
               <div key={index}
                  className={`${message.nameuser === "Yo"||message.nameUserSendPersonal=== "Yo"? "messageContentRigth" : "messageContentLeft"}`}>
                  <label
                     className='nameMessage'>{message.nameuser||message.nameUserSendPersonal}:


                  </label>
                  <div className='message'>
                     <label className='textMessage'>{message.textmessage||message.textmessagePersonal}</label>

                  </div>
                  <span>
                     {message.dateTime||message.dateTimePersonal}

                  </span>
               </div>
            ))

           }

            <div className='sendText'>
               <form className='sendText' onSubmit={handleSubmitInput}>
                  <InputEmoji

                     type='text'
                     value={message}
                     onChange={setMessage}
                     cleanOnEnter
                     onEnter={handleSubmitInput}
                     placeholder="Escribe un mensaje..."
                  />

                  <button className='boxpaper' type='submit'>
                     <img className="paper" alt='imágen de un avatar' src={paper} />
                  </button>


               </form>
            </div>
         </div>
      </div>
   )
}
