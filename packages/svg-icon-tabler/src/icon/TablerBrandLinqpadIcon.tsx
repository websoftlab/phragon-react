import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandLinqpadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandLinqpadIcon = React.forwardRef<SVGSVGElement, TablerBrandLinqpadIconProps>(
	function TablerBrandLinqpadIcon(props, ref) {
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
				<path d="M5 21h3.5l2.5 -6l2.5 -1l2.5 7h4l1 -4.5l-2 -1l-7 -12l-6 -.5l1.5 4l2.5 .5l1 2.5l-7 8z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandLinqpadIcon.displayName = "TablerBrandLinqpadIcon";
}
