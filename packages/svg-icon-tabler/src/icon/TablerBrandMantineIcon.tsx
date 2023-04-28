import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandMantineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandMantineIcon = React.forwardRef<SVGSVGElement, TablerBrandMantineIconProps>(
	function TablerBrandMantineIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4" />
				<path d="M14 9h-2" />
				<path d="M14 15h-2" />
				<path d="M10 12h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandMantineIcon.displayName = "TablerBrandMantineIcon";
}
