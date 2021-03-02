//Control.js
import React, { Component } from 'react';
import './Control.css';

class Control extends Component {
    render(){
      return (
        <div className="grid3">
              <div></div>
              <div className="first">
                <li><a href="/create" onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode('create');
                }.bind(this)}>create</a></li>
              </div>
              
              <div className="Second">
                <li><a href="/update" onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode('update');
                }.bind(this)}>update</a></li>
              </div>

              <div className="third">
                <li><input  onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode('delete');
                }.bind(this)} type="button" value="delete"></input></li>
              </div>
              
            
        </div>
       
      );
    }
  }

export default Control;