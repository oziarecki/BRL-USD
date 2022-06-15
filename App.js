import  React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import BrlConv from './components/BrlConv';
import Api from './components/Api';

export default function App() {
	const [BRL, setBRL] = useState(0);
	const [inputBRL, setInputBRL] =useState(0);
	
	async function carregaCotacao(){
		const response = await Api.get('json/last/USD-BRL');
		setBRL(response.data.USDBRL);
	}
  return (
    <View style={styles.container}>
      <View style={styles.input}>
		  <Text style={styles.texto}>Cotação da Moeda</Text>
		<TextInput 
			style={styles.input}
			onChangeText={(data)=>setInputBRL(data)}
			/>
			
		  <TouchableOpacity
			  style={styles.botao}
			  onPress={carregaCotacao()}
		      >
		  <Text style={styles.textBotao}>Dolar para Real</Text>
		  </TouchableOpacity>
      
        </View>
		<BrlConv data={BRL}/>  
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	bloco:{
		width:'100%'
	},
	texto:{
	    witdh:'80%',
		marginLeft:'10%',
		borderBottomWidth:1,
		backgroundColor:300000,
		textAlign: 'center'

	},
  texto:{
		fontSize:20,
	    color: 'blue', 
	    textAlign:'center'
	}

});