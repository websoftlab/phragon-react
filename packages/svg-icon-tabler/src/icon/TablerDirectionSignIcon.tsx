import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDirectionSignIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDirectionSignIcon = React.forwardRef<SVGSVGElement, TablerDirectionSignIconProps>(
	function TablerDirectionSignIcon(props, ref) {
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
				<path d="M3.32 12.774l7.906 7.905c.427 .428 1.12 .428 1.548 0l7.905 -7.905a1.095 1.095 0 0 0 0 -1.548l-7.905 -7.905a1.095 1.095 0 0 0 -1.548 0l-7.905 7.905a1.095 1.095 0 0 0 0 1.548z" />
				<path d="M8 12h7.5" />
				<path d="M12 8.5l3.5 3.5l-3.5 3.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDirectionSignIcon.displayName = "TablerDirectionSignIcon";
}
