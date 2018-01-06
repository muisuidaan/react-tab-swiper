/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-08-16 14:29:59
 * @version $Id$
 */
import React from 'react';
import NavLink from './../../../../../components/NavLink';
import data from './../../../../../config/config.js';

function getLeftNav(data, pId) {
  if (!data) {
    return;
  }
  let navData = data.filter((item, index) => {
    return item && parseInt(item['pId']) === parseInt(pId);
  });
  if (navData) {
    return navData[0].modules;
  }
}

function TabLeft(props) {
  //let {data} = props;
  let pId = props.params['pId'],
    navData = getLeftNav(data, pId);
  return <div className="contentOuter">
          <ul className="leftTab">
            {navData && navData.map((item, index) => {
              return <li key={index}
                         className="tab">
                       <NavLink to={'/main/?type' + props.params['pId'] }>
                         {item.mName}
                       </NavLink>
                     </li>;
             })}
          </ul>
        </div>
}

export default TabLeft;
