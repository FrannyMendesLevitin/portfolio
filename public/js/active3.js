<script>
	$(function(){
		$('#menu-items > li:nth-child(2) > a').click(function(){
			$(this).parent().addClass('active').siblings().removeClass('active')
		})
	})
</script>