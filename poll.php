<?php
/**
 * Plugin Name:       Poll Block
 * Description:       Create a one-question poll for your post and display the results
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Birgit Pauli-Haack
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       poll
 *
 * @package           pauli
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function pauli_poll_block_init() {
	register_block_type( __DIR__, array (
		'render_callback' => 'pauli_poll_block_render',
	));
}
add_action( 'init', 'pauli_poll_block_init' );

/**
 * Render the block
 */
function pauli_poll_block_render( $attributes, $content, $block ){
	//var_dump( $attributes );
	//var_dump( $content );
	//var_dump( $block );
	//return '<div>Poll Block Content</div>';
	ob_start();
	?>
	<div id="pauli-poll-block">Poll Block Content <?php esc_html_e( 'Requires JavaScript', 'poll' );?></div>
	<?php
	return ob_get_clean();

	/*
	You could also use a more complicated template file and add it with a require statement. It would have access to all the blockprops that way as well. 

	esc_html_e - escaping translations strings is always a good idea, as it could be a security attack vector.

	ob_start() and ob_get_clean handle the output buffer and empties it after the output. Lara Schenk has some explanation: https://notlaura.com/output-buffering
	*/
}