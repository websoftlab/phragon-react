import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandSnowflakeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandSnowflakeIcon = React.forwardRef<SVGSVGElement, TablerBrandSnowflakeIconProps>(
	function TablerBrandSnowflakeIcon(props, ref) {
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
				<path d="M14 21v-5.5l4.5 2.5" />
				<path d="M10 21v-5.5l-4.5 2.5" />
				<path d="M3.5 14.5l4.5 -2.5l-4.5 -2.5" />
				<path d="M20.5 9.5l-4.5 2.5l4.5 2.5" />
				<path d="M10 3v5.5l-4.5 -2.5" />
				<path d="M14 3v5.5l4.5 -2.5" />
				<path d="M12 11l1 1l-1 1l-1 -1z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandSnowflakeIcon.displayName = "TablerBrandSnowflakeIcon";
}
