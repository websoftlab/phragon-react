import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSnowflakeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSnowflakeIcon = React.forwardRef<SVGSVGElement, TablerSnowflakeIconProps>(
	function TablerSnowflakeIcon(props, ref) {
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
				<path d="M2 12 L22 12" />
				<path d="M12 2 L12 22" />
				<path d="m20 16-4-4 4-4" />
				<path d="m4 8 4 4-4 4" />
				<path d="m16 4-4 4-4-4" />
				<path d="m8 20 4-4 4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSnowflakeIcon.displayName = "TablerSnowflakeIcon";
}
