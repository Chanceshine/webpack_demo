<div class="layer">
	<img src="${ require('../../assets/1.gif') }">	<!-- 模板中尽量使用cdn地址 -->
	<div> this is <%= name %></div>
	<% for(var i = 0; i< arr.length; i++) { %>
		<%= arr[i] %>
	<% } %>
</div>