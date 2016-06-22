// Import some code we need
import React, {
  Component,
  Text
} from 'react-native';


// Create our compoenent
class DayItem extends Component {
  color() {
    if (this.props.daysUntil > 0) {      
      var opacity = 1 / this.props.daysUntil;
      return 'rgba(0, 0, 0, '+ opacity + ')';
    }
  }

  fontWeight() {
    var weight = 7 - this.props.daysUntil;
    return (weight * 100).toString();
  }

  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  }

  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }

  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  }

  render() {
    return (
      <Text style={this.style()}>
        {this.props.day}
      </Text>
    )
  }
}

// Make this code available elsewhere
export default DayItem;
