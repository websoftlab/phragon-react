import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLineHeightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLineHeightIcon = React.forwardRef<SVGSVGElement, TablerLineHeightIconProps>(
	function TablerLineHeightIcon(props, ref) {
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
				<path d="M3 8l3 -3l3 3" />
				<path d="M3 16l3 3l3 -3" />
				<path d="M6 5l0 14" />
				<path d="M13 6l7 0" />
				<path d="M13 12l7 0" />
				<path d="M13 18l7 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLineHeightIcon.displayName = "TablerLineHeightIcon";
}
