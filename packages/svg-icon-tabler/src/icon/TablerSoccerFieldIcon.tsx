import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSoccerFieldIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSoccerFieldIcon = React.forwardRef<SVGSVGElement, TablerSoccerFieldIconProps>(
	function TablerSoccerFieldIcon(props, ref) {
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
				<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M3 9h3v6h-3z" />
				<path d="M18 9h3v6h-3z" />
				<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M12 5l0 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSoccerFieldIcon.displayName = "TablerSoccerFieldIcon";
}
