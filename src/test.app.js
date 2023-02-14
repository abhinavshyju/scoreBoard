import React from 'react'

const App = () => {

    const data = [
        { name : 'asdf', category : 'A'},
        { name : 'agsdfjgkf', category : 'B'},
        { name : 'jkjklf', category : 'A'},
        { name : 'ghj', category : 'C'},
    ];
    const sortedData = data.sort((a, b) => a.category.localeCompare(b.category));

    sortedData.forEach((item) => {
        console.log(`Name : ${item.name}, Category : ${item.category}`);
    });
  return (
    <div>App</div>
  )
}

export default App