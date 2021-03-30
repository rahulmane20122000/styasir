import react,{useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: 		#ffa700;
    border-left: 4px solid #fff;
    cursor: pointer;
  }
`;

const Small=styled(Link) `
display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    
    
    cursor: pointer;
  }
`;
const sidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink=styled(Link) `
background:#ffa700;
height:60px;
padding-left:3rem;
display:flex;
align-items:center;
text-decoration:none;
color:#f5f5f5;
font-size:18px;

&:hover{
    background:		#ffce00;
    cursor:pointer;
}
`;

const Submenu = ({ item }) => {
    const[subnav,setsubnav]=useState(false);

    const showsubnav=()=>setsubnav(!subnav);
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subnav && showsubnav}>
        <div>
          {item.icon}
          <sidebarLabel>{item.title}</sidebarLabel>
        </div>
        <div>
          {item.subnav && subnav
            ? item.iconOpened
            : item.subnav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav && item.subnav.map((item,index)=>{
          return (
              <DropdownLink to={item.path} key={index}>
              {item.icon}
                  <Small>{item.title}</Small>
              </DropdownLink>
          );
      })}
    </>
  );
};

export default Submenu;
