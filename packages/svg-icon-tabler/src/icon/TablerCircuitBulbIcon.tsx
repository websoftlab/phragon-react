import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircuitBulbIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircuitBulbIcon = React.forwardRef<SVGSVGElement, TablerCircuitBulbIconProps>(
	function TablerCircuitBulbIcon(props, ref) {
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
				<path d="M2 12h5" />
				<path d="M17 12h5" />
				<path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
				<path d="M8.5 8.5l7 7" />
				<path d="M15.5 8.5l-7 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircuitBulbIcon.displayName = "TablerCircuitBulbIcon";
}
