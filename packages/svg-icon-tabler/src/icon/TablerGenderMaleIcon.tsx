import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderMaleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderMaleIcon = React.forwardRef<SVGSVGElement, TablerGenderMaleIconProps>(
	function TablerGenderMaleIcon(props, ref) {
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
				<path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
				<path d="M19 5l-5.4 5.4" />
				<path d="M19 5h-5" />
				<path d="M19 5v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderMaleIcon.displayName = "TablerGenderMaleIcon";
}
