import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCornerLeftDownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCornerLeftDownIcon = React.forwardRef<SVGSVGElement, TablerCornerLeftDownIconProps>(
	function TablerCornerLeftDownIcon(props, ref) {
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
				<path d="M18 6h-6a3 3 0 0 0 -3 3v10l-4 -4m8 0l-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerLeftDownIcon.displayName = "TablerCornerLeftDownIcon";
}
