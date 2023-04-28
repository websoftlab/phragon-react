import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageCircleOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageCircleOffIcon = React.forwardRef<SVGSVGElement, TablerMessageCircleOffIconProps>(
	function TablerMessageCircleOffIcon(props, ref) {
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
				<path d="M8.595 4.577c3.223 -1.176 7.025 -.61 9.65 1.63c2.982 2.543 3.601 6.523 1.636 9.66m-1.908 2.109c-2.787 2.19 -6.89 2.666 -10.273 1.024l-4.7 1l1.3 -3.9c-2.229 -3.296 -1.494 -7.511 1.68 -10.057" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageCircleOffIcon.displayName = "TablerMessageCircleOffIcon";
}
