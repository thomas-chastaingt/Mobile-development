import React from 'react';
import { styles } from './styleSheet';
import { StyleSheet,Text, View } from 'react-native';
import Break from './Components/Break';
import Session from './Components/Session';
import Timer from './Components/Timer';




export default class App extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    break: 5,
    session: 25,
    timerM: 25,
    isPlay: false,
  }
}

PlayChange = (isPlay) => {
  this.setState({
    isPlay: isPlay
  })
}


BreakChange = (newBreak) => {
  this.setState({
    break: newBreak
  })
}

SessionChange = (newSession) => {
  this.setState({
    session: newSession,
    timerM: newSession
  })
}

TimerMChange = (min) => {
  this.setState({
    timerM: min
  })
}

ResetTimer = () => {
  this.setState({
    session: 25,
    timerM: 25,
    break: 5
  })
}
  render(){
    return (
      <View style={styles.container}>
        <Text>Thomas Pomodoro</Text>
        <View style={styles.containerButton}>
          <Break BreakChange={this.BreakChange} isPlay={this.state.isPlay} break={this.state.break}/>
          <Session SessionChange={this.SessionChange} isPlay={this.state.isPlay} session={this.state.session}/>
        </View>
        <Timer session={this.state.session} break={this.state.break} timerM={this.state.timerM} PlayChange={this.PlayChange} ResetTimer={this.ResetTimer} TimerMChange={this.TimerMChange}/>
      </View>
    );
  }

}
