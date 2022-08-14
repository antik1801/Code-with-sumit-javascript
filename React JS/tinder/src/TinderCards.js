
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCard.css'


function TinderCards() {
   const [people, setPeople] = useState([
        {
            name: 'Elon Mask',
            url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
        },
        {
            name: 'Jeff Bezos',
            url : 'https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3',
        }
    ]);
   const swiped = (direction,nameToDelete) =>{
    console.log("removing: "+ nameToDelete);
   }
   const outofframe = (name)=>{
    console.log(name + " left the screen");
   }
  return (
    <div className='TinderCards'>
        <div className='TinderCards_Container'>
        <h1>Kisu ki hosse eikhane </h1>
     {people.map((person)=>{
       <TinderCard
       className='swipe'
       key={person.name}
       preventSwipe={["up","down"]}
       onSwipe={(dir)=> swiped(dir,person.name)}
       onCardLeftScreen = {()=> outofframe(person.name)}
       > 
      <div className='Card' style={ {backgroundImage: `url(${person.url})`}}>
      </div>
      <h3>{person.name}</h3>
       </TinderCard>
        })}
        </div>

   
    </div>
  )
}

export default TinderCards
