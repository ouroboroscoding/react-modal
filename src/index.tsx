/**
 * Modal
 *
 * Shows a loading image/text/whatever that won't go away until you allow it.
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2023-05-16
 */

// Ouroboros modules
import Portal from '@ouroboros/react-portal';
import { classes } from '@ouroboros/tools';

// NPM modules
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

// Types
export type ModalCloseCallback = () => void;
export type ModalProps = {
	children: React.ReactNode,
	maxWidth?: string | number,
	noBackground: boolean,
	onClose?: ModalCloseCallback,
	open: boolean,
	width?: string | number,
	xIcon?: React.ReactNode
}
type MouseDownCallback = (event: MouseEvent) => void

/**
 * Modal
 *
 * @name Modal
 * @access public
 * @param Object props Properties passed to the component
 * @returns React.Component
 */
export default function Modal({
	children,
	maxWidth,
	noBackground,
	onClose,
	open,
	width,
	xIcon
 }: ModalProps) {

	// Keep track of the mouse event callback and content div
	const refContent = useRef<HTMLDivElement | null>(null);

	// If it's not open, do nothing
	if(!open) {
		return null;
	}

	// Called whenever the portal is clicked
	const portalClick = (ev: MouseEvent) => {

		// If we have no callback, do nothing
		if(!onClose) {
			return;
		}

		// If the click is not inside the content
		if(!refContent.current?.contains(ev.target as Node)) {

			// Notify the parent of the close attempt
			onClose();
		}
	}

	// Set the style
	const oStyle: React.CSSProperties = {};
	if(maxWidth) {
		oStyle.maxWidth = typeof maxWidth === 'number' ?
			`${maxWidth}px` :
			maxWidth
	}
	if(width) {
		oStyle.width = typeof width === 'number' ?
			`${width}px` :
			width
	}

	// Render the modal container with the children given
	return (
		<Portal className="oc_modal" onClick={portalClick}>
			<div className="oc_modal_outer" style={oStyle}>
				<div className={classes({
					oc_modal_inner: true,
					noBackground
				})}>
					{(onClose && xIcon) &&
						<div className="oc_modal_inner_close" onClick={() =>
							(onClose as ModalCloseCallback)()
						}>
							{xIcon}
						</div>
					}
					<div className="oc_modal_inner_content" ref={refContent}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
}

// Valid props
Modal.propTypes = {
	maxWidth: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	noBackground: PropTypes.bool,
	onClose: PropTypes.func,
	open: PropTypes.bool.isRequired,
	width: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
	xIcon: PropTypes.element
}