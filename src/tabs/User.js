import { View, Text, FlatList, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../navigation/AuthProvider'
const User = () => {
  const {user}=useContext(AuthContext);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ width: '100%', height: 55, justifyContent: 'center', alignItems: 'center', borderBottomWidth: .2, backgroundColor: 'White' }}>

        <Text style={{ color: '#000', fontSize: 30 }}>
          Account </Text>

      </View>
      <Text style={{ marginLeft: 15, marginTop: 20, fontSize: 20,color:'black',borderColor: 'black' }}>Support</Text>
      <View style={{borderColor: 'black'}}></View>
      <FlatList
        data={[{title:'About EnhanzED'}
        ,{title:'About EnhamzED applications',isIcon:true},{title:'Help',isIcon:false},{title:'Share',isIcon:false}]}
        renderItem={({ item, index }) => {
          return (<TouchableOpacity style={{ width: '100%', height: 50, borderBottomWidth:5, borderColor: 'black' }}>
          
          <View style={{width:'100%',height:'100%',flexDirection:'row',justifyContent:'spacr-between',alignItems:'center'}}
          >
            <Text style={{marginLeft:15,color:'black'}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
  );
         }}
         
         />

    </View>
  )
}

export default User;