import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCalendarExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCalendarExclamationIcon = React.forwardRef<SVGSVGElement, TablerCalendarExclamationIconProps>(
	function TablerCalendarExclamationIcon(props, ref) {
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
				<path d="M15 21h-9a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
				<path d="M16 3v4" />
				<path d="M8 3v4" />
				<path d="M4 11h16" />
				<path d="M11 15h1" />
				<path d="M12 15v3" />
				<path d="M19 16v3" />
				<path d="M19 22v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCalendarExclamationIcon.displayName = "TablerCalendarExclamationIcon";
}
