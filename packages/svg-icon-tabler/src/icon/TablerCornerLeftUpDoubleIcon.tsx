import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerLeftUpDoubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerLeftUpDoubleIcon = React.forwardRef<SVGSVGElement, TablerCornerLeftUpDoubleIconProps>(
	function TablerCornerLeftUpDoubleIcon(props, ref) {
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
				<path d="M18 19h-6a3 3 0 0 1 -3 -3v-7" />
				<path d="M13 13l-4 -4l-4 4m8 -5l-4 -4l-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerLeftUpDoubleIcon.displayName = "TablerCornerLeftUpDoubleIcon";
}
