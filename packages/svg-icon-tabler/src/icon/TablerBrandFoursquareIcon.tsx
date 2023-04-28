import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandFoursquareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandFoursquareIcon = React.forwardRef<SVGSVGElement, TablerBrandFoursquareIconProps>(
	function TablerBrandFoursquareIcon(props, ref) {
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
				<path d="M7 3h10c.644 0 1.11 .696 .978 1.33l-1.984 9.859a1.014 1.014 0 0 1 -1 .811h-2.254c-.308 0 -.6 .141 -.793 .382l-4.144 5.25c-.599 .752 -1.809 .331 -1.809 -.632v-16c0 -.564 .44 -1 1 -1z" />
				<path d="M12 9l5 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandFoursquareIcon.displayName = "TablerBrandFoursquareIcon";
}
