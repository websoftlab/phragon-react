import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNorthStarIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNorthStarIcon = React.forwardRef<SVGSVGElement, TablerNorthStarIconProps>(
	function TablerNorthStarIcon(props, ref) {
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
				<path d="M3 12h18" />
				<path d="M12 21v-18" />
				<path d="M7.5 7.5l9 9" />
				<path d="M7.5 16.5l9 -9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNorthStarIcon.displayName = "TablerNorthStarIcon";
}
