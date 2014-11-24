
<!-- check if any of the submenus in a category are active, if so hide other category submenus -->

<script type="text/javascript">
	$(document).ready(function() {

		$('#menu-items [class^=submenu]').hide(); //Hide children by default

		
		$('#category1').on('click', function (){
			$('#submenu1 > li:nth-child(1) > a').addClass('active');
			$('#submenu2, #submenu3, #submenu4').hide();
			$('#submenu1').show();
		});

		$('#category2').on('click', function (){
			$('#submenu2 > li:nth-child(1) > a').addClass('active');
			$('#submenu1, #submenu3, #submenu4').hide();
			$('#submenu2').show();
		});

		$('#category3').on('click', function (){
			$('#submenu3 > li:nth-child(1) > a').addClass('active');
			$('#submenu1, #submenu2, #submenu4').hide();
			$('#submenu3').show();
		});

		$('#category4').on('click', function (){
			$('#submenu4 > li:nth-child(1) > a').addClass('active');
			$('#submenu1, #submenu2, #submenu3').hide();
			$('#submenu4').show();
		});

	});
</script>