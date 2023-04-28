import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRadiusTopRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRadiusTopRightIcon = React.forwardRef<SVGSVGElement, TablerRadiusTopRightIconProps>(
	function TablerRadiusTopRightIcon(props, ref) {
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
				<path d="M5 5h6a8 8 0 0 1 8 8v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRadiusTopRightIcon.displayName = "TablerRadiusTopRightIcon";
}
