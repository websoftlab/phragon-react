import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRadiusTopLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRadiusTopLeftIcon = React.forwardRef<SVGSVGElement, TablerRadiusTopLeftIconProps>(
	function TablerRadiusTopLeftIcon(props, ref) {
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
				<path d="M5 19v-6a8 8 0 0 1 8 -8h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRadiusTopLeftIcon.displayName = "TablerRadiusTopLeftIcon";
}
