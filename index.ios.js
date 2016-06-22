import Moment from 'moment';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DayItem from './src/day-item';

//Create a react Component
class Weekdays extends Component {
  days() {
    var daysItems = [];

    for (var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    };

    return daysItems;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff height wise
    alignItems: 'center'// Moves stuff width wise
  }
});

// Show the react compoent on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays);
