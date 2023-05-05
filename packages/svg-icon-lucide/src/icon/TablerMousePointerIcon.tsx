import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMousePointerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMousePointerIcon = React.forwardRef<SVGSVGElement, TablerMousePointerIconProps>(
	function TablerMousePointerIcon(props, ref) {
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
				<path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
				<path d="m13 13 6 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMousePointerIcon.displayName = "TablerMousePointerIcon";
}
