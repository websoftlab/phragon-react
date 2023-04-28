import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderEpiceneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderEpiceneIcon = React.forwardRef<SVGSVGElement, TablerGenderEpiceneIconProps>(
	function TablerGenderEpiceneIcon(props, ref) {
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
				<path d="M15.536 15.536a5 5 0 1 0 -7.072 -7.072a5 5 0 0 0 7.072 7.072z" />
				<path d="M15.536 15.535l5.464 -5.535" />
				<path d="M3 14l5.464 -5.535" />
				<path d="M12 12h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderEpiceneIcon.displayName = "TablerGenderEpiceneIcon";
}
