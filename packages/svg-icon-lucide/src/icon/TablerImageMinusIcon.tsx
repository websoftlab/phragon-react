import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerImageMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerImageMinusIcon = React.forwardRef<SVGSVGElement, TablerImageMinusIconProps>(
	function TablerImageMinusIcon(props, ref) {
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
				<path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
				<path d="M16 5 L22 5" />
				<path d="M11 9 A2 2 0 0 1 9 11 A2 2 0 0 1 7 9 A2 2 0 0 1 11 9" />
				<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerImageMinusIcon.displayName = "TablerImageMinusIcon";
}
