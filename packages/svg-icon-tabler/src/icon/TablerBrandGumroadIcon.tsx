import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGumroadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGumroadIcon = React.forwardRef<SVGSVGElement, TablerBrandGumroadIconProps>(
	function TablerBrandGumroadIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
				<path d="M13.5 13h2.5v3" />
				<path d="M15.024 9.382a4 4 0 1 0 -3.024 6.618c1.862 0 2.554 -1.278 3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGumroadIcon.displayName = "TablerBrandGumroadIcon";
}
