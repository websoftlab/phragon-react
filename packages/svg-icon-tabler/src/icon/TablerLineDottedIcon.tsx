import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLineDottedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLineDottedIcon = React.forwardRef<SVGSVGElement, TablerLineDottedIconProps>(
	function TablerLineDottedIcon(props, ref) {
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
				<path d="M4 12v.01" />
				<path d="M8 12v.01" />
				<path d="M12 12v.01" />
				<path d="M16 12v.01" />
				<path d="M20 12v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLineDottedIcon.displayName = "TablerLineDottedIcon";
}
