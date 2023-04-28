import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTournamentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTournamentIcon = React.forwardRef<SVGSVGElement, TablerTournamentIconProps>(
	function TablerTournamentIcon(props, ref) {
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
				<path d="M4 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M4 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M4 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-3" />
				<path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-2" />
				<path d="M14 10h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTournamentIcon.displayName = "TablerTournamentIcon";
}
