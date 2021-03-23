import React, { memo } from "react";

 const Item = memo({ data }) => {
return ( 
<div>
  {data.thumbnail &&<img src= {data.thumbnail} alt=""/>}
     
      <p>{data.title}</p>
      <p>Number of comments: {data.num_comments}</p>
      <a href={data.permalink} 
      target="_blanc"
      rel="noopener noreferrer" > 
        link
      </a>
    </div>
) ;
};

export default Item;