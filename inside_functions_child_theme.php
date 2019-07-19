

<!-- Este codigo va en functions php -->
<!-- podemos usar is_page o is_single con la id del que queremos que tome el js -->
<?php 
function wpb_hook_javascript() {
  if (is_page ('LA_PAGINA_DONDE_QUIERAS-_O_NO_MOSTRAR_EL_JS')) { 
    ?>
<!-- Este es el codigo js -->
<script type="text/javascript">	
	// Aquí el codigo js o referenciariamos el path completo del js
</script>
    <?php
  }
}
add_action('wp_head', 'wpb_hook_javascript');
// add_action('wp_head', 'wpb_hook_javascript');
// Tambien podemos
// add_action('wp_footer', 'wpb_hook_javascript_footer');