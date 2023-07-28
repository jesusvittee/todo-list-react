import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item,setItem]= React.useState(initialValue);
  const [loading, setLoading]= React.useState(true)
  const [error, setError] = React.useState(false)

  React.useEffect(()=> {
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        
        let parsedItem;
        
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify([initialValue]));
          parsedItem = [initialValue];
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
        setLoading(false)
      } catch (error){
        setLoading(false)
        setError(true)
      }
    },2000);
  },[])

  
    
    const saveItem = (newItem)=>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem)
    };
  
    return {item, saveItem, loading, error};
  }

  export { useLocalStorage };


  
// const defaultTodos = [
//   { text: 'Cortar una cebolla', completed: false },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Aprender frances', completed: false },
//   { text: 'Cortar una cebolla y chiles', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js y no parar de aprender', completed: false },
//   { text: 'Llorar con la Llorona mientras lavo la ropa en el rio', completed: false },
//   { text: 'Aprender ingles mientras duermo', completed: false },
// ];

// localStorage.setItem('TODOS_V1', 'defaultTodos')