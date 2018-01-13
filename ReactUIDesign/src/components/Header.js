import React, { Component } from 'react';
import styles from "./Header.css";
import Content from "./Content"

class Header extends Component {
  render() {
    return (
    	<div>
    	<div id="HEADDIV_1">
	<div id="HEADDIV_2">
		<div id="HEADDIV_3">
			 <a href="/" id="HEADA_4"><img alt="dribbble" src="https://cdn.dribbble.com/assets/logo-bw-0200c7483844c355752e89efaa4ba89b83c9c591d70254ba10f4b25d901359d0.gif" id="IMG_5" /></a>
		</div> <a href="#nav" id="HEADA_6">Toggle navigation</a>
		<ul id="HEADUL_7">
			<li id="HEADLI_8">
				<form id="HEADFORM_9" action="https://dribbble.com/search">
					<input type="text" name="q" placeholder="Search " id="HEADINPUT_10" />
				</form>
			</li>
			<li id="HEADLI_11">
				 <a href="https://dribbble.com/session/new?return_to=%2Fshots%2F3978177-Animation-Cryptocurrency-Marketplace-Light" id="HEADA_12"> <span id="HEADSPAN_13">Sign in</span></a>
			</li>
			<li id="HEADLI_14">
				 <a href="/signup/new" id="HEADA_15">Sign up</a>
			</li>
			<li id="HEADLI_16">
				 <a href="/" id="HEADA_17">Shots</a>
				<ul id="HEADUL_18">
					<li id="HEADLI_19">
						<a href="/shots" id="HEADA_20">Popular</a>
					</li>
					<li id="HEADLI_21">
						<a href="/shots?sort=recent" id="HEADA_22">Recent</a>
					</li>
					<li id="HEADLI_23">
						<a href="/shots?list=debuts" id="HEADA_24">Debuts</a>
					</li>
					<li id="HEADLI_25">
						<a href="/shots?list=teams" id="A_26">Teams</a>
					</li>
					<li id="HEADLI_27">
						<a href="/shots?list=playoffs" id="HEADA_28">Playoffs</a>
					</li>
					<li id="HEADLI_29">
						<a href="/highlights" id="HEADA_30">Highlights</a>
					</li>
					<li id="HEADLI_31">
						<a href="/projects" id="HEADA_32">Projects</a>
					</li>
					<li id="HEADLI_33">
						<a href="/goods" id="HEADA_34">Goods by Designers</a>
					</li>
				</ul>
			</li>
			<li id="HEADLI_35">
				 <a href="/" id="HEADA_36">Designers</a>
				<ul id="HEADUL_37">
					<li id="HEADLI_38">
						<a href="/designers?group=members" id="HEADA_39">Designers only</a>
					</li>
					<li id="HEADLI_40">
						<a href="/teams" id="HEADA_41">Design Teams only</a>
					</li>
					<li id="HEADLI_42">
						<a href="/teams/info" id="HEADA_43">Add Your Design Team</a>
					</li>
				</ul>
			</li>
			<li id="HEADLI_44">
				 <a href="/" id="HEADA_45">Blog</a>
				<ul id="HEADUL_46">
					<li id="HEADLI_47">
						<a href="/stories" id="HEADA_48">Latest Stories</a>
					</li>
					<li id="HEADLI_49">
						<a href="/stories/2018/01/10/shot-block-best-nine" id="HEADA_50">Shot Block: Best Nine</a>
					</li>
					<li id="HEADLI_51">
						<a href="/stories/2018/01/09/timeout-mikyung-lee" id="HEADA_52">Timeout: Mikyung Lee</a>
					</li>
					<li id="HEADLI_53">
						<a href="/stories/2018/01/08/weekly-replay" id="HEADA_54">Weekly Replay: Jan 1</a>
					</li>
				</ul>
			</li>
			<li id="HEADLI_55">
				 <a href="/" id="HEADA_56">Podcast</a>
				<ul id="HEADUL_57">
					<li id="HEADLI_58">
						<a href="/overtime" id="HEADA_59">Latest Episodes</a>
					</li>
					<li id="HEADLI_60">
						<a href="/overtime/2017/12/12/episode-27-ryan-hamrick" id="HEAD_61">Episode 27: Ryan Hamrick</a>
					</li>
					<li id="HEADLI_62">
						<a href="/overtime/2017/11/28/episode-26-khoi-vinh" id="HEADA_63">Episode 26: Khoi Vinh</a>
					</li>
					<li id="HEADLI_64">
						<a href="/overtime/2017/11/14/episode-25-vlad-magdalin" id="HEADA_65">Episode 25: Vlad Magdalin</a>
					</li>
					<li id="HEADLI_66">
						 <a href="https://itunes.apple.com/us/podcast/overtime/id1068288639" id="HEADA_67">Listen in iTunes</a>
					</li>
				</ul>
			</li>
			<li id="HEADLI_68">
				 <a href="/" id="HEADA_69">Meetups</a>
				<ul id="HEADUL_70">
					<li id="HEADLI_71">
						<a href="/meetups" id="HEADA_72">Dribbble Meetups</a>
					</li>
					<li id="HEADLI_73">
						<a href="/meetups/new" id="HEADA_74">Host a Meetup</a>
					</li>
				</ul>
			</li>
			<li id="HEADLI_75">
				 <a href="/" id="HEADA_76">Jobs</a>
				<ul id="HEADUL_77">
					<li id="HEADLI_78">
						<a href="/jobs" id="HEADA_79">All</a>
					</li>
					<li id="HEADLI_80">
						<a href="/jobs?location=Anywhere" id="HEADA_81">Remote / Anywhere</a>
					</li>
					<li id="HEADLI_82">
						<a href="/jobs?teams_only=true" id="HEADA_83">Teams Hiring</a>
					</li>
					<li id="HEADLI_84">
						<a href="/jobs/info" id="HEADA_85">Post a Job</a>
					</li>
				</ul>
			</li>
			<li id="HEADLI_86">
				 <a href="/about" id="HEADA_87">About</a>
				<ul id="HEADUL_88">
					<li id="HEADLI_89">
						<a href="/hiring" id="HEADA_90">Hiring at Dribbble</a>
					</li>
					<li id="HEADLI_91">
						<a href="/jobs/info" id="HEADA_92">Post a Job</a>
					</li>
					<li id="HEADLI_93">
						<a href="/scout/info" id="HEADA_94">Scout Designers</a>
					</li>
					<li id="HEADLI_95">
						<a href="/teams/info" id="HEADA_96">Add Your Design Team</a>
					</li>
					<li id="HEADLI_97">
						<a href="https://crew.co/?utm_source=dribbble&amp;utm_content=dribbble-scout-nav" id="HEADA_98">Post a Project on Crew</a>
					</li>
				</ul>
			</li>
			<li id="HEADLI_99">
				 <a href="/about" id="HEADA_100"> <span id="HEADSPAN_101">More</span></a>
				<ul id="HEADUL_102">
					<li id="HEADLI_103">
						<a href="/about" id="HEADA_104">About</a>
					</li>
					<li id="HEADLI_105">
						<a href="http://shop.dribbble.com/" id="HEADA_106">Shop</a>
					</li>
					<li id="HEADLI_107">
						<a href="http://help.dribbble.com/" id="HEADA_108">Support</a>
					</li>
					<li id="HEADLI_109">
						<a href="/places" id="HEADA_110">Places</a>
					</li>
					<li id="HEADLI_111">
						<a href="/buckets" id="HEADA_112">Buckets</a>
					</li>
					<li id="HEADLI_113">
						<a href="/colors" id="HEADA_114">Colors</a>
					</li>
					<li id="HEADLI_115">
						<a href="/integrations" id="HEADA_116">Integrations</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
</div>
    );
  }
}

export default Header;