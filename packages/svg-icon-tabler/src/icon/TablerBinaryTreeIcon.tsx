import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBinaryTreeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBinaryTreeIcon = React.forwardRef<SVGSVGElement, TablerBinaryTreeIconProps>(
	function TablerBinaryTreeIcon(props, ref) {
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
				<path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
				<path d="M5.058 18.306l2.88 -4.606" />
				<path d="M10.061 10.303l2.877 -4.604" />
				<path d="M10.065 13.705l2.876 4.6" />
				<path d="M15.063 5.7l2.881 4.61" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBinaryTreeIcon.displayName = "TablerBinaryTreeIcon";
}
