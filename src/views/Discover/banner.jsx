import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Banner extends Component {
  constructor (props,context) {
    super(props, context)
    
    this.state = {

    }
  }

  componentDidMount () {
  }
  render() {
    var { banners } = this.props;
    banners = []
    return (
      <div className="Banner">
        {
          banners.map((item, index) => {
            return (
              <div key={'banner-' + index}>
                
              </div>
            )
          })
        }
      </div>
    );
  }
}


export default Banner;
