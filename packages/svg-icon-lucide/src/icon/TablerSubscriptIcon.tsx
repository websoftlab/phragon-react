import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSubscriptIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSubscriptIcon = React.forwardRef<SVGSVGElement, TablerSubscriptIconProps>(
	function TablerSubscriptIcon(props, ref) {
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
				<path d="m4 5 8 8" />
				<path d="m12 5-8 8" />
				<path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSubscriptIcon.displayName = "TablerSubscriptIcon";
}
