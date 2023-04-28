import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderAgenderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderAgenderIcon = React.forwardRef<SVGSVGElement, TablerGenderAgenderIconProps>(
	function TablerGenderAgenderIcon(props, ref) {
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
				<path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
				<path d="M7 12h11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderAgenderIcon.displayName = "TablerGenderAgenderIcon";
}
