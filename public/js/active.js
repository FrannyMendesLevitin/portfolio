<!-- highlighting active submenu item-->
<script type="text/javascript">

	$('a').click(function(){
		$('a').removeClass('active');
		$(this).addClass('active');
	})
	$('#menu-items > li:nth-child(1) > a').click(function(){
		event.preventDefault();
    	$(this).siblings('#menu-items [class^=submenu');
    	$('a').removeClass('active');    	
     	$('#menu-items > li:nth-child(1) > ul > li:nth-child(1) > a').addClass('active');

	});

	$('#menu-items > li:nth-child(2) > a').click(function(){
		event.preventDefault();
    	$(this).siblings('#menu-items [class^=submenu');
    	$('a').removeClass('active');
     	$('#menu-items > li:nth-child(2) > ul > li:nth-child(1) > a').addClass('active');
	});
	$('#menu-items > li:nth-child(3) > a').click(function(){
		event.preventDefault();
    	$(this).siblings('#menu-items [class^=submenu');
    	$('a').removeClass('active');
     	$('#menu-items > li:nth-child(3) > ul > li:nth-child(1) > a').addClass('active');
	});
</script>

