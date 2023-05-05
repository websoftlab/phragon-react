import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileArchiveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileArchiveIcon = React.forwardRef<SVGSVGElement, TablerFileArchiveIconProps>(
	function TablerFileArchiveIcon(props, ref) {
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
				<path d="M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M12 20 A2 2 0 0 1 10 22 A2 2 0 0 1 8 20 A2 2 0 0 1 12 20" />
				<path d="M10 7V6" />
				<path d="M10 12v-1" />
				<path d="M10 18v-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileArchiveIcon.displayName = "TablerFileArchiveIcon";
}
