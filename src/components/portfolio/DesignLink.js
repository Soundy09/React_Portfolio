import React from 'react';



function DesignLink(props) {
   const {link, subTitle, icon, } = props;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer">
         <i className={icon}/> {subTitle}
      </a>
   );
}

export default DesignLink;