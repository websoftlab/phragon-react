import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlaneInflightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlaneInflightIcon = React.forwardRef<SVGSVGElement, TablerPlaneInflightIconProps>(
	function TablerPlaneInflightIcon(props, ref) {
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
				<path d="M15 11.085h5a2 2 0 1 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3l4 7z" />
				<path d="M3 21h18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlaneInflightIcon.displayName = "TablerPlaneInflightIcon";
}
