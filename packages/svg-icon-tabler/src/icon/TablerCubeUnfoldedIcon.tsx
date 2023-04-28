import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCubeUnfoldedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCubeUnfoldedIcon = React.forwardRef<SVGSVGElement, TablerCubeUnfoldedIconProps>(
	function TablerCubeUnfoldedIcon(props, ref) {
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
				<path d="M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z" />
				<path d="M7 15v-5h5v5h5v-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCubeUnfoldedIcon.displayName = "TablerCubeUnfoldedIcon";
}
