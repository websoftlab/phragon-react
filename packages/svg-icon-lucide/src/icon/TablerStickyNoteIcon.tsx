import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStickyNoteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStickyNoteIcon = React.forwardRef<SVGSVGElement, TablerStickyNoteIconProps>(
	function TablerStickyNoteIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
				<path d="M15 3v6h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStickyNoteIcon.displayName = "TablerStickyNoteIcon";
}
