import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerLeftUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerLeftUpIcon = React.forwardRef<SVGSVGElement, TablerCornerLeftUpIconProps>(
	function TablerCornerLeftUpIcon(props, ref) {
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
				<path d="M18 18h-6a3 3 0 0 1 -3 -3v-10l-4 4m8 0l-4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerLeftUpIcon.displayName = "TablerCornerLeftUpIcon";
}
