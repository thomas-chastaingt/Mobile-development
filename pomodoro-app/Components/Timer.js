import React from 'react';
import { styles } from './../styleSheet';
import { StyleSheet,Text, View,Button } from 'react-native';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerS: 0,
      i: '',
      isSession: true
    }
  }


  StartTimer = () => {
    this.props.PlayChange(true);
    this.TimerStarting();
  }

  PauseTimer = () => {
    this.props.PlayChange(false);
    clearInterval(this.state.i);
  }

  ResetTimer = () => {
    clearInterval(this.state.i);
    this.props.ResetTimer();
    this.props.PlayChange(false);

    this.setState({
      timerS: 0
    })



}
    TimerStarting() {
      let i = setInterval(() => {
        switch(this.state.timerS) {
          case 0:
            if (this.props.timerM === 0) {
              if (this.state.isSession) {
                // start break timer
                this.setState({
                  isSession: false
                })

                this.props.TimerMChange(this.props.break);
              } else {
                // start session timer
                this.setState({
                  isSession: true
                })

                this.props.TimerMChange(this.props.session);
              }
            } else {
              this.props.TimerMChange(this.props.timerM - 1);
              this.setState({
                timerS: 59
              })
            }
            break;
          default:
          this.setState({
            timerS: this.state.timerS - 1
          })
            break;
        }
      }, 1000);

      this.setState({
        i: i
      });
    }





   render() {
     return(
       <View>
       <Text>{this.state.isSession === true ? 'Session' : 'Break'}</Text>
        <View style={styles.timer}>
          <Text style={[this.state.timerS <= 20 && this.props.timerM === 0 ? styles.colorTextRed : styles.colorTextBlack]}>{this.props.timerM}</Text>
          <Text style={[this.state.timerS <= 20 && this.props.timerM === 0 ? styles.colorTextRed : styles.colorTextBlack]}> : </Text>
          <Text style={[this.state.timerS <= 20 && this.props.timerM === 0 ? styles.colorTextRed : styles.colorTextBlack]}>{this.state.timerS === 0 ? '00' : this.state.timerS < 10 ? '0' + this.state.timerS : this.state.timerS}</Text>
        </View>
        <View style={styles.timerButton}>
          <Button onPress={this.StartTimer} title="Play"></Button>
          <Button onPress={this.PauseTimer} title="Pause"></Button>
          <Button onPress={this.ResetTimer} title="Reset"></Button>
        </View>
      </View>
     );
   }

}
