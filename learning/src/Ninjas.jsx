import React from 'react';

const Ninjas = ({ninjas}) => {
  // const ninjaList = ninjas.map(nin => {
  //   if(nin.age > 30){
  //     return(
  //       <div className='ninja' key={nin.id}>
  //         <div>Name:{nin.name}</div>
  //         <div>Belt:{nin.belt}</div>
  //         <div>Age:{nin.age}</div>
  //         <hr />
  //       </div>
  //     );
  //   }else{
  //     return null;
  //   }
  // });

  const ninjaList = ninjas.map(nin => {
    return nin.age > 40 ? (
      <div className='ninja' key={nin.id}>
        <div>Name:{nin.name}</div>
        <div>Age:{nin.age}</div>
        <div>Belt:{nin.belt}</div>
        <hr />
      </div>
    ):null;
  })
  return(
    <div className='ninja-list'>
      {ninjaList}
    </div>
  );
}

export default Ninjas;
