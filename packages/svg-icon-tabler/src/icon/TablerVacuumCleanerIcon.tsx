import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVacuumCleanerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVacuumCleanerIcon = React.forwardRef<SVGSVGElement, TablerVacuumCleanerIconProps>(
	function TablerVacuumCleanerIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
				<path d="M14 9a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
				<path d="M12 16h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVacuumCleanerIcon.displayName = "TablerVacuumCleanerIcon";
}
