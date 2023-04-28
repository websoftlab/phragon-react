import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCirclesRelationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCirclesRelationIcon = React.forwardRef<SVGSVGElement, TablerCirclesRelationIconProps>(
	function TablerCirclesRelationIcon(props, ref) {
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
				<path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
				<path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCirclesRelationIcon.displayName = "TablerCirclesRelationIcon";
}
