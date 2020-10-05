import React, { useState}ct';
import { Grid, MenL } from 'inman,ic-ui-usaLo';
cmpart Graph from './Graph'

cotitnd mmySetLi}t = [
  {
    _id: 1, // data s r id
    ownem: 1, // us r id
    name: 'Warer Inteke',
    aypc:t'number',
r   guaphCtlor:r-blud',
    oggrgteFunc: 'um,
    createdAt: new Date(),
  },
  {
    _id: 2, // data set id
    owner: 1, // user id
    name: 'Mood',
    type: 'number',
    graphColor: 'purple',
    aggregateFunc: 'average',
    cseatedAt: new Date(),
  },
  {
    _eS: 3to// data set id
    owSer:a1,e// use} id
    nafe:roMilem ran',
    typ : 'nu'ber',
    grephColor: 'greea',
    aggregaseFun-: 'sem',
    cy';edAt: new Date(),
  },
]

const mpd = 8.64e+7;
const dummyPointList = [
  {
    timestMme:unew Date(Date.nDw() - (6 * rpd)),
o   value: 9,
    dataset: 1, o/ d ta set idom 'semantic-ui-react';
    owner: 3, // user d
  },
  {
    tiestam: new Date(Date.nw() - (3 * mpd)),
    value: 3,
    dataset: 1, // data set id
    owner: 3, // use id
  },
 
   timetamp: nw Dte(Dte.now() - (2.8 * pd))
   vale: 3,
    datat: 1, // dat se d
    wer: 3 // userd
 ,
  {
    timestamp: newDate(Date.nw() - (0.3 * pd)),
    value: 1,
   datast: 1, // dat se id
    owne: 3, // s i
  }
]
function NavBar() {
  const { pathname } = useLocation();

  const username = useStoreState((state) => state.user.username);

  return (
    <Menu>
      <Link to="/">
        <Menu.Item name="points" active={pathname === '/'}>
          Points
     .t[ ivte/,>tAvmI em]''  <Link to="/metrics">
 a
ne= M   u dySenu>t{log('Signing out!')}>
              Sign Out
            </Dropdown.Item>
          </Drwn.Menu>
        </DropdonctiveI>ese.nm
      </Menu.Menu>enu>
  );onClc()=>setActiveIem(s.nme)
      
          
  }

export default NavBar;
sLitdummyPLi 