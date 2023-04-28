import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRotateClockwise2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRotateClockwise2Icon = React.forwardRef<SVGSVGElement, TablerRotateClockwise2IconProps>(
	function TablerRotateClockwise2Icon(props, ref) {
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
				<path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
				<path d="M5.63 7.16l0 .01" />
				<path d="M4.06 11l0 .01" />
				<path d="M4.63 15.1l0 .01" />
				<path d="M7.16 18.37l0 .01" />
				<path d="M11 19.94l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRotateClockwise2Icon.displayName = "TablerRotateClockwise2Icon";
}
