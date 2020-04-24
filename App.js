import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from './TelephoneIcon'
import Happy from './Happy'
import Sad from './Sad'
import Angry from './Angry'

export default function App() {
  const [selectedVHappy, setSelectedVHappy] = useState(false)
  const [selectedHappy, setSelectedHappy] = useState(false)
  const [selectedSad, setSelectedSad] = useState(false)
  const [selectedAngry, setSelectedAngry] = useState(false)
  const [disabled, setDisabled] = useState(disabled)


  const handlePressVHappy= () => {
    setSelectedVHappy(!selectedVHappy)
    // setDisabled(true)
  }

  const handlePressHappy= () => {
    setSelectedHappy(!selectedHappy)
    console.log('me pressed---0')
  }
  const handlePressSad= () => {
    setSelectedSad(!selectedSad)
  }
  const handlePressAngry= () => {
    setSelectedAngry(!selectedAngry)
  }
  const handlePressDisable = () => {
    console.log('I Will Disable others---->')
    setDisabled(!disabled)
  }



  return (
    <View style={styles.container}>
      <View>
      {selectedVHappy ? (
        <TouchableOpacity 
        onPress={()=> {handlePressVHappy(); handlePressDisable()}}>
            <Icon width={200}  stroke='#000' fill='#000' fill2='#fff'/>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity 
        disabled={disabled} 
        onPress={()=> {handlePressVHappy(); handlePressDisable()}}>
            <Icon width={200}  stroke='#fff' fill='#fff' fill2='transparent'/>
        </TouchableOpacity>
      )
      }
      </View>

      <View>

      {selectedHappy ? (
              <TouchableOpacity 
              onPress={()=>{handlePressHappy(); handlePressDisable()}}>
                  <Happy width={200}  stroke='#000' fill='#000' fill2='#fff'/>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
              disabled={disabled}
              onPress={()=>{handlePressHappy(); handlePressDisable()}}>
                  <Happy width={200} stroke='#fff' fill='#fff' fill2='transparent'/>
              </TouchableOpacity>
            )
      }
      </View>

      <View>
          {selectedSad ? (
                  <TouchableOpacity 
                  onPress={()=>{handlePressSad(); handlePressDisable()}}>
                      <Sad width={200}  stroke='#000' fill='#000' fill2='#fff'/>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity 
                  disabled={disabled} 
                  onPress={()=>{handlePressSad(); handlePressDisable()}}>
                      <Sad width={200} stroke='#fff' fill='#fff' fill2='transparent'/>
                  </TouchableOpacity>
                )
          }
          </View>

          <View>
          {selectedAngry ? (
                  <TouchableOpacity 
                  onPress={()=>{handlePressAngry(); handlePressDisable()}}>
                      <Angry width={200}  stroke='#000' fill='#000' fill2='#fff'/>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity 
                  disabled={disabled} 
                  onPress={()=>{handlePressAngry(); handlePressDisable()}}>
                      <Angry width={200}  stroke='#fff' fill='#fff' fill2='transparent'/>
                  </TouchableOpacity>
                )
          }
          </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
