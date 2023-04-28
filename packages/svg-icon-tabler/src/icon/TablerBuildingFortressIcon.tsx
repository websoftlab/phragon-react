import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBuildingFortressIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBuildingFortressIcon = React.forwardRef<SVGSVGElement, TablerBuildingFortressIconProps>(
	function TablerBuildingFortressIcon(props, ref) {
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
				<path d="M7 21h1a1 1 0 0 0 1 -1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2" />
				<path d="M7 7h0v.01" />
				<path d="M7 10h0v.01" />
				<path d="M7 13h0v.01" />
				<path d="M17 7h0v.01" />
				<path d="M17 10h0v.01" />
				<path d="M17 13h0v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBuildingFortressIcon.displayName = "TablerBuildingFortressIcon";
}
