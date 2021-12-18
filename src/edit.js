/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl} from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * External Dependencies
 */
 import { Chart } from "react-google-charts";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes: { title}, setAttributes} ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<Chart
				height={'300px'}
				chartType="PieChart"
				loader={<div>Loading Chart</div>}
				data={[
					['Task', 'Hours per Day'],
					['Work', 11],
					['Eat', 2],
					['Commute', 2],
					['Watch TV', 2],
					['Sleep', 7],
				]}
				options={{
					title,
					// Just add this option
					is3D: true,
				}}
				rootProps={{ 'data-testid': '2' }}
				/>
				<InspectorControls>
					<PanelBody title="Options" initialOpen={ true }>
						<PanelRow>
							<TextControl 
								label="Title"
								onChange={(newTitle) => setAttributes({ title: newTitle})
								}
							/>
						</PanelRow>
						<PanelRow>My Panel Inputs and Labels 2</PanelRow>
						<PanelRow>My Panel Inputs and Labels 3</PanelRow>
					</PanelBody>
				</InspectorControls>
		</div>
	);
}
//{ _esc_html_e( 'Poll Block – hello from the editor! Updated', 'poll' ) }