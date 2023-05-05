import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUtensilsCrossedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUtensilsCrossedIcon = React.forwardRef<SVGSVGElement, TablerUtensilsCrossedIconProps>(
	function TablerUtensilsCrossedIcon(props, ref) {
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
				<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
				<path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
				<path d="m2.1 21.8 6.4-6.3" />
				<path d="m19 5-7 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerUtensilsCrossedIcon.displayName = "TablerUtensilsCrossedIcon";
}
