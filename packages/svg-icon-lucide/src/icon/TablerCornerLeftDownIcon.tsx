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
				<path d="M14 15 L9 20 L4 15" />
				<path d="M20 4h-7a4 4 0 0 0-4 4v12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCornerLeftDownIcon.displayName = "TablerCornerLeftDownIcon";
}
