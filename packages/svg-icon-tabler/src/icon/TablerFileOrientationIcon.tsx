import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileOrientationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileOrientationIcon = React.forwardRef<SVGSVGElement, TablerFileOrientationIconProps>(
	function TablerFileOrientationIcon(props, ref) {
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
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2" />
				<path d="M13 20h5a2 2 0 0 0 2 -2v-5" />
				<path d="M15 22l-2 -2l2 -2" />
				<path d="M18 15l2 -2l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileOrientationIcon.displayName = "TablerFileOrientationIcon";
}
