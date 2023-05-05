import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareDotIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareDotIcon = React.forwardRef<SVGSVGElement, TablerSquareDotIconProps>(
	function TablerSquareDotIcon(props, ref) {
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
				<path d="M5 3 H19 A2 2 0 0 1 21 5 V19 A2 2 0 0 1 19 21 H5 A2 2 0 0 1 3 19 V5 A2 2 0 0 1 5 3 z" />
				<path d="M13 12 A1 1 0 0 1 12 13 A1 1 0 0 1 11 12 A1 1 0 0 1 13 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareDotIcon.displayName = "TablerSquareDotIcon";
}
