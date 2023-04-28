import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerUpLeftDoubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerUpLeftDoubleIcon = React.forwardRef<SVGSVGElement, TablerCornerUpLeftDoubleIconProps>(
	function TablerCornerUpLeftDoubleIcon(props, ref) {
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
				<path d="M19 18v-6a3 3 0 0 0 -3 -3h-7" />
				<path d="M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerUpLeftDoubleIcon.displayName = "TablerCornerUpLeftDoubleIcon";
}
