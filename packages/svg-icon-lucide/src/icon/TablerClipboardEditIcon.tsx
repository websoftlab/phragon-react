import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClipboardEditIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClipboardEditIcon = React.forwardRef<SVGSVGElement, TablerClipboardEditIconProps>(
	function TablerClipboardEditIcon(props, ref) {
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
				<path d="M9 2 H15 A1 1 0 0 1 16 3 V5 A1 1 0 0 1 15 6 H9 A1 1 0 0 1 8 5 V3 A1 1 0 0 1 9 2 z" />
				<path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
				<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" />
				<path d="M4 13.5V6a2 2 0 0 1 2-2h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClipboardEditIcon.displayName = "TablerClipboardEditIcon";
}
