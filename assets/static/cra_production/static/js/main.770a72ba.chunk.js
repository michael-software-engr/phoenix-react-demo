(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,n){e.exports=n(472)},471:function(e,t,n){},472:function(e,t,n){"use strict";n.r(t);n(177),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(81),n(205),n(206),n(207),n(208),n(209),n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(225),n(226),n(228),n(229),n(230),n(231),n(108),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(155),n(309),n(310),n(311),n(312),n(156),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(119),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(388),n(389),n(390),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(414),n(415),n(416),n(417),n(418),n(419),n(420),n(421),n(422),n(423),n(424),n(425),n(426),n(427),n(428),n(429),n(430),n(431),n(432),n(433),n(434),n(435),n(436),n(437),n(438),n(439),n(440),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(456),n(457),n(458),n(459),n(460),n(462),n(167);var o=n(2),a=n.n(o),r=n(96),d=n.n(r),i=n(58),c=n(97),l=(n(471),n(37)),u=n(171),s=n(172),m=n(174),p=n(173),D=n(175),h=n(76),f=n.n(h),O=n(77),v=n.n(O),y=n(74),T=function(e){var t=e.todos,n=e.toggleDoneHandler,o=e.removeItemHandler,r=["dateDue","dateDone"];return a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Toggle"),a.a.createElement("th",null,"To do"),a.a.createElement("th",null,"Due"),a.a.createElement("th",null,"Done"),a.a.createElement("th",null,"Remove"))),a.a.createElement("tbody",null,t.map(function(e,t){var d=e.id,i=e.key,c=e.done,l=Object(y.a)(e,["id","key","done"]);return a.a.createElement("tr",{key:i,className:c?"strikeout":""},a.a.createElement("td",{title:"Click to mark as done"},a.a.createElement("button",{type:"button",onClick:function(e){n(d,e)}},t+1)),["title"].concat(r).map(function(e){var t,n=l[e],o=r.includes(e)?(t=n)?("string"===typeof t?new Date(t):t).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"}):"":n;return a.a.createElement("td",{key:e},o)}),a.a.createElement("td",null,a.a.createElement("button",{type:"button",onClick:function(e){o(d,e)}},"x")))})))},g=function(e){var t=e.addTodoHandler,n=e.newTodoTextChangeHandler,o=e.newTodo;return a.a.createElement("form",{onSubmit:t},a.a.createElement("input",{type:"text",onChange:n,value:o,placeholder:'Enter new todo (press "Enter" to submit)',size:40}),a.a.createElement("input",{type:"submit",style:{display:"none"}}))};g.defaultProps={newTodo:""};var E=g,b="TODO_DEMO/LOAD_TODOS",w="TODO_DEMO/TOGGLE_DONE",j="TODO_DEMO/REMOVE_TODO",k="TODO_DEMO/ADD_TODO";var H=function(){var e=new Date;return new Date(e.getFullYear(),e.getMonth()+1,e.getDate())},C=function(e){return e.isDone?(new Date).toISOString():null},S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).toggleDoneHandler=function(e,t){t.preventDefault();var o=n.props.todoDemo.todos.find(function(t){var n=t.id;return e===n});if(!o)throw Error("Can't find id ".concat(e));var a=!o.done,r=Object(l.a)({},o,{done:a,dateDone:C({isDone:a})});f()("/api/todos/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(v.a.decamelizeKeys({id:e,todo:r}))}).then(function(e){return e.json().then(function(){n.props.toggleDone(r)})})},n.removeItemHandler=function(e,t){t.preventDefault(),f()("/api/todos/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(function(t){if(!t.ok&&"No content"!==t.statusText)throw console.error({error:"Unexpected response...",response:t}),Error("...");n.props.removeItem(e)})},n.addTodoHandler=function(e){e.preventDefault();var t={title:n.state.newTodo,dateDue:H().toISOString()};f()("/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v.a.decamelizeKeys({todo:t}))}).then(function(e){return e.json().then(function(e){n.props.addTodo(v.a.camelizeKeys(e.data)),n.setState({newTodo:""})})})},n.newTodoTextChangeHandler=function(e){e.preventDefault();var t=e.target.value;t&&n.setState({newTodo:t})},n.state={newTodo:""},n}return Object(D.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f()("/api/todos").then(function(t){return t.json().then(function(t){e.props.loadTodos(v.a.camelizeKeys(t).data)})})}},{key:"render",value:function(){return 0===this.props.todoDemo.todos.length?a.a.createElement("div",null,"Loading..."):a.a.createElement("main",null,a.a.createElement("h3",null,"C.R.A. Production"),a.a.createElement(E,{addTodoHandler:this.addTodoHandler,newTodoTextChangeHandler:this.newTodoTextChangeHandler,newTodo:this.state.newTodo}),a.a.createElement(T,{todos:this.props.todoDemo.todos,toggleDoneHandler:this.toggleDoneHandler,removeItemHandler:this.removeItemHandler}))}}]),t}(a.a.Component),x=Object(c.b)(function(e){return{todoDemo:e.todoDemo}},{loadTodos:function(e){return{type:b,payload:e}},toggleDone:function(e){return{type:w,payload:e}},addTodo:function(e){return{type:k,payload:e}},removeItem:function(e){return{type:j,payload:e}}})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=function(e){return["todo-key-",e].join("")};var _=Object(i.b)({todoDemo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{todos:[],newTodo:""},t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case b:var a=o;return Object(l.a)({},e,{todos:a.map(function(e){var t=e.id,n=e.dateDue,o=e.dateDone,a=Object(y.a)(e,["id","dateDue","dateDone"]);return Object(l.a)({},a,{id:t,key:I(t),dateDue:new Date(n),dateDone:o&&new Date(o)})})});case w:var r=o;return Object(l.a)({},e,{todos:e.todos.map(function(e){var t=e.id,n=Object(y.a)(e,["id"]);return r.id===t?r:Object(l.a)({},n,{id:t})})});case k:var d=o;return d.toString().trim()?0===Object.entries(d).length&&d.constructor===Object?e:Object(l.a)({},e,{todos:e.todos.concat([Object(l.a)({},d,{key:I(d.id)})])}):e;case j:var i=o;return Object(l.a)({},e,{todos:e.todos.filter(function(e){var t=e.id;return i!==t})});default:return e}}}),M=Object(i.c)(_);d.a.render(a.a.createElement(c.a,{store:M},a.a.createElement(x,null)),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[176,1,2]]]);
//# sourceMappingURL=main.770a72ba.chunk.js.map