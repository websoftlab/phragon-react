import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAmbulanceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAmbulanceIcon = React.forwardRef<SVGSVGElement, TablerAmbulanceIconProps>(
	function TablerAmbulanceIcon(props, ref) {
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
				<path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
				<path d="M6 10h4m-2 -2v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAmbulanceIcon.displayName = "TablerAmbulanceIcon";
}
