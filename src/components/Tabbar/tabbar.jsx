import React, { Component } from 'react';
import './tabbar.scss';
import { withRouter, NavLink } from 'react-router-dom';

class Tabbar extends Component {
  /**
   * constructor参数接受两个参数props,context
可以获取到父组件传下来的的props,context,如果你想在constructor构造函数内部(注意是内部哦，在组件其他地方是可以直接接收的)使用props或context,则需要传入，并传入super对象。} props 
   */
  constructor(props,context) {
    super(props,context)
    
    this.state={
      tabbarData: [
        {
          path: '/discover',
          img: 'icon-wangyiyunyinle',
          name: '发现'
        },{
          path: '/video',
          img: 'icon-shipinbofangyingpian',
          name: '视频'
        },{
          path: '/music',
          img: 'icon-yinyue',
          name: '音乐'
        },{
          path: '/friends',
          img: 'icon-pengyou',
          name: '朋友'
        },{
          path: '/user',
          img: 'icon-user',
          name: '用户'
        },
      ],
      
    }
  }

  /**
   * 组件将要挂载
   * 1、组件刚经历constructor,初始完数据
   * 2、组件还未进入render，组件还未渲染完成，dom还未渲染
   */
  componentWillMount () {
  }
  /**
   * 组件渲染完成
   */
  componentDidMount () {
  }
  /**
   * 在接受父组件改变后的props需要重新渲染组件时用到的比较多
   * @param {*} nextProps 通过对比nextProps和this.props，将nextProps setState为当前组件的state，从而重新渲染组件
   */
  componentWillReceiveProps (nextProps) {
    
  }
  /**
   * 因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断
   * 唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，（暂时这么理解，其实setState以后有些情况并不会重新渲染，比如数组引用不变）在这里return false可以阻止组件的更新
   * @param {*} nextProps 
   * @param {*} nextState 
   */
  shouldComponentUpdate (nextProps,nextState) {
    return true
  }

  componentWillUpdate (nextProps,nextState) {
    return true
  }
  componentDidUpdate (prevProps,prevState) {
    return false
  }

  /**
   * 组件消失
   */
  componentWillUnmount (){}

  render() {
    return (
      
      <div className="Tabbar">
        {
          this.state.tabbarData.map((tab) => {
            return (
              <NavLink to={tab.path} className="tabbarItem" activeClassName="tabbarItem_active" key={tab.name}>
                <div className={tab.img + ' tabbaricon iconfont'}></div>
                <div className="tabbarName">{tab.name}</div>
              </NavLink>
            )
          })
        }
        
      </div>
    );
  }
}

export default withRouter(Tabbar);