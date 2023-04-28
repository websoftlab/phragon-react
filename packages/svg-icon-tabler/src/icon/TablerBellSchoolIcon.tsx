import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBellSchoolIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBellSchoolIcon = React.forwardRef<SVGSVGElement, TablerBellSchoolIconProps>(
	function TablerBellSchoolIcon(props, ref) {
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
				<path d="M10 10m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
				<path d="M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.5" />
				<path d="M16 17a5.698 5.698 0 0 0 4.467 -7.932l-.467 -1.068" />
				<path d="M10 10v.01" />
				<path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBellSchoolIcon.displayName = "TablerBellSchoolIcon";
}
