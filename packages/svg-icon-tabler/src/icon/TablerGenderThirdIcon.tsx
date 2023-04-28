import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderThirdIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderThirdIcon = React.forwardRef<SVGSVGElement, TablerGenderThirdIconProps>(
	function TablerGenderThirdIcon(props, ref) {
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
				<path d="M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0z" />
				<path d="M11 12h-3" />
				<path d="M8 12l-5 -4v8z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderThirdIcon.displayName = "TablerGenderThirdIcon";
}
