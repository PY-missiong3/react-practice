import React from 'react';

type CardProps = {
  style:object,
  src:string,
  title:string,
  description:string,
  onClick: () => void,
};

const Card: React.FC<CardProps> = ({style,title,description,src,onClick}) => {
  return (
    <div style={style} onClick={onClick}>
      <div> 
       <p>{title}</p>
       <p>{description}</p>
       </div>
       <img style={{height:50,width:50,marginLeft:'auto'}} src={src} alt={title} />
    </div>
  );
};

export default Card;