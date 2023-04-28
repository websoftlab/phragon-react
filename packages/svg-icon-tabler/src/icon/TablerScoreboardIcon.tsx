import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScoreboardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScoreboardIcon = React.forwardRef<SVGSVGElement, TablerScoreboardIconProps>(
	function TablerScoreboardIcon(props, ref) {
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
				<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M12 5v2" />
				<path d="M12 10v1" />
				<path d="M12 14v1" />
				<path d="M12 18v1" />
				<path d="M7 3v2" />
				<path d="M17 3v2" />
				<path d="M15 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
				<path d="M6 9h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerScoreboardIcon.displayName = "TablerScoreboardIcon";
}
