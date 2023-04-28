import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlaceholderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlaceholderIcon = React.forwardRef<SVGSVGElement, TablerPlaceholderIconProps>(
	function TablerPlaceholderIcon(props, ref) {
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
				<path d="M10 20.415a8 8 0 1 0 3 -15.415h-3" />
				<path d="M13 8l-3 -3l3 -3" />
				<path d="M7 17l4 -4l-4 -4l-4 4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlaceholderIcon.displayName = "TablerPlaceholderIcon";
}
