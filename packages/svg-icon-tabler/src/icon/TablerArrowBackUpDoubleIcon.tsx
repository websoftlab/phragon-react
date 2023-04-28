import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBackUpDoubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBackUpDoubleIcon = React.forwardRef<SVGSVGElement, TablerArrowBackUpDoubleIconProps>(
	function TablerArrowBackUpDoubleIcon(props, ref) {
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
				<path d="M13 14l-4 -4l4 -4" />
				<path d="M8 14l-4 -4l4 -4" />
				<path d="M9 10h7a4 4 0 1 1 0 8h-1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBackUpDoubleIcon.displayName = "TablerArrowBackUpDoubleIcon";
}
