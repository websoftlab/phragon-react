import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMultiplier2xIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMultiplier2xIcon = React.forwardRef<SVGSVGElement, TablerMultiplier2xIconProps>(
	function TablerMultiplier2xIcon(props, ref) {
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
				<path d="M14 16l4 -4" />
				<path d="M18 16l-4 -4" />
				<path d="M6 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMultiplier2xIcon.displayName = "TablerMultiplier2xIcon";
}
