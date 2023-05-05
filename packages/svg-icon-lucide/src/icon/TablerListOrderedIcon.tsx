import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListOrderedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListOrderedIcon = React.forwardRef<SVGSVGElement, TablerListOrderedIconProps>(
	function TablerListOrderedIcon(props, ref) {
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
				<path d="M10 6 L21 6" />
				<path d="M10 12 L21 12" />
				<path d="M10 18 L21 18" />
				<path d="M4 6h1v4" />
				<path d="M4 10h2" />
				<path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerListOrderedIcon.displayName = "TablerListOrderedIcon";
}
