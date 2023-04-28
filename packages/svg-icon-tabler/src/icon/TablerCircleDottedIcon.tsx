import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleDottedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleDottedIcon = React.forwardRef<SVGSVGElement, TablerCircleDottedIconProps>(
	function TablerCircleDottedIcon(props, ref) {
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
				<path d="M7.5 4.21l0 .01" />
				<path d="M4.21 7.5l0 .01" />
				<path d="M3 12l0 .01" />
				<path d="M4.21 16.5l0 .01" />
				<path d="M7.5 19.79l0 .01" />
				<path d="M12 21l0 .01" />
				<path d="M16.5 19.79l0 .01" />
				<path d="M19.79 16.5l0 .01" />
				<path d="M21 12l0 .01" />
				<path d="M19.79 7.5l0 .01" />
				<path d="M16.5 4.21l0 .01" />
				<path d="M12 3l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleDottedIcon.displayName = "TablerCircleDottedIcon";
}
