/**
 * Modal
 *
 * Shows a loading image/text/whatever that won't go away until you allow it.
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2023-05-16
 */
import PropTypes from 'prop-types';
import React from 'react';
export type ModalCloseCallback = () => void;
export type ModalProps = {
    children: React.JSX.Element;
    maxWidth?: string | number;
    noBackground: boolean;
    onClose?: ModalCloseCallback;
    open: boolean;
    width?: string | number;
    xIcon?: React.JSX.Element;
};
/**
 * Modal
 *
 * @name Modal
 * @access public
 * @param Object props Properties passed to the component
 * @returns React.Component
 */
declare function Modal({ children, maxWidth, noBackground, onClose, open, width, xIcon }: ModalProps): React.JSX.Element | null;
declare namespace Modal {
    var propTypes: {
        maxWidth: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        noBackground: PropTypes.Requireable<boolean>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        open: PropTypes.Validator<boolean>;
        width: PropTypes.Requireable<NonNullable<string | number | null | undefined>>;
        xIcon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
}
export default Modal;
