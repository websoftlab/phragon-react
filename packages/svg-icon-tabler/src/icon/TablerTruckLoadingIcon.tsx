import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTruckLoadingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTruckLoadingIcon = React.forwardRef<SVGSVGElement, TablerTruckLoadingIconProps>(
	function TablerTruckLoadingIcon(props, ref) {
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
				<path d="M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15" />
				<path d="M9 6m0 3a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3z" />
				<path d="M9 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTruckLoadingIcon.displayName = "TablerTruckLoadingIcon";
}
