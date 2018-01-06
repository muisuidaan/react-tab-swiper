/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-08-16 14:29:59
 * @version $Id$
 */
import React, { Component } from 'react';
import NavLink from './../../../components/NavLink';
import data from './../../../config/config.js';
import ReactSwipe from 'react-swipe';
import './style.less';
import classnames from 'classnames';
import imgArr from './img.json';

class TabTop extends Component {
	constructor(props){
		super(props)
		this.state={
			num:0,
			picPageIndex:0,
      index: 0,
      imgStartArr:[]
			
		}
	}
  next() {
		this.reactSwipe.next();
	}
	
	prev() {
		this.reactSwipe.prev();
  }
  componentWillMount() {
    this._countImageLenth();
  }
  componentDidMount(){
    var num = document.querySelectorAll('img').length;
    this.setState({
      num
    })
    
  }
  _countImageLenth(){
      let totalLength = 0,
          imgStartArr = [];
    imgArr.arr.forEach((item, index) => {
        imgStartArr.push(totalLength);
          item.img.forEach((img,i)=>{
          totalLength++;
        })
      
    })
    this.setState({
      imgStartArr
    })
      console.log(imgStartArr);
    }
    _changeImage(){
      
    }
    
  clickHandle(i) {
    console.log(i);
      this.setState({
        index:i
      })
    let { picPageIndex, imgStartArr } = this.state,
        index = i;  
      let nextIndex = imgStartArr[i];
      console.log('picPageIndex',picPageIndex,'index',i,'nextIndex',nextIndex)
      if (picPageIndex<nextIndex) {
        for (var i = picPageIndex; i < nextIndex; i++){
          this.next();
        }
      } else if (picPageIndex>nextIndex) {
        for (var i = nextIndex; i < picPageIndex; i++){
          this.prev();
        }
      }
    }
  render () {
    let {picPageIndex,num,index,imgStartArr} = this.state;
    const opt = {
			// auto: 2500,
			continuous:false,//连续
      callback: function (index) {
        // 更新当前轮播图的index
        let prevPageIndex = this.state.picPageIndex;
        let picPageIndex = index;
        if (prevPageIndex>picPageIndex) {
          console.log('往前翻',prevPageIndex)
          for (var i = 0; i < imgStartArr.length; i++){
            if (prevPageIndex-1===imgStartArr[i]) {
              console.log('?', i);
              this.setState({
                index:i
              })
            }
          }
        } else {
          console.log('往后翻', index)
          for (var i = 0; i < imgStartArr.length; i++){
            if (picPageIndex===imgStartArr[i]) {
              // console.log('?', i);
              this.setState({
                index:i
              })
            }
          }
        }
        console.log(picPageIndex)
        console.log(imgStartArr)
        
        
          this.setState({
            picPageIndex
          })
      }.bind(this)
	  }
    return <div>
              
              <ul className="topTab">
                {data.map((item, i) => {
                  return <li key={i}
                            className={classnames('tab', { active: index===i })}
                            onClick={this.clickHandle.bind(this,i)}
                          >
                          <NavLink to={'/main/?protype=' + item.pId}>
                            {item.pName}
                          </NavLink>
                        </li>;
                })}
              </ul>
              <ReactSwipe 
                swipeOptions={opt}
                ref={reactSwipe => this.reactSwipe = reactSwipe}
              >
                  <img src={require("./img/a1.jpg")} />
                  <img src={require("./img/b1.jpg")} />
                  <img src={require("./img/b2.jpg")} />
                  <img src={require("./img/c1.jpg")} />
              </ReactSwipe>
              <div className='pageIndex fr'>
                <span>{picPageIndex+1}</span>
                <span> / </span>
                <span>{num}</span>
              </div>
          </div>
  }
}

module.exports = TabTop;
