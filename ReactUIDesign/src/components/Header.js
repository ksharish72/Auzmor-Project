import React, { Component } from 'react';
import styles from "./Header.css";
import Content from "./Content"

class Header extends Component {
  render() {
    return (
    <div id="HEADDIV_1">
	<div id="HEADDIV_2">
		<span id="HEADSPAN_3"></span><span id="HEADSPAN_4">8</span>
	</div>
	<div id="HEADDIV_5">
		<span id="HEADSPAN_6"><i id="HEADI_7"></i></span><span id="HEADSPAN_8">CryptoCurrency Accounts overview</span>
	</div>
	<div id="HEADDIV_9">
		<div id="HEADDIV_10">
			Page style
		</div>
		<div id="HEADDIV_11">
			<i id="HEADI_12"></i>
		</div>
		<div id="HEADDIV_13">
			<i id="HEADI_14"></i>
		</div>
	</div>
</div>
    );
  }
}

export default Header;