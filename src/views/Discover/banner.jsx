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
    const { banners } = this.props
    return (
      <div className="Banner">
        {
          banners.map((item, index) => {
            return (
              <div key={'banner-' + index}>
                <img src={item.picUrl} />
              </div>
            )
          })
        }
      </div>
    );
  }
}


export default Banner;
