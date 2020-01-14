import React from 'react';
 
import { 
    View, 
    Text, 
    TouchableOpacity} 
from 'react-native';

import Menu, { 
    MenuItem, 
    MenuDivider 
} from 'react-native-material-menu';
 
class App extends React.PureComponent {
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };
 
  render() {
    return (
      <Element
            showMenu = {this.showMenu}
            hideMenu = {this.hideMenu}
            setMenuRef = {this.setMenuRef}
      />
    );
  }
}

const Element = (props) =>{

    const { 
        hideMenu,
        showMenu,
        setMenuRef
    } = props;

    return(
        <View>
            <Menu
                ref = {setMenuRef}
                button = {
                    <TouchableOpacity
                        onPress = {
                            showMenu
                        }
                    >
                        <Text>
                            Button
                        </Text>
                    </TouchableOpacity>
                }
            >
                <MenuItem onPress={hideMenu}>Perfil</MenuItem>
                <MenuItem onPress={hideMenu}>Alarma</MenuItem>
                <MenuDivider />
                <MenuItem onPress={hideMenu}>Salir</MenuItem>

            </Menu>
        </View>
    )
}
 
export default App;