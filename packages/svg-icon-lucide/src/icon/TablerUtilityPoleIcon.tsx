import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUtilityPoleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUtilityPoleIcon = React.forwardRef<SVGSVGElement, TablerUtilityPoleIconProps>(
	function TablerUtilityPoleIcon(props, ref) {
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
				<path d="M12 2v20" />
				<path d="M2 5h20" />
				<path d="M3 3v2" />
				<path d="M7 3v2" />
				<path d="M17 3v2" />
				<path d="M21 3v2" />
				<path d="m19 5-7 7-7-7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerUtilityPoleIcon.displayName = "TablerUtilityPoleIcon";
}
